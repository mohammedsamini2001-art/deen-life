import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'

const app = express()
const port = Number(process.env.PORT) || 3000
const mongoUri = process.env.MONGODB_URI
const mongoDbName = process.env.MONGODB_DB_NAME || 'deen_life'
const paystackSecretKey = process.env.PAYSTACK_SECRET_KEY
const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173'

app.use(cors())
app.use(express.json())

let mongoClient: MongoClient | null = null

function getEntitlements() {
  if (!mongoClient) return null
  return mongoClient.db(mongoDbName).collection('premium_entitlements')
}

const PLANS = {
  monthly: { amountKes: 100, durationDays: 30 },
  yearly: { amountKes: 650, durationDays: 365 },
} as const

type PlanId = keyof typeof PLANS

function isPlanId(value: unknown): value is PlanId {
  return value === 'monthly' || value === 'yearly'
}

interface PaystackInitializeResponse {
  status: boolean
  message: string
  data: {
    authorization_url: string
    reference: string
  }
}

interface PaystackVerifyResponse {
  status: boolean
  message: string
  data: {
    status: string
    metadata?: { deviceToken?: string; plan?: string }
  }
}

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'deen-life-api',
    mongodbConfigured: Boolean(mongoUri),
    paystackConfigured: Boolean(paystackSecretKey),
  })
})

app.get('/api/config/status', (_req, res) => {
  res.json({
    mongodb: Boolean(mongoUri),
    paystack: Boolean(paystackSecretKey),
    environment: process.env.NODE_ENV || 'development',
  })
})

app.post('/api/premium/pay', async (req, res) => {
  if (!paystackSecretKey) {
    return res.status(503).json({ ok: false, error: 'Paystack is not configured yet' })
  }

  const { deviceToken, plan } = req.body ?? {}

  if (typeof deviceToken !== 'string' || deviceToken.length < 8) {
    return res.status(400).json({ ok: false, error: 'A valid deviceToken is required' })
  }

  if (!isPlanId(plan)) {
    return res.status(400).json({ ok: false, error: 'plan must be "monthly" or "yearly"' })
  }

  const { amountKes } = PLANS[plan]

  try {
    const response = await fetch('https://api.paystack.co/transaction/initialize', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${paystackSecretKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: `${deviceToken}@device.deenlife.app`,
        amount: amountKes * 100, // Paystack expects the smallest currency unit
        currency: 'KES',
        callback_url: `${frontendUrl}/?premium_callback=1`,
        metadata: { deviceToken, plan },
      }),
    })

    const data = (await response.json()) as PaystackInitializeResponse

    if (!response.ok || !data.status) {
      return res.status(502).json({ ok: false, error: data.message || 'Paystack initialization failed' })
    }

    const entitlements = getEntitlements()
    if (entitlements) {
      await entitlements.updateOne(
        { reference: data.data.reference },
        {
          $set: {
            deviceToken,
            plan,
            amountKes,
            reference: data.data.reference,
            status: 'pending',
            createdAt: new Date(),
          },
        },
        { upsert: true },
      )
    }

    return res.json({
      ok: true,
      authorizationUrl: data.data.authorization_url,
      reference: data.data.reference,
    })
  } catch (error) {
    console.error('Paystack initialize error:', error)
    return res.status(502).json({ ok: false, error: 'Could not reach Paystack' })
  }
})

app.get('/api/premium/verify', async (req, res) => {
  if (!paystackSecretKey) {
    return res.status(503).json({ ok: false, error: 'Paystack is not configured yet' })
  }

  const reference = req.query.reference
  if (typeof reference !== 'string' || !reference) {
    return res.status(400).json({ ok: false, error: 'reference is required' })
  }

  try {
    const response = await fetch(
      `https://api.paystack.co/transaction/verify/${encodeURIComponent(reference)}`,
      { headers: { Authorization: `Bearer ${paystackSecretKey}` } },
    )

    const data = (await response.json()) as PaystackVerifyResponse

    if (!response.ok || !data.status) {
      return res.status(502).json({ ok: false, error: data.message || 'Verification failed' })
    }

    const paid = data.data.status === 'success'
    const plan: PlanId | undefined = isPlanId(data.data.metadata?.plan)
      ? data.data.metadata.plan
      : undefined

    if (!paid || !plan) {
      return res.json({ ok: true, isPremium: false })
    }

    const expiresAt = new Date(Date.now() + PLANS[plan].durationDays * 24 * 60 * 60 * 1000)

    const entitlements = getEntitlements()
    if (entitlements) {
      await entitlements.updateOne(
        { reference },
        { $set: { status: 'paid', paidAt: new Date(), expiresAt } },
      )
    }

    return res.json({ ok: true, isPremium: true, plan, expiresAt })
  } catch (error) {
    console.error('Paystack verify error:', error)
    return res.status(502).json({ ok: false, error: 'Could not reach Paystack' })
  }
})

app.get('/api/premium/status', async (req, res) => {
  const deviceToken = req.query.deviceToken
  if (typeof deviceToken !== 'string' || !deviceToken) {
    return res.status(400).json({ ok: false, error: 'deviceToken is required' })
  }

  const entitlements = getEntitlements()
  if (!entitlements) {
    return res.json({ ok: true, isPremium: false })
  }

  const record = await entitlements.findOne(
    { deviceToken, status: 'paid' },
    { sort: { expiresAt: -1 } },
  )

  if (!record || !record.expiresAt || new Date(record.expiresAt) < new Date()) {
    return res.json({ ok: true, isPremium: false })
  }

  return res.json({
    ok: true,
    isPremium: true,
    plan: record.plan,
    expiresAt: record.expiresAt,
  })
})

async function start() {
  if (mongoUri) {
    mongoClient = new MongoClient(mongoUri)
    await mongoClient.connect()
    console.log('MongoDB connected')
  } else {
    console.log('MongoDB not configured; API running without database')
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`DEEN LIFE API listening on port ${port}`)
  })
}

start().catch(error => {
  console.error('Server startup failed:', error)
  process.exit(1)
})

process.on('SIGTERM', async () => {
  if (mongoClient) await mongoClient.close()
  process.exit(0)
})

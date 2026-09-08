import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { MongoClient } from 'mongodb'
import {
  getTranslationCatalogue,
  getTranslationSurah,
} from './quran-translation-api.js'

const app = express()
const port = Number(process.env.PORT) || 3000
const mongoUri = process.env.MONGODB_URI

app.use(cors())
app.use(express.json())

let mongoClient: MongoClient | null = null

app.get('/api/health', (_req, res) => {
  res.json({
    ok: true,
    service: 'deen-life-api',
    mongodbConfigured: Boolean(mongoUri),
    paystackConfigured: Boolean(process.env.PAYSTACK_SECRET_KEY),
  })
})

app.get('/api/config/status', (_req, res) => {
  res.json({
    mongodb: Boolean(mongoUri),
    paystack: Boolean(process.env.PAYSTACK_SECRET_KEY),
    environment: process.env.NODE_ENV || 'development',
  })
})


app.get('/api/quran/translations', async (_req, res) => {
  try {
    const translations = await getTranslationCatalogue()

    return res.json({
      ok: true,
      data: translations,
    })
  } catch (error) {
    console.error('Quran translation resources error:', error)

    return res.status(503).json({
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : 'Quran translation service unavailable.',
    })
  }
})

app.get('/api/quran/translations/:resourceId/:surahIndex', async (req, res) => {
  const resourceId = Number(req.params.resourceId)
  const surahIndex = Number(req.params.surahIndex)

  if (
    !Number.isInteger(resourceId) ||
    resourceId <= 0 ||
    !Number.isInteger(surahIndex) ||
    surahIndex < 1 ||
    surahIndex > 114
  ) {
    return res.status(400).json({
      ok: false,
      error: 'Invalid Quran translation resource or surah index.',
    })
  }

  try {
    const data = await getTranslationSurah(
      resourceId,
      surahIndex,
    )

    return res.json({
      ok: true,
      data,
    })
  } catch (error) {
    console.error('Quran translation surah error:', error)

    return res.status(503).json({
      ok: false,
      error:
        error instanceof Error
          ? error.message
          : 'Quran translation service unavailable.',
    })
  }
})

app.post('/api/premium/pay', (_req, res) => {
  if (!process.env.PAYSTACK_SECRET_KEY) {
    return res.status(503).json({ ok: false, error: 'Paystack is not configured yet' })
  }
  return res.status(501).json({ ok: false, error: 'Paystack transaction initialization will be enabled after deployment setup' })
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

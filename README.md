# DEEN LIFE

Clean rebuild of DEEN LIFE under Hikmah Labs.

## Stack

- Vite + React + TypeScript frontend
- Express + TypeScript API
- MongoDB-ready backend
- Paystack-ready backend
- Manual PWA service worker
- Vercel-ready frontend
- Render-ready backend
- No AI dependency
- No Workbox dependency
- No secrets committed

## Local

```bash
npm install
npm run lint
npm run build
```

API:

```bash
npm run server
```

## Deployment order

1. Push the clean repository to GitHub.
2. Deploy frontend to Vercel.
3. Deploy API to Render.
4. Connect MongoDB Atlas.
5. Configure Paystack test keys.
6. Test health and configuration endpoints.
7. Implement and test Paystack transactions.
8. Only then move to production credentials.

## Workflow

Protect baseline → Audit → Change → Run → Test → Approve → Checkpoint → Next.

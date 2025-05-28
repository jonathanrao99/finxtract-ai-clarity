# FinXtract AI Clarity

A Next.js app with Supabase auth, document processing via OpenAI, and Stripe billing.

## Features

- User authentication (email/password, magic links) via Supabase
- Document upload & status via Supabase tables & RLS
- OCR & data extraction via OpenAI function-calling (GPT-4O-mini)
- Subscription billing with Stripe Checkout & webhooks
- Tailwind CSS & shadcn-ui components

## Getting Started

Clone the repo and install dependencies:

```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
npm install
npm run dev
```

## Environment Variables

Create a `.env.local` file at the project root:

```
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
OPENAI_API_KEY=your-openai-key
STRIPE_SECRET_KEY=your-stripe-secret-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
STRIPE_PRICE_BASIC=your-basic-plan-price-id
STRIPE_PRICE_PRO=your-pro-plan-price-id
```

## API Routes

- `POST /api/supabase/auth` – signIn/signUp/signOut/session
- `POST /api/documents/upload` – upload new document URLs
- `GET /api/documents/status/[id]` – check status/result
- `POST /api/openai/extract` – proxy to OpenAI extraction
- `POST /api/subscriptions/create-checkout` – create Stripe Checkout Session
- `POST /api/subscriptions/webhook` – handle Stripe webhooks

## Scripts

- `npm run dev` – development server
- `npm run build` – production build
- `npm run start` – production start
- `npm run lint` – run ESLint

## Deployment

Deploy to Vercel, Supabase Edge Functions, or your preferred platform. Ensure env vars are set in your deployment.

## License

MIT

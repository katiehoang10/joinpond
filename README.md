# Pond (joinpond.com)

Peer mentoring for young professionals. Next.js 14 + Tailwind, sign-ups emailed via Resend.

## Pages
- `/` — marketing home page
- `/join` — sign-up (tabs for "Find a mentor" / "Become a mentor"; `/join?role=mentor` opens the mentor tab). The **Join Pond** button in the top-right of every page links here.
- `/about` — founder page
- `/api/join` — receives sign-ups and emails them to you

## Before you launch
1. **Your photo:** `public/katie-hoang.jpg` (square, at least 800×800) ✓ added
2. **Your story:** edit the paragraphs in `app/about/page.tsx`.

## Run locally
```bash
npm install
cp .env.example .env.local   # then add your Resend key
npm run dev                  # http://localhost:3000
```

## Deploy to Vercel
1. Push this folder to https://github.com/katiehoang10/joinpond
2. In Vercel: **Add New → Project → import `joinpond`** (defaults are fine).
3. **Settings → Environment Variables:** add `RESEND_API_KEY` (from resend.com/api-keys). Optional: `SIGNUP_NOTIFY_EMAIL`, `SIGNUP_FROM_EMAIL`.
4. **Settings → Domains:** add `joinpond.com` and follow the DNS instructions.
5. Optional: verify joinpond.com in Resend, then set `SIGNUP_FROM_EMAIL="Pond <hello@joinpond.com>"`.

Until the Resend key is set, the form tells visitors to email you directly instead of failing silently.

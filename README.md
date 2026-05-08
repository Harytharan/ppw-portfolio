# Portfolio — Anti-Gravity UI

Premium single-page portfolio built with **Next.js 16 (App Router)**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide React**.

The site is a static portfolio: all editable content lives in `lib/data.ts`, and assets live under `public/`.

## Setup

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Contact form email setup

1. Copy `.env.example` to `.env.local`
2. Set:
   - `GMAIL_USER` (your Gmail address)
   - `GMAIL_APP_PASSWORD` (Google app password)
   - `CONTACT_RECEIVER_EMAIL` (where form submissions are sent)

The contact form posts to `POST /api/contact` and sends email via Gmail SMTP.

## What to customize

- **`lib/data.ts`** — copy, links, projects, skills, CV data, certificates, and journal content.
- **`public/cv/CV.pdf`** — add your real CV. Optional tiny placeholder: `node scripts/create-placeholder-cv.mjs`
- **`public/certificates/certificate.svg`** — replace with your real certificate (see `public/certificates/README.txt`).
- **`public/avatar.svg`** — replace with a photo, or update `profileImageUrl` in `lib/data.ts`.
- **LinkedIn / GitHub** — update the links in `portfolioData.contact` inside `lib/data.ts`.

## Scripts

| Command         | Description           |
| --------------- | --------------------- |
| `npm run dev`   | Start dev server      |
| `npm run build` | Production build      |
| `npm run start` | Run production server |
| `npm run lint`  | ESLint                |

## Stack

Next.js 16 · React 19 · TypeScript · Tailwind CSS 4 · Framer Motion · Lucide React

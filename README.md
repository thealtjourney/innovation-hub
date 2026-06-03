# Innovation Hub

A landing page for the social housing ICT innovation portfolio. Built with Next.js 14 (App Router) and Tailwind CSS.

Currently linking to:

- [Charity Days](https://mhgcharitydays.vercel.app/) — volunteer day coordination
- [Social Housing Digital Twin](https://shdt.vercel.app/) — asset intelligence

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy to GitHub + Vercel

1. Create a new GitHub repo (e.g. `innovation-hub`) — empty, no README.
2. From this folder:

   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<your-user>/innovation-hub.git
   git push -u origin main
   ```

3. Go to [vercel.com/new](https://vercel.com/new), import the repo. Vercel auto-detects Next.js — no config needed. Click **Deploy**.

## Adding a new app to the portfolio

Edit the `apps` array in `app/page.tsx`. Each entry takes a `name`, `tagline`, `description`, `href`, `status` (`"Live"` or `"Beta"`), `tags`, `accent` (Tailwind gradient classes) and `iconPath` (an SVG path).

## Stack

- Next.js 14, React 18, TypeScript
- Tailwind CSS 3
- Inter via rsms.me

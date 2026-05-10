# Kevionics-Audio (separate deploy)

This folder is a **full copy** of the Sportsmagician Audio web app, wired for **Kevionics-Audio** branding (`lib/branding.ts`). Run and host it **independently** from the parent app (different URL, different Vercel project, etc.).

## Is this possible?

Yes. Each folder is a standalone Next.js app:

- **Different URL:** Point your host (e.g. Vercel) at **Root Directory** = `kevionics-audio` (or deploy only this folder in its own repo).
- **Different env:** Add a `.env.local` here with Firebase, Agora, and API keys for this deployment.
- **Same backend as main app:** You can use the **same Firebase project** so publishers, streams, and assignments stay shared. The app enforces **tenant separation** in the admin UI: `@kevionics.com` admins only see Kevionics subscribers; main admins never see Kevionics users. **Streams stay shared** (same Firestore), so both subscriber types can listen when assigned.
- **Separate Firebase:** Use another Firebase project in `.env.local` here for hard isolation (you would duplicate Firestore data / rules as needed).

## Local dev

From **this directory** (not the repo root):

```bash
npm install
npm run dev
```

`dev` runs on **port 3001** so you can run the main app on `3000` at the same time.

## Keeping in sync with the main app

The codebase was duplicated once. When you fix bugs or add features in the parent `SPA/` app, **merge or copy** those changes into `kevionics-audio/` (or maintain a shared package later). There is no automatic sync.

## Branding

Edit `lib/branding.ts` (`PRODUCT_DISPLAY_NAME`, `PRODUCT_TAGLINE`). A few screens import that module; search for remaining “Sportsmagician” strings if you need every doc string updated.

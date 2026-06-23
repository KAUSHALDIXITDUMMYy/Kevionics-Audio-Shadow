# Kevionics-Audio-Shadow deployment

## Architecture

- **This Vercel project** = Kevionics-branded **frontend only** (port 3001 locally).
- **No `app/api` routes in this repo** — all `/api/*` traffic is rewritten to the shared VPS (`vercel.json` → `http://217.216.87.128/api/*`).
- **Database** = Firebase project `smas-57b80` (shared with main Sportsmagician app).
- **Shadow behavior** = `lib/tenant.ts` + `lib/branding.ts` — Kevionics admins/subscribers, shared streams.
- **Firebase client config** = baked-in public defaults for `smas-57b80` in `lib/client/public-env.ts` (optional Vercel env overrides).

## Vercel environment variables

Set these in **Vercel → Project → Settings → Environment Variables** (Production + Preview):

| Variable | Value |
|----------|-------|
| `NEXT_PUBLIC_BASE_URL` | Your shadow Vercel URL, e.g. `https://kevionics-audio-three.vercel.app` or `https://spa-gules-ten.vercel.app` |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | `AIzaSyAl_NAMkwgrLfmNyQof0cwzjFSmOQc1rCA` |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | `smas-57b80.firebaseapp.com` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | `smas-57b80` |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | `smas-57b80.firebasestorage.app` |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | `78156872254` |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | `1:78156872254:web:9f94204eaba12d0840ef6f` |
| `NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID` | `G-ZHN1GLFY07` |
| `NEXT_PUBLIC_ZOOM_MEETING_SDK_KEY` | *(same as main app, if using Zoom)* |
| `NEXT_PUBLIC_JAAS_APP_ID` | *(optional, if using Jitsi)* |

Optional later:

| Variable | When |
|----------|------|
| `NEXT_PUBLIC_FIREBASE_APPCHECK_SITE_KEY` | After App Check is registered for this web app in Firebase Console |
| `NEXT_PUBLIC_FIREBASE_APPCHECK_DEBUG_TOKEN` | Local dev only |

**Do not** put `FIREBASE_SERVICE_ACCOUNT`, `AGORA_*`, or Zoom secrets on Vercel for this project — they live on the VPS.

## VPS (one-time / if shadow URL changes)

On the VPS `.env.production`, ensure `ALLOWED_API_ORIGINS` and `OWN_HOSTS` include your shadow Vercel hostname, e.g.:

```
ALLOWED_API_ORIGINS=https://sportsmagicianaudio.vercel.app,https://kevionics-audio-three.vercel.app,https://spa-gules-ten.vercel.app
OWN_HOSTS=sportsmagicianaudio.vercel.app,kevionics-audio-three.vercel.app,spa-gules-ten.vercel.app
```

Then restart the backend: `pm2 restart spa-backend`

## Deploy

Push to `main` on GitHub — Vercel auto-deploys from `KAUSHALDIXITDUMMYy/Kevionics-Audio-Shadow`.

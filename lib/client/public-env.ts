/**
 * Browser-safe Firebase config for project smas-57b80.
 *
 * Env vars override defaults. Defaults are the public web-app values for this
 * project so Vercel builds succeed without duplicating them in the dashboard
 * (you can still set NEXT_PUBLIC_FIREBASE_* in Vercel to override).
 */

const DEFAULTS = {
  apiKey: "AIzaSyAl_NAMkwgrLfmNyQof0cwzjFSmOQc1rCA",
  authDomain: "smas-57b80.firebaseapp.com",
  projectId: "smas-57b80",
  storageBucket: "smas-57b80.firebasestorage.app",
  messagingSenderId: "78156872254",
  appId: "1:78156872254:web:9f94204eaba12d0840ef6f",
  measurementId: "G-ZHN1GLFY07",
} as const

function publicEnv(name: keyof typeof DEFAULTS, envValue: string | undefined): string {
  return envValue?.trim() || DEFAULTS[name]
}

export const publicFirebaseConfig = {
  apiKey: publicEnv("apiKey", process.env.NEXT_PUBLIC_FIREBASE_API_KEY),
  authDomain: publicEnv("authDomain", process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN),
  projectId: publicEnv("projectId", process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID),
  storageBucket: publicEnv("storageBucket", process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET),
  messagingSenderId: publicEnv("messagingSenderId", process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID),
  appId: publicEnv("appId", process.env.NEXT_PUBLIC_FIREBASE_APP_ID),
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || DEFAULTS.measurementId,
}

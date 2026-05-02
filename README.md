# Second Brain — Deployment Guide

## What you have
A complete PWA (Progressive Web App) that installs on your phone like a native app.

---

## Deploy to Vercel (10 minutes, free)

### Step 1 — Get an Anthropic API key
1. Go to **console.anthropic.com**
2. Sign up / log in
3. Go to API Keys → Create Key
4. Copy the key (starts with `sk-ant-...`)
5. Add some credit ($5 is plenty to start — each note costs fractions of a penny)

### Step 2 — Deploy to Vercel
**Option A — Drag and drop (easiest):**
1. Go to **vercel.com** and sign up (free)
2. From your dashboard, drag the entire `secondbrain` folder onto the page
3. Vercel deploys it instantly — you get a URL like `secondbrain-xyz.vercel.app`

**Option B — Via GitHub:**
1. Create a free account at github.com
2. Create a new repository called `secondbrain`
3. Upload all files from this folder
4. Go to vercel.com → New Project → Import from GitHub
5. Select your repo → Deploy

### Step 3 — Add your API key to the app
The app will prompt you for your Anthropic API key on first use.
It's stored only in your browser's local storage — never sent anywhere except directly to Anthropic.

---

## Install on your phone

### iPhone (Safari only):
1. Open your Vercel URL in **Safari**
2. Tap the **Share** button (box with arrow)
3. Scroll down → **Add to Home Screen**
4. Tap **Add**
5. The app now lives on your home screen like any native app

### Android (Chrome):
1. Open your Vercel URL in **Chrome**
2. Tap the **three dots menu**
3. Tap **Add to Home screen** or **Install app**
4. Done

---

## File structure
```
secondbrain/
├── public/
│   ├── index.html      ← The entire app
│   ├── manifest.json   ← PWA configuration
│   ├── sw.js           ← Service worker (offline support)
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
└── vercel.json         ← Vercel deployment config
```

---

## Your data
- All notes are stored in your **browser's local storage**
- Notes persist across sessions on the same device
- If you clear your browser data, notes will be lost — export regularly using the Digest feature
- For multi-device sync, a future upgrade would add a backend database

---

## Cost estimate
- Vercel hosting: **free**
- Anthropic API: roughly **$0.001–0.003 per note** added
- $5 of API credit = ~2,000–5,000 notes processed
- Pattern analysis, Ask, and Digest use slightly more but still pennies

---

## Upgrading later
When you want to add features (cloud sync, email digests, sharing):
- Add a Supabase database for storage
- Add a Resend account for email digests
- Both have generous free tiers

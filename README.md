# Vertex Markets — Homepage

Production-ready Next.js homepage matching the client reference design.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Build & Deploy

```bash
npm run build
npm start
```

## Deploy to Vercel

```bash
npm i -g vercel
vercel
```

## Project Structure

```
vertex-markets/
├── app/
│   ├── globals.css       # All global styles + animations
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   └── page.tsx          # Homepage assembly
├── components/
│   ├── Navbar.tsx        # Fixed top nav
│   ├── Hero.tsx          # Hero section with bull + glass panel
│   ├── BullSVG.tsx       # Dark chrome bull SVG
│   ├── TrustBar.tsx      # Regulator logos strip
│   ├── Advantages.tsx    # 4-card advantages grid
│   ├── Ticker.tsx        # Live ticker bar (animated prices)
│   ├── Platforms.tsx     # Device mockups + platform options
│   └── CTABanner.tsx     # Bottom CTA card
├── tailwind.config.js
├── tsconfig.json
└── next.config.js
```

## Replacing the Bull

To use the real Vertex Markets bull image:
1. Save the bull PNG/WebP to `/public/bull.png`
2. In `Hero.tsx`, replace `<BullSVG />` with:
   ```jsx
   <img src="/bull.png" alt="Bull" style={{width:'100%',height:'100%',objectFit:'contain'}} />
   ```

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion (animations)

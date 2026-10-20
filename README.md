# Rocking Rays Auto Detailing & Dent Removal LLC

Professional landing page for **Rocking Rays Auto Detailing & Dent Removal LLC** — auto detailing and dent removal serving Northern Indiana (South Bend / Elkhart, 574).

## Stack

- Next.js (App Router) + TypeScript + Tailwind CSS
- Motion (`motion/react`) for scroll reveals and CTA motion
- Three.js via `@react-three/fiber` + `@react-three/drei` for subtle metallic hero accents

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production build

```bash
npm run build
npm start
```

## Notes

- Contact form is **client-side only** (validation + success UI). It does not POST to a backend.
- Phone links use `tel:+15743185094` site-wide.
- Three.js canvas is dynamically imported with `ssr: false` to avoid SSR issues.

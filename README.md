# MS Tech Solutions — Website

A light-mode, glass-styled single-page site for **MS Tech Solutions** (Laptop Repair, Custom Gaming PCs & Refurbished Laptops) at Galaxy Blue Sapphire Plaza, Gr. Noida West.

All content now lives on one continuous page at `/`. The navbar and mobile menu smooth-scroll between sections instead of loading separate routes.

## Sections

| Section ID | What it covers |
| --- | --- |
| `#home` | Full-height hero: Drive video backdrop, frosted studio glass overlay, store highlights, 3 KM free pickup, Google rating + QR card, service selector and trust strip. |
| `#services` | Four core service cards with photos, additional service lines, free pickup banner, six-product catalog (no prices, WhatsApp enquiry per card), four-step process, FAQs, brand strip and CTA. |
| `#about` | Workshop story, visiting card / storefront photo (`object-contain`, unclipped), standards, bench rules, Google reviews panel and stats. |
| `#gallery` | Filterable 9-card gallery across Repairs, Builds, Refurbished and Store categories, each with a caption and an “Ask on WhatsApp” button. |
| `#contact` | Both phone lines, WhatsApp, email, address, GSTIN, Google Maps embed and a form that opens WhatsApp with the enquiry prefilled. |

The fixed navbar highlights the active section while scrolling. Section jumps use `scrollIntoView({ behavior: 'smooth' })`, and `html { scroll-behavior: smooth; scroll-padding-top: 5.5rem; }` keeps each section top exactly 88 px below the fixed navbar.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:5173`.

Production build:

```bash
npm run build
npm run preview
```

Because the site is a single page, **no SPA rewrite/fallback is required** when deploying. A plain static host serving `dist/` is enough.

## Stack

- React 19 + Vite 8
- Tailwind CSS 3
- Lucide React icons

React Router has been removed. `src/App.jsx` renders the single `Layout`, which composes the sections.

## What is included

- Full-bleed Google Drive background video (`1oiufzOTgcYFU7Ve3jhKgNxBWXTzi3LL5`) with a white frosted studio overlay and a `/hero-video.mp4` fallback layer.
- Floating glass navbar with the logo lockup, section navigation, Google Verified link, phone number and live WhatsApp CTA, plus a mobile menu with quick-service WhatsApp links.
- Exact store copy, both helplines, supported-brand strip and warm sky/crimson/emerald accents.
- A contact form that requires no backend: it validates the fields and opens `wa.me` with the name, phone, service and details already written into the message.
- Bottom trust strip in the hero and a full footer at the end of the page, with address, GSTIN and email.
- Floating WhatsApp action button with a dual-line number popup.
- One `h1` on the page, semantic section landmarks inside a single `<main>`, and LocalBusiness JSON-LD in `index.html`.
- High-resolution Unsplash photos in the gallery and product catalog with an `onError` fallback chain: original URL → circuit-board photo → styled gradient tile. No empty or broken image boxes.

## Assets

| File | Purpose |
| --- | --- |
| `public/logo.png` | Logo lockup (cropped from the supplied reference image). Replace with the high-resolution official logo when available. |
| `public/storefront.jpg` | Supplied shop-board photo used in the About section and the Store gallery card. |
| `public/google-review-qr.png` | Local QR code for the Google review link (regenerated from the profile URL). |
| `public/hero-video.mp4` | Optional local video fallback. Add this file when hosting the background video locally. |

### Gallery & catalog photography

Gallery and catalog cards use these Unsplash image IDs with `?auto=format&fit=crop&w=800&q=80`:

| Category | Photo IDs |
| --- | --- |
| Chip-level motherboard & soldering repair | `photo-1597872200969-2b65d56bd16b`, `photo-1518770660439-4636190af475` |
| Custom RGB gaming PCs & liquid cooling | `photo-1587202372775-e229f172b9d7`, `photo-1593640408182-31c70c8268f5` |
| Certified refurbished laptops | `photo-1517336714731-489689fd1ca8`, `photo-1588872657578-7efd1f1555ed`, `photo-1496181133206-80ce9b88a853` |
| SSD, RAM & hardware upgrades | `photo-1591799264318-7e6ef8ddb7ea` |

The shared URL builder and `photos` map live in `src/data/site.js`. `SmartImage` in `src/components/ui.jsx` handles lazy loading and the fallback chain.

## Links used

- Google Business Profile: <https://share.google/XpXQR37eAVzuB0oAi>
- Primary WhatsApp: <https://wa.me/919953141024>
- Secondary WhatsApp: <https://wa.me/918595541024>
- Primary phone: `+91 9953141024`
- Secondary phone: `+91 8595541024`
- Email: `mstechsolutions01@gmail.com`
- GSTIN: `09CCBPS8338A1ZJ`

No product prices or currency amounts are shown anywhere on the site.

## Project structure

```text
src/
  App.jsx                 Renders the single-page Layout
  components/
    Backdrop.jsx          Fixed video + frosted overlay
    Header.jsx            Glass navbar, scroll tracking and mobile menu
    Layout.jsx            Composes all sections + hash deep-link scrolling
    Footer.jsx            Trust strip + full footer
    FloatingWhatsApp.jsx  FAB with dual-line popup
    brand.jsx             Logo, WhatsApp/Google icons, stars
    ui.jsx                Section shell, hero, SmartImage, buttons, CTA band
  data/site.js            Store details, services, FAQs, gallery, products, links
  sections/
    Hero.jsx              #home
    Services.jsx          #services
    About.jsx             #about
    Gallery.jsx           #gallery
    Contact.jsx           #contact
  index.css               Smooth scrolling, scroll padding, motion rules
```

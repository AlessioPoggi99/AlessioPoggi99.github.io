# 🇬🇧 London — 4 Days

Astro project for the London trip plan (22-25 August 2026), same structure and style as the Barcelona / Istanbul projects.

## Structure

```
london/
├── _data/
│   ├── trip.ts         ← ✏️  EDIT HERE to update the itinerary
│   ├── guide.ts         ← Food, neighborhoods, practical tips
│   └── dictionary.ts    ← UK Slang & Local Lingo (replaces the phrasebook)
├── _components/
│   ├── DaySection.astro  ← One full day
│   ├── Stop.astro        ← A single timeline stop
│   ├── InfoBlock.astro   ← tip / photo / food / warning blocks
│   ├── Banner.astro      ← Colored banners (warnings, info)
│   ├── Tag.astro         ← Labels (book, crowded, free…)
│   ├── Dictionary.astro  ← "Slang" tab
│   └── Guide.astro       ← "Guide" tab
├── _layouts/
│   └── BaseLayout.astro  ← Base HTML
├── _styles/
│   └── main.css          ← Shared styles (same tokens as Barcelona/Istanbul)
└── index.astro            ← Main page
```

## How this differs from the source PDF

The original PDF included a lot of logistics-heavy content (flight tables, transfer cost breakdowns, accommodation pricing, a link directory, a to-do checklist, a full cost summary). Per your call, most of that was dropped to keep the site itinerary-focused, matching the Barcelona/Istanbul template. Only the genuinely useful bits were folded in, without adding new sections to the template:

- **Day 1 `bonus` block** — arrival flight, transfer route, and a flag on the **UK ETA**, which the original PDF didn't mention at all (Italian citizens have needed one since April 2025 — see the Guide tab).
- **Day 4 `bonus` block** — departure logistics (checkout, transfer route, return flight).
- **Banners on Day 2 and Day 3** — a reminder that several free museums require advance online booking, and that Tower of London / Tower Bridge / The Shard should be booked ahead to skip queues.
- Booking requirements are otherwise carried by the `book` tag on individual stops, same as in the other projects.

Everything else — flight cost tables, transfer cost tables, useful links, the to-do list, and the full cost breakdown — was intentionally left out.

## How to edit content

**All trip content lives in `_data/trip.ts`.** Same structure as the other projects: 4 days (`days[]`), each with `stops[]`, `tags`, `blocks` (tip/photo/food/warning) and an optional `bonus` at the end of the day.

### Available tag types
| type    | color  | use                    |
|---------|--------|-------------------------|
| `book`  | orange | booking required       |
| `crowd` | red    | crowds                 |
| `free`  | purple | free entry              |
| `walk`  | green  | on foot / by ferry     |
| `metro` | blue   | public transport / tram |

### InfoBlock types
| type      | icon | color  |
|-----------|------|--------|
| `tip`     | 💡   | yellow |
| `photo`   | 📸   | purple |
| `food`    | 🍽   | green  |
| `warning` | ⚠️   | red    |

## Installation and running

Place this folder (`london/`) inside the `src/pages/` structure of the existing multi-trip Astro project (same pattern as Barcelona/Istanbul), together with the related PWA assets (`manifest.json`, `icon512.png`, `sw.js`) in `/public/london/`.

```bash
npm install
npm run dev      # development on http://localhost:4321
npm run build    # production build in dist/
npm run preview  # preview the build
```

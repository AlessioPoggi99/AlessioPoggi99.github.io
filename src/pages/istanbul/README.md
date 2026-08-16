# 🇹🇷 Istanbul — 3 Days

Astro project for the Istanbul trip plan (26-28 August 2026), same structure and style as the Barcelona project.

## Structure

```
istanbul/
├── _data/
│   ├── trip.ts         ← ✏️  EDIT HERE to update the itinerary
│   ├── guide.ts         ← Food, neighborhoods, practical tips
│   └── dictionary.ts    ← English → Turkish dictionary
├── _components/
│   ├── DaySection.astro  ← One full day
│   ├── Stop.astro        ← A single timeline stop
│   ├── InfoBlock.astro   ← tip / photo / food / warning blocks
│   ├── Banner.astro      ← Colored banners (warnings, info)
│   ├── Tag.astro         ← Labels (book, crowded, free…)
│   ├── Dictionary.astro  ← "Dictionary" tab
│   └── Guide.astro       ← "Guide" tab
├── _layouts/
│   └── BaseLayout.astro  ← Base HTML
├── _styles/
│   └── main.css          ← Shared styles (same tokens as the Barcelona project)
└── index.astro            ← Main page
```

## How to edit content

**All trip content lives in `_data/trip.ts`.** Same structure as the Barcelona project: 3 days (`days[]`), each with `stops[]`, `tags`, `blocks` (tip/photo/food/warning) and an optional `bonus` at the end of the day.

Day 3 includes a `bonus` block with practical notes on the 29 August departure (14:20 flight from SAW).

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

## Ticket notes (verify before you go)

- **Museum Pass Istanbul** (~€105-120, 5 days): covers Topkapı (without the Harem), the Archaeological Museums, the Turkish and Islamic Arts Museum. **Does not cover** Hagia Sophia, the Basilica Cistern, or Dolmabahçe.
- **Hagia Sophia** (upper gallery, non-Muslim visitors): ~€25, on-site only.
- **Basilica Cistern**: ~€38-40, book a time slot online.
- **Dolmabahçe Palace**: ~€45-50, limited time slots, book online.
- **Blue Mosque**: free, active mosque — check prayer times.
- **Visa**: not required for Italian citizens for tourist stays of up to 90 days.

## Something big missing from the list?

Two genuinely notable gaps worth considering, not currently in the itinerary:

- **Chora Church / Kariye Museum** — Byzantine mosaics and frescoes rivaling Hagia Sophia's, widely considered among the finest in the world. Downside: it's in Edirnekapı, a real detour from the rest of the route, and would need its own half-day or a dedicated taxi/bus trip.
- **A hammam (Turkish bath) experience** — a completely different, very Istanbul sensory experience, absent from the current plan. Historic hammams (Çemberlitaş, Kılıç Ali Paşa) are right in the areas already being covered and could slot into a free evening.
- Easiest low-effort add: **Rüstem Pasha Mosque**, a 5-minute detour from the Spice Bazaar on Day 3, with some of the finest Iznik tile work in the city and almost no crowds.

## Installation and running

Place this folder (`istanbul/`) inside the `src/pages/` structure of the existing multi-trip Astro project (same pattern as the Barcelona project), together with the related PWA assets (`manifest.json`, `icon512.png`, `sw.js`) in `/public/istanbul/`.

```bash
npm install
npm run dev      # development on http://localhost:4321
npm run build    # production build in dist/
npm run preview  # preview the build
```

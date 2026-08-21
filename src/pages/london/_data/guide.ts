// ─────────────────────────────────────────────────────────────
// GUIDE — Food, Neighborhoods, Practical tips
// ─────────────────────────────────────────────────────────────

export interface GuideEntry {
  name: string;
  subtitle?: string;
  description: string;
  tip?: string;
  where?: string;
  price?: string;
  tag?: string;
}

export interface GuideSection {
  id: string;
  title: string;
  emoji: string;
  intro: string;
  entries: GuideEntry[];
}

export const guide: GuideSection[] = [
  // ── FOOD & DRINK ─────────────────────────────────────────
  {
    id: "food",
    title: "British food & drink",
    emoji: "🍽",
    intro:
      "London's food scene is really the world's food scene — but a handful of properly British things are worth seeking out between museums and markets.",
    entries: [
      {
        name: "Fish and chips",
        subtitle: "The classic",
        description:
          "Battered white fish (usually cod or haddock) with thick-cut chips, traditionally served with mushy peas and a splash of malt vinegar. Simple, but done well it's genuinely great.",
        tip: "A proper 'chippy' (fish and chip shop) rather than a sit-down restaurant version is usually the better, more authentic option.",
        price: "£",
        tag: "Classic",
      },
      {
        name: "Sunday roast",
        subtitle: "Roast meat, potatoes, veg and Yorkshire pudding",
        description:
          "Roast meat (beef, chicken or lamb) with roast potatoes, seasonal vegetables, gravy and a Yorkshire pudding — a savoury baked batter that's a fixture of the plate. A pub institution, traditionally eaten on Sundays.",
        tip: "Since the trip doesn't include a Sunday lunch slot, look for pubs offering it as a weekday special — many do, especially near Victoria.",
        price: "££",
        tag: "Pub classic",
      },
      {
        name: "Full English breakfast",
        subtitle: "Eggs, bacon, sausage, beans, toast",
        description:
          "Eggs, bacon, sausages, baked beans, grilled tomato, mushrooms and toast, with strong tea on the side. A heavy, filling way to start a museum-heavy day.",
        price: "££",
        tag: "Breakfast",
      },
      {
        name: "Afternoon tea",
        subtitle: "Tea, scones, finger sandwiches",
        description:
          "A tiered stand of finger sandwiches, scones with clotted cream and jam, and small pastries, served with a pot of tea. A very London ritual, offered in hotels and dedicated tearooms across the city.",
        tip: "Book ahead for well-known spots — the good ones fill up, especially on weekends.",
        price: "£££",
        tag: "Ritual",
      },
      {
        name: "A proper pint",
        subtitle: "Ale, bitter, or a cold lager",
        description:
          "A British pub isn't really about cocktails — it's about a well-kept pint, whether that's a traditional ale, a bitter, or a simple lager. Order at the bar, not at the table; that's how pubs work here.",
        tip: "'Cheers' works as both 'thank you' and 'to your health' — you'll hear it constantly.",
        price: "£",
        tag: "Drink",
      },
      {
        name: "Curry",
        subtitle: "A very British institution",
        description:
          "Indian and South Asian food is so deeply embedded in British food culture that a curry night is practically a national tradition — a legacy of centuries of connection between the UK and South Asia. Brick Lane, in East London, is the best-known curry district, though outside the scope of this itinerary.",
        price: "££",
        tag: "Local institution",
      },
    ],
  },

  // ── NEIGHBORHOODS ─────────────────────────────────────
  {
    id: "neighborhoods",
    title: "Neighborhoods and moods",
    emoji: "🧭",
    intro:
      "A quick read on the character of the areas this itinerary covers, plus a note on where they sit relative to each other.",
    entries: [
      {
        name: "Victoria & Westminster",
        subtitle: "Government, royalty, transport hub",
        description:
          "The base for this trip and the seat of British political and royal power — Buckingham Palace, Westminster Abbey and Whitehall all sit within a short walk of each other, with Victoria Station as the transport anchor for the whole itinerary.",
        tag: "Base area",
      },
      {
        name: "South Bank",
        subtitle: "River, culture, skyline views",
        description:
          "The stretch of the Thames south bank running past the London Eye, Tate Modern and the Globe Theatre — a cultural corridor best walked in the late afternoon and evening, when the skyline lights up.",
        tag: "Riverside",
      },
      {
        name: "The City & Leadenhall",
        subtitle: "Financial district, historic pockets",
        description:
          "London's financial heart, a dense mix of glass skyscrapers (The Shard, the Walkie-Talkie) and centuries-old pockets like Leadenhall Market and the Tower of London — quiet on evenings and weekends outside office hours.",
        tag: "Financial district",
      },
      {
        name: "Knightsbridge",
        subtitle: "Luxury shopping",
        description:
          "Home to Harrods and some of London's most expensive real estate, bordering the green expanse of Hyde Park — a short, upscale stretch worth a couple of hours rather than a full day.",
        tag: "West London",
      },
      {
        name: "Notting Hill",
        subtitle: "Pastel houses, market streets",
        description:
          "A relaxed, colourful residential neighbourhood best known for Portobello Road Market and its rows of pastel townhouses — a nice, unhurried way to close out a busy trip.",
        tag: "West London",
      },
    ],
  },

  // ── PRACTICAL TIPS ──────────────────────────────────────
  {
    id: "practical",
    title: "Practical tips",
    emoji: "💡",
    intro:
      "The essentials worth sorting before you go — entry requirements, how to pay, getting around, and a few very British customs.",
    entries: [
      {
        name: "UK ETA — required since 2025",
        subtitle: "Not a visa, but mandatory",
        description:
          "Since April 2025, Italian citizens (like all EU citizens) need a UK Electronic Travel Authorisation (ETA) to enter the UK for short stays — it isn't a visa, but airlines will deny boarding without one. It costs a small fee, is applied for online or via the UK ETA app, and is valid for two years.",
        tip: "Apply at least a few days before departure, not the night before — most approvals are quick, but it's not worth the risk of a last-minute issue.",
        tag: "Documents",
      },
      {
        name: "Contactless payment & the Tube",
        subtitle: "No need for a physical Oyster card",
        description:
          "Any contactless debit or credit card (or phone wallet) works directly on the Tube, buses and trains, capped daily and weekly at Oyster-card rates — a physical Oyster card is now more of a backup option than a necessity for a short trip.",
        tip: "Zone 1 covers virtually everything in this itinerary — you won't need to think about zones beyond that.",
        tag: "Transport",
      },
      {
        name: "Free museums, but book ahead",
        subtitle: "Free entry doesn't mean walk-in",
        description:
          "The British Museum, National Gallery, Natural History Museum and Sky Garden are all free, but increasingly operate on timed online booking to manage crowds — treat 'free' as 'free, but plan ahead', not as 'turn up whenever'.",
        tag: "Tickets",
      },
      {
        name: "Tipping",
        subtitle: "Appreciated, not obligatory",
        description:
          "Unlike the US, tipping in the UK is optional and more modest — around 10-12% at sit-down restaurants if a service charge isn't already included on the bill (check first). No tipping is expected in pubs when ordering at the bar.",
        tag: "Money",
      },
      {
        name: "Weather and what to pack",
        subtitle: "Layers, always",
        description:
          "Late August in London is mild but genuinely unpredictable — sun, cloud and a sudden shower can all happen within the same afternoon. A light rain jacket or umbrella and a layer for cooler evenings are worth having on any day of the itinerary.",
        tag: "Packing",
      },
      {
        name: "Emergency numbers",
        subtitle: "Keep these handy",
        description:
          "999 for police, ambulance or fire in a genuine emergency. 111 for the NHS non-emergency medical line if you need advice or a minor issue looked at without going to A&E. 101 for non-urgent police matters.",
        tag: "Safety",
      },
      {
        name: "Escalator etiquette on the Tube",
        subtitle: "Stand right, walk left",
        description:
          "On Underground escalators, standing passengers keep to the right, leaving the left side clear for people walking up. It's taken seriously — blocking the left side is one of the few things that will actually irritate Londoners.",
        tag: "Local custom",
      },
      {
        name: "Plug type & voltage",
        subtitle: "Type G, 230V",
        description:
          "The UK uses the three-pin Type G plug, different from continental Europe — bring an adapter, since it won't fit standard Italian or EU chargers without one.",
        tag: "Practical",
      },
    ],
  },
];

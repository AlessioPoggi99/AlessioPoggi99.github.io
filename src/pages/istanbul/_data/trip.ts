// src/data/trip.ts
export type TagType = "book" | "crowd" | "free" | "walk" | "metro";

export interface Tag {
  type: TagType;
  label: string;
}
export interface InfoBlock {
  type: "tip" | "photo" | "food" | "warning";
  text: string;
}

export interface Stop {
  time: string;
  name: string;
  duration?: string;
  tags?: Tag[];
  description: string;
  longText?: string;
  blocks?: InfoBlock[];
  transitAfter?: string;
}

export interface Banner {
  type: "info" | "warning" | "optional";
  title: string;
  text: string;
  beforeStop?: number;
}

export interface BonusBlock {
  title: string;
  text: string;
}

export interface Day {
  number: number;
  label: string;
  mobileLabel: string;
  title: string;
  subtitle: string;
  mapsUrl?: string;
  pills: string[];
  banners?: Banner[];
  stops: Stop[];
  bonus?: BonusBlock;
}

export interface TripMeta {
  title: string;
  titleEm: string;
  label: string;
  meta: string[];
}

export const tripMeta: TripMeta = {
  label: "Travel plan",
  title: "Istanbul",
  titleEm: "3 days",
  meta: [
    "🗓 25–29 August 2026",
    "✈️ Arrival 25/08 at 18:00 · SAW",
    "✈️ Departure 29/08 at 14:20 · SAW",
    "🕌 3 full days: 26, 27, 28 August",
  ],
};

export const days: Day[] = [
  // ══════════════════════════════════════════════════════════
  // DAY 1 — 26 AUGUST — ASIAN SIDE, KARAKÖY & GALATA
  // ══════════════════════════════════════════════════════════
  {
    number: 1,
    label: "Day 1 — Asia, Karaköy & Galata",
    mobileLabel: "Day 1",
    title: "From Caddebostan to Taksim:\nEurope seen from the Bosphorus",
    subtitle:
      "Starting on the Asian side, the real residential Istanbul, then crossing the Bosphorus by ferry towards Karaköy and Galata. A settling-in day — light on walking, heavy on water, the first sight of the city from the sea.",
    mapsUrl: "https://www.google.com/maps/d/viewer?mid=1fB8XZ2-44R9-MVfsY8gCyntmpWordpk&usp=sharing",
    pills: [
      "⛴ Two Bosphorus ferries",
      "🗼 Galata Tower",
      "🍰 Baklava at Güllüoğlu",
      "🚶 Istiklal & Taksim",
    ],
    stops: [
      {
        time: "08:30",
        name: "Breakfast in Caddebostan",
        duration: "1 hour",
        tags: [{ type: "free", label: "Local neighborhood" }],
        description:
          "Caddebostan is a residential, seafront neighborhood on the Asian shore, with cafés and pastry shops frequented almost exclusively by Istanbulites. It's the real Turkish breakfast before the chaos of the center: kahvaltı with cheeses, olives, eggs, honey and kaymak, tea served in tulip-shaped glasses.",
        longText:
          "<p>Turkish breakfast (<strong>kahvaltı</strong>) is a long, social meal, never rushed: a table full of small plates — <em>beyaz peynir</em> (white cheese), black and green olives, tomatoes, cucumbers, honey with <em>kaymak</em> (thick buffalo-milk cream), eggs, cured meats like <em>sucuk</em> and <em>pastırma</em>, homemade jams and warm fresh bread. Tea (<em>çay</em>) goes with everything, served scalding hot in the typical tulip-shaped glasses — never coffee, which in Turkey is its own, almost ceremonial, drink.</p><p>Caddebostan is part of the Kadıköy district on the Asian side: a leafy, middle-class neighborhood with a seafront promenade (<em>sahil</em>) much loved by locals for morning runs and family outings. Compared to Sultanahmet it's a different world — no souvenir sellers, no queues, just Istanbul living its day.</p>",
        blocks: [
          {
            type: "food",
            text: "Caddebostan and the nearby Bağdat Caddesi have several sea-view cafés — look for outdoor tables facing the Bosphorus for breakfast with a view.",
          },
        ],
        transitAfter: "Walk or short taxi to the local ferry pier (iskele)",
      },
      {
        time: "10:00",
        name: "Ferry Caddebostan → Üsküdar",
        duration: "25-30 min",
        tags: [{ type: "walk", label: "⛴ Şehir Hatları ferry" }],
        description:
          "The first ferry of the day. During the crossing you get a good look at Kız Kulesi (Maiden's Tower), the small islet-lighthouse marking the point where the Bosphorus meets the Sea of Marmara — one of the most photographed images of Istanbul.",
        longText:
          "<p>The <strong>Kız Kulesi</strong> (literally \"Maiden's Tower\") sits on an artificial islet a few hundred meters from the Üsküdar shore. The current structure dates from the 18th century, but the site has been fortified since Byzantine times, when a chain was stretched from here to Sarayburnu to control access to the Golden Horn. The best-known legend — a 19th-century invention, not an ancient one — tells of a princess locked up here by her father to escape a prophecy of death by snakebite, a fate that reached her anyway through a basket of fruit hiding an asp. Today the tower houses a restaurant and a small museum, reachable by private boats from Üsküdar or Kabataş.</p>",
        blocks: [
          {
            type: "tip",
            text: "Sit on the right side facing Üsküdar to keep Kız Kulesi in view during the last stretch of the crossing. Istanbulkart works on all Şehir Hatları ferries.",
          },
        ],
        transitAfter: "In Üsküdar, a short stop on the waterfront, then a second ferry towards Karaköy",
      },
      {
        time: "11:00",
        name: "Üsküdar — waterfront and mosques",
        duration: "30-40 min",
        tags: [{ type: "free", label: "Free" }],
        description:
          "Üsküdar is one of Istanbul's most traditional and religiously conservative neighborhoods, with a skyline of Ottoman mosques along the waterfront — Mihrimah Sultan and Yeni Valide above all. A short walk before catching the ferry back to the European side.",
        transitAfter: "Ferry Üsküdar → Karaköy · 20 min",
      },
      {
        time: "11:45",
        name: "Ferry Üsküdar → Karaköy",
        duration: "20 min",
        tags: [{ type: "walk", label: "⛴ Ferry" }],
        description:
          "The crossing that finally lands you on the European side, with Karaköy and Galata Tower rising against the skyline of the old city.",
        transitAfter: "Disembark at Karaköy",
      },
      {
        time: "12:15",
        name: "Karaköy — stroll and baklava at Güllüoğlu",
        duration: "1 hour",
        tags: [{ type: "crowd", label: "🔴 Busy at lunchtime" }],
        description:
          "Karaköy is the neighborhood that, over the last fifteen years, has gone from a slightly rundown port area to one of the most interesting in Istanbul: art galleries, concept stores, specialty coffee shops and — above all — the historic Karaköy Güllüoğlu bakery, an almost mandatory stop for baklava.",
        longText:
          "<p><strong>Karaköy Güllüoğlu</strong> is one of the most famous and long-standing baklava houses in Istanbul, with a family history tracing back to Gaziantep, the southeastern Turkish city considered the world capital of baklava. Try the <em>fıstıklı baklava</em> (with Gaziantep pistachio) and <em>künefe</em>, if available — a dessert of stringy melted cheese and syrup, served hot.</p><p>The neighborhood itself is worth lingering in: contemporary art galleries in old port warehouses, Turkish design shops, and one of the best views of Galata Tower from below.</p>",
        blocks: [
          {
            type: "food",
            text: "Karaköy Güllüoğlu, Rıhtım Caddesi 4/A — get a mixed box to go (satılık kutu) if you want to try more varieties without sitting down.",
          },
        ],
        transitAfter: "10 min uphill walk to Galata Tower",
      },
      {
        time: "13:30",
        name: "Galata Tower",
        duration: "45 min",
        tags: [{ type: "book", label: "📅 Online booking recommended" }],
        description:
          "The symbol of Istanbul's European skyline, built by the Genoese in 1348 as part of the fortifications of the Galata colony. From the 360° panoramic terrace you can see the Golden Horn, the Bosphorus and the historic Sultanahmet peninsula.",
        longText:
          "<p>The tower was built by the Genoese merchant colony in 1348 under the name <em>Christea Turris</em> (Tower of Christ), as the tallest point of Galata's defensive walls. At 66.9 meters, it was the tallest structure in the city for centuries. In the 17th century, Ottoman aviator Hezârfen Ahmed Çelebi reportedly attempted — and, according to contemporary chronicles, succeeded in — a flight with artificial wings from the top of the tower all the way to the Üsküdar district, crossing the Bosphorus: one of the earliest documented flight attempts in history.</p>",
        blocks: [
          {
            type: "tip",
            text: "Paid entry (roughly €30-35, check the updated price on the day): queues can be long around midday, so it's best to book an online slot in advance or go at a quieter time.",
          },
        ],
        transitAfter: "10 min walk uphill towards Istiklal Caddesi",
      },
      {
        time: "14:30",
        name: "Istiklal Caddesi",
        duration: "1 hour 30 min",
        tags: [{ type: "free", label: "Free · stroll" }],
        description:
          "Istanbul's most famous pedestrian avenue, 1.4 km from Tünel to Taksim, lined with shops, 19th-century Belle Époque buildings, churches, covered passages (han) and the historic red tram that runs its full length.",
        longText:
          "<p>Born as the <em>Grande Rue de Péra</em> in the 19th century, it was the heart of Istanbul's European quarter — embassies, theaters, department stores, and the Levantine community of Greeks, Armenians, Italians and French who lived here. The historic red tram (<em>nostaljik tramvay</em>) that has run along it since 1990 pays tribute to the original line, in service from 1875 to 1961. Along the way it's worth stepping into <strong>Çiçek Pasajı</strong> (Flower Passage), a 19th-century gallery with historic taverns (<em>meyhane</em>), and the adjoining <strong>Balık Pazarı</strong> fish market.</p>",
        blocks: [
          {
            type: "photo",
            text: "The red tram running along Istiklal is one of the street's most photographed subjects — wait patiently at a crossing for the classic shot.",
          },
        ],
        transitAfter: "Walk to Taksim Meydanı",
      },
      {
        time: "16:00",
        name: "Taksim Meydanı",
        duration: "30 min",
        tags: [{ type: "free", label: "Free" }],
        description:
          "The square symbolizing modern Istanbul, at the end of Istiklal Caddesi and a major transport hub (metro, funicular from Kabataş). Here stands the Republic Monument, erected in 1928.",
        transitAfter: "Free time before dinner — head back towards the center or rest at the hotel",
      },
      {
        time: "20:00",
        name: "Dinner — Ondo Kebab, Kemerburgaz",
        duration: "2 hours",
        tags: [{ type: "book", label: "📅 Book a table" }],
        description:
          "A dinner recommended by locals in a greener, more residential area to the north of the city, away from the tourist circuits.",
        blocks: [
          {
            type: "warning",
            text: "Kemerburgaz is quite far from the center (Taksim/Galata) — consider a taxi or Uber/BiTaksi both ways, and check the last public transport times if you'd rather use them.",
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DAY 2 — 27 AUGUST — SULTANAHMET, THE GREAT CLASSICS
  // ══════════════════════════════════════════════════════════
  {
    number: 2,
    label: "Day 2 — Sultanahmet",
    mobileLabel: "Day 2",
    title: "Byzantium and Constantinople:\nthe day of the great classics",
    subtitle:
      "The densest day of the trip: Topkapı, Hagia Sophia, Basilica Cistern, Blue Mosque. Starting with the ferry from Beşiktaş, simit and tea in hand, then the whole historic peninsula on foot. Wear comfortable shoes and start early.",
    mapsUrl: "https://www.google.com/maps/d/viewer?mid=1G9581nJ6-5TDJB7cvukwyRlKUlBw4QI&usp=sharing",
    pills: [
      "🏛 Topkapı Palace",
      "⛪ Hagia Sophia",
      "💧 Basilica Cistern",
      "🕌 Blue Mosque",
    ],
    banners: [
      {
        type: "warning",
        title: "⚠️ Heavy day — start early",
        text: "Topkapı alone takes 2-3 hours to see properly, and in August the security queues are long. If time gets tight, the Turkish and Islamic Arts Museum is the easiest stop to drop from the day.",
      },
    ],
    stops: [
      {
        time: "08:00",
        name: "Beşiktaş — simit and first coffee",
        duration: "30 min",
        description:
          "Beşiktaş is a lively neighborhood on the European shore of the Bosphorus. Stop at a kiosk for a warm simit — the sesame-crusted ring bread, crunchy outside and soft inside — to eat on the ferry.",
        transitAfter: "Walk to the Beşiktaş ferry pier",
      },
      {
        time: "08:45",
        name: "Ferry Beşiktaş → Eminönü",
        duration: "25 min",
        tags: [{ type: "walk", label: "⛴ Ferry — simit and çay onboard" }],
        description:
          "One of the most beautiful and useful rides in Istanbul: it hugs the tip of the historic peninsula, with Topkapı and the mosque-studded skyline slowly drawing closer. The right moment for the simit and a hot glass of tea bought from the onboard vendor.",
        transitAfter: "Disembark at Eminönü, walk towards Sultanahmet",
      },
      {
        time: "09:30",
        name: "Istanbul Archaeological Museums",
        duration: "1 hour 15 min",
        tags: [{ type: "free", label: "Museum Pass valid" }],
        description:
          "A complex of three museums in Topkapı's first courtyard: the main Archaeological Museum, the Museum of the Ancient Orient and the Tiled Pavilion. Home to the famous Alexander Sarcophagus, in fact attributed to a Sidonian king, one of the best-preserved sculptural reliefs of antiquity.",
        longText:
          "<p>Founded in 1891 by Ottoman artist and archaeologist <strong>Osman Hamdi Bey</strong>, it's one of the most important archaeological museums in the eastern Mediterranean, with artifacts ranging from ancient Egypt to Mesopotamia, from classical Greece to Byzantium. The most famous piece is the <strong>Alexander Sarcophagus</strong> (4th century BC), found in Sidon: despite the name, it did not contain Alexander the Great, but it is decorated with scenes of his battles and hunts, with traces of the original polychrome still visible — extremely rare to see on ancient marble.</p>",
        blocks: [
          {
            type: "tip",
            text: "Covered by the Museum Pass Istanbul (~€17 for a single ticket). Much less crowded than Topkapı and Hagia Sophia — a good way to ease into the day before the rest.",
          },
        ],
        transitAfter: "5 min walk to the Topkapı entrance",
      },
      {
        time: "10:45",
        name: "Topkapı Palace",
        duration: "2 hours 30 min",
        tags: [
          { type: "book", label: "📅 Book online in advance" },
          { type: "crowd", label: "🔴 Long queues in high season" },
        ],
        description:
          "For almost 400 years the residence and administrative center of the Ottoman sultans, from 1459 until the mid-19th century. Successive courtyards, the Imperial Treasury with the Topkapı Dagger and its famous emeralds, and the Harem — a separate paid section, not to be missed.",
        longText:
          "<p>The palace was commissioned by <strong>Mehmed II the Conqueror</strong> right after the fall of Constantinople in 1453, as the new seat of Ottoman power overlooking the point where the Golden Horn, the Bosphorus and the Sea of Marmara meet. The structure unfolds through successive courtyards, each with an increasing degree of restricted access: from the public first courtyard to the very private fourth, reserved for the sultan.</p><p>The <strong>Imperial Treasury</strong>, in the third courtyard, holds the 86-carat Spoonmaker's Diamond and the famous <em>Topkapı Dagger</em>, with three large emeralds on its hilt — the star of a 1964 heist film (<em>Topkapi</em>) that cemented its international fame. The <strong>Harem</strong>, the sultan's private residential quarters, requires a separate ticket but is among the most fascinating parts: over 400 rooms, only some open to visitors, decorated with some of the finest Iznik tiles in Ottoman art.</p>",
        blocks: [
          {
            type: "tip",
            text: "Combined Palace + Harem ticket: around €55-60 per person. The Museum Pass Istanbul covers the palace but NOT the Harem, which must be purchased separately regardless. Book an online time slot to skip part of the queue.",
          },
          {
            type: "warning",
            text: "Security checks at the entrance can take 20-30 extra minutes in August. Arrive with plenty of margin before your ticket time.",
          },
        ],
        transitAfter: "Walk towards Gülhane Park through the first courtyard exit",
      },
      {
        time: "13:30",
        name: "Gülhane Park",
        duration: "20 min",
        tags: [{ type: "free", label: "Free" }],
        description:
          "The palace's former private garden, now a public tree-lined park — a good breather between the day's most demanding stops, with a view over the Golden Horn from the belvedere at the far end.",
        transitAfter: "10 min walk to Sultanahmet Meydanı",
      },
      {
        time: "14:00",
        name: "Lunch — köfte in Sultanahmet",
        duration: "45 min",
        description:
          "A quick lunch of köfte (grilled meatballs) at one of the area's historic kebapçı, before an afternoon devoted to Hagia Sophia and its surroundings.",
        blocks: [
          {
            type: "food",
            text: "The Divan Yolu / Sultanahmet Meydanı area has several historic köfteci — look for those also frequented by locals, recognizable by their bare-bones menu (köfte, piyaz, ayran) and no pictures on the menu.",
          },
        ],
        transitAfter: "5 min walk to Hagia Sophia",
      },
      {
        time: "15:00",
        name: "Hagia Sophia",
        duration: "1 hour",
        tags: [{ type: "book", label: "📅 Ticket on-site only" }],
        description:
          "Built in 537 as a Byzantine cathedral, then an Ottoman mosque from 1453, a museum from 1935, and a mosque again since 2020. Since 2024, non-Muslim visitors pay a separate ticket for the upper gallery, where the most important Byzantine mosaics remain.",
        longText:
          "<p>Built in just five years on the orders of Emperor <strong>Justinian I</strong>, Hagia Sophia remained the largest church in the world for nearly a thousand years, until the completion of Seville Cathedral in 1520. The dome, an unprecedented feat of engineering at the time, appears to float thanks to a ring of forty windows at its base. After the 1453 Ottoman conquest, Mehmed II converted it into a mosque, adding the minarets and having the Christian mosaics plastered over — not destroyed — which is why they survived to be uncovered again during the museum period (1935-2020).</p><p>Since July 2020, Hagia Sophia has once again been an active mosque; since 2024, entry to the upper gallery, where the best-preserved Byzantine mosaics are found (the Christ Pantocrator, the Deësis), requires a paid ticket for non-Muslim visitors, while the main floor remains free.</p>",
        blocks: [
          {
            type: "tip",
            text: "Upper gallery ticket ~€25 per person, sold on-site only (there's no official online sale — beware of third-party sites claiming otherwise). Not covered by the Museum Pass Istanbul.",
          },
          {
            type: "warning",
            text: "Modest dress is required: shoulders and knees covered, women need a headscarf (available for free at the entrance). Avoid prayer times, when access for non-worshippers is suspended.",
          },
        ],
        transitAfter: "3 min walk to the Basilica Cistern",
      },
      {
        time: "16:15",
        name: "Basilica Cistern",
        duration: "45 min",
        tags: [{ type: "book", label: "📅 Book a time slot" }],
        description:
          "The largest of the city's hundreds of underground Byzantine cisterns, built in the 6th century under Justinian I. A forest of illuminated columns, shallow water, and the two famous upside-down Medusa heads at the base of two columns in the northwest corner.",
        longText:
          "<p>Known in Turkish as <em>Yerebatan Sarnıcı</em> (\"sunken cistern\"), it was built to secure the water supply of the Byzantine Great Palace: 336 reused columns — salvaged from older temples, which is why the styles aren't uniform — support a vaulted ceiling that once covered a capacity of about 80,000 cubic meters of water. The two <strong>Medusa heads</strong>, placed upside down or sideways at the base of two columns in the northwest corner, are themselves repurposed material from an earlier Roman building: the unusual orientation is still debated, perhaps just a practical choice to fit them to the column's height.</p>",
        blocks: [
          {
            type: "tip",
            text: "Ticket ~€38-40, bookable online with a time slot — worth doing a few days ahead to avoid the worst of the historic center's queues.",
          },
        ],
        transitAfter: "10 min walk to the Turkish and Islamic Arts Museum",
      },
      {
        time: "17:15",
        name: "Turkish and Islamic Arts Museum",
        duration: "45 min",
        tags: [{ type: "free", label: "Museum Pass valid" }],
        description:
          "Housed in the former palace of İbrahim Pasha, grand vizier to Suleiman the Magnificent, on the site of the old Hippodrome. One of the world's most important collections of Anatolian carpets, alongside calligraphy, ceramics and Islamic manuscripts.",
        blocks: [
          {
            type: "tip",
            text: "An easy stop to drop if the day is running long — but if you have time, the carpet collection is unique and the palace itself, overlooking the former Hippodrome, is worth the visit.",
          },
        ],
        transitAfter: "5 min walk to the Blue Mosque",
      },
      {
        time: "18:15",
        name: "Blue Mosque (Sultan Ahmed Camii)",
        duration: "30-40 min",
        tags: [{ type: "free", label: "Free — active mosque" }],
        description:
          "Built between 1609 and 1616 for Sultan Ahmed I, it owes its name to the twenty-one thousand blue and green Iznik tiles lining the interior. Six minarets — a rarity that caused controversy at the time, matching the number at the Great Mosque of Mecca.",
        longText:
          "<p>Legend has it that the sultan, ordering \"gold minarets\" (<em>altın minare</em>), was misheard — or perhaps deliberately obliged beyond his request — by architect <strong>Sedefkâr Mehmed Ağa</strong>, who built \"six minarets\" (<em>altı minare</em>), matching the Great Mosque of Mecca: to resolve the religious controversy, a seventh minaret was added to Mecca itself. The mosque is still active and closes to visitors during the five daily prayers.</p>",
        blocks: [
          {
            type: "warning",
            text: "Free entry but with the same dress code as Hagia Sophia (shoulders/knees covered, headscarf for women) and closure to visitors during prayer times — check the schedule at the entrance or online beforehand, especially for a late-afternoon visit.",
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DAY 3 — 28 AUGUST — BAZAARS, DOLMABAHÇE & ORTAKÖY
  // ══════════════════════════════════════════════════════════
  {
    number: 3,
    label: "Day 3 — Bazaars & Bosphorus",
    mobileLabel: "Day 3",
    title: "From the covered bazaars\nto a Bosphorus sunset",
    subtitle:
      "Morning among the Grand Bazaar, Süleymaniye and Spice Bazaar; afternoon towards the Bosphorus with Dolmabahçe, closing at Ortaköy, between the little mosque on the water and the suspension bridge behind it. The last full day before the flight on the 29th.",
    mapsUrl: "https://www.google.com/maps/d/edit?mid=1A3HAghs6FJ9KOtpB2FdJjHSbD6yCC5E&usp=sharing",
    pills: [
      "🛍 Grand Bazaar",
      "🕌 Süleymaniye Mosque",
      "🌶 Spice Bazaar",
      "🌇 Sunset in Ortaköy",
    ],
    stops: [
      {
        time: "08:30",
        name: "Breakfast in Eminönü",
        duration: "45 min",
        description:
          "One last real Turkish breakfast, in the harbor-side neighborhood at the foot of the Galata Bridge, before heading uphill to the Grand Bazaar.",
        transitAfter: "15 min uphill walk to the Grand Bazaar",
      },
      {
        time: "09:45",
        name: "Grand Bazaar (Kapalıçarşı)",
        duration: "1 hour 30 min",
        tags: [
          { type: "free", label: "Free entry" },
          { type: "crowd", label: "🔴 Very busy" },
        ],
        description:
          "One of the oldest and largest covered markets in the world: over 4,000 shops across 61 covered streets, open since 1461. Carpets, Iznik ceramics, gold, lamps, textiles — and an enormous number of insistent sellers.",
        longText:
          "<p>Commissioned by <strong>Mehmed II</strong> right after the 1453 conquest as the economic engine of the new Ottoman capital, the Kapalıçarşı grew over the centuries into a city within the city, with its own mosques, fountains, hammams and caravanserais. Rebuilt several times after fires and earthquakes (the last major fire in 1954), it still keeps its structure of trade-specific sectors — the goldsmiths' quarter, the carpet quarter, the leather quarter — typical of Ottoman bazaars.</p>",
        blocks: [
          {
            type: "tip",
            text: "Bargaining is the norm, not the exception: start at around half the asking price. Compare prices across a few shops before buying, especially for carpets and valuable items.",
          },
          {
            type: "warning",
            text: "It's very easy to get lost — that's fine, it's part of the experience, but mentally note one of the main entrances (Nuruosmaniye or Beyazıt) as a landmark for finding your way out.",
          },
        ],
        transitAfter: "10 min walk to Süleymaniye",
      },
      {
        time: "11:30",
        name: "Süleymaniye Mosque",
        duration: "45 min",
        tags: [{ type: "free", label: "Free — active mosque" }],
        description:
          "The masterpiece of architect Mimar Sinan, built between 1550 and 1557 for Suleiman the Magnificent. Less crowded than the Blue Mosque, with one of the city's finest views over the Golden Horn from the surrounding complex.",
        longText:
          "<p><strong>Mimar Sinan</strong>, the greatest architect of the Ottoman Empire, considered the Süleymaniye one of his most successful works (though he named the Selimiye in Edirne his absolute masterpiece late in life). The mosque is part of a <em>külliye</em> — a complete social complex with Quranic schools, a hospital, a hammam, soup kitchens for the poor, and the mausoleum where Suleiman himself and his wife Hürrem Sultan (Roxelana) are buried. The rear courtyard offers one of the quietest, least touristy views over the Golden Horn.</p>",
        transitAfter: "15 min downhill walk to the Spice Bazaar",
      },
      {
        time: "12:45",
        name: "Spice Bazaar (Mısır Çarşısı)",
        duration: "45 min",
        tags: [{ type: "crowd", label: "🔴 Busy" }],
        description:
          "An L-shaped covered market next to the Yeni Cami, open since 1660 as part of the mosque complex. Spices, Turkish delight (lokum), dried fruit, tea — more touristy than the Grand Bazaar but more compact and quicker to visit.",
        blocks: [
          {
            type: "food",
            text: "A good spot to buy loose lokum (Turkish delight) to bring home, and spices like sumac or pul biber — taste before buying, almost every stall offers free samples.",
          },
        ],
        transitAfter: "Walk towards the Eminönü waterfront",
      },
      {
        time: "13:45",
        name: "Balık ekmek in Eminönü",
        duration: "45 min",
        description:
          "A typical, low-cost lunch on the waterfront: a grilled fish sandwich (usually mackerel), served from the traditional colorful boats moored under the Galata Bridge, with onion, salad and lemon juice.",
        blocks: [
          {
            type: "food",
            text: "Look for the historic boat-kitchens near the Galata Bridge, on the Eminönü side — it's a city institution, cheap and genuine.",
          },
        ],
        transitAfter: "Walk to the Eminönü tram stop",
      },
      {
        time: "14:45",
        name: "T1 Tram — Eminönü → Kabataş",
        duration: "15-20 min",
        tags: [{ type: "metro", label: "🚊 T1 Tram" }],
        description:
          "The historic tram crosses the Galata Bridge and runs along the Bosphorus to Kabataş, where you can catch the funicular up to Taksim or continue on foot towards Dolmabahçe.",
        transitAfter: "10 min walk along the Bosphorus to Dolmabahçe",
      },
      {
        time: "15:30",
        name: "Dolmabahçe Palace",
        duration: "1 hour 30 min",
        tags: [{ type: "book", label: "📅 Book a time slot online" }],
        description:
          "Residence of the Ottoman sultans from the mid-19th century, it replaced Topkapı as the symbol of power in a European style — Baroque, Rococo and Neoclassical, with the world's largest crystal chandelier in the Throne Room.",
        longText:
          "<p>Built between 1843 and 1856 for Sultan <strong>Abdülmecid I</strong>, Dolmabahçe marked the Ottoman ambition to present itself as a modern European power, abandoning Topkapı's austerity for a deliberately Western opulence: 285 rooms, 44 halls, 14 tons of gold used in decoration, and in the Throne Room a 4.5-ton chandelier gifted by Queen Victoria, among the largest ever made. The palace is also where <strong>Mustafa Kemal Atatürk</strong>, founder of the Turkish Republic, died on 10 November 1938: every clock in the palace is stopped at 9:05, the exact time of his death.</p>",
        blocks: [
          {
            type: "tip",
            text: "Ticket ~€45-50, entry via limited time slots — book online a few days ahead, especially in August. Not covered by the Museum Pass Istanbul.",
          },
        ],
        transitAfter: "Walk or short taxi along the Bosphorus to Ortaköy · 30-40 min",
      },
      {
        time: "17:30",
        name: "Ortaköy Mosque",
        duration: "30 min",
        tags: [{ type: "free", label: "Free" }],
        description:
          "The small neo-baroque Büyük Mecidiye Camii, set right on the Bosphorus shore with the first suspension bridge rising behind it — one of the city's most iconic, most photographed sights, especially at sunset.",
        transitAfter: "Walk around the Ortaköy neighborhood",
      },
      {
        time: "18:00",
        name: "Ortaköy — sunset and last evening",
        duration: "2 hours+",
        tags: [{ type: "free", label: "Free stroll" }],
        description:
          "A Bosphorus-side neighborhood, traditionally multicultural (Greek, Armenian, Jewish and Muslim communities have lived here side by side for centuries), today full of stalls, kumpir (giant stuffed baked potatoes), view cafés facing the bridge and evening bars. The right place to close out your last full evening in Istanbul.",
        blocks: [
          {
            type: "food",
            text: "Kumpir — a giant baked potato mashed and loaded with dozens of toppings — is Ortaköy's signature street food: the stalls along the main street are almost all reliable.",
          },
          {
            type: "photo",
            text: "The best time for the classic mosque-with-bridge shot is at sunset or just after, with the bridge lights on and the sky still light.",
          },
        ],
      },
    ],
    bonus: {
      title: "✈️ 29 August — departure day",
      text: "14:20 flight from SAW: the airport is far from the center (on the European side, but about 45 km from Sultanahmet), so plan at least 1h-1h30 for the transfer plus a margin for security queues. If a couple of free hours remain in the morning, a short Bosphorus boat tour from Eminönü (regular departures, about 1h30-2h) is a nice way to close out the trip without straying too far from the route to the airport.",
    },
  },
];

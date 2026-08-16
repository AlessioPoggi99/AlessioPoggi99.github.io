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
  // ── LOCAL DISHES ─────────────────────────────────────────
  {
    id: "dishes",
    title: "Local dishes",
    emoji: "🍽",
    intro:
      "Turkish cuisine — especially in Istanbul, a crossroads of Ottoman, Balkan, Middle Eastern and Black Sea influences — is one of the richest in the Mediterranean. Here's what to look out for over the three days.",
    entries: [
      {
        name: "Kahvaltı",
        subtitle: "Turkish breakfast",
        description:
          "A long, social meal built around small plates: white cheese (beyaz peynir), olives, tomatoes, cucumbers, honey with kaymak (buffalo-milk cream), eggs, cured meats like sucuk and pastırma, jams, warm bread. Tea goes with everything — never coffee, which is a different ritual in Turkey.",
        tip: "Order a 'serpme' (spread-out) kahvaltı if there are several of you: it's the shared version with all the small plates laid out at the center of the table.",
        where: "Everywhere — Caddebostan, Eminönü, any neighborhood",
        price: "€€",
        tag: "Breakfast",
      },
      {
        name: "Simit",
        subtitle: "Sesame-crusted ring bread",
        description:
          "The classic breakfast street food: a ring of bread that's crunchy outside, soft inside, coated in toasted sesame seeds and glazed with grape molasses (pekmez). Sold everywhere from street carts, often eaten while walking or on the ferry.",
        tip: "Best warm, fresh off the cart — look for carts with a full glass case, a sign of quick turnover.",
        where: "Street carts in every neighborhood, ferry piers",
        price: "€",
        tag: "Street food",
      },
      {
        name: "Köfte",
        subtitle: "Grilled meatballs",
        description:
          "Spiced beef or lamb meatballs, grilled and served with bread, onion, grilled chili and piyaz (white bean salad). Every Turkish region has its own version — around Sultanahmet you'll mostly find the central Anatolian / İzmir-style version.",
        tip: "Historic köfteci often have tiny menus — köfte, piyaz, ayran and nothing else — which is usually a sign of quality.",
        where: "Divan Yolu area, Sultanahmet",
        price: "€€",
        tag: "Main course",
      },
      {
        name: "Balık ekmek",
        subtitle: "Grilled fish sandwich",
        description:
          "Grilled mackerel in a bread roll with onion, salad and lemon, traditionally served from colorful boats moored under the Galata Bridge in Eminönü. Cheap, fast, and genuinely local.",
        tip: "Ask for pickled chili (turşu) on the side if you spot it on the counter — it adds a nice kick.",
        where: "Eminönü, under the Galata Bridge",
        price: "€",
        tag: "Street food",
      },
      {
        name: "Baklava",
        subtitle: "Layered pastry with pistachio or walnuts and syrup",
        description:
          "Paper-thin layers of filo with pistachio (a Gaziantep tradition) or walnuts, baked and soaked in sugar syrup. Best fresh, not overly sweet, with the pastry still crisp.",
        tip: "Fıstıklı baklava (with pistachio) is the most prized version — recognizable by the intense green color of the filling.",
        where: "Karaköy Güllüoğlu, Rıhtım Caddesi 4/A",
        price: "€€",
        tag: "Dessert",
      },
      {
        name: "Künefe",
        subtitle: "Melted cheese dessert with syrup",
        description:
          "Two layers of kadayıf pastry (similar to shredded phyllo) with unsalted stringy cheese in the middle, pan-cooked until crisp outside, then soaked in hot syrup. Must be eaten piping hot, straight from the pan.",
        tip: "Order it last and eat it immediately — once it cools, the cheese stops being stringy and it's a completely different experience.",
        where: "Historic pastry shops, Karaköy and Sultanahmet",
        price: "€€",
        tag: "Dessert",
      },
      {
        name: "Lokum",
        subtitle: "Turkish delight",
        description:
          "Dense flavored jelly (rose, lemon, pomegranate, pistachio) dusted with powdered sugar or coconut. Born in the 18th century at the Ottoman court, today it's the most classic edible souvenir to bring home.",
        tip: "Buy it loose at the Spice Bazaar and taste first — quality varies a lot from stall to stall.",
        where: "Spice Bazaar (Mısır Çarşısı)",
        price: "€",
        tag: "Dessert / Souvenir",
      },
      {
        name: "Kumpir",
        subtitle: "Giant stuffed baked potato",
        description:
          "A huge baked potato, mashed with butter and cheese, then loaded with toppings of choice — corn, olives, sausage, pickles, sauces. A complete meal in itself, and Ortaköy's signature street food.",
        tip: "Don't be shy about piling on the toppings — it's part of the experience, and the vendors expect it.",
        where: "Ortaköy, stalls along the main street",
        price: "€€",
        tag: "Street food",
      },
      {
        name: "Çay",
        subtitle: "Black tea in tulip-shaped glasses",
        description:
          "An ever-present drink, served very strong and scalding hot in small tulip-shaped glasses, with sugar cubes on the side. Drunk at all hours, often offered for free by shopkeepers during bargaining.",
        tip: "If you don't want it too strong, ask for 'açık çay' (light tea) — otherwise you'll get 'demli', which is heavily brewed.",
        where: "Everywhere, including onboard the ferries",
        price: "€",
        tag: "Drink",
      },
    ],
  },

  // ── NEIGHBORHOODS ─────────────────────────────────────
  {
    id: "neighborhoods",
    title: "Neighborhoods and moods",
    emoji: "🧭",
    intro:
      "Istanbul changes character radically from one neighborhood to the next — a quick orientation on the ones covered by the itinerary, plus a couple of alternatives if you have extra time.",
    entries: [
      {
        name: "Kadıköy / Caddebostan",
        subtitle: "Asian side, residential",
        description:
          "The more 'ordinary', less touristy face of Istanbul: neighborhood cafés, local markets, a seafront promenade full of families and runners. A good place to ease into the day, away from the European tourist circuit.",
        tag: "Asian side",
      },
      {
        name: "Karaköy",
        subtitle: "Former port area, now creative",
        description:
          "Over the last 15 years it has gone from a slightly rundown industrial area to one of the city's most interesting neighborhoods: contemporary art galleries, concept stores, specialty coffee, the historic Güllüoğlu bakery.",
        tag: "Europe, Golden Horn side",
      },
      {
        name: "Sultanahmet",
        subtitle: "The historic peninsula",
        description:
          "The heart of Byzantium and Ottoman Constantinople, with the highest concentration of monuments per square meter anywhere in the world: Topkapı, Hagia Sophia, Blue Mosque, Basilica Cistern. Also the most touristy and crowded neighborhood — especially in August.",
        tag: "Old city",
      },
      {
        name: "Beyoğlu (Galata, İstiklal, Taksim)",
        subtitle: "The European, modern face",
        description:
          "From Galata Tower to Taksim, via the pedestrian avenue of İstiklal: the most Western side of Istanbul, with evening bars, theaters, Belle Époque buildings from the old cosmopolitan Pera.",
        tag: "Modern center",
      },
      {
        name: "Ortaköy",
        subtitle: "On the Bosphorus, between bridge and mosque",
        description:
          "A small Bosphorus-side neighborhood, traditionally multicultural, today an evening destination for kumpir, cafés with bridge views, and the small neo-baroque mosque set right on the water.",
        tag: "Bosphorus",
      },
    ],
  },

  // ── PRACTICAL TIPS ──────────────────────────────────────
  {
    id: "practical",
    title: "Practical tips",
    emoji: "💡",
    intro:
      "Everything worth knowing before you go: visa, monument tickets, transport, money, and a few local customs.",
    entries: [
      {
        name: "Visa — Italian citizens",
        subtitle: "No visa required",
        description:
          "Italian citizens can enter Turkey without a visa for tourist stays of up to 90 days within a 180-day period. A valid ID card (usable for travel abroad) or a passport with at least 6 months of remaining validity is enough.",
        tip: "If traveling with an ID card, make sure it's actually valid for travel abroad (not all Italian ID cards are) and in good condition — damaged or illegible cards can cause problems at the border.",
        tag: "Documents",
      },
      {
        name: "Tickets — no single pass covers everything",
        subtitle: "The Museum Pass helps, but not for all sites",
        description:
          "The Museum Pass Istanbul (roughly €105-120, valid 5 days) covers state museums — Topkapı (without the Harem), the Archaeological Museums, the Turkish and Islamic Arts Museum — but does NOT cover Hagia Sophia, the Basilica Cistern or Dolmabahçe Palace, which always require separate tickets.",
        tip: "With this three-day itinerary (Topkapı + Archaeological Museums + Turkish and Islamic Arts Museum), the Museum Pass will almost certainly pay off compared to buying single tickets. Do the math before you go.",
        tag: "Tickets",
      },
      {
        name: "Book ahead",
        subtitle: "Cistern, Dolmabahçe and Topkapı",
        description:
          "The Basilica Cistern and Dolmabahçe Palace sell limited time slots that often sell out on the busiest days. Topkapı doesn't use strict time slots, but booking online skips part of the security-check queue.",
        tip: "Book these three online a few days before departure, especially when traveling in August, peak season.",
        tag: "Tickets",
      },
      {
        name: "Transport — Istanbulkart",
        subtitle: "One card for every mode, ferries included",
        description:
          "The Istanbulkart is a contactless card valid on the metro, tram, bus, funiculars and Şehir Hatları ferries — essential for an itinerary like this one, which relies heavily on ferries. It can be bought and topped up at automatic machines in major stations.",
        tip: "Get one each as soon as you arrive at the airport or your first station — it massively simplifies getting around compared to single paper tickets.",
        tag: "Transport",
      },
      {
        name: "Airport — SAW (Sabiha Gökçen)",
        subtitle: "Far from the center, Asian side",
        description:
          "Sabiha Gökçen is on the Asian side, about 45 km from Sultanahmet — farther and less well connected than the more central Istanbul Airport (IST). For the 14:20 flight on 29 August, allow at least 1-1h30 for the transfer plus a margin for security checks.",
        tip: "The Havabüs shuttle bus connects SAW to Taksim and Kadıköy; alternatively, a taxi or apps like BiTaksi/Uber are more comfortable with luggage.",
        tag: "Transport",
      },
      {
        name: "Opening hours and closures",
        subtitle: "Always double-check in advance",
        description:
          "Topkapı closes on Tuesdays, Dolmabahçe on Mondays, the Grand Bazaar on Sundays — none of these closures affect the 26-28 August 2026 dates (Wednesday, Thursday, Friday), but it's still worth checking updated hours before you go, especially for Hagia Sophia and the Blue Mosque around prayer times.",
        tag: "Hours",
      },
      {
        name: "Dress code in mosques",
        subtitle: "The same rules apply everywhere",
        description:
          "At Hagia Sophia, the Blue Mosque and Süleymaniye: shoulders and knees covered for everyone, headscarf required for women (available for free at the entrance if you don't have one). Shoes must be removed before entering the prayer hall.",
        tip: "Carry a light scarf in your bag: useful both as a headscarf and to cover shoulders if wearing a tank top — it avoids the queue for borrowed shawls.",
        tag: "Local customs",
      },
      {
        name: "Money and payments",
        subtitle: "Cards almost everywhere, cash for the bazaars",
        description:
          "The Turkish lira (TRY) is the official currency; contactless cards work in most restaurants and shops. In the bazaars, and for bargaining, having cash in lira helps you negotiate better.",
        tip: "Exchange money at a local ATM or a little at a time at a currency exchange office downtown (not at the airport, where rates are worse) — avoid carrying too much cash on you.",
        tag: "Money",
      },
      {
        name: "Bargaining in the bazaars",
        subtitle: "It's the norm, not an exception",
        description:
          "In the Grand Bazaar and the Spice Bazaar, the listed price is almost always a starting point. Bargaining is part of the ritual and well received by sellers — with courtesy and a smile, never aggressively.",
        tip: "Start at around half the asking price and meet somewhere in the middle. Comparing 2-3 shops before buying helps you gauge the real price.",
        tag: "Local customs",
      },
    ],
  },
];

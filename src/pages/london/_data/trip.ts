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
  title: "London",
  titleEm: "4 days",
  meta: [
    "🗓 22–25 August 2026",
    "✈️ Arrival 22/08 at 10:50 · STN",
    "✈️ Departure 25/08 at 19:25 · STN",
    "⚽ Kicking off with West Ham vs Charlton",
  ],
};

export const days: Day[] = [
  // ══════════════════════════════════════════════════════════
  // DAY 1 — SAT 22 AUGUST — ARRIVAL & WEST HAM MATCH
  // ══════════════════════════════════════════════════════════
  {
    number: 1,
    label: "Day 1 — Arrival & West Ham",
    mobileLabel: "Day 1",
    title: "Landing in London,\nstraight into matchday",
    subtitle:
      "A short first day by design: land at Stansted, drop bags at the hotel in Victoria, then head out to Stratford for a Saturday afternoon at the London Stadium. A gentle way into the trip before three much fuller days.",
    pills: [
      "✈️ Land at Stansted 10:50",
      "🏨 Check in — Victoria",
      "⚽ West Ham United vs Charlton",
      "🍺 Pub dinner near Victoria",
    ],
    stops: [
      {
        time: "12:45",
        name: "Check in — The House on Warwick",
        duration: "30 min",
        tags: [{ type: "walk", label: "Victoria, SW1V" }],
        description:
          "The hotel sits a five-minute walk from Victoria Station, itself a hub for the Tube, national rail and the Stansted Express — a genuinely convenient base for a trip built around the Tube.",
        transitAfter: "Tube from Victoria to Stratford — Victoria Line to Green Park, then Jubilee Line",
      },
      {
        time: "14:00",
        name: "London Stadium — pre-match atmosphere",
        duration: "1 hour",
        tags: [{ type: "crowd", label: "🔴 Busy on matchday" }],
        description:
          "Originally built for the 2012 Olympics, the stadium became West Ham United's home in 2016 after a large-scale conversion from athletics venue to football ground — one of the more unusual stadium redevelopments in English football.",
        longText:
          "<p>The stadium held athletics events during London 2012 with a capacity of around 80,000, then underwent a multi-year retrofit — closing in the running track, lowering and steepening the stands — to become a proper football ground while keeping much of the original steel roof structure. It now holds around 62,500 for football, making it one of the largest club stadiums in England. Arrive with time to spare: soak up the build-up outside, grab a scarf or programme, and get a drink before kickoff.</p>",
        blocks: [
          {
            type: "tip",
            text: "Bag policies at London Stadium are strict on size — check current restrictions on the club's site before you go so you're not caught out at the gate.",
          },
        ],
        transitAfter: "Walk to the turnstiles",
      },
      {
        time: "15:00",
        name: "West Ham United vs Charlton Athletic",
        duration: "~2 hours",
        tags: [{ type: "book", label: "🎟 Tickets required" }],
        description:
          "Kickoff at 15:00 — a proper Saturday football fixture as a first taste of England, with London Stadium's away end and atmosphere giving a good sense of the matchday ritual even for a non-Premier League opponent.",
        transitAfter: "Tube back to Victoria — Jubilee Line to Green Park, then Victoria Line",
      },
      {
        time: "19:00",
        name: "Dinner around Victoria",
        duration: "1 hour 30 min",
        description:
          "An easy pub dinner close to the hotel to close out a travel-heavy first day, before an early-ish night ahead of the busiest day of the trip tomorrow.",
        blocks: [
          {
            type: "food",
            text: "The Albert (classic Victorian pub), The Cask Pub & Kitchen (strong beer selection) or The Willow Walk (traditional pub) are all a short walk from the hotel.",
          },
        ],
      },
    ],
    bonus: {
      title: "✈️ Getting in — 22 August",
      text: "Ryanair FR2758 lands at Stansted (STN) at 10:50. From there: Stansted Express to Liverpool Street (~47 min), then the Tube (Circle Line) to Victoria (~14 min) and a 5-minute walk to the hotel. One thing worth flagging that isn't obvious: since April 2025, Italian citizens need a UK ETA (Electronic Travel Authorisation) to board — it's not a visa, just a quick online application, but it must be sorted before departure, not on arrival.",
    },
  },

  // ══════════════════════════════════════════════════════════
  // DAY 2 — SUN 23 AUGUST — ROYAL LONDON, MUSEUMS, SOUTH BANK
  // ══════════════════════════════════════════════════════════
  {
    number: 2,
    label: "Day 2 — Royal London & South Bank",
    mobileLabel: "Day 2",
    title: "From Buckingham Palace\nto the river at night",
    subtitle:
      "The classic-London day, almost entirely on foot: royal parks and palaces in the morning, world-class museums at midday, then across the river for St Paul's, the Millennium Bridge and a sunset finish at Sky Garden.",
    mapsUrl: "https://www.google.com/maps/d/edit?mid=1nk8Ld_0D6FyO59Gn3sJLpGDWTaLnrVw&usp=sharing",
    pills: [
      "👑 Buckingham Palace",
      "🖼 National Gallery & British Museum",
      "🎡 London Eye",
      "🌆 Sky Garden at sunset",
    ],
    banners: [
      {
        type: "info",
        title: "📌 Book ahead — several stops today are free but slot-limited",
        text: "The British Museum and National Gallery are free but increasingly require a timed online booking, and Sky Garden is always free with mandatory advance booking. Sort these a few days before you go — they fill up.",
      },
    ],
    stops: [
      {
        time: "09:00",
        name: "Buckingham Palace",
        duration: "45 min",
        tags: [{ type: "free", label: "Exterior — free" }],
        description:
          "The official London residence of the monarch since 1837, and one of the few working royal palaces left in the world. If timing lines up, the Changing of the Guard usually takes place around 11:00 — check the schedule the day before, as it varies.",
        transitAfter: "Short walk to St James's Park",
      },
      {
        time: "09:45",
        name: "St James's Park",
        duration: "30 min",
        tags: [{ type: "free", label: "Free" }],
        description:
          "The oldest of London's royal parks, with a history stretching back to the 16th century — a calm, lake-side walk before the day's busier stops, with a well-known view back towards Buckingham Palace.",
        transitAfter: "Walk along The Mall",
      },
      {
        time: "10:15",
        name: "The Mall",
        duration: "15 min",
        tags: [{ type: "free", label: "Free · stroll" }],
        description:
          "The ceremonial avenue linking St James's to Buckingham Palace, used for state processions and royal events — wide, tree-lined, and one of the more photogenic walks in central London.",
        transitAfter: "Walk to Westminster Abbey",
      },
      {
        time: "10:45",
        name: "Westminster Abbey",
        duration: "1 hour",
        tags: [{ type: "book", label: "📅 Ticketed" }],
        description:
          "The site of every English and British coronation since 1066, and of numerous royal weddings and state funerals. A Gothic church dense with history — poets, scientists and monarchs are buried within its walls.",
        transitAfter: "Walk to Whitehall",
      },
      {
        time: "11:45",
        name: "Whitehall",
        duration: "30 min",
        tags: [{ type: "free", label: "Free · stroll" }],
        description:
          "The street at the heart of the British government, lined with ministries. Worth a look at the Horse Guards Parade and, if time allows, the Cabinet War Rooms where Churchill directed the Second World War from underground.",
        transitAfter: "Walk to Trafalgar Square",
      },
      {
        time: "12:45",
        name: "Trafalgar Square",
        duration: "20 min",
        tags: [{ type: "free", label: "Free" }],
        description:
          "Built to commemorate Admiral Nelson's 1805 victory at the Battle of Trafalgar, with Nelson's Column rising 52 metres above the square, guarded by four bronze lions cast from captured French cannon.",
        transitAfter: "A couple of minutes' walk to the National Gallery",
      },
      {
        time: "13:15",
        name: "The National Gallery",
        duration: "1 hour",
        tags: [{ type: "free", label: "Free — book online" }],
        description:
          "Home to over 2,300 paintings including Van Gogh's Sunflowers and Leonardo's Virgin of the Rocks. Free entry, but given the density of masterpieces, a focused visit on the highlights beats trying to see everything.",
        blocks: [
          {
            type: "tip",
            text: "Pick 5-6 must-see works in advance and head straight for them — the collection is vast, and a scattershot approach eats the whole afternoon.",
          },
        ],
        transitAfter: "Walk to Covent Garden",
      },
      {
        time: "14:15",
        name: "Covent Garden",
        duration: "1 hour",
        tags: [{ type: "crowd", label: "🔴 Busy" }],
        description:
          "A lively former fruit-and-vegetable market, now full of street performers, boutique shops and restaurants under a Victorian glass roof — a good spot for a lunch break amid the day's museum-heavy schedule.",
        transitAfter: "Walk to the British Museum",
      },
      {
        time: "15:15",
        name: "British Museum",
        duration: "2 hours 15 min",
        tags: [{ type: "free", label: "Free — book online" }],
        description:
          "Founded in 1753, the oldest national museum in the world, holding over 8 million objects. The two unmissable highlights are the Rosetta Stone and the Parthenon Marbles, both usually surrounded by crowds.",
        longText:
          "<p>The <strong>Rosetta Stone</strong>, discovered by French soldiers in Egypt in 1799, was the key that unlocked Egyptian hieroglyphs: the same decree inscribed in three scripts — hieroglyphic, Demotic and Ancient Greek — let scholars, chiefly Jean-François Champollion, finally decode a writing system that had been unreadable for over a thousand years. The <strong>Parthenon Marbles</strong> (also known as the Elgin Marbles), removed from the Acropolis in Athens in the early 19th century, remain one of the most disputed sets of objects in any museum in the world, at the centre of an ongoing repatriation debate between the UK and Greece.</p>",
        transitAfter: "Tube — Central Line from Tottenham Court Road to Waterloo",
      },
      {
        time: "18:00",
        name: "London Eye",
        duration: "45 min",
        tags: [{ type: "book", label: "📅 Book online" }],
        description:
          "A 135-metre observation wheel on the South Bank, offering sweeping views over the city — book ahead, and go for early evening light if the schedule allows.",
        transitAfter: "Tube — Jubilee Line to Westminster, then District/Circle to St Paul's",
      },
      {
        time: "19:30",
        name: "St Paul's Cathedral",
        duration: "30 min",
        tags: [{ type: "free", label: "Exterior free — dome ticketed" }],
        description:
          "Sir Christopher Wren's masterpiece, rebuilt after the Great Fire of London and the venue for major national events including Charles and Diana's 1981 wedding. If it's already closed for the evening, the exterior alone — especially floodlit — is worth the stop.",
        transitAfter: "Short walk to the Millennium Bridge",
      },
      {
        time: "20:00",
        name: "Millennium Bridge",
        duration: "15 min",
        tags: [{ type: "free", label: "Free" }],
        description:
          "The pedestrian bridge linking St Paul's to Tate Modern on the South Bank, with a clean line-of-sight view of the cathedral's dome behind you as you cross.",
        transitAfter: "Short walk to Sky Garden",
      },
      {
        time: "20:30",
        name: "Sky Garden",
        duration: "1 hour",
        tags: [{ type: "book", label: "📅 Free — booking mandatory" }],
        description:
          "A free public garden and viewing deck on the 43rd floor of 20 Fenchurch Street ('The Walkie-Talkie'), with a 360° view over London — one of the best value evenings in the city, since entry costs nothing but does require an advance time-slot booking.",
        blocks: [
          {
            type: "tip",
            text: "Slots go fast, especially for evening visits — book well ahead of the trip, not the week before.",
          },
        ],
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DAY 3 — MON 24 AUGUST — SHOPPING STREETS, TOWER & SHARD
  // ══════════════════════════════════════════════════════════
  {
    number: 3,
    label: "Day 3 — Shopping streets & the Tower",
    mobileLabel: "Day 3",
    title: "From dinosaurs to the Crown Jewels,\nvia Oxford Street",
    subtitle:
      "A day of contrasts: a morning at the Natural History Museum, an afternoon along London's best-known shopping streets, then east to the Tower of London, Tower Bridge and a night-time view from Western Europe's tallest building.",
    mapsUrl: "https://www.google.com/maps/d/edit?mid=1IfjspA8nzMo6XiaJuqklcZZXPtUlwtA&usp=sharing",
    pills: [
      "🦕 Natural History Museum",
      "🛍 Oxford & Regent Street",
      "👑 Tower of London",
      "🌃 The Shard at night",
    ],
    banners: [
      {
        type: "warning",
        title: "⚠️ Book the Tower, Tower Bridge and The Shard in advance",
        text: "All three sell timed online tickets and queues can be long in August — booking ahead saves real time on what's already the longest day of the trip.",
      },
    ],
    stops: [
      {
        time: "09:30",
        name: "Natural History Museum",
        duration: "2 hours",
        tags: [{ type: "free", label: "Free — book online" }],
        description:
          "Free entry, famous for its blue whale skeleton suspended in the main hall and its dinosaur galleries, all inside a striking Romanesque-style building that's a landmark in itself.",
        transitAfter: "Tube — Piccadilly Line to Green Park, then Victoria Line to Oxford Circus",
      },
      {
        time: "11:30",
        name: "Oxford Street",
        duration: "1 hour",
        tags: [{ type: "crowd", label: "🔴 Very busy" }],
        description:
          "London's best-known shopping street, over 300 shops strong — the place for flagship stores and department shops, if shopping is on the agenda.",
        transitAfter: "Short walk",
      },
      {
        time: "12:30",
        name: "The Photographers' Gallery",
        duration: "45 min",
        tags: [{ type: "free", label: "Free (donation welcome)" }],
        description:
          "A gallery dedicated entirely to contemporary photography, tucked just off Oxford Street — a quieter, more curated stop between the shopping streets.",
        transitAfter: "Short walk to Regent Street",
      },
      {
        time: "13:15",
        name: "Regent Street",
        duration: "45 min",
        tags: [{ type: "free", label: "Free · stroll" }],
        description:
          "Designed by John Nash in the 1820s, one of London's most elegant shopping streets, with its trademark curve and grand façades running down towards Piccadilly Circus.",
        transitAfter: "Short walk to Piccadilly Circus",
      },
      {
        time: "14:00",
        name: "Piccadilly Circus",
        duration: "30 min",
        tags: [{ type: "free", label: "Free" }],
        description:
          "Famous for its illuminated advertising screens and the statue commonly known as Eros, at the meeting point of several of the West End's busiest streets.",
        transitAfter: "Short walk to Leicester Square",
      },
      {
        time: "14:30",
        name: "Leicester Square",
        duration: "45 min",
        tags: [{ type: "crowd", label: "🔴 Busy" }],
        description:
          "The heart of London's entertainment district, ringed by cinemas and theatres — a good gauge of the West End's evening buzz even in the middle of the afternoon.",
        transitAfter: "Tube — Piccadilly Line to Green Park, then Jubilee Line to London Bridge",
      },
      {
        time: "15:15",
        name: "Tower of London",
        duration: "2 hours",
        tags: [{ type: "book", label: "📅 Book online" }],
        description:
          "Founded in 1066 by William the Conqueror, the Tower has served over the centuries as royal palace, prison and even a zoo. Today it holds the Crown Jewels of the British monarchy, guarded by the Yeoman Warders — the Beefeaters.",
        longText:
          "<p>The White Tower at the centre of the complex is the oldest surviving part, begun under William the Conqueror to secure his hold on London after 1066. Over the following centuries the Tower expanded into the fortress seen today, and its uses ranged wildly: royal residence, armoury, treasury, mint, menagerie (home to lions, an elephant and a polar bear at various points), and — most famously — prison and site of execution for high-profile figures including two of Henry VIII's wives. The <strong>Crown Jewels</strong>, on display in the Jewel House, include the Imperial State Crown and the Cullinan I diamond, the largest clear-cut diamond in the world. The <strong>Yeoman Warders</strong>, in their distinctive Tudor-style uniforms, have guarded the Tower since at least the 15th century and still live within its walls today.</p>",
        transitAfter: "Short walk to Tower Bridge",
      },
      {
        time: "17:15",
        name: "Tower Bridge",
        duration: "45 min",
        tags: [{ type: "book", label: "📅 Glass walkway ticketed" }],
        description:
          "The Victorian bascule bridge that's become one of London's defining images. Cross on foot, and if time allows, the elevated glass walkways inside the towers offer a striking view straight down onto the road and the river below.",
        transitAfter: "Short walk to London Bridge",
      },
      {
        time: "18:00",
        name: "London Bridge & Leadenhall Market",
        duration: "1 hour 30 min",
        tags: [{ type: "free", label: "Free" }],
        description:
          "A stroll across London Bridge before dinner in the ornate Victorian arcades of Leadenhall Market — its iron-and-glass roof also served as a filming location for Diagon Alley in the first Harry Potter film.",
        blocks: [
          {
            type: "food",
            text: "Leadenhall Market has both quick street food stalls and a handful of historic pubs and restaurants tucked under the arcades — good for a sit-down dinner before The Shard.",
          },
        ],
        transitAfter: "Short walk to The Shard",
      },
      {
        time: "19:30",
        name: "The Shard",
        duration: "1 hour",
        tags: [{ type: "book", label: "📅 Book online" }],
        description:
          "Designed by architect Renzo Piano, at 310 metres it's the tallest building in the United Kingdom. The viewing platform at 310 metres gives a night-time panorama over the whole city, arguably the best view in London after dark.",
      },
    ],
  },

  // ══════════════════════════════════════════════════════════
  // DAY 4 — TUE 25 AUGUST — HARRODS, HYDE PARK & DEPARTURE
  // ══════════════════════════════════════════════════════════
  {
    number: 4,
    label: "Day 4 — Harrods & Notting Hill",
    mobileLabel: "Day 4",
    title: "West London and\na last afternoon before flying home",
    subtitle:
      "A lighter final day around Knightsbridge and West London — Harrods, a walk through Hyde Park, Kensington Palace and the colourful streets of Notting Hill — before heading back to Stansted for the evening flight.",
    pills: [
      "🛍 Harrods",
      "🌳 Hyde Park",
      "🏰 Kensington Palace",
      "🎨 Notting Hill",
    ],
    stops: [
      {
        time: "10:00",
        name: "Harrods",
        duration: "1 hour 30 min",
        tags: [{ type: "free", label: "Free to browse" }],
        description:
          "One of the most famous department stores in the world, over 300 departments across 20,000 m² — worth a wander even without buying anything, especially the food halls.",
        transitAfter: "Walk through Hyde Park",
      },
      {
        time: "11:30",
        name: "Hyde Park",
        duration: "1 hour",
        tags: [{ type: "free", label: "Free" }],
        description:
          "One of London's largest royal parks, created by Henry VIII in 1536 after he seized the land from Westminster Abbey for hunting grounds. A calm green walk on the way towards Kensington Palace.",
        transitAfter: "Short walk to Kensington Palace",
      },
      {
        time: "13:00",
        name: "Kensington Palace",
        duration: "1 hour 30 min",
        tags: [{ type: "book", label: "📅 Ticketed" }],
        description:
          "A working royal residence and former home of Diana, Princess of Wales, with state apartments open to visitors and a strong connection to the modern royal family, including the current Prince and Princess of Wales.",
        transitAfter: "Tube — Central Line from Notting Hill Gate",
      },
      {
        time: "14:30",
        name: "Notting Hill",
        duration: "2 hours 30 min",
        tags: [{ type: "free", label: "Free · stroll" }],
        description:
          "A colourful, pastel-painted neighbourhood famous for the Portobello Road Market and for the 1999 Julia Roberts / Hugh Grant film of the same name — a relaxed way to spend the last free hours of the trip before heading back for the flight.",
        blocks: [
          {
            type: "photo",
            text: "The pastel townhouses on and around Portobello Road are the classic photo stop — quieter side streets away from the market itself tend to be more photogenic than the market's busiest stretch.",
          },
        ],
      },
    ],
    bonus: {
      title: "✈️ Heading home — 25 August",
      text: "Hotel checkout is 10:00 — ask reception if bags can be left after checkout so you're not carrying luggage around Notting Hill. Route back: Tube from Notting Hill Gate to Victoria (via Oxford Circus), collect bags, then Tube to Liverpool Street and the Stansted Express (~47 min) to the airport. Ryanair FR3674 departs Stansted at 19:25, landing in Milan Bergamo at 22:20 — allow a solid buffer for the transfer and airport security given the evening departure.",
    },
  },
];

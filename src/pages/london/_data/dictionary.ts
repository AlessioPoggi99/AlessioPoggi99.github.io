// ─────────────────────────────────────────────────────────────
// UK SLANG & LOCAL LINGO
// (reuses the same DictSection/DictEntry shape as the phrasebook template:
//  "it" = the British term, "es" = what it means, "cat" = example/context, "note" = extra note)
// ─────────────────────────────────────────────────────────────

export interface DictEntry {
  it: string;
  es: string;
  cat?: string;
  note?: string;
}

export interface DictSection {
  id: string;
  title: string;
  emoji: string;
  entries: DictEntry[];
}

export const dictionary: DictSection[] = [
  // ── EVERYDAY BRITISHISMS ──────────────────────────────────
  {
    id: "everyday",
    title: "Everyday Britishisms",
    emoji: "🇬🇧",
    entries: [
      { it: "Cheers", es: "Thanks / bye", cat: "\"Cheers, mate!\"", note: "Also said when clinking glasses" },
      { it: "Ta", es: "Thanks", cat: "\"Ta very much\"", note: "Very informal, common in London" },
      { it: "Queue", es: "Line (as in, waiting in one)", cat: "\"Join the queue\"", note: "Queuing properly is taken seriously" },
      { it: "Loo", es: "Toilet / bathroom", cat: "\"Where's the loo?\"" },
      { it: "Brolly", es: "Umbrella", cat: "\"Bring your brolly\"", note: "Worth knowing given the weather" },
      { it: "Knackered", es: "Exhausted", cat: "\"I'm knackered after that museum\"" },
      { it: "Quid", es: "Pound(s) sterling", cat: "\"That's ten quid\"", note: "Invariable plural — never 'quids'" },
      { it: "Fiver / tenner", es: "£5 note / £10 note", cat: "\"Have you got a fiver?\"" },
      { it: "Sorted", es: "Done / handled", cat: "\"Tickets? Sorted.\"" },
      { it: "Lovely", es: "Great, nice", cat: "\"That was lovely, thanks\"", note: "Used constantly, for almost anything" },
      { it: "Cheeky", es: "Playfully bold, a little indulgent", cat: "\"A cheeky pint before dinner\"" },
      { it: "Fancy…?", es: "Do you feel like…?", cat: "\"Fancy a cuppa?\"" },
      { it: "Cuppa", es: "A cup of tea", cat: "\"Time for a cuppa\"" },
    ],
  },

  // ── GETTING AROUND ────────────────────────────────────────
  {
    id: "transport",
    title: "Getting around lingo",
    emoji: "🚇",
    entries: [
      { it: "The Tube", es: "The London Underground", cat: "\"Take the Tube to Victoria\"" },
      { it: "Mind the gap", es: "Watch the gap between train and platform", cat: "Heard on every Tube platform" },
      { it: "Oyster (card)", es: "Prepaid transport card", cat: "\"Top up your Oyster\"", note: "Contactless cards work just as well now" },
      { it: "Zone 1", es: "Central London fare zone", cat: "Covers almost everything in this itinerary" },
      { it: "The Underground / the Tube", es: "Same thing", cat: "Locals almost always say 'the Tube'" },
      { it: "Platform", es: "The train platform", cat: "\"Which platform for Liverpool Street?\"" },
      { it: "Rush hour", es: "Peak commuting time", cat: "Best avoided on the Tube if possible" },
      { it: "Black cab", es: "London's traditional licensed taxi", cat: "As opposed to a minicab or Uber" },
    ],
  },

  // ── AT THE PUB / RESTAURANT ─────────────────────────────────
  {
    id: "pub",
    title: "At the pub",
    emoji: "🍺",
    entries: [
      { it: "A pint of…", es: "Standard way to order a beer", cat: "\"A pint of lager, please\"" },
      { it: "Round", es: "A set of drinks bought for the group", cat: "\"Whose round is it?\"", note: "Buying rounds is a real social norm" },
      { it: "Bar snacks", es: "Crisps, nuts, pork scratchings etc.", cat: "Typical pub nibbles" },
      { it: "Last orders", es: "Final call before the bar closes", cat: "Usually announced with a bell" },
      { it: "Bill / check", es: "The bill", cat: "\"Could we get the bill, please?\"" },
      { it: "Service charge", es: "Optional tip, sometimes added automatically", cat: "Check the bill before tipping again" },
    ],
  },

  // ── FOOTBALL LINGO ───────────────────────────────────────
  {
    id: "football",
    title: "Football fan lingo",
    emoji: "⚽",
    entries: [
      { it: "The Hammers", es: "West Ham United's nickname", cat: "From the club's ironworking roots in East London" },
      { it: "The ref", es: "The referee", cat: "\"The ref got it wrong!\"" },
      { it: "Full-time", es: "The end of the match", cat: "As opposed to 'half-time'" },
      { it: "Nil", es: "Zero, in a score", cat: "\"Two-nil\" = 2-0" },
      { it: "Away end", es: "The section for visiting fans", cat: "Usually the loudest corner of the ground" },
      { it: "Terrace / stand", es: "A section of the stadium seating", cat: "\"We're in the East Stand\"" },
      { it: "Match day", es: "The day of a game", cat: "Also used as an adjective: \"matchday atmosphere\"" },
      { it: "Kick off", es: "The start of the match", cat: "\"Kick off is at 3\"" },
    ],
  },
];

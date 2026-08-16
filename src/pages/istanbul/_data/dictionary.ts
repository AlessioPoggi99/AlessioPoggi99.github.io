// ─────────────────────────────────────────────────────────────
// DICTIONARY — English → Turkish
// (field "es" = word/phrase in Turkish, field "cat" = indicative pronunciation)
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
  // ── GREETINGS AND INTRODUCTIONS ──────────────────────────────────
  {
    id: "greetings",
    title: "Greetings and introductions",
    emoji: "👋",
    entries: [
      { it: "Hello (informal)", es: "Merhaba", cat: "mer-ha-BA", note: "Universal — use it anytime" },
      { it: "Good morning", es: "Günaydın", cat: "gün-ay-DIN", note: "Morning only" },
      { it: "Good evening", es: "İyi akşamlar", cat: "i-yi ak-sham-LAR" },
      { it: "Good night", es: "İyi geceler", cat: "i-yi ge-je-LER" },
      { it: "Goodbye", es: "Hoşça kalın", cat: "hosh-cha ka-LIN", note: "Said by the one leaving" },
      { it: "See you soon", es: "Görüşürüz", cat: "gö-rü-shü-RÜZ" },
      { it: "How are you?", es: "Nasılsın?", cat: "na-sıl-SIN" },
      { it: "Fine, thanks", es: "İyiyim, teşekkürler", cat: "i-yi-yim te-shek-kür-LER" },
      { it: "Nice to meet you", es: "Memnun oldum", cat: "mem-nun ol-DUM" },
      { it: "What's your name?", es: "Adın ne?", cat: "a-dın NE" },
      { it: "My name is…", es: "Benim adım…", cat: "be-nim a-DIM" },
      { it: "I'm Italian", es: "İtalyanım", cat: "i-tal-ya-NIM" },
    ],
  },

  // ── COURTESY AND BASICS ─────────────────────────────────────
  {
    id: "courtesy",
    title: "Courtesy and basic phrases",
    emoji: "🙏",
    entries: [
      { it: "Please", es: "Lütfen", cat: "lüt-FEN" },
      { it: "Thank you", es: "Teşekkür ederim", cat: "te-shek-kür e-de-RIM", note: "Or informal: Sağ ol" },
      { it: "Thank you very much", es: "Çok teşekkürler", cat: "chok te-shek-kür-LER" },
      { it: "You're welcome", es: "Rica ederim", cat: "ri-ja e-de-RIM" },
      { it: "Excuse me / Sorry", es: "Affedersiniz", cat: "af-fe-der-si-NIZ", note: "Also used to get attention" },
      { it: "Yes", es: "Evet", cat: "e-VET" },
      { it: "No", es: "Hayır", cat: "ha-YIR" },
      { it: "I don't understand", es: "Anlamıyorum", cat: "an-la-mı-yo-RUM" },
      { it: "Do you speak English?", es: "İngilizce biliyor musunuz?", cat: "in-gi-liz-je bi-li-yor mu-su-NUZ" },
      { it: "I don't speak Turkish", es: "Türkçe bilmiyorum", cat: "türk-che bil-mi-yo-RUM" },
      { it: "Okay", es: "Tamam", cat: "ta-MAM" },
    ],
  },

  // ── AT RESTAURANTS & BAZAARS ────────────────────────────────────
  {
    id: "restaurant",
    title: "At restaurants and bazaars",
    emoji: "🍽",
    entries: [
      { it: "The bill, please", es: "Hesap lütfen", cat: "he-sap lüt-FEN" },
      { it: "It's delicious", es: "Çok lezzetli", cat: "chok lez-zet-LI" },
      { it: "Water", es: "Su", cat: "SU" },
      { it: "Tea", es: "Çay", cat: "CHAY" },
      { it: "Turkish coffee", es: "Türk kahvesi", cat: "türk kah-ve-SI" },
      { it: "I'd like…", es: "…istiyorum", cat: "is-ti-yo-RUM" },
      { it: "Without meat", es: "Etsiz", cat: "et-SIZ" },
      { it: "How much is it?", es: "Ne kadar?", cat: "ne ka-DAR" },
      { it: "That's too expensive", es: "Çok pahalı", cat: "chok pa-ha-LI", note: "Handy for bargaining" },
      { it: "Best price?", es: "Son fiyat?", cat: "son fi-YAT", note: "Classic bazaar phrase" },
      { it: "Enjoy your meal", es: "Afiyet olsun", cat: "a-fi-yet ol-SUN", note: "Also said by the waiter" },
    ],
  },

  // ── GETTING AROUND ──────────────────────────────────────────
  {
    id: "getting-around",
    title: "Transport and directions",
    emoji: "🧭",
    entries: [
      { it: "Where is…?", es: "…nerede?", cat: "ne-re-DE" },
      { it: "Ferry", es: "Vapur / Feribot", cat: "va-PUR" },
      { it: "Ferry pier", es: "İskele", cat: "is-ke-LE" },
      { it: "Stop", es: "Durak", cat: "du-RAK" },
      { it: "Right", es: "Sağa", cat: "sa-A" },
      { it: "Left", es: "Sola", cat: "so-LA" },
      { it: "Straight ahead", es: "Düz", cat: "DÜZ" },
      { it: "Near", es: "Yakın", cat: "ya-KIN" },
      { it: "Far", es: "Uzak", cat: "u-ZAK" },
      { it: "Airport", es: "Havalimanı", cat: "ha-va-li-ma-NI" },
      { it: "Taxi", es: "Taksi", cat: "tak-SI" },
    ],
  },

  // ── EMERGENCIES AND NUMBERS ───────────────────────────────────
  {
    id: "emergencies",
    title: "Emergencies and numbers",
    emoji: "🚨",
    entries: [
      { it: "Help!", es: "İmdat!", cat: "im-DAT" },
      { it: "Call a doctor", es: "Doktor çağırın", cat: "dok-tor cha-ğı-RIN" },
      { it: "Pharmacy", es: "Eczane", cat: "ej-za-NE" },
      { it: "Hospital", es: "Hastane", cat: "has-ta-NE" },
      { it: "Police", es: "Polis", cat: "po-LIS" },
      { it: "One", es: "Bir", cat: "BIR" },
      { it: "Two", es: "İki", cat: "i-KI" },
      { it: "Three", es: "Üç", cat: "ÜCH" },
      { it: "Ten", es: "On", cat: "ON" },
      { it: "One hundred", es: "Yüz", cat: "YÜZ" },
    ],
  },
];

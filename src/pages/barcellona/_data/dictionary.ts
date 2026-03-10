// ─────────────────────────────────────────────────────────────
// DIZIONARIO — Italiano → Spagnolo / Catalano
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
  // ── SALUTI E PRESENTAZIONI ──────────────────────────────────
  {
    id: "saluti",
    title: "Saluti e presentazioni",
    emoji: "👋",
    entries: [
      {
        it: "Buongiorno",
        es: "Buenos días",
        cat: "Bon dia",
        note: "Fino alle 12-13",
      },
      {
        it: "Buon pomeriggio",
        es: "Buenas tardes",
        cat: "Bona tarda",
        note: "Dalle 13 al tramonto",
      },
      { it: "Buonasera / Buonanotte", es: "Buenas noches", cat: "Bona nit" },
      {
        it: "Ciao (informale)",
        es: "Hola",
        cat: "Hola",
        note: "Universale — usatelo sempre",
      },
      { it: "Arrivederci", es: "Adiós", cat: "Adéu" },
      {
        it: "A presto / Ci vediamo",
        es: "Hasta luego",
        cat: "Fins aviat",
        note: "Informale, molto usato",
      },
      { it: "Come stai?", es: "¿Cómo estás?", cat: "Com estàs?" },
      { it: "Bene, grazie", es: "Bien, gracias", cat: "Bé, gràcies" },
      { it: "Mi chiamo…", es: "Me llamo…", cat: "Em dic…" },
      { it: "Piacere", es: "Mucho gusto", cat: "Molt de gust" },
      {
        it: "Per favore",
        es: "Por favor",
        cat: "Si us plau",
        note: '"Si us plau" si sente ovunque a Barcellona',
      },
      { it: "Grazie", es: "Gracias", cat: "Gràcies" },
      { it: "Grazie mille", es: "Muchas gracias", cat: "Moltes gràcies" },
      { it: "Prego", es: "De nada", cat: "De res" },
      {
        it: "Scusa (informale)",
        es: "Perdona",
        cat: "Perdona",
        note: "Per attirare l'attenzione",
      },
      { it: "Mi scusi (formale)", es: "Perdone", cat: "Perdoni" },
      { it: "Mi dispiace", es: "Lo siento", cat: "Ho sento" },
    ],
  },

  // ── AL BAR E AL RISTORANTE ──────────────────────────────────
  {
    id: "bar",
    title: "Al bar e al ristorante",
    emoji: "🍽",
    entries: [
      { it: "Un caffè (espresso)", es: "Un café solo", cat: "Un cafè sol" },
      {
        it: "Caffè con latte",
        es: "Café con leche",
        cat: "Cafè amb llet",
        note: "Tazza grande — colazione",
      },
      {
        it: "Caffè macchiato",
        es: "Café cortado",
        cat: "Tallat",
        note: '"Tallat" è il termine catalano',
      },
      {
        it: "Una birra piccola (spina)",
        es: "Una caña",
        cat: "Una canya",
        note: "Il formato standard al bar",
      },
      { it: "Una birra", es: "Una cerveza", cat: "Una cervesa" },
      { it: "Acqua naturale", es: "Agua sin gas", cat: "Aigua sense gas" },
      { it: "Acqua frizzante", es: "Agua con gas", cat: "Aigua amb gas" },
      {
        it: "Un bicchiere di vino",
        es: "Una copa de vino",
        cat: "Una copa de vi",
      },
      {
        it: "Vino rosso",
        es: "Vino tinto",
        cat: "Vi negre",
        note: 'Attenzione: "tinto" non "rosso"',
      },
      { it: "Vino bianco", es: "Vino blanco", cat: "Vi blanc" },
      {
        it: "Il menú del giorno",
        es: "El menú del día",
        cat: "El menú del dia",
        note: "Primo + secondo + dessert + vino, 12-15€",
      },
      {
        it: "Il conto, per favore",
        es: "La cuenta, por favor",
        cat: "El compte, si us plau",
        note: "La frase più importante",
      },
      {
        it: "È incluso il servizio?",
        es: "¿Está incluido el servicio?",
        cat: "Està inclòs el servei?",
      },
      {
        it: "Sono allergico a…",
        es: "Soy alérgico a…",
        cat: "Sóc al·lèrgic a…",
      },
      { it: "Senza glutine", es: "Sin gluten", cat: "Sense gluten" },
      { it: "È piccante?", es: "¿Es picante?", cat: "És picant?" },
      { it: "Buonissimo!", es: "¡Está buenísimo!", cat: "Està boníssim!" },
      { it: "Un altro giro", es: "Otra ronda", cat: "Una altra ronda" },
      {
        it: "Pagare con carta",
        es: "Pagar con tarjeta",
        cat: "Pagar amb targeta",
      },
      {
        it: "Ho una prenotazione",
        es: "Tengo una reserva",
        cat: "Tinc una reserva",
      },
    ],
  },

  // ── ORIENTARSI IN CITTÀ ────────────────────────────────────
  {
    id: "orientamento",
    title: "Orientarsi in città",
    emoji: "🗺",
    entries: [
      { it: "Dov'è…?", es: "¿Dónde está…?", cat: "On és…?" },
      { it: "Come arrivo a…?", es: "¿Cómo llego a…?", cat: "Com arribo a…?" },
      { it: "Dritto", es: "Todo recto", cat: "Tot recte" },
      { it: "A destra", es: "A la derecha", cat: "A la dreta" },
      { it: "A sinistra", es: "A la izquierda", cat: "A l'esquerra" },
      { it: "Vicino / Lontano", es: "Cerca / Lejos", cat: "A prop / Lluny" },
      {
        it: "Dietro l'angolo",
        es: "A la vuelta de la esquina",
        cat: "A la cantonada",
      },
      { it: "Di fronte a", es: "Enfrente de", cat: "Davant de" },
      {
        it: "Quanto ci vuole a piedi?",
        es: "¿Cuánto se tarda a pie?",
        cat: "Quant es triga a peu?",
      },
      {
        it: "La fermata della metro",
        es: "La parada de metro",
        cat: "La parada de metro",
      },
      { it: "Il biglietto", es: "El billete", cat: "El bitllet" },
      {
        it: "A che ora parte?",
        es: "¿A qué hora sale?",
        cat: "A quina hora surt?",
      },
      {
        it: "A che ora chiude?",
        es: "¿A qué hora cierra?",
        cat: "A quina hora tanca?",
      },
      { it: "È aperto?", es: "¿Está abierto?", cat: "Està obert?" },
      {
        it: "L'ingresso / L'uscita",
        es: "La entrada / La salida",
        cat: "L'entrada / La sortida",
      },
      {
        it: "Il bagno",
        es: "El baño / Los servicios",
        cat: "El lavabo",
        note: '"Servicios" nei locali pubblici',
      },
    ],
  },

  // ── FARE ACQUISTI ──────────────────────────────────────────
  {
    id: "acquisti",
    title: "Fare acquisti",
    emoji: "🛍",
    entries: [
      { it: "Quanto costa?", es: "¿Cuánto cuesta?", cat: "Quant costa?" },
      { it: "È troppo caro", es: "Es demasiado caro", cat: "És massa car" },
      { it: "Lo prendo", es: "Me lo llevo", cat: "Me l'emporto" },
      {
        it: "Solo un'occhiata, grazie",
        es: "Solo estoy mirando, gracias",
        cat: "Només estic mirant, gràcies",
      },
      {
        it: "Ce l'avete in un'altra taglia?",
        es: "¿Lo tienen en otra talla?",
        cat: "El teniu en una altra talla?",
      },
      {
        it: "Posso provarlo?",
        es: "¿Me lo puedo probar?",
        cat: "Me'l puc provar?",
      },
      {
        it: "Accettate carte?",
        es: "¿Aceptan tarjeta?",
        cat: "Accepteu targeta?",
      },
      { it: "Scontrino", es: "Ticket / Recibo", cat: "Tiquet / Rebut" },
    ],
  },

  // ── EMERGENZE ─────────────────────────────────────────────
  {
    id: "emergenze",
    title: "Emergenze e situazioni difficili",
    emoji: "🚨",
    entries: [
      {
        it: "Numero di emergenza",
        es: "112",
        cat: "112",
        note: "Polizia, ambulanza, pompieri",
      },
      { it: "Aiuto!", es: "¡Socorro!", cat: "Ajuda!", note: "Urlate forte" },
      {
        it: "Chiamate la polizia!",
        es: "¡Llamen a la policía!",
        cat: "Truqueu a la policia!",
      },
      {
        it: "Chiamate un'ambulanza!",
        es: "¡Llamen a una ambulancia!",
        cat: "Truqueu a una ambulància!",
      },
      {
        it: "Mi hanno rubato il portafoglio",
        es: "Me han robado la cartera",
        cat: "M'han robat la cartera",
      },
      { it: "Mi sono perso", es: "Me he perdido", cat: "M'he perdut" },
      {
        it: "Ho bisogno di un medico",
        es: "Necesito un médico",
        cat: "Necessito un metge",
      },
      {
        it: "Dov'è la farmacia?",
        es: "¿Dónde está la farmacia?",
        cat: "On és la farmàcia?",
        note: "Croce verde = aperta",
      },
      {
        it: "Ho perso il passaporto",
        es: "He perdido el pasaporte",
        cat: "He perdut el passaport",
      },
      { it: "Non capisco", es: "No entiendo", cat: "No entenc" },
      {
        it: "Parla italiano / inglese?",
        es: "¿Habla italiano / inglés?",
        cat: "Parla italià / anglès?",
      },
      {
        it: "Più lentamente, per favore",
        es: "Más despacio, por favor",
        cat: "Més a poc a poc, si us plau",
      },
    ],
  },

  // ── NUMERI E TEMPO ────────────────────────────────────────
  {
    id: "numeri",
    title: "Numeri e tempo",
    emoji: "🔢",
    entries: [
      { it: "Uno / Due / Tre", es: "Uno / Dos / Tres", cat: "Un / Dos / Tres" },
      {
        it: "Quattro / Cinque / Sei",
        es: "Cuatro / Cinco / Seis",
        cat: "Quatre / Cinc / Sis",
      },
      {
        it: "Sette / Otto / Nove / Dieci",
        es: "Siete / Ocho / Nueve / Diez",
        cat: "Set / Vuit / Nou / Deu",
      },
      {
        it: "Venti / Trenta / Cento",
        es: "Veinte / Treinta / Cien",
        cat: "Vint / Trenta / Cent",
      },
      { it: "Mille", es: "Mil", cat: "Mil" },
      {
        it: "Oggi / Domani / Ieri",
        es: "Hoy / Mañana / Ayer",
        cat: "Avui / Demà / Ahir",
      },
      {
        it: "Adesso / Subito",
        es: "Ahora / Enseguida",
        cat: "Ara / De seguida",
      },
      { it: "Presto / Tardi", es: "Pronto / Tarde", cat: "Aviat / Tard" },
      {
        it: "Mattina / Pomeriggio / Sera",
        es: "Mañana / Tarde / Noche",
        cat: "Matí / Tarda / Nit",
      },
      { it: "Che ore sono?", es: "¿Qué hora es?", cat: "Quina hora és?" },
      {
        it: "A mezzogiorno / mezzanotte",
        es: "Al mediodía / A medianoche",
        cat: "Al migdia / A mitjanit",
      },
    ],
  },

  // ── LEGGERE LA CITTÀ ──────────────────────────────────────
  {
    id: "strada",
    title: "Leggere la città — parole da strada",
    emoji: "🏙",
    entries: [
      {
        it: "Via / Strada",
        es: "Calle",
        cat: "Carrer",
        note: 'Abbreviato "C/" sulle mappe',
      },
      {
        it: "Viale",
        es: "Paseo / Avenida",
        cat: "Passeig / Avinguda",
        note: '"Pg." e "Av." sulle mappe',
      },
      {
        it: "Piazza",
        es: "Plaza",
        cat: "Plaça",
        note: 'Abbreviato "Pl." o "Pça."',
      },
      {
        it: "Vicolo / Passaggio",
        es: "Callejón / Pasaje",
        cat: "Carreró / Passatge",
      },
      { it: "Quartiere", es: "Barrio", cat: "Barri" },
      {
        it: "Rambla",
        es: "Rambla",
        cat: "Rambla",
        note: "Viale alberato con passeggiata centrale",
      },
      { it: "Aperto / Chiuso", es: "Abierto / Cerrado", cat: "Obert / Tancat" },
      {
        it: "Spingere / Tirare",
        es: "Empujar / Tirar",
        cat: "Empènyer / Estirar",
        note: "Sulle porte",
      },
      { it: "Vietato", es: "Prohibido", cat: "Prohibit" },
      { it: "Attenzione!", es: "¡Atención!", cat: "Atenció!" },
      {
        it: "Uscita di emergenza",
        es: "Salida de emergencia",
        cat: "Sortida d'emergència",
      },
    ],
  },

  // ── MENU E CIBO ───────────────────────────────────────────
  {
    id: "cibo",
    title: "Cibo — leggere il menù",
    emoji: "🥘",
    entries: [
      {
        it: "Pane con pomodoro",
        es: "Pan con tomate",
        cat: "Pa amb tomàquet",
        note: "Il cibo identitario catalano",
      },
      {
        it: "Prosciutto crudo",
        es: "Jamón ibérico / serrano",
        cat: "Pernil",
        note: "Ibérico = ghianda, serrano = montagna",
      },
      {
        it: "Uova / Pesce / Carne",
        es: "Huevos / Pescado / Carne",
        cat: "Ous / Peix / Carn",
      },
      {
        it: "Pollo / Maiale / Agnello",
        es: "Pollo / Cerdo / Cordero",
        cat: "Pollastre / Porc / Xai",
      },
      {
        it: "Riso",
        es: "Arroz",
        cat: "Arròs",
        note: "Base di paella e molti piatti catalani",
      },
      { it: "Patate", es: "Patatas", cat: "Patates" },
      { it: "Verdure", es: "Verduras", cat: "Verdures" },
      {
        it: "Tapas / Pintxos",
        es: "Tapas / Pintxos",
        cat: "Tapes / Pintxos",
        note: "Pintxos = versione basca su pane",
      },
      {
        it: "Crocchette",
        es: "Croquetas",
        cat: "Croquetes",
        note: "Di solito di jamón o bacalà",
      },
      {
        it: "Baccalà",
        es: "Bacalao",
        cat: "Bacallà",
        note: "Ingrediente fondamentale catalano",
      },
      {
        it: "Salsa all'aglio",
        es: "Alioli",
        cat: "Allioli",
        note: "Accompagna praticamente tutto",
      },
      {
        it: "Crema catalana",
        es: "Crema catalana",
        cat: "Crema catalana",
        note: "L'originale — non la crème brûlée",
      },
      { it: "Dolce / Dessert", es: "Postre", cat: "Postres" },
    ],
  },

  // ── VITA NOTTURNA ─────────────────────────────────────────
  {
    id: "notte",
    title: "Vita notturna",
    emoji: "🌙",
    entries: [
      {
        it: "Un drink / cocktail",
        es: "Una copa",
        cat: "Una copa",
        note: "Generico per qualsiasi bicchiere",
      },
      { it: "Salute!", es: "¡Salud!", cat: "Salut!" },
      {
        it: "Cosa mi consiglia?",
        es: "¿Qué me recomienda?",
        cat: "Què em recomana?",
      },
      {
        it: "C'è musica dal vivo?",
        es: "¿Hay música en directo?",
        cat: "Hi ha música en directe?",
      },
      {
        it: "Quanto si paga l'entrata?",
        es: "¿Cuánto vale la entrada?",
        cat: "Quant val l'entrada?",
      },
      {
        it: "È incluso un drink?",
        es: "¿Está incluida una copa?",
        cat: "Està inclosa una copa?",
      },
      { it: "La fila / coda", es: "La cola", cat: "La cua" },
      {
        it: "Dov'è il guardaroba?",
        es: "¿Dónde está el guardarropa?",
        cat: "On és el guarda-roba?",
      },
      {
        it: "A che ora chiude?",
        es: "¿A qué hora cierra?",
        cat: "A quina hora tanca?",
      },
      { it: "Chiamami un taxi", es: "Pídeme un taxi", cat: "Demana'm un taxi" },
    ],
  },
];

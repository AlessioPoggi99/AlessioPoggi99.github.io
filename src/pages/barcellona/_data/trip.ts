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
  label: "Piano di viaggio",
  title: "Barcellona",
  titleEm: "4 giorni",
  meta: [
    "🗓 4 giorni (03/04 - 07/04)",
    "👥 Ale, Lollo, Ila",
    "✈️ Voli: 21.10 BGY/BCN, 21:20 BCN/BGY",
    "🐣 Pasqua 2026",
  ],
};

export const days: Day[] = [
  // ══════════════════════════════════════════════════════════
  // GIORNO 1
  // ══════════════════════════════════════════════════════════
  {
    number: 1,
    label: "Giorno 1 — Rambla & Gotico",
    mobileLabel: "Giorno 1",
    title: "Dal mare al Born:\nla Barcellona più antica",
    subtitle:
      "Si scende da Sarrià lungo la Rambla, si attraversa il cuore medievale, si pranza nel Born e si finisce con il tramonto sul porto. Circa 13 km a piedi.",
    mapsUrl:
      "https://www.google.com/maps/d/edit?mid=1uXPBefc74KeVgMhGYJiY1jwGo4KUF8Q&usp=sharing",
    pills: [
      "🚶 Tutto a piedi",
      "🌳 La Rambla",
      "🌊 Port Vell al tramonto",
      "🍺 Serata nel Born",
    ],
    stops: [
      {
        time: "08:30",
        name: "Partenza — Carrer d'Aribau",
        duration: "30 min a piedi",
        description:
          "Si scende da Sarrià-Sant Gervasi verso il centro lungo Carrer d'Aribau fino a Plaça Universitat, poi verso la Rambla.",
        longText:
          "Il quartiere di Sarrià-Sant Gervasi è uno dei più residenziali e benestanti di Barcellona, arroccato sulle pendici del Collserola. Storicamente era un comune autonomo inglobato nella città solo nel 1921. Scendendo si attraversa l'Eixample, il grande quartiere ottocentesco progettato da Ildefons Cerdà nel 1860 con il suo reticolo di isolati ottagonali — uno dei piani urbanistici più influenti della storia europea. Ogni isolato misura 113 metri per lato con angoli smussati a 45° per facilitare la circolazione agli incroci. Cerdà immaginò ogni isolato con giardini interni: quasi nessuno fu realizzato secondo i piani, ma l'idea sopravvive nel disegno urbano.",
        transitAfter: "A piedi verso la Rambla — arrivo in Plaça Catalunya",
      },
      {
        time: "09:00",
        name: "Plaça Catalunya e inizio della Rambla",
        duration: "15 min",
        tags: [{ type: "free", label: "Gratis" }],
        description:
          "La piazza è il cuore geografico e simbolico di Barcellona — il punto dove si incontrano l'Eixample, il centro storico e la Rambla. Da qui inizia la discesa verso il mare lungo il viale più famoso della città.",
        longText:
          'Plaça Catalunya fu completata nella sua forma attuale nel 1929 in occasione dell\'Esposizione Universale. È una delle piazze più grandi d\'Europa con i suoi 50.000 m², ornata da fontane, statue e sculture di artisti catalani come Josep Llimona e Pau Gargallo. Durante la Guerra Civile la piazza fu teatro di combattimenti tra anarchici, comunisti e forze franchiste — George Orwell la descrive nel suo "Omaggio alla Catalogna" come il centro pulsante della rivoluzione barcellonese del 1936.\n\nLa Rambla — tecnicamente al plurale, composta da cinque tratti con nomi diversi — percorre 1,2 km dal bordo della Plaça Catalunya fino al monumento a Colombo sul porto. Il nome deriva dall\'arabo "raml" (sabbia) perché occupa il letto di un antico torrente stagionale. Nel XVIII e XIX secolo fu gradualmente pavimentato e trasformato nel luogo di passeggio borghese per eccellenza.',
        transitAfter: "A piedi verso il basso lungo la Rambla · 5 min",
      },
      {
        time: "09:15",
        name: "Mercat de la Boqueria",
        duration: "1 ora",
        tags: [{ type: "crowd", label: "🔴 Affollato dopo le 10" }],
        description:
          "Il mercato coperto più famoso di Barcellona, aperto sul fianco sinistro della Rambla. La mattina presto è il momento d'oro: banchi di frutta tagliata, succhi freschi, formaggi e charcuterie al massimo. Colazione qui, seduti su uno sgabello a un bancone.",
        longText:
          "Il Mercat de Sant Josep de la Boqueria — nome ufficiale — esiste in forma organizzata dal 1836, ma l'area era sede di un mercato all'aperto già dal XIII secolo, fuori dalle mura medievali. La struttura metallica che lo copre fu costruita tra il 1840 e il 1914, in stile neoclassico con influenze dell'architettura del ferro ottocentesca. Il nome \"Boqueria\" deriverebbe dall'antico termine catalano \"boques\" (capre), riferimento all'antico mercato del bestiame.\n\nOggi ospita oltre 300 bancarelle. Le prime file all'ingresso dalla Rambla sono quasi esclusivamente per turisti, con prezzi gonfiati. I barcellonesi fanno la spesa nelle file centrali e sul fondo. Il mercato è sotto pressione da anni: l'esplosione del turismo ha trasformato molti box in attrazioni fotografiche piuttosto che in veri esercizi commerciali, e il Comune ha avviato misure per limitare la turistificazione.",
        blocks: [
          {
            type: "tip",
            text: "Entra dall'ingresso laterale di Carrer de la Petxina. I banchi sul fondo sono frequentati dai locali e hanno prezzi onesti. Evita il pesce cotto all'ingresso.",
          },
          {
            type: "food",
            text: "<strong>Bar Pinotxo</strong> (bancone a destra appena entri): il bancone più famoso del mercato. Uova con botifarra, ceci con bacalà, succo di canna da zucchero. Arrivate alle 9 o troverete fila.",
          },
        ],
        transitAfter: "A piedi lungo la Rambla verso il basso · 10 min",
      },
      {
        time: "10:30",
        name: "Palau Güell",
        duration: "1 ora",
        tags: [{ type: "book", label: "📅 Prenota online" }],
        description:
          "Devia dalla Rambla in Carrer Nou de la Rambla. Il Palau Güell è il primo grande capolavoro di Gaudí (1886), commissionato dall'industriale Eusebi Güell. Le terrazze con i camini rivestiti di maioliche colorate sono tra le foto più sottovalutate di Barcellona.",
        longText:
          "Il Palau Güell (1886–1890) è l'opera che consacrò Gaudí. Eusebi Güell — imprenditore, mecenate e amico dell'architetto — commissionò una residenza privata nel cuore del Raval, quartiere allora malfamato. Il palazzo fu il primo edificio di Gaudí ad ottenere il riconoscimento UNESCO (1984).\n\nLa facciata presenta due archi parabolici in ferro battuto — elemento strutturale e decorativo insieme. L'interno è dominato dalla sala centrale a doppia altezza con cupola parabolica forata: la luce filtra dall'alto creando un effetto quasi soprannaturale. Il piano sotterraneo con le stalle — colonne a fungo, mattoni a vista — anticipa soluzioni che Gaudí svilupperà nel Parc Güell.\n\nLa terrazza è il segreto meglio custodito dell'edificio: venti camini rivestiti di frammenti ceramici colorati si innalzano come sculture astratte. È considerata la prima applicazione sistematica del \"trencadís\" — la tecnica del mosaico a frammenti che Gaudí renderà celebre.",
        blocks: [
          {
            type: "photo",
            text: "La terrazza dei camini con luce mattutina è quasi deserta rispetto a Parc Güell. Portate un grandangolo.",
          },
          {
            type: "tip",
            text: "Il biglietto include la terrazza: non saltatela. È la parte più spettacolare e richiede solo 15 minuti.",
          },
        ],
        transitAfter:
          "Torna sulla Rambla e scendi fino in fondo · 10 min a piedi",
      },
      {
        time: "11:45",
        name: "Monumento a Colombo — fine della Rambla",
        duration: "15 min",
        tags: [{ type: "free", label: "Gratis (esterno)" }],
        description:
          "La colonna di 60 metri con Colombo in cima segna il punto in cui la Rambla incontra il mare. È il confine visivo tra la città e il porto, tra la storia medievale e le ambizioni marittime di Barcellona.",
        longText:
          "Il Mirador de Colom fu costruito per l'Esposizione Universale del 1888. La colonna in ghisa alta 60 metri è sormontata da una statua di Colombo che indica — ironicamente — verso est, non verso le Americhe. C'è un ascensore interno che porta a una piattaforma panoramica a 40 metri.\n\nFu proprio a Barcellona che i Re Cattolici ricevettero Colombo al ritorno dal primo viaggio in America nel 1493. Il porto medievale — i Drassanes, i cantieri navali gotici ora sede del Museu Marítim — fu il punto di partenza delle grandi spedizioni mediterranee catalane nel XIV e XV secolo.",
        transitAfter:
          "Risali per Via de la Boqueria verso il Barrio Gótico · 10 min",
      },
      {
        time: "12:10",
        name: "Barrio Gótico",
        duration: "1 ora 15 min",
        tags: [{ type: "free", label: "Gratis" }],
        description:
          "Il labirinto medievale più intatto di Barcellona. Callette strette, cortili nascosti, frammenti romani, chiese gotiche e piazze inaspettate. Tappe: Plaça Reial, Pont del Bisbe, Plaça de Sant Felip Neri, la Cattedrale.",
        longText:
          "Il Barri Gòtic è il nucleo più antico di Barcellona, costruito sopra la colonia romana di Barcino (fondata nel I secolo a.C.). Le mura romane del II-IV secolo d.C. sono ancora visibili in più punti, specialmente lungo Plaça Nova.\n\n<strong>Plaça Reial</strong>: costruita nell'Ottocento al posto di un convento demolito. I lampioni ai lati della fontana centrale furono disegnati dal giovane Gaudí nel 1878 — tra le sue prime opere pubbliche.\n\n<strong>Pont del Bisbe</strong>: il ponte neogotico che collega il Palau de la Generalitat con la Casa dels Canonges fu costruito nel 1929, non nel Medioevo come sembra. Il teschio con il pugnale al centro è oggetto di una leggenda legata a un politico catalano che giurò di farlo crollare.\n\n<strong>Plaça de Sant Felip Neri</strong>: una delle piazze più suggestive del Gotico. I segni circolari sulle mura della chiesa non sono decorazioni: sono i crateri delle mitragliatrici franchiste del gennaio 1939, quando aerei italiani bombardarono la piazza colpendo un gruppo di bambini rifugiati.\n\n<strong>La Cattedrale</strong> (1298-1450, facciata neogotica del 1913): gotico catalano — navate più basse e larghe rispetto al gotico francese, senso di orizzontalità. Il chiostro ospita tredici oche bianche — una per ogni anno di vita di Santa Eulalia, patrona di Barcellona — mantenute vive dal XIII secolo.",
        blocks: [
          {
            type: "tip",
            text: "Entrate nella Cattedrale: la navata è visitabile gratuitamente la mattina. Il chiostro con le oche è accessibile separatamente. Evitate le ore 12-15 quando è sovraffollata.",
          },
          {
            type: "photo",
            text: "Il Pont del Bisbe inquadrato dall'alto di Carrer del Bisbe è uno dei classici. Meglio in controluce mattutino.",
          },
        ],
        transitAfter: "A piedi verso El Born · 5 min attraverso Via Laietana",
      },
      {
        time: "13:30",
        name: "Pranzo nel Born",
        duration: "1 ora",
        description:
          "El Born è il quartiere più vivace e gastronomicamente interessante del centro storico.",
        blocks: [
          {
            type: "food",
            text: '<strong>Bar del Pla</strong> (Carrer de la Montcada 2): tapas catalane di qualità, menú del giorno eccellente. <strong>El Xampanyet</strong> (stesso vicolo): cava della casa e cicchetti, atmosfera da osteria. <strong>La Cova Fumada</strong>: inventori della "bomba" fritta — solo pranzo, arrivate presto.',
          },
        ],
        transitAfter: "A piedi 3 min verso Carrer de la Montcada",
      },
      {
        time: "14:30",
        name: "Mercato di Santa Caterina — esterno",
        duration: "10 min",
        tags: [{ type: "free", label: "Gratis (esterno)" }],
        description:
          "Una rapida deviazione per vedere il tetto ondulato e coloratissimo del Mercato di Santa Caterina, progettato da Enric Miralles. Non vale l'ingresso dopo la Boqueria, ma l'esterno è architettonicamente notevole.",
        longText:
          "Il Mercat de Santa Caterina fu ricostruito tra il 1997 e il 2005 su progetto di Enric Miralles e Benedetta Tagliabue (EMBT). La demolizione del vecchio mercato ottocentesco rivelò i resti del convento domenicano di Santa Caterina (XIII secolo), ora visibili nell'area archeologica al piano inferiore. Il tetto ondulato rivestito di 325.000 esagoni ceramici — un mosaico che rappresenta frutta e verdura — è uno dei simboli dell'architettura contemporanea barcellonese. Miralles morì nel 2000, prima del completamento.",
        blocks: [
          {
            type: "tip",
            text: "Se avete 10 minuti in più, l'area archeologica nel seminterrato è interessante e spesso ignorata.",
          },
        ],
        transitAfter: "A piedi 3 min verso Carrer de la Montcada",
      },
      {
        time: "15:00",
        name: "Santa Maria del Mar",
        duration: "30 min",
        tags: [
          { type: "free", label: "Ingresso libero (contributo consigliato)" },
        ],
        description:
          "La basilica gotica più bella di Barcellona. Costruita dai marinai e dai lavoratori del Born tra il 1329 e il 1383 — 54 anni esatti. L'interno è una delle esperienze architettoniche più commoventi della città.",
        longText:
          'Santa Maria del Mar è il capolavoro del gotico catalano, progettata da Berenguer de Montagut. Il gotico catalano si distingue da quello francese per le navate di altezza simile (gotico "a sala"), colonne ottagonali sottilissime, spazio luminoso e essenziale. Il risultato è uno spazio quasi astratto — modernissimo nella sua pulizia.\n\nL\'intera comunità del quartiere de La Ribera partecipò materialmente ai lavori, trasportando a spalla le pietre dalla cava di Montjuïc. I "bastaixos" (portatori del porto) sono commemorati in due bassorilievi sulle porte.\n\nNel 1936, all\'inizio della Guerra Civile, la chiesa fu incendiata dagli anarchici. L\'incendio durò undici giorni, distruggendo tutto il contenuto ma lasciando intatta la struttura gotica. L\'interno spoglio che vediamo oggi è parzialmente il risultato di quella notte — e anche il motivo per cui la basilica sembra così contemporanea. Il romanzo "La Cattedrale del Mare" di Ildefonso Falcones — bestseller mondiale — si svolge interamente durante la costruzione di questa chiesa.',
        blocks: [
          {
            type: "photo",
            text: "L'interno alle 15-16 riceve la luce migliore dalle vetrate occidentali. La navata centrale ripresa dal portale è la foto classica.",
          },
          {
            type: "tip",
            text: "Entrate: ci vogliono 20 minuti e vale assolutamente.",
          },
        ],
        transitAfter: "A piedi 10 min verso nord · Passeig de Lluís Companys",
      },
      {
        time: "15:45",
        name: "Arc de Triomf",
        duration: "15 min",
        tags: [{ type: "free", label: "Gratis" }],
        description:
          "Il viale alberato con lampioni di ghisa che porta all'arco in mattoni rossi neo-mudéjar: uno degli scorci più fotografati di Barcellona. Fu la porta principale dell'Esposizione Universale del 1888.",
        longText:
          "L'Arc de Triomf fu progettato da Josep Vilaseca i Casanovas come ingresso principale all'Esposizione Universale del 1888. A differenza degli archi di trionfo militari, questo è un arco civile: il fregio principale recita \"Barcelona rep les nacions\" (Barcellona accoglie le nazioni).\n\nLo stile neo-mudéjar — mattoni rossi a vista, arcate a ferro di cavallo, rivestimenti ceramici — era una scelta deliberata per evocare la Spagna medievale cristiano-islamica. Il viale (Passeig de Lluís Companys) è fiancheggiato dai lampioni del 1888 originali.",
        blocks: [
          {
            type: "photo",
            text: "Il viale rettilineo con l'arco sullo sfondo è la foto classica — meglio con luce laterale. Da qui si vede anche l'ingresso al Parc de la Ciutadella.",
          },
        ],
        transitAfter: "A piedi 3 min attraverso il viale alberato",
      },
      {
        time: "16:05",
        name: "Parc de la Ciutadella",
        duration: "1 ora",
        tags: [{ type: "free", label: "Gratis" }],
        description:
          "Il parco più grande del centro di Barcellona — ex fortezza borbonica demolita nel 1869 e trasformata in polmone verde. Da vedere: la Cascada Monumental (con il giovane Gaudí tra i progettisti), il lago con le barche a remi, il Parlament de Catalunya.",
        longText:
          "La Ciutadella fu una fortezza militare costruita da Filippo V dopo la conquista di Barcellona nel 1714, come punizione per la resistenza catalana durante la Guerra di Successione. Per costruirla furono demolite 1.200 abitazioni, rendendo homeless 4.500 persone. Rimase simbolo dell'oppressione borbonica per quasi due secoli.\n\nNel 1869 il generale Prim — catalano — firmò il decreto di demolizione. I barcellonesi parteciparono simbolicamente con i picconi. L'area fu destinata a parco pubblico e poi sede dell'Esposizione Universale del 1888.\n\nLa <strong>Cascada Monumental</strong> fu progettata da Josep Fontserè, ma il giovane Antoni Gaudí — allora studente — collaborò alla progettazione della roccia artificiale e dei sistemi idraulici. È una delle primissime tracce della sua mano in un'opera pubblica, ispirata alla Fontana di Trevi romana.\n\nIl <strong>Parlament de Catalunya</strong> occupa l'antico arsenale della fortezza — l'unico edificio conservato. Sede del Parlament durante la Seconda Repubblica (1931-1939), poi caserma franchista, tornò alla funzione parlamentare nel 1980.",
        blocks: [
          {
            type: "photo",
            text: "La Cascada Monumental con la luce del pomeriggio — quasi sempre libera di fronte all'obiettivo. Il lago con i cigni è fotogenico.",
          },
          {
            type: "tip",
            text: "Barche a remi sul lago: ~6€ per 30 min. Perfetto per riposare i piedi.",
          },
        ],
        transitAfter:
          "A piedi 15 min verso il porto · scendi per Passeig de Pujades",
      },
      {
        time: "17:10",
        name: "Port Vell & Barceloneta",
        duration: "1 ora 15 min",
        tags: [{ type: "free", label: "Gratis" }],
        description:
          "Il porto vecchio con il Maremàgnum e il Colombo, poi la passeggiata lungo la Barceloneta verso la scultura del pesce di Frank Gehry. La decompressione finale: camminata lenta, prima birra sul lungomare, tramonto sul Mediterraneo.",
        longText:
          "Il Port Vell (\"porto vecchio\") fu radicalmente trasformato per le Olimpiadi del 1992. Prima era un porto commerciale e industriale, fisicamente separato dalla città da una barriera di binari. La trasformazione olimpica aprì il porto alla città, creando il Maremàgnum — centro commerciale sull'acqua connesso alla terraferma dal Rambla del Mar, ponte mobile pedonale.\n\nIl <strong>quartiere della Barceloneta</strong> fu costruito nel 1753 su progetto dell'ingegnere militare Juan Martín Cermeño, per ospitare gli abitanti de La Ribera sfrattati per costruire la Ciutadella. Griglia regolare su una lingua di terra artificiale, case strette e alte su strade strette: il tessuto urbano del Settecento è ancora leggibile.\n\nLa scultura <strong>\"El Peix\" (Il Pesce)</strong> di Frank Gehry, costruita per le Olimpiadi del 1992, è in acciaio inossidabile e rame, alta 54 metri. Fu una delle prime grandi sculture pubbliche di Gehry e anticipa l'approccio formale del Guggenheim di Bilbao (1997). La forma del pesce deriva dall'ossessione giovanile di Gehry per i pesci nella vasca di sua nonna.",
        blocks: [
          {
            type: "photo",
            text: "El Peix di Frank Gehry con il tramonto alle spalle (luce da ovest, verso le 18:30-19:00) è una delle foto più iconiche di Barcellona. Posizionatevi a sud della scultura.",
          },
          {
            type: "food",
            text: "Sulla Barceloneta evitate i ristoranti di pesce sul lungomare (prezzi turistici). Per una birra sul mare: uno qualsiasi dei chiringuito sul Passeig Marítim.",
          },
        ],
        transitAfter:
          "A piedi 15 min verso El Born · risali per Carrer del Comerç",
      },
      {
        time: "19:00",
        name: "Cena nel Born",
        duration: "1 ora 30 min",
        description: "Rientro nel Born per la cena — meritata dopo 13 km.",
        blocks: [
          {
            type: "food",
            text: "<strong>Bodega Sepúlveda</strong> per tapas di qualità, <strong>El 300 del Born</strong> per atmosfera giovane. Per qualcosa di più curato: <strong>Bar del Pla</strong> anche la sera.",
          },
        ],
      },
    ],
    banners: [
      {
        type: "optional",
        title: "📌 Museo Picasso — 1 h 30 min",
        text: "Il museo si trova su Carrer de la Montcada, 3 minuti da Santa Maria del Mar. Se entrate, considerate di saltare o accorciare la Ciutadella. Prima domenica del mese: ingresso gratuito (prenotate comunque online).",
        beforeStop: 8,
      },
    ],
    bonus: {
      title: "🌙 Serata — Born & Raval",
      text: "El Born è il quartiere più vivo per i ventenni. <strong>Carrer del Rec</strong> e dintorni: cocktail bar come <strong>Paradiso</strong> (prenotate o arrivate alle 20:30 — fa fila). Per atmosfera più grintosa: il Raval con <strong>Bar Marsella</strong> (1820 — il bar più antico di Barcellona, servono ancora l'assenzio originale) o <strong>Bar Pastís</strong>. Barcellona non inizia prima di mezzanotte.",
    },
  },

  // ══════════════════════════════════════════════════════════
  // GIORNO 2 — PASQUA
  // ══════════════════════════════════════════════════════════
  {
    number: 2,
    label: "Giorno 2 — Pasqua & Gaudí",
    mobileLabel: "Giorno 2",
    title: "Parc Güell, La Pedrera,\nCasa Batlló e i Bunkers",
    subtitle:
      "La giornata di Gaudí: il parco-mosaico al mattino, i due palazzi più spettacolari dell'Eixample nel pomeriggio, e il tramonto migliore di Barcellona dai Bunkers del Carmel.",
    mapsUrl:
      "https://www.google.com/maps/d/edit?mid=1zoqhjqfLeQ7XraMKYzzin9pRSfC-Hrs&usp=sharing",
    pills: [
      "🐣 Pasqua",
      "👨🏻‍🎨 Opere di Gaudí",
      "🐂 Arena della Corrida",
      "🌅 Tramonto ai Bunkers",
    ],
    banners: [
      {
        type: "warning",
        title: "⚠️ Oggi è Pasqua",
        text: "Chiese e cattedrali saranno chiuse o occupate da funzioni religiose per tutto il giorno. Il programma di oggi le evita completamente: Parc Güell, La Pedrera e Casa Batlló sono attrazioni laiche e aperte normalmente a Pasqua.",
        beforeStop: 0,
      },
    ],
    stops: [
      // ── 1. PARC GÜELL ────────────────────────────────────────
      {
        time: "09:15",
        name: "Partenza → Metro per Parc Güell",
        duration: "15 min (Metro L3)",
        description:
          "Prendete la Metro L3 (verde) da Passeig de Gràcia o Diagonal fino a Lesseps. Da lì 15 minuti a piedi in salita — o l'autobus 116 se le gambe chiedono pietà. Presentatevi all'ingresso almeno 10 minuti prima dello slot.",
        transitAfter: "Metro L3 → Lesseps, poi 15 min a piedi in salita",
      },

      // ── 2. PARC GÜELL ────────────────────────────────────────
      {
        time: "09:30",
        name: "Parc Güell",
        duration: "1 ora 30 min",
        tags: [
          { type: "book", label: "🎟 Biglietto acquistato — slot 09:30" },
          { type: "crowd", label: "🔴 Affollato dopo le 11:00" },
        ],
        description:
          "Il parco-gioiello di Gaudí sulla collina del Carmel: la terrazza con le panchine a serpentina ricoperte di mosaici, la sala ipostila con le colonne doriche, la salamandra all'ingresso. La luce delle 9:30 sulla terrazza è probabilmente la migliore della giornata — sfruttatela prima che arrivi la folla.",
        longText:
          "<p>Il Parc Güell nacque come fallimento commerciale e divenne un capolavoro artistico. Nel 1900 Eusebi Güell — il mecenate che aveva già commissionato il Palau Güell — acquistò 15 ettari sulla collina del Carmel con l'ambizione di creare una città-giardino residenziale per la borghesia barcellonese, sul modello delle <em>garden cities</em> inglesi di Ebenezer Howard. Gaudí progettò l'infrastruttura: strade, viadotti, la piazza centrale, i servizi. Furono vendute solo due ville (una delle quali Gaudí acquistò per sé e ci abitò fino al 1925). Il progetto fallì per mancanza di acquirenti, e nel 1923 Güell donò il terreno al Comune di Barcellona, che lo trasformò in parco pubblico.</p><p>La <strong>terrazza principale</strong> — tecnicamente una piazza-mercato coperta dalla sala ipostila sottostante — è circondata dal famoso banco a serpentina rivestito di <em>trencadís</em>: il mosaico di frammenti ceramici irregolari che Gaudí e il suo collaboratore Josep Maria Jujol trasformarono in una tecnica pittorica libera e moderna. I frammenti provengono da scarti di fabbriche ceramiche barcellonesi — era materiale di risulta, usato con genio inventivo.</p><p>La <strong>sala ipostila</strong> (86 colonne doriche) fu progettata come mercato coperto della città-giardino: non fu mai usata come tale. Il soffitto, interamente in <em>trencadís</em> bianco con medaglioni policromi di Jujol, è uno dei più straordinari esempi di decorazione modernista al mondo.</p><p>La <strong>Casita del Guarda</strong> — il padiglione d'ingresso con il tetto a fungo bianco e la croce di quattro bracci — è il simbolo fotografico più riconoscibile del parco, spesso erroneamente chiamato \"la casa di Hansel e Gretel\".</p><p>Gaudí abitò nella <strong>Casa Gaudí</strong> (oggi museo) dal 1906 al 1925: una villa semplice, progettata non da lui ma dal suo allievo Francesc Berenguer. Morì investito da un tram nel 1926 a 73 anni, mentre tornava a piedi dalla Sagrada Família.</p>",
        blocks: [
          {
            type: "photo",
            text: "La terrazza alle 9:30–10:00 ha la luce migliore e la folla minima. La coda per la foto con la salamandra si forma già dalle 10:30 — andate prima.",
          },
          {
            type: "tip",
            text: "Dopo la zona monumentale a pagamento, esplorate le aree esterne del parco (gratis): i viadotti in pietra naturale e i sentieri tra i pini regalano viste su Barcellona altrettanto belle, quasi senza turisti.",
          },
        ],
        transitAfter:
          "Metro L3 Lesseps → Diagonal · ~15 min · poi 5 min a piedi su Passeig de Gràcia",
      },

      // ── 3. BUFFER PASSEIG DE GRÀCIA ─────────────────────────
      {
        time: "11:05",
        name: "Buffer — Passeig de Gràcia",
        duration: "45 min",
        tags: [{ type: "free", label: "Gratis" }],
        description:
          "Avete quasi un'ora di buffer prima di Casa Milà. Passeig de Gràcia è il viale più elegante di Barcellona — usatelo per camminare, guardare le facciate moderniste, fermarvi a un bar per un caffè. La \"Manzana de la Discordia\" è qui: tre capolavori del Modernismo catalano uno accanto all'altro.",
        longText:
          "<p>Il Passeig de Gràcia fu tracciato nel 1827 come viale di collegamento tra Barcellona e il borgo di Gràcia (allora comune autonomo). Con la costruzione dell'Eixample divenne il principale asse residenziale e commerciale del nuovo quartiere borghese, e i ricchi industriali catalani si sfidarono a chi costruiva la villa più spettacolare lungo il viale.</p><p>La <strong>Manzana de la Discordia</strong> — letteralmente \"l'isolato della discordia\" — prende il nome dal fatto che tre grandi architetti del Modernisme catalano costruirono i propri capolavori nello stesso isolato, in aperta competizione: <strong>Casa Lleó Morera</strong> (1906) di Domènech i Montaner (al n. 35), <strong>Casa Amatller</strong> (1900) di Josep Puig i Cadafalch (al n. 41), e <strong>Casa Batlló</strong> (1906) di Antoni Gaudí (al n. 43). Tre stili radicalmente diversi, tre risposte diverse alla domanda su cosa dovesse essere l'architettura catalana moderna.</p><p>Vale una sosta di 10 minuti per guardare le facciate dall'esterno — specialmente Casa Amatller, spesso trascurata rispetto alle vicine: il coronamento a scalini fiamminghi con i rivestimenti ceramici policromi è straordinario.</p>",
        blocks: [
          {
            type: "food",
            text: "Caffè o acqua prima di Casa Milà: qualsiasi bar laterale su Carrer de Provença o Carrer de Mallorca — i bar <em>sul</em> Passeig de Gràcia hanno prezzi da viale turistico.",
          },
        ],
        transitAfter:
          "A piedi 2 min verso nord su Passeig de Gràcia fino al n. 92",
      },

      // ── 4. CASA MILÀ / LA PEDRERA ───────────────────────────
      {
        time: "12:00",
        name: "Casa Milà — La Pedrera",
        duration: "1 ora 15 min",
        tags: [
          { type: "book", label: "🎟 Biglietto acquistato — slot 12:00" },
          { type: "crowd", label: "🔴 Coda senza prenotazione" },
        ],
        description:
          "Il palazzo più \"civile\" di Gaudí — un'onda di pietra calcarea grigia con balconi in ferro battuto che sembrano alghe marine. La terrazza con i camini-guerrieri in armatura è la parte più fotografata: surreale, lunare, e assolutamente unica. Non saltate l'attico con la struttura parabolica a costole.",
        longText:
          "<p>Casa Milà fu commissionata nel 1906 dall'imprenditore Pere Milà i Camps e dalla moglie Roser Segimon (ricca vedova di un colono indiano). Gaudí la costruì tra il 1906 e il 1912 — fu l'ultima opera civile prima di dedicarsi completamente alla Sagrada Família. Il soprannome <em>La Pedrera</em> (la cava) fu dato dai barcellonesi dell'epoca in tono ironico, per la facciata ondulata in pietra calcarea grigia estratta da Garraf, che sembrava una cava incompiuta. Gaudí non apprezzò il soprannome, ma è rimasto.</p><p>L'edificio è strutturalmente rivoluzionario: non ha muri portanti interni — il peso è tutto sulle colonne e sui pilastri perimetrali. Questo significa che ogni appartamento poteva essere diviso e ridistribuito liberamente: un'idea protomaterialistica che anticipa di decenni la pianta libera del Movimento Moderno. La struttura portante è completamente indipendente dalla facciata ondulata.</p><p>La <strong>terrazza</strong> è il punto culminante della visita: venti camini rivestiti di <em>trencadís</em> bianco e grigio, con forme elicoidali che ricordano guerrieri in armatura medievale, sono distribuiti sul tetto come sculture astratte. Gaudí li chiamava <em>espantabruixes</em> (scaccia-streghe). La terrazza fu il primo \"tetto accessibile\" della storia dell'architettura moderna.</p><p>L'<strong>attico</strong> — ora museo permanente sulla vita e l'opera di Gaudí — conserva la struttura parabolica originale: 270 archi catenari in mattoni, disposti in file che seguono la curvatura naturale di una catena appesa. Gaudí sviluppò questa geometria studiando modelli fisici rovesciati: appendeva pesi a fili e fotografava la forma naturale della catenaria, poi ribaltava mentalmente il risultato per ottenere archi autoportanti perfettamente stabili.</p>",
        blocks: [
          {
            type: "photo",
            text: "In terrazza: girate attorno ai camini elicoidali con il cielo come sfondo — cercate l'angolo dove due o tre camini si sovrappongono in profondità. L'attico con gli archi parabolici in mattoni richiede un grandangolo.",
          },
          {
            type: "tip",
            text: "Il percorso consigliato è: appartamento del piano nobile → attico (museo) → terrazza. Non andate direttamente in terrazza: l'attico contestualizza quello che vedete sopra.",
          },
        ],
        transitAfter: "A piedi 5 min verso sud su Passeig de Gràcia",
      },

      // ── 5. PRANZO EIXAMPLE ───────────────────────────────────
      {
        time: "13:20",
        name: "Pranzo — Eixample",
        duration: "1 ora 15 min",
        description:
          "Avete tempo per un pranzo comodo prima di Casa Batlló alle 14:45. Allontanatevi di un isolato dal Passeig de Gràcia: i prezzi si dimezzano e la qualità raddoppia.",
        blocks: [
          {
            type: "food",
            text: "<strong>Cervecería Catalana</strong> (Carrer de Mallorca 236, 8 min a piedi): tapas catalane di qualità, sempre un po' di fila ma scorre. <strong>Bar Calders</strong> (Carrer del Parlament, Poble Sec — troppo lontano oggi): segnatevelo per domani. Alternativa veloce: qualsiasi bar su Carrer de Mallorca o Carrer d'Aragó con menú del día — di solito 12–14€ con primo, secondo e vino inclusi.",
          },
        ],
        transitAfter: "A piedi 5 min verso Casa Batlló · Passeig de Gràcia 43",
      },

      // ── 6. CASA BATLLÓ ──────────────────────────────────────
      {
        time: "14:45",
        name: "Casa Batlló",
        duration: "1 ora 20 min",
        tags: [
          { type: "book", label: "🎟 Biglietto acquistato — slot 14:45" },
          { type: "crowd", label: "🔴 Molto affollata" },
        ],
        description:
          "Il capolavoro più teatrale di Gaudí: la facciata rivestita di mosaici policromi che cambiano colore con la luce, il tetto a squame di drago iridescente, il corridoio interno blu-azzurro come il fondo del mare. L'audioguida Magic Nights è probabilmente inclusa — usatela: aggiunge uno strato narrativo alle stanze altrimenti difficili da leggere.",
        longText:
          "<p>Casa Batlló fu commissionata nel 1904 dall'industriale tessile Josep Batlló i Casanovas, che aveva acquistato un palazzo preesistente del 1877 e voleva un rifacimento totale. Gaudí non demolì e ricostruì: trasformò completamente la facciata, i piani interni e il tetto, conservando la struttura portante. Il risultato è uno degli edifici più fotografati del mondo.</p><p>La <strong>facciata</strong> è interamente ricoperta di <em>trencadís</em> policromo in sfumature di blu, verde e viola — i colori variano a seconda della luce e dell'angolo di osservazione. I balconi in pietra calcarea bianca di Montjuïc hanno forme organiche che ricordano maschere o ossa (i barcellonesi dell'epoca la chiamavano <em>Casa dels Ossos</em> — casa delle ossa). Il tetto arcuato ricoperto di tegole smaltate iridescenti rappresenta il dorso di un drago.</p><p>La <strong>lettura simbolica</strong> più accreditata è quella di San Giorgio — patrono della Catalogna — che uccide il drago: la torre con la croce di quattro braccia è la lancia di Giorgio, il tetto è il dorso del drago ucciso, e la facciata con i \"teschi\" dei balconi rappresenta le vittime del mostro. Gaudí non confermò mai esplicitamente questa lettura, ma la croce catalana sul coronamento è difficile da ignorare.</p><p>L'<strong>interno</strong> è altrettanto straordinario: il pozzo luce centrale è rivestito di piastrelle blu che sfumano dal cobalto scuro in alto al bianco in basso — per compensare la diminuzione della luce naturale con la profondità. Il corridoio del primo piano ha soffitti a spirale che sembrano muoversi. La sala principale dell'appartamento Batlló ha finestre a forma di occhio che si aprono su Passeig de Gràcia.</p>",
        blocks: [
          {
            type: "photo",
            text: "La facciata pomeridiana con cielo azzurro: i mosaici blu-verdi riflettono il cielo e cambiano colore in modo quasi vivo. Da fotografare sia frontalmente che in angolo.",
          },
          {
            type: "tip",
            text: "Il tetto si visita verso la fine del percorso: non uscite prima di averlo visto. Il panorama sul Passeig de Gràcia e sui camini de La Pedrera (visibile a pochi isolati di distanza) è inaspettato.",
          },
        ],
        transitAfter:
          "A piedi 15 min verso est su Gran Via de les Corts Catalanes",
      },

      // ── 7. LA MONUMENTAL ────────────────────────────────────
      {
        time: "16:10",
        name: "La Monumental — esterno",
        duration: "15 min",
        tags: [{ type: "free", label: "Gratis (esterno)" }],
        description:
          "Una breve sosta per vedere la facciata neo-mudéjar dell'ultima arena per la corrida costruita in Spagna. Non vale l'ingresso interno (museo discontinuo, ~15€), ma l'architettura esterna — ceramiche policrome, cupole orientaleggianti, mattoni rossi — è un pezzo di storia urbana di Barcellona che vale 10 minuti.",
        longText:
          "<p>La Monumental fu inaugurata nel 1914 ed è l'ultima plaza de toros costruita in Spagna. Lo stile è neo-mudéjar: un ibrido tra architettura ispanico-islamica medievale e architettura eclettica ottocentesca, con mattoni rossi a vista, fasce di ceramica policroma, e cupole a forma di bulbo che strizzano l'occhio all'architettura orientale. È un edificio che stona volutamente con il rigore ortogonale dell'Eixample circostante — e proprio per questo è affascinante.</p><p>La storia della corrida a Barcellona è complessa: la Catalogna fu sempre un territorio in cui la <em>fiesta nacional</em> era praticata ma mai pienamente integrata nell'identità culturale locale, a differenza di Madrid o Siviglia. Nel 2010, il Parlament de Catalunya approvò una legge che vietava le corride in Catalogna — la prima regione spagnola a farlo — con effetto dal gennaio 2012. La Monumental ospitò l'ultima corrida catalana il 25 settembre 2011. Nel 2016 il Tribunal Constitucional spagnolo dichiarò incostituzionale il divieto catalano, in quanto la corrida è \"patrimonio culturale\" di competenza statale: la questione legale è ancora aperta.</p><p>Oggi l'arena ospita occasionalmente concerti, eventi e un museo sulla storia della corrida in Catalogna — ma gli orari sono discontinui e l'accesso poco pubblicizzato.</p>",
        blocks: [
          {
            type: "tip",
            text: "Guardate la facciata, fate le foto, e proseguite: l'interno non aggiunge molto a chi non è appassionato di tauromachia. Il valore è tutto nell'architettura esterna.",
          },
        ],
        transitAfter:
          "A piedi 25 min verso nord-est in direzione Gràcia · opzionale: passaggio davanti alla Sagrada Família (+10 min di deviazione)",
      },

      // ── 8. SAGRADA FAMÍLIA — ESTERNO (opzionale) ────────────
      {
        time: "16:30",
        name: "Sagrada Família — esterno (passaggio)",
        duration: "10 min",
        tags: [{ type: "free", label: "Gratis (esterno)" }],
        description:
          "Se fate la deviazione verso la Sagrada Família prima di Gràcia, avrete una prima visione del cantiere più lungo della storia dell'architettura. Domani la visiterete dall'interno: oggi è un'anteprima per capirne la scala reale.",
        longText:
          "<p>La Sagrada Família è in costruzione dal 1882 — 143 anni ininterrotti al momento del vostro viaggio. Gaudí prese il controllo del progetto nel 1883 e lavorò all'opera fino alla morte nel 1926, lasciandola circa al 25% completata. La costruzione continuò sotto una serie di architetti successori, con una grave interruzione nel 1936 quando gli anarchici bruciarono l'archivio dei progetti originali — gran parte del lavoro successivo è stato una ricostruzione interpretativa basata su fotografie e modelli sopravvissuti.</p><p>Le due facciate esistenti hanno stili radicalmente diversi: la <strong>Facciata della Natività</strong> (est, progettata da Gaudí) è organica, sovrabbondante di sculture naturalistiche, celebrativa; la <strong>Facciata della Passione</strong> (ovest, progettata da Josep Maria Subirachs dal 1987) è angolosa, spigolosa, geometrica — volutamente austera per rappresentare la sofferenza di Cristo. Le due facciate sono state oggetto di dibattito architettonico acceso: molti considerano la Passione un tradimento dello spirito gaudiniano, altri una risposta contemporanea coerente.</p><p>La previsione di completamento ufficiale è il 2026 — centenario della morte di Gaudí. Alcune torri mancanti e la facciata della Gloria (principale, verso sud) non saranno completate entro quella data.</p>",
        transitAfter:
          "A piedi 20 min verso nord in direzione Gràcia · su Carrer de Gaudí o Avinguda de Gaudí",
      },

      // ── 9. QUARTIERE GRÀCIA ─────────────────────────────────
      {
        time: "17:10",
        name: "Quartiere di Gràcia",
        duration: "1 ora 45 min",
        tags: [{ type: "free", label: "Gratis" }],
        description:
          "Il quartiere-paese di Barcellona: bohémien, giovane, pieno di piazze con tavolini all'aperto. Qui si vive in modo diverso dal resto della città — meno turistico, più autentico. Tappe: Plaça del Sol, Plaça de la Vila de Gràcia, Carrer de Verdi. Bonus: Casa Vicens di Gaudí a 5 minuti, quasi sempre deserta.",
        longText:
          '<p>Gràcia fu un comune autonomo fino al 1897, quando fu incorporata nel Comune di Barcellona — contro la volontà di gran parte dei suoi abitanti, che organizzarono barricate in resistenza. Ancora oggi mantiene un\'identità fortissima: la gente di Gràcia dice di abitare "a Gràcia", non "a Barcellona". È il quartiere con la più alta densità di atenei, associazioni culturali e locali con musica dal vivo per abitante della città.</p><p><strong>Plaça del Sol</strong> è il salotto del quartiere: tavolini, bar, bambini che giocano, aperitivo nel pomeriggio. Non ha monumenti — è una piazza per starci, non per guardarla.</p><p><strong>Plaça de la Vila de Gràcia</strong> (o Plaça de la Virreina) è la più bella architettonicamente: il campanile dell\'ex-chiesa parrocchiale domina uno spazio intimo e ben proporzionato. I bar intorno servono vermut catalano — il rito pomeridiano per eccellenza.</p><p><strong>Casa Vicens</strong> (Carrer de les Carolines 20) fu la prima opera importante di Gaudí, costruita tra il 1883 e il 1885 per il commerciante Manuel Vicens. È orientalista e vivace: rivestimenti di mattonelle di ceramica verde e bianca con fiori di tagete (il fiore che cresceva nel giardino del lotto), cornici arabescate, logge in ferro battuto. È la prova che Gaudí non nacque "gaudiniano" — il suo stile maturo è il risultato di un lungo percorso di ricerca, e Casa Vicens è il punto di partenza. Aperta al pubblico dal 2017, è quasi sempre meno affollata del Parc Güell nonostante sia altrettanto interessante.</p>',
        blocks: [
          {
            type: "tip",
            text: "Se entrate a Casa Vicens (biglietto ~16€, 45 min) controllate gli orari in anticipo — richiuderà prima del tramonto. Se preferite tenere l'energia per i Bunkers, limitatevi all'esterno: anche la facciata è straordinaria e si vede gratis.",
          },
          {
            type: "food",
            text: "Vermut pre-Bunkers: <strong>La Pepita</strong> (Carrer del Consell de Cent) o qualsiasi bar su Plaça del Sol. Non cenate qui — mangerete dopo i Bunkers.",
          },
        ],
        transitAfter:
          "A piedi 30 min in salita · oppure Metro L3 Fontana → Joanic (L4) + 15 min a piedi",
      },

      // ── 10. BUNKERS DEL CARMEL ──────────────────────────────
      {
        time: "19:05",
        name: "Bunkers del Carmel — tramonto",
        duration: "1 ora 30 min",
        tags: [
          { type: "free", label: "Gratis" },
          { type: "crowd", label: "🔴 Affollato — arrivate con anticipo" },
        ],
        description:
          "I resti di una batteria antiarea della Guerra Civile sulla cima del Turó de la Rovira: il panorama a 360° su tutta Barcellona è il più bello della città, senza discussioni. Più autentico e meno turistico di qualsiasi altro belvedere. Il tramonto ad aprile è intorno alle 20:35 — siate lì entro le 19:45 per trovare un posto decente.",
        longText:
          "<p>La batteria antiarea del Turó de la Rovira fu costruita nel 1937, durante la Guerra Civile Spagnola, per difendere Barcellona dai bombardamenti aerei delle forze nazionaliste e degli alleati italiani e tedeschi della Legione Condor. La posizione — la collina più alta del centro urbano, 262 m.s.l.m. — fu scelta per il campo visivo a 360° sul mare e sulla città. La batteria era dotata di quattro cannoni antiaerei da 105 mm e di stazioni di rilevamento acustico per individuare gli aerei in avvicinamento.</p><p>Dopo la caduta di Barcellona nel gennaio 1939, la batteria fu smantellata dalle forze franchiste. Negli anni '50 e '60 la collina fu occupata da baracche di immigrati interni — il cosiddetto <em>barri de les barraques</em> — che furono demolite negli anni '70. I resti in cemento dei bunker e dei basamenti dei cannoni sono quello che si vede oggi: una sovrapposizione di strati storici su un pezzo di collina altrimenti dimenticato.</p><p>I Bunkers del Carmel divennero un punto di ritrovo spontaneo per i barcellonesi a partire dagli anni '90, come alternativa al Tibidabo o al Parc Güell per vedere il tramonto. Oggi sono diventati inevitabilmente più frequentati — ma mantengono un'atmosfera più autentica degli altri belvedere: si porta da bere, ci si siede sui ruderi, si aspetta il sole che scende.</p>",
        blocks: [
          {
            type: "photo",
            text: "Il momento migliore è 20-30 minuti prima del tramonto, quando la luce radente incendia la città fino al mare e il profilo della Sagrada Família si staglia contro il cielo arancione. Posizionatevi sul lato sud-est della cima per avere il porto e il mare sullo sfondo.",
          },
          {
            type: "tip",
            text: "Portate qualcosa da bere — non ci sono bar lassù. La salita da Metro Joanic (L4) è 15 minuti a piedi in salita decisa: partite con anticipo sufficiente.",
          },
        ],
        transitAfter: "A piedi in discesa verso Gràcia · 20 min",
      },

      // ── 11. CENA GRÀCIA ──────────────────────────────────────
      {
        time: "21:15",
        name: "Cena a Gràcia",
        duration: "1 ora 30 min",
        description:
          "Scendete dai Bunkers verso Gràcia per cena. Dopo una giornata da Gaudí e un tramonto memorabile, il quartiere offre il giusto mix di qualità e atmosfera senza le code del Born.",
        blocks: [
          {
            type: "food",
            text: "<strong>La Pepita</strong> (Carrer del Consell de Cent 311): bocadillos creativi e piatti catalani, piccolo ma buono. <strong>La Pepita Gràcia</strong> (Carrer de Còrsega): versione più grande dello stesso locale. <strong>Bilbao</strong> (Carrer del Perill 33): classico del quartiere, cucina catalana tradizionale, prezzi onesti. Su <strong>Carrer de Verdi</strong> trovate una concentrazione di bistrot e locali — esploratelo senza prenotazione.",
          },
        ],
      },
    ],
    bonus: {
      title: "🌙 Serata — Gràcia by night",
      text: "Gràcia è il posto giusto per una serata tranquilla ma autentica. <strong>Carrer de Verdi</strong> e <strong>Carrer de Torrent de l'Olla</strong>: bar, vinerie, musica dal vivo in piccoli locali. <strong>Heliogàbal</strong> (Carrer de Ramon i Cajal 80) ospita concerti indie, jazz e sperimentale quasi ogni sera — piccolo, acustico, ottimo. Per chi preferisce il caos del Born: Metro L4 Joanic → Jaume I, 15 minuti.",
    },
  },

  // ══════════════════════════════════════════════════════════
  // GIORNO 3 — PASQUETTA
  // ══════════════════════════════════════════════════════════
  {
    number: 3,
    label: "Giorno 3 — Montjuïc & Sagrada",
    mobileLabel: "Giorno 3",
    title: "Montjuïc, Sagrada Família\ne i Bunkers al tramonto",
    subtitle:
      "Si sale sulla collina del porto al mattino, si visita il capolavoro di Gaudí nel pomeriggio e si chiude con il panorama più bello di Barcellona al tramonto dai Bunkers del Carmel.",
    mapsUrl:
      "https://www.google.com/maps/d/edit?mid=1b3b9a0laXz_JrF0HNQwmrgKVmNRc5II&usp=sharing",
    pills: [
      "🚡 Funicolare Montjuïc",
      "🎨 MNAC - Arte Romanica",
      "⛪ Sagrada Família",
      "🐣 Pasquetta",
    ],
    stops: [
      // ── 1. MONTJUÏC — SALITA ────────────────────────────────
      {
        time: "09:00",
        name: "Salita a Montjuïc — Funicolare da Paral·lel",
        duration: "20 min (Metro + Funicolare)",
        description:
          "Prendete la Metro L2 o L3 fino a Paral·lel, poi il Funicolare di Montjuïc incluso nel biglietto metro. Vi deposita a metà collina, a 5 minuti a piedi dal MNAC e dalla Fondació Miró. È il modo più veloce e scenografico per salire.</br>In alternativa se volete vedere le Torri Veeziane e la Fontana Magica (spenta di giorno) prendete la Metro fino a Plaça d'Espanya, fate la foto alle torri, percorrete il viale verso il MNAC (10 minuti a piedi in leggera salita), e salite da lì.",
        longText:
          "<p>Montjuïc — il nome deriva probabilmente dall'ebraico <em>Mont Juïc</em>, \"monte degli ebrei\", per la presenza di un antico cimitero della comunità ebraica medievale di Barcellona sulla collina — è una massa calcarea di 173 metri che domina il porto occidentale della città. Per secoli fu usata come cava di pietra (la stessa pietra calcarea bianca che Gaudí usò per La Pedrera e Santa Maria del Mar viene da qui), come fortezza militare e come luogo di esecuzione.</p><p>La trasformazione in distretto culturale avvenne in due fasi: la prima con l'<strong>Esposizione Internazionale del 1929</strong>, che portò il Palau Nacional (oggi MNAC), il Pavelló Mies van der Rohe, gli stadi e i padiglioni nazionali; la seconda con le <strong>Olimpiadi del 1992</strong>, che aggiunsero lo Stadio Olimpico ristrutturato, il Palau Sant Jordi di Arata Isozaki e le infrastrutture sportive. Il risultato è una collina con strati storici sovrapposti — medievale, novecentesco, olimpico — che convivono in modo irregolare ma affascinante.</p><p>Il <strong>Funicolare di Montjuïc</strong> è in funzione dal 1928, costruito per l'Esposizione del 1929. L'attuale versione è stata rinnovata nel 1992 e poi di nuovo nel 2007: è gestito da TMB (la stessa azienda della Metro) ed è incluso nel biglietto del trasporto pubblico. Dalla stazione di arrivo in cima al funicolare si raggiunge a piedi il MNAC in 5 minuti.</p>",
        transitAfter: "A piedi 5 min in salita verso il MNAC",
      },

      // ── 2. MNAC ─────────────────────────────────────────────
      {
        time: "09:25",
        name: "MNAC — Museu Nacional d'Art de Catalunya",
        duration: "1 ora 30 min",
        tags: [
          { type: "book", label: "📅 Biglietto online consigliato (~12€)" },
        ],
        description:
          "Entrate. La collezione di arte romanica è una delle più importanti al mondo — affreschi medievali staccati da chiese pirenaiche e riallestiti in absidi ricostruite. Non è un museo da scorrere veloce: le sale romaniche richiedono attenzione e restituiscono molto. Calcolate 1h30 minima per farlo con senso.",
        longText:
          "<p>Il Museu Nacional d'Art de Catalunya occupa il <strong>Palau Nacional</strong>, costruito per l'Esposizione Internazionale del 1929 su progetto di Eugen Cendoya e Enric Catà in stile neobarocco. L'edificio è mastodontico e un po' pomposo — ma la vista dalla scalinata frontale su Plaça d'Espanya, le Torri Veneziane e l'Eixample geometrico è una delle più fotografate di Barcellona.</p><p>La collezione si divide in più sezioni, ma una sola vale da sola il prezzo del biglietto: la <strong>collezione romanica</strong> (secoli XI–XIII), considerata la più importante raccolta di pittura murale romanica al mondo. Tra la fine dell'Ottocento e i primi del Novecento, il Consell de Cultura della Generalitat organizzò campagne sistematiche di stacco degli affreschi dalle chiese romaniche abbandonate delle valli pirenaiche catalane — Val de Boí, Ribagorça, Pallars — per preservarli dal degrado e dall'esportazione illegale verso collezionisti stranieri (in quegli anni molti affreschi romanici spagnoli finirono nei musei americani). Gli affreschi furono staccati con la tecnica dello <em>strappo</em>, trasportati a Barcellona e riallestiti in absidi semicircolari ricostruite che replicano le proporzioni delle chiese originali.</p><p>Il risultato è un'esperienza unica: si cammina in una sequenza di absidi che riproducono lo spazio delle chiese medievali, con i Cristi in mandorla, le Vergini in trono, i cicli narrativi dell'Antico Testamento dipinti con la forza cromatica e la geometria schematica dell'arte romanica al suo apice. Il <strong>Cristo di Taüll</strong> (1123, dalla chiesa di Sant Climent de Taüll) è il pezzo più celebre: un Pantocrator frontale di potenza formale straordinaria, con gli occhi asimmetrici e lo sguardo fisso che non si dimentica facilmente.</p><p>Il museo ospita anche importanti collezioni di arte <strong>gotica catalana</strong>, <strong>rinascimentale e barocca</strong>, e una sezione dedicata al <strong>Modernisme</strong> con mobili, vetrate e oggetti di Gaudí, Domènech i Montaner e Puig i Cadafalch. Se il tempo è limitato, concentratevi sul romanico e sul modernismo — sono le sezioni con maggiore identità catalana.</p>",
        blocks: [
          {
            type: "photo",
            text: "Prima di entrare: dalla scalinata frontale del Palau Nacional la prospettiva su Plaça d'Espanya, le due Torri Veneziane (ispirate al campanile di San Marco) e l'asse dell'Eixample è una delle foto più iconiche di Barcellona.",
          },
          {
            type: "tip",
            text: "I primi martedì del mese l'ingresso è gratuito dopo le 15:00 — non vi serve oggi, ma segnatevelo. Se volete il solo romanico senza il resto, calcolate 45-50 minuti concentrati.",
          },
        ],
        transitAfter:
          "A piedi 10 min verso i giardini di Montjuïc o verso il Castell",
      },

      // ── 3. MONTJUÏC — PASSEGGIATA E CASTELL ────────────────
      {
        time: "11:00",
        name: "Montjuïc — Giardini e Castell",
        duration: "1 ora",
        tags: [{ type: "free", label: "Gratis (giardini) · ~5€ Castell" }],
        description:
          "Dopo il museo, esplorate la collina a piedi. I Jardins de Laribal sono terrazzati e silenziosi. Il Castell de Montjuïc offre la vista più ampia sul porto e sul mare. La storia del castello è densa: è uno dei luoghi più tragici della storia catalana del Novecento.",
        longText:
          "<p>Il <strong>Castell de Montjuïc</strong> ha origini nel XVII secolo, quando la città costruì una prima fortezza sulla collina per difendersi dalle incursioni marittime. Fu ampliato e modificato più volte nei secoli successivi, diventando progressivamente un simbolo dell'occupazione militare castigliana sulla Catalogna — fu usato come prigione politica e luogo di esecuzione per secoli.</p><p>Il momento più buio della sua storia è il 15 ottobre 1940, quando <strong>Lluís Companys i Jover</strong> — presidente della Generalitat de Catalunya, rifugiato in Francia dopo la caduta di Barcellona nel 1939 e consegnato dalla Gestapo alle autorità franchiste — fu fucilato nel fossato del castello dopo un processo sommario durato tre ore. Fu l'unico presidente democraticamente eletto di un governo europeo a essere giustiziato da Franco. Prima dell'esecuzione, si tolse le scarpe per morire a contatto con la terra catalana. Oggi una lapide nel fossato lo ricorda.</p><p>Il castello fu ceduto al Comune di Barcellona nel 2007, dopo decenni di dibattito sul suo futuro. È ora un museo e spazio culturale, con una esposizione permanente sulla storia militare e politica dell'edificio. La terrazza offre una vista a 360° sul porto, sul delta del Llobregat e, nelle giornate limpide, fino a Maiorca.</p><p>I <strong>Jardins de Laribal</strong> sono giardini terrazzati in stile italiano costruiti nel 1920 dal paesaggista francese Jean-Claude Nicolas Forestier: fontane, pergolati, rose, cipressi. Poco conosciuti dai turisti, quasi sempre deserti. I <strong>Jardins de Joan Brossa</strong> — più in basso, vicino al funicolare — sono aperti e panoramici, con giochi per bambini e uno dei punti vista migliori sul porto.</p>",
        blocks: [
          {
            type: "photo",
            text: "Dal Castell: il porto industriale e commerciale a ovest, il porto olimpico e la Barceloneta a est, la città che si estende verso nord fino al Collserola. Con cielo limpido si vede la Sagrada Família da lassù.",
          },
          {
            type: "tip",
            text: "La domenica pomeriggio il Castell è gratuito. Oggi è Pasquetta — verificate se vale anche per i festivi (di solito sì). Dal Castell si può scendere a piedi verso Poble Sec in 20 minuti attraverso i giardini.",
          },
        ],
        transitAfter:
          "A piedi 20 min in discesa verso Poble Sec attraverso i giardini",
      },

      // ── 4. PRANZO POBLE SEC ─────────────────────────────────
      {
        time: "12:30",
        name: "Pranzo — Poble Sec, Carrer de Blai",
        duration: "1 ora",
        description:
          "Scendete da Montjuïc verso Poble Sec: il quartiere ai piedi della collina, popolato e autentico. Carrer de Blai è la strada dei pintxos baschi di Barcellona — la più conveniente e buona della città per mangiare in piedi.",
        longText:
          "<p>Poble Sec — \"popolo secco\", dal catalano — è uno dei quartieri più vivaci e meno turistici del centro di Barcellona. Nacque come quartiere operaio alla fine dell'Ottocento, ai piedi di Montjuïc, popolato da immigrati dall'Aragona e dalla Murcia che lavoravano nelle fabbriche del porto e della zona industriale. Oggi è uno dei quartieri con maggiore concentrazione di teatri e spazi culturali della città — il Teatre Grec (teatro all'aperto sulla collina), il Teatre Lliure, il Paral·lel come asse storico dell'intrattenimento popolare barcellonese (music hall, varietà, cinema dall'inizio del Novecento).</p><p><strong>Carrer de Blai</strong> è una strada pedonale di circa 200 metri interamente occupata da bar che servono pintxos — la versione basca dei tapas, piccole preparazioni su fetta di pane, esposte su vassoi dietro il bancone. Il meccanismo è semplice: si entra, si prende un piatto, si sceglie quello che si vuole dal bancone, si paga a fine. I prezzi sono di solito 1,50–2€ a pintxo. La qualità varia da bar a bar, ma la media è alta. È uno dei pochi posti di Barcellona dove si mangia bene spendendo meno di 12€ a testa.</p>",
        blocks: [
          {
            type: "food",
            text: "<strong>La Tasqueta de Blai</strong> e <strong>Blai 9</strong> sono i più frequentati — ottimi ma con fila. <strong>Bar Calders</strong> (Carrer del Parlament 25, a 5 min) è un'alternativa più tranquilla con cucina catalana e buon vermut.",
          },
        ],
        transitAfter:
          "Metro L3 Poble Sec → Sagrada Família (L2/L5) · ~20 min · oppure a piedi 40 min",
      },

      // ── 5. RECINTE MODERNISTA DE SANT PAU ───────────────────
      {
        time: "13:30",
        name: "Recinte Modernista de Sant Pau",
        duration: "1 ora 15 min",
        tags: [
          { type: "book", label: "📅 Biglietto online consigliato (~15€)" },
        ],
        description:
          "L'altro capolavoro del Modernisme catalano, a 10 minuti a piedi dalla Sagrada Família. Domènech i Montaner ci lavorò per 27 anni — il risultato è un complesso ospedaliero che sembra un palazzo da favola: padiglioni decorati a mosaico, giardini geometrici, archi arabeggianti. UNESCO dal 1997, quasi sempre meno affollato della Sagrada Família nonostante sia altrettanto straordinario.",
        longText:
          "<p>Il Recinte Modernista de Sant Pau fu costruito tra il 1902 e il 1930 su progetto di <strong>Lluís Domènech i Montaner</strong> — l'architetto che con Gaudí e Puig i Cadafalch formò la triade del Modernisme catalano. Era destinato a essere il nuovo ospedale della città in sostituzione del vecchio Hospital de la Santa Creu nel Raval, ancora in funzione dal XIV secolo. Domènech i Montaner vinse il concorso nel 1901 e lavorò al progetto fino alla morte nel 1923 — il figlio Pere Domènech i Roura completò l'opera nel 1930.</p><p>L'idea di fondo è radicalmente moderna per l'epoca: invece di un'unica struttura monolitica, Domènech progettò un <strong>campus di padiglioni separati</strong> — ognuno dedicato a un reparto specifico — collegati da gallerie sotterranee e circondati da giardini. La separazione fisica dei reparti rispondeva alle teorie igieniste dell'epoca sulla circolazione dell'aria e l'isolamento delle infezioni. Il risultato urbanistico è un recinto di 9 ettari orientato a 45° rispetto alla griglia dell'Eixample — un angolo volutamente divergente che crea una tensione visiva con il tessuto urbano circostante.</p><p>Ogni <strong>padiglione</strong> è decorato con un programma iconografico specifico — mosaici di ceramica, sculture in pietra, vetrate colorate — legato alla funzione medica del reparto e ai santi protettori. I materiali sono i tipici del Modernisme: mattoni rossi a vista, ceramica policroma, pietra di Montjuïc, ferro battuto. Il <strong>Pavelló de l'Administració</strong>, il più grande e decorato, funge da ingresso monumentale: la cupola centrale rivestita di mosaici blu e oro è visibile da lontano.</p><p>L'ospedale rimase in funzione fino al 2009 — per 79 anni fu uno degli ospedali più attivi di Barcellona, con pazienti degenti in edifici Art Nouveau. Dal 2014 è aperto come museo e centro culturale, con restauri in corso sui padiglioni principali. L'<strong>Avinguda de Gaudí</strong> — il viale che collega il Recinte con la Sagrada Família, progettato come asse visivo tra i due edifici — è uno dei percorsi architettonici più belli di Barcellona: percorrendolo si vede in prospettiva prima i campanili del Recinte e poi, girando, i campanili della Sagrada Família.</p><p>Domènech i Montaner e Gaudí erano rivali professionali, colleghi all'Escola d'Arquitectura e — secondo alcuni biografi — in rapporti personali tesi. Costruire i due capolavori ai due estremi dello stesso viale nello stesso periodo fu probabilmente non casuale.</p>",
        blocks: [
          {
            type: "photo",
            text: "Il viale centrale del Recinte inquadra il Pavelló de l'Administració in prospettiva perfetta — meglio con sole alto che illumina i mosaici. Dall'uscita su Avinguda de Gaudí: giratevi e avrete i campanili della Sagrada Família esattamente in asse.",
          },
          {
            type: "tip",
            text: "Il Recinte è significativamente meno affollato della Sagrada Família nonostante la qualità comparabile. Se avete il biglietto della Sagrada Família alle 17:30 e siete qui alle 13:15, avete tempo senza fretta.",
          },
        ],
        transitAfter:
          "A piedi 10 min lungo Avinguda de Gaudí verso la Sagrada Família",
      },

      // ── 6. BUFFER PRE-SAGRADA FAMÍLIA ───────────────────────
      {
        time: "15:00",
        name: "Buffer — zona Sagrada Família",
        duration: "45 min",
        tags: [{ type: "free", label: "Passeggiata libera" }],
        description:
          "Siete a 10 minuti a piedi dalla Sagrada Família con quasi un'ora di margine. Usatela bene: girate intorno all'esterno della basilica per vedere entrambe le facciate prima di entrare, trovate un bar per sedervi, e presentatevi all'ingresso 15 minuti prima dello slot.",
        longText:
          "<p>La <strong>Facciata della Natività</strong> (lato est, Carrer de la Marina) è quella progettata interamente da Gaudí: completata parzialmente nel 1935, è sovrabbondante di sculture naturalistiche — animali, piante, figure bibliche — in uno stile organico che sembra cresciuto piuttosto che costruito. È la facciata che Gaudí volle completare per prima, consapevole che non avrebbe vissuto abbastanza per finire il resto. Le tre porte rappresentano la Fede, la Speranza e la Carità.</p><p>La <strong>Facciata della Passione</strong> (lato ovest, Carrer de Sardenya) fu progettata da <strong>Josep Maria Subirachs</strong> dal 1987: volutamente angolosa e spigolosa, quasi brutale, per rappresentare la sofferenza di Cristo. Le sculture — figure geometriche, quasi cubiste — sono agli antipodi dello stile gaudiniano. Subirachs disse esplicitamente di non voler imitare Gaudí ma di dialogare con lui in modo contemporaneo. La controversia non si è mai sopita: molti la considerano un tradimento, altri una risposta onesta e coraggiosa.</p><p>L'<strong>abside</strong> (lato nord) è la parte più antica della costruzione — iniziata nel 1882 dall'architetto Francisco de Paula del Villar, che poi cedette il progetto a Gaudí l'anno successivo. Qui si vede meglio il punto di partenza gotico-neoclassico da cui Gaudí partì per sviluppare il suo linguaggio radicalmente diverso.</p>",
        blocks: [
          {
            type: "tip",
            text: "Presentatevi all'ingresso assegnato sul biglietto (di solito Facciata della Natività per gli slot mattutini, verificate sul vostro biglietto) almeno 15 minuti prima. I controlli sono rapidi ma la fila si forma.",
          },
          {
            type: "photo",
            text: "La Facciata della Natività da Plaça de Gaudí (il piccolo parco di fronte) con lo specchio d'acqua in primo piano: la foto classica. Meglio con luce pomeridiana laterale.",
          },
        ],
        transitAfter: "A piedi 2 min verso l'ingresso della Sagrada Família",
      },

      // ── 7. SAGRADA FAMÍLIA ──────────────────────────────────
      {
        time: "17:30",
        name: "Sagrada Família",
        duration: "1 ora 30 min",
        tags: [
          { type: "book", label: "🎟 Biglietto acquistato — slot 17:30" },
          {
            type: "crowd",
            label: "🔴 Affollata — ma lo slot serale è tra i migliori",
          },
        ],
        description:
          "Il capolavoro assoluto di Gaudí, in costruzione dal 1882. Lo slot delle 17:30 è uno dei migliori: la luce del tardo pomeriggio entra dalla Facciata della Natività (est → ovest) e attraversa le vetrate colorate dell'interno in modo spettacolare. L'interno è un'esperienza difficile da preparare: foreste di colonne ramificate, luce che cambia colore a ogni ora del giorno.",
        longText:
          "<p>La <strong>Sagrada Família</strong> — nome completo <em>Temple Expiatori de la Sagrada Família</em> — fu iniziata nel 1882 dal progettista Francisco de Paula del Villar con uno stile neogotico convenzionale. Gaudí prese il controllo nel 1883, a 31 anni, e trasformò radicalmente il progetto, lavorandoci per 43 anni fino alla morte nel 1926. Al momento della sua morte la chiesa era completata per circa il 25%.</p><p>La <strong>struttura</strong> è basata su un sistema di iperboloidi e paraboloidi iperbolici che Gaudí sviluppò studiando forme naturali — ossi, alberi, stalattiti. Le colonne si ramificano verso l'alto come alberi, distribuendo i carichi senza archi rampanti esterni. È una soluzione strutturale radicalmente diversa dal gotico tradizionale e ha influenzato l'ingegneria strutturale del Novecento. Gaudí la sviluppò costruendo modelli fisici con fili e pesi appesi — ribaltati mentalmente per ottenere le forme in compressione.</p><p>L'<strong>interno</strong> è dominato dalla luce: le vetrate colorate furono progettate per creare effetti specifici a seconda dell'ora e della stagione. La navata centrale raggiunge i 45 metri di altezza. Le colonne in pietra di granito, basalto e porfido si ramificano a 30 metri da terra in sistemi sempre più sottili. L'effetto complessivo è di una foresta pietrificata attraversata dalla luce.</p><p>La <strong>storia della costruzione</strong> è complessa: nel 1936 gli anarchici bruciarono l'archivio dei progetti originali. I lavori ripresero nel 1940 basandosi su fotografie, modelli sopravvissuti e interpretazioni degli architetti successori. Questo ha alimentato un dibattito mai concluso su quanto la Sagrada Família attuale rispetti le intenzioni originali di Gaudí — alcuni architetti sostengono che le aggiunte successive tradiscano lo spirito dell'opera.</p><p>La data di completamento ufficiale prevista è il <strong>2026</strong>, centenario della morte di Gaudí — ma alcune strutture secondarie e la Facciata della Gloria (la principale, verso sud) non saranno completate entro quella data. La costruzione è finanziata interamente dai biglietti di ingresso: nessun finanziamento pubblico o ecclesiastico.</p><p>Gaudí è sepolto nella cripta della Sagrada Família. Dal 2000 è in corso il processo di beatificazione: se approvato, sarebbe il primo architetto beato della storia della Chiesa cattolica.</p>",
        blocks: [
          {
            type: "photo",
            text: "Con lo slot delle 17:30: la luce entra dalla Facciata della Natività (est) e attraversa la navata in direzione ovest — le vetrate verdi e gialle del lato Natività illuminano le colonne in modi che cambiano minuto per minuto. È la luce migliore dell'intera giornata.",
          },
          {
            type: "tip",
            text: "Se il biglietto include le torri (verificate), non saltatele: la vista dall'alto del cantiere e della città è impagabile, e si vede la struttura delle colonne dall'esterno in modo impossibile da apprezzare dall'interno.",
          },
        ],
        transitAfter:
          "A piedi 35 min verso i Bunkers · oppure Metro L5 Sagrada Família → L4 Joanic + 15 min a piedi (30 min totali)",
      },

      // ── 8. BUNKERS DEL CARMEL ───────────────────────────────
      {
        time: "19:15",
        name: "Bunkers del Carmel — tramonto",
        duration: "1 ora 30 min",
        tags: [
          { type: "free", label: "Gratis" },
          { type: "crowd", label: "🔴 Arrivate con anticipo" },
        ],
        description:
          "I resti di una batteria antiarea della Guerra Civile sulla cima del Turó de la Rovira: il panorama a 360° su tutta Barcellona è il più bello della città. Il tramonto ad aprile è intorno alle 20:35 — siate lì entro le 19:45 per trovare un posto.",
        longText:
          "<p>La batteria antiarea del Turó de la Rovira fu costruita nel 1937, durante la Guerra Civile Spagnola, per difendere Barcellona dai bombardamenti delle forze nazionaliste e della Legione Condor italo-tedesca. La posizione — 262 metri sul livello del mare, la quota più alta del centro urbano — garantiva un campo visivo a 360° sul mare, sul porto e sull'intera piana urbana. La batteria era dotata di quattro cannoni antiaerei da 105 mm e di stazioni di rilevamento acustico per individuare gli aerei in avvicinamento.</p><p>Barcellona fu una delle città europee più bombardate degli anni '30: tra il 1937 e il 1938 subì oltre 130 incursioni aeree, con più di 2.500 morti civili. I rifugi antiaerei costruiti sotto la città — alcuni ancora visitabili, come quello di Plaça del Diamant a Gràcia — e le batterie come questa erano l'unica difesa disponibile contro una minaccia allora nuova e devastante.</p><p>Dopo la caduta di Barcellona nel gennaio 1939, la batteria fu smantellata. Negli anni '50 e '60 la collina fu occupata da baracche di immigrati interni — il <em>barri de les barraques</em> — che furono demolite negli anni '70. I basamenti in cemento dei cannoni e i resti delle strutture militari sono quello che rimane oggi: una sovrapposizione di strati storici su una collina altrimenti dimenticata.</p><p>Il luogo divenne spontaneamente un punto di ritrovo per i barcellonesi a partire dagli anni '90, come alternativa autentica ai belvederi turistici. Oggi è inevitabilmente più frequentato — ma mantiene un'atmosfera diversa: si porta da bere, ci si siede sui ruderi di cemento, si aspetta il sole che scende sul Mediterrano. Nessun bar, nessun biglietto, nessun percorso obbligato.</p>",
        blocks: [
          {
            type: "photo",
            text: "Il momento migliore è 20-30 minuti prima del tramonto (~20:05-20:15): la luce radente incendia la città, il profilo della Sagrada Família si staglia contro il cielo arancione, e il porto riflette i colori del tramonto. Posizionatevi sul lato sud-est della cima.",
          },
          {
            type: "tip",
            text: "Portate qualcosa da bere — nessun bar lassù. La salita da Metro Joanic (L4) è 15 minuti a piedi in salita decisa: con lo zaino e dopo la Sagrada Família, calcolate 20 minuti.",
          },
        ],
        transitAfter: "A piedi in discesa verso Gràcia · 20 min",
      },

      // ── 9. CENA GRÀCIA ───────────────────────────────────────
      {
        time: "21:15",
        name: "Cena a Gràcia",
        duration: "1 ora 30 min",
        description:
          "Scendete dai Bunkers verso Gràcia per l'ultima cena vera del viaggio. Domani pranzate e poi partite — stasera è il momento giusto per qualcosa di buono.",
        blocks: [
          {
            type: "food",
            text: "<strong>La Pepita</strong> (Carrer del Consell de Cent 311): bocadillos creativi e piatti catalani. <strong>Bilbao</strong> (Carrer del Perill 33): classico del quartiere, cucina catalana tradizionale, prezzi onesti, sempre pieno — meglio prenotare. Su <strong>Carrer de Verdi</strong> trovate una concentrazione di bistrot: esploratelo senza prenotazione se preferite scegliere sul momento.",
          },
        ],
      },
    ],
    banners: [
      {
        type: "info",
        title: "Siete già stati ai Bunkers del Carmel?",
        text: "Se il giorno 2 eravate troppo stanchi per salire fino ai Bunkers allora questa è la giornta perfetta per farlo. Se invece siete già stati ieri, allora potreste pensare di posticipare la visita al Recinte Modernista de Sant Pau dopo la Sagrada Família, e poi aspettare il tramonto in quella zona.",
        beforeStop: 7,
      },
    ],
    bonus: {
      title: "🌙 Serata — Gràcia o rientro",
      text: "Dopo i Bunkers e la Sagrada Família avrete probabilmente le gambe a pezzi. Gràcia è il posto giusto per finire tranquilli: <strong>Heliogàbal</strong> (Carrer de Ramon i Cajal 80) per concerti in un locale minuscolo e acustico, <strong>Plaça del Sol</strong> per un ultimo vermut all'aperto. Chi ha ancora energie: Metro L3 Fontana → Passeig de Gràcia, e il Born è a portata di mano.",
    },
  },

  // ══════════════════════════════════════════════════════════
  // GIORNO 4 — ULTIMO GIORNO
  // ══════════════════════════════════════════════════════════
  {
    number: 4,
    label: "Giorno 4 — Born & Partenza",
    mobileLabel: "Giorno 4",
    title: "Palau de la Música,\nRaval e arrivederci Barcellona",
    subtitle:
      "L'ultimo giorno è lento per design: una sola tappa seria al mattino, il quartiere più autentico nel pomeriggio, e l'aeroporto alle 18:30. Volo alle 21:20.",
    mapsUrl:
      "https://www.google.com/maps/d/edit?mid=1RKBLm-mPf7yTYH-GtV9-TD8J69LhikA&usp=sharing",
    pills: [
      "🎵 Palau de la Música",
      "🚶 Raval e Born",
      "🛍️ Souvenir",
      "✈️  Partenza aeroporto 18:30",
    ],
    banners: [
      {
        type: "warning",
        title: "⏰ Logistica aeroporto",
        text: "Partite da Plaça Catalunya alle 18:30 massimo. Metro L9 Sud → Aeroport T1, circa 40 minuti. Siate al terminal alle 19:15 per check-in e sicurezza con margine.",
        beforeStop: 0,
      },
    ],
    stops: [
      // ── 1. COLAZIONE ────────────────────────────────────────
      {
        time: "09:00",
        name: "Colazione nel Born — ultima mattina",
        duration: "45 min",
        description:
          "Ultima colazione catalana. Niente fretta — è l'unico giorno del viaggio senza biglietti prenotati alle 9. Cercate un bar di quartiere senza scritte in inglese sul menù: croissant di burro, pa amb tomàquet, cafè amb llet.",
        longText:
          "<p>La <strong>colazione catalana</strong> ha una grammatica precisa e diversa da quella italiana o francese. Il <em>cafè amb llet</em> è un caffè lungo con latte caldo — meno concentrato dell'espresso italiano, servito in tazza grande. Il <em>tallat</em> è l'equivalente del macchiato. Il <em>pa amb tomàquet</em> — pane tostato strofinato con pomodoro maturo, sale e olio d'oliva — è il cibo identitario catalano per eccellenza: semplice, buono, presente a colazione come a cena. Il <em>croissant de mantequilla</em> catalano è spesso più burroso e meno sfogliato di quello francese — cercate quelli fatti in casa, non quelli industriali.</p><p>Un <em>forn</em> — panetteria — di quartiere è sempre la scelta migliore per la colazione: di solito fanno anche bar, i prezzi sono onesti e la qualità è nettamente superiore alle catene. Il Born ne ha diversi su Carrer del Comerç e Carrer de la Princesa.</p>",
        blocks: [
          {
            type: "food",
            text: "<strong>Federal Café</strong> (Carrer del Parlament 39, nel Raval — oggi ci passate): australiano di stile, molto buono per colazioni elaborate. <strong>Nomad Coffee</strong> (Passatge de la Seca 12, Born): per i puristi dell'espresso specialty. <strong>Forn de Sant Jaume</strong> (Rambla de Catalunya): classico forn barcellonese, ottimi croissant.",
          },
        ],
        transitAfter:
          "A piedi 8 min verso il Palau de la Música · Carrer de Sant Pere Més Alt",
      },

      // ── 2. PALAU DE LA MÚSICA CATALANA ──────────────────────
      {
        time: "10:00",
        name: "Palau de la Música Catalana — tour guidato",
        duration: "1 ora",
        tags: [
          {
            type: "book",
            label: "📅 Prenota online (~20€) — tour ogni 30 min",
          },
        ],
        description:
          "Il capolavoro di Domènech i Montaner: la sala da concerti più bella d'Europa secondo molti. Il tour guidato è l'unico modo per entrarci senza un biglietto per un concerto, dura esattamente un'ora e vale ogni centesimo. La vetrata del soffitto è probabilmente la cosa visivamente più straordinaria di tutto il viaggio — e non è fotografabile in modo soddisfacente: esiste solo dal vivo.",
        longText:
          "<p>Il Palau de la Música Catalana fu commissionato nel 1905 dall'<em>Orfeó Català</em> — la società corale fondata nel 1891 come simbolo del movimento di rinascita culturale catalana, la <em>Renaixença</em> — e inaugurato nel 1908. L'architetto era <strong>Lluís Domènech i Montaner</strong>, lo stesso di Sant Pau: i due edifici, costruiti quasi simultaneamente, sono i vertici del Modernisme catalano insieme alle opere di Gaudí, e nel 1997 furono dichiarati UNESCO insieme come unico sito.</p><p>Il Palau è costruito in un lotto strettissimo nel tessuto medievale di Sant Pere — non c'era spazio per una facciata ampia o un ingresso monumentale. Domènech risolse il problema trasformando ogni superficie disponibile in ornamento: la facciata su Carrer de Sant Pere Més Alt è un collage di colonne tortili, mosaici, sculture allegoriche e vetrate istoriate. Il <strong>gruppo scultoreo</strong> d'angolo di Miquel Blay — \"La Cançó Popular\" — rappresenta la musica popolare catalana che si eleva verso la musica colta: donne, bambini, angeli e Sant Jordi che emergono dalla pietra in un movimento ascendente.</p><p>Ma è l'<strong>interno</strong> che è rivoluzionario. La sala da concerti è l'unica al mondo con illuminazione naturale su entrambi i lati — Domènech eliminò i muri laterali portanti sostituendoli con grandi vetrate istoriate, e coprì il soffitto con una cupola rovesciata di vetro colorato progettata da Antoni Rigalt. La struttura portante è in ferro, il rivestimento è interamente in ceramica, mosaico e vetro. Il risultato è uno spazio che cambia completamente con la luce esterna: al mattino è dorato, al pomeriggio arancione, la sera quasi viola.</p><p>Le <strong>sculture della boccascena</strong> — il palcoscenico — sono tra le più straordinarie del Modernisme: a sinistra il busto di Beethoven emerge dalla parete in rilievo con le Valchirie wagneriane; a destra il busto di Anselm Clavé — fondatore del movimento corale catalano — è circondato da donne catalane in costume tradizionale. I due poli della musica colta europea e della tradizione popolare catalana si fronteggiano sul palcoscenico ogni sera.</p><p>Il Palau fu ampliato tra il 2003 e il 2004 dall'architetto Oscar Tusquets, che aggiunse la sala da camera sotterranea e il foyer esterno conservando rigorosamente lo stile originale. È ancora oggi una sala da concerti attiva — l'<em>Orfeó Català</em> vi si esibisce regolarmente, e ospita la stagione di musica da camera più importante di Barcellona.</p>",
        blocks: [
          {
            type: "photo",
            text: "La sala concerti non è fotografabile in modo soddisfacente con un telefono — la vetrata del soffitto richiede un'esposizione molto lunga e un grandangolo vero. Godetevela con gli occhi: è una di quelle esperienze che esistono solo dal vivo.",
          },
          {
            type: "tip",
            text: "I tour partono ogni 30 minuti in più lingue — prenotate lo slot delle 10:00 o 10:30 online. Il tour dura esattamente 1 ora e include la sala concerti, il foyer, la sala da camera e le vetrate laterali.",
          },
        ],
        transitAfter:
          "A piedi 10 min verso il Raval attraverso Via Laietana e il Gotico",
      },

      // ── 3. GOTICO — QUELLO CHE MANCA ────────────────────────
      {
        time: "11:10",
        name: "Gotico — gli angoli mancanti",
        duration: "45 min",
        tags: [{ type: "free", label: "Gratis" }],
        description:
          "Il giorno 1 avete attraversato il Gotico di corsa. Oggi avete tempo per quello che avete saltato: il Pont del Bisbe se non lo avete visto bene, le mura romane di Plaça Nova, il Tempio di Augusto nascosto nel cortile di Carrer del Paradís 10.",
        longText:
          "<p>Il <strong>Tempio di Augusto</strong> (Carrer del Paradís 10) è uno dei resti romani meglio conservati della Penisola Iberica — quattro colonne corinzie alte 9 metri del I secolo a.C., inglobate nel cortile medievale del Centre Excursionista de Catalunya. L'ingresso è gratuito o con piccolo contributo, quasi sempre deserto. Le colonne appartenevano al <em>Templum Augusti</em>, il tempio dedicato all'imperatore Augusto che si trovava al centro del foro di Barcino — la piazza principale della colonia romana.</p><p>Le <strong>mura romane</strong> di Plaça Nova sono un tratto del perimetro difensivo costruito nel II–IV secolo d.C. per proteggere Barcino: sono alte fino a 9 metri e conservano due torri cilindriche originali. Barcellona medievale costruì sopra e intorno a queste mura per secoli — in molti punti del Gotico si vedono ancora i blocchi romani inglobati nelle costruzioni successive.</p><p>Il <strong>Pont del Bisbe</strong> di giorno, senza la folla del giorno 1, permette di leggere meglio i dettagli gotici e la piccola scultura con teschio e pugnale al centro — quasi impossibile da vedere con la calca del mattino.</p>",
        blocks: [
          {
            type: "tip",
            text: "Il Tempio di Augusto è a Carrer del Paradís 10 — cercate il portone medievale, entrate nel cortile e le colonne sono lì. Nessuna insegna esterna, quasi nessun turista. È uno dei posti più sorprendenti di Barcellona.",
          },
        ],
        transitAfter: "A piedi 10 min verso il Raval attraverso la Rambla",
      },

      // ── 4. EL RAVAL ─────────────────────────────────────────
      {
        time: "12:00",
        name: "El Raval — MACBA e Hospital de la Santa Creu",
        duration: "1 ora",
        tags: [{ type: "free", label: "Gratis (esterno e corte ospedale)" }],
        description:
          "Il quartiere più autentico e meno patinato del centro storico. Non ha monumenti obbligatori — ma ha il MACBA di Richard Meier, la corte medievale dell'Hospital de la Santa Creu, e la Rambla del Raval con il gatto gigante di Botero. È la Barcellona multiculturale e contemporanea: molto diversa come tono dal resto del viaggio.",
        longText:
          "<p>Il <strong>Raval</strong> — dall'arabo <em>rabad</em>, sobborgo — era il quartiere fuori dalle mura medievali di Barcellona, storicamente abitato da artigiani, lavoratori, prostitute e immigrati. Nel XIX e inizio XX secolo divenne il quartiere più densamente popolato d'Europa, con condizioni igieniche disastrose — Orwell lo descrisse come un labirinto di vicoli bui nel suo <em>Omaggio alla Catalogna</em>. La demolizione del Barrio Chino negli anni '80 e la costruzione del MACBA e del CCCB negli anni '90 avviarono una trasformazione radicale che non è ancora completata: il Raval è oggi un quartiere in tensione, con comunità di immigrati pakistani, filippini e magrebini che convivono con gallerie d'arte, bar di design e studenti universitari.</p><p>Il <strong>MACBA</strong> — Museu d'Art Contemporani de Barcelona — fu progettato dall'architetto americano Richard Meier e inaugurato nel 1995. L'edificio è un manifesto del minimalismo bianco di Meier: facciate in pannelli di metallo smaltato bianco, rampe di vetro, luce naturale come elemento strutturale. La collezione permanente copre l'arte europea e latinoamericana dagli anni '50 ad oggi, con particolare forza sull'Arte Povera, il concettualismo spagnolo degli anni del franchismo e la scena catalana contemporanea. Il biglietto è ~12€ — vale se avete interesse per l'arte contemporanea, altrimenti l'edificio si apprezza bene dall'esterno.</p><p>L'<strong>Hospital de la Santa Creu</strong> (Carrer de l'Hospital 56) fu fondato nel 1401 e rimase l'ospedale principale di Barcellona fino al 1930, quando fu sostituito dal Recinte de Sant Pau di Domènech i Montaner. Gaudí morì in questo ospedale nel 1926, investito da un tram sulla Rambla — fu portato qui perché i passanti non lo riconobbero e lo scambiarono per un mendicante. Il complesso gotico-rinascimentale ospita oggi la Biblioteca de Catalunya e l'Institut d'Estudis Catalans: la corte interna con gli aranci è uno dei luoghi più tranquilli del centro storico, quasi sempre senza turisti.</p><p>La <strong>Rambla del Raval</strong> è una versione più autentica e meno turistica della Rambla principale: aperta nel 2000 demolendo un isolato di abitazioni sovraffollate, è larga e alberata, frequentata principalmente dai residenti del quartiere. Al centro si trova il <em>Gat</em> di Fernando Botero (2003) — una scultura in bronzo di un gatto rotondo e monumentale, diventata punto di ritrovo per i bambini del quartiere.</p>",
        blocks: [
          {
            type: "tip",
            text: "La corte dell'Hospital de la Santa Creu è aperta al pubblico gratuitamente — entrate dal portone su Carrer de l'Hospital. È uno dei posti più tranquilli del centro storico e quasi nessun turista lo sa.",
          },
          {
            type: "photo",
            text: "Il MACBA dall'esterno: la facciata bianca riflette la luce in modo diverso a ogni ora. La piazza davanti — Plaça dels Àngels — è frequentata da skater dai primi anni '90: uno dei punti di skate urbano più famosi d'Europa.",
          },
        ],
        transitAfter: "A piedi 10 min verso El Born attraverso la Rambla",
      },

      // ── 5. ULTIMO PRANZO ────────────────────────────────────
      {
        time: "13:15",
        name: "Ultimo pranzo — Born o Gotico",
        duration: "1 ora 15 min",
        description:
          "Ultimo menú del día a Barcellona. Niente fretta — avete ancora quasi 4 ore prima dell'aeroporto. Sedetevi, ordinate bene, brindateci sopra.",
        blocks: [
          {
            type: "food",
            text: "<strong>Bar del Pla</strong> (Carrer de la Montcada 2): se non ci siete tornati dal giorno 1, è il posto giusto per chiudere. <strong>El Xampanyet</strong> (Carrer de la Montcada 22): ultimo bicchiere di cava della casa. <strong>La Mar Salada</strong> (Passeig de Joan de Borbó 58, vicino al porto): paella e pesce, prezzi alti ma è l'ultimo giorno — prenotate.",
          },
        ],
        transitAfter: "A piedi verso il Born e Plaça Catalunya",
      },

      // ── 6. SOUVENIR E TEMPO LIBERO ──────────────────────────
      {
        time: "14:35",
        name: "Souvenir e tempo libero",
        duration: "1 ora 30 min",
        tags: [{ type: "free", label: "Passeggiata libera" }],
        description:
          "L'ultimo giro senza meta. I souvenir seri si comprano nel Gotico o nel Born — non sulle Ramblas. Poi Plaça Catalunya per sedersi, guardare la gente, e salutare la città.",
        longText:
          "<p>I <strong>souvenir autentici</strong> di Barcellona non sono le magliette del Barça o le ciotole con la scritta BCN. Alcune idee concrete: <strong>ceramiche catalane</strong> nei negozi artigianali del Gotico (Carrer de la Palla, Carrer dels Banys Nous) — piatti, tazze e mattonelle con motivi tradizionali; <strong>vermut artigianale</strong> — il Yzaguirre o il Miró sono prodotti in Catalogna e si trovano in qualsiasi supermercato o vinoteca; <strong>turron di Alicante o Jijona</strong> nelle pasticcerie storiche; <strong>caffè specialty</strong> da Nomad o El Magnífico (Carrer de l'Argenteria 64, Born — torrefazione artigianale dal 1919); <strong>libri</strong> — una guida, un romanzo ambientato a Barcellona, o una raccolta di fotografie della città.</p>",
        blocks: [
          {
            type: "tip",
            text: "<strong>El Magnífico</strong> (Carrer de l'Argenteria 64) è una delle torrefazioni più antiche e rispettate di Barcellona: comprate caffè sfuso da portare a casa — è un souvenir che si usa davvero.",
          },
          {
            type: "warning",
            text: "Evitate i negozi sulle Ramblas e quelli con espositori di magneti fuori dalla porta: i prezzi sono gonfiati del 200-300% rispetto ai negozi di quartiere a 50 metri di distanza.",
          },
        ],
        transitAfter:
          "A piedi verso l'hotel per i bagagli, poi Metro L9 Sud da Plaça Catalunya",
      },

      // ── 7. AEROPORTO ────────────────────────────────────────
      {
        time: "18:30",
        name: "✈️ Partenza — Metro L9 Sud per l'aeroporto",
        duration: "40 min (Metro)",
        description:
          "Metro L9 Sud da Plaça Catalunya fino ad Aeroport T1 — circa 40 minuti, nessun cambio. Biglietto speciale aeroporto (~5€, non vale il normale T-Casual). Siate al terminal alle 19:15 per check-in e sicurezza con margine sul volo delle 21:20.",
        blocks: [
          {
            type: "warning",
            text: "Il biglietto della Metro normale non è valido per la L9 verso l'aeroporto: acquistate il biglietto speciale aeroporto (~5,15€ a testa) alle macchinette o allo sportello. Non fate l'errore al tornello — la multa è salata.",
          },
          {
            type: "tip",
            text: "Il Terminal 1 (T1) è capolinea della L9 Sud. Se il vostro volo parte dal T2, scendete una fermata prima — Aeroport T2. Verificate sul biglietto aereo qual è il vostro terminal.",
          },
        ],
      },
    ],
    bonus: {
      title: "🛫 Fino all'ultimo minuto",
      text: "Se siete in anticipo all'aeroporto o volete un'ultima birra prima di imbarcarvi: il T1 ha un'area bar/ristoranti dopo i controlli di sicurezza discreta. Ma la verità è che la birra migliore dell'ultimo giorno ve la siete già bevuta al Born — l'aeroporto è solo la porta di uscita.",
    },
  },
];

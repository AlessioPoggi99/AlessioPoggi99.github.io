// ─────────────────────────────────────────────────────────────
// GUIDA — Cibo, Locali, Consigli pratici
// ─────────────────────────────────────────────────────────────

export interface GuideEntry {
  name: string;
  subtitle?: string;
  description: string;
  tip?: string;
  where?: string; // dove trovarlo / indirizzo indicativo
  price?: string; // fascia di prezzo
  tag?: string; // etichetta libera
}

export interface GuideSection {
  id: string;
  title: string;
  emoji: string;
  intro: string;
  entries: GuideEntry[];
}

export const guide: GuideSection[] = [
  // ── PIATTI TIPICI ─────────────────────────────────────────
  {
    id: "piatti",
    title: "Piatti tipici catalani",
    emoji: "🍽",
    intro:
      "La cucina catalana non è cucina spagnola — ha una storia e un'identità proprie, con radici medievali e influenze mediterranee. Pesce, legumi, maiale, baccalà e una tradizione di salse uniche come l'allioli e la romesco. Ecco cosa ordinare e cosa aspettarsi.",
    entries: [
      {
        name: "Pa amb tomàquet",
        subtitle: "Pane con pomodoro e olio",
        description:
          "Il cibo identitario della Catalogna. Pane tostato — o fresco, dipende dall'osteria — strofinato con mezzo pomodoro maturo, sale grosso e abbondante olio d'oliva. Semplice al limite del minimalismo, buono in modo disarmante. Accompagna ogni pasto, dalla colazione alla cena.",
        tip: "Se arriva il pane già preparato, è fatto bene. Se arriva con pomodoro, olio e sale separati per farlo da soli, è ancora meglio — significa che il locale ci tiene.",
        where: "Ovunque — qualsiasi bar o ristorante catalano",
        price: "€",
        tag: "Quotidiano",
      },
      {
        name: "Escalivada",
        subtitle: "Verdure arrostite",
        description:
          'Peperoni rossi e melanzane arrostiti direttamente sulla fiamma, poi spellati, conditi con olio d\'oliva e serviti a temperatura ambiente. Il nome viene dal catalano "escalivar" — arrostire sulla brace. È un contorno, un antipasto o un piatto autonomo. Sapore affumicato intenso, texture morbida.',
        tip: "Ottima sopra il pa amb tomàquet, come bruschetta elaborata. Spesso accompagnata da acciughe o formaggio fresco.",
        where: "Ristoranti catalani tradizionali, mercati",
        price: "€",
        tag: "Antipasto",
      },
      {
        name: "Croquetes de bacallà o de pernil",
        subtitle: "Crocchette di baccalà o prosciutto",
        description:
          "Le crocchette catalane sono tecnicamente diverse da quelle spagnole: besciamella più densa, panatura più sottile e croccante, ripieno più generoso. Quelle di baccalà (bacallà) hanno una sapidità intensa e marina; quelle di jamón ibérico sono burroso-umami. Sono il cicchetto da ordinare appena ci si siede.",
        tip: "Il test per capire la qualità di un bar: se le croquetes sono buone, tutto il resto lo sarà probabilmente anche. Se sono fredde o mollicce, cambiate locale.",
        where: "Qualsiasi bar di tapas — Bar del Pla, El Xampanyet",
        price: "€",
        tag: "Tapas",
      },
      {
        name: "Botifarra amb mongetes",
        subtitle: "Salsiccia con fagioli bianchi",
        description:
          "Il piatto della domenica per eccellenza della cucina catalana. La botifarra è una salsiccia di maiale fresca condita con sale, pepe e a volte erbe aromatiche — senza le spezie forti del chorizo. Servita con fagioli cannellini saltati in olio e aglio. Rustica, sostanziosa, perfetta con un bicchiere di vi negre.",
        tip: "Esiste anche la botifarra negra (con sangue) e la botifarra dolça (con cannella e limone, tipica di Girona). La variante dolce è un'esperienza gastronomica che vale la curiosità.",
        where: "Ristoranti catalani tradizionali, El Glop a Gràcia",
        price: "€€",
        tag: "Secondo piatto",
      },
      {
        name: "Fideuà",
        subtitle: "Paella di spaghettini",
        description:
          "La versione catalana della paella, ma con spaghettini corti (fideus) al posto del riso. Nata a Gandia, ma adottata pienamente dalla cucina barcellonese. Si cuoce in padella piatta, gli spaghettini assorbono il brodo di pesce e si tostano sul fondo creando una crosta croccante — il socarrat — esattamente come la paella. Servita con allioli a parte.",
        tip: "Il socarrat — la crosticina sul fondo della padella — è la parte più pregiata. Un buon ristorante la lascia formare senza bruciare. Se il fondo è tutto morbido, non è stata cotta abbastanza.",
        where: "Ristoranti di pesce — La Mar Salada, La Cova Fumada",
        price: "€€€",
        tag: "Pesce",
      },
      {
        name: "Bacallà a la llauna",
        subtitle: "Baccalà in padella con pomodoro e aglio",
        description:
          "Una delle preparazioni più antiche del baccalà catalano: filetti di baccalà dissalato infarinati e fritti, poi cotti in una casseruola di latta (llauna) con pomodoro, aglio, paprika e vino bianco. Il risultato è intenso, leggermente piccante, profondamente saporito. Il baccalà è ingrediente cardine della cucina catalana dalla conquista medievale del Mediterraneo.",
        tip: "Barcellona aveva una delle flotte di pesca del baccalà più attive d'Europa fino al XX secolo — le rotte portavano fino all'Islanda e alla Terranova. Il baccalà non è un ingrediente di ripiego: è storia gastronomica.",
        where: "Can Culleretes (il ristorante più antico di Barcellona, 1786)",
        price: "€€",
        tag: "Pesce",
      },
      {
        name: "Patatas bravas",
        subtitle: "Patate fritte con salsa piccante",
        description:
          "Ubique in tutta la Spagna, ma a Barcellona hanno una particolarità: la salsa brava è spesso più cremosa e meno aggressiva rispetto alla versione madrilena, e viene quasi sempre servita anche con allioli a parte — o con una salsa mista metà-metà. Le patate sono tagliate a pezzi irregolari, fritte a doppia cottura per essere croccanti fuori e morbide dentro.",
        tip: "Ogni bar ha la propria versione della salsa brava — confrontarle è uno dei giochi più divertenti del viaggio. La versione di Bar Tomàs a Sarrià (vicino alla vostra casa) è considerata tra le migliori di Barcellona.",
        where:
          "Bar Tomàs (Carrer de la Mare de Déu dels Desamparats 2, Sarrià)",
        price: "€",
        tag: "Tapas",
      },
      {
        name: "Crema catalana",
        subtitle: "Crema con crosticina di zucchero bruciato",
        description:
          "L'originale — precedente alla crème brûlée francese di almeno un secolo secondo la tradizione catalana. Crema pasticciera profumata con scorza di limone e cannella, con uno strato di zucchero caramellato al momento con il ferro rovente. La consistenza è più fluida della versione francese, il profumo di cannella più presente.",
        tip: "La crema catalana tradizionale si mangia fredda con la crosticina calda — il contrasto è il punto. Se arriva tiepida tutta uguale, è quella industriale riscaldata.",
        where: "Qualsiasi ristorante catalano tradizionale",
        price: "€",
        tag: "Dolce",
      },
      {
        name: "Bombas de la Barceloneta",
        subtitle: "Polpette fritte di carne e patate",
        description:
          'La specialità di strada del quartiere della Barceloneta: una grande polpetta di carne macinata e purè di patate, panata e fritta, servita con salsa brava e allioli. La leggenda vuole che sia stata inventata nel XIX secolo da una donna soprannominata "La Bombeta" nel suo bar sul lungomare. La Cova Fumada è considerata la depositaria della ricetta originale.',
        tip: "La dimensione è quella di una pallina da tennis. Una a testa come antipasto, due come pasto. Non sono leggere.",
        where:
          "La Cova Fumada (Carrer del Baluard 56, Barceloneta) — solo pranzo, chiude quando finisce il cibo",
        price: "€",
        tag: "Street food",
      },
      {
        name: "Pintxos",
        subtitle: "Tapas baschi su pane",
        description:
          "Tecnicamente non catalani — vengono dal País Vasco — ma Barcellona li ha adottati con entusiasmo e Carrer de Blai a Poble Sec è diventata la via dei pintxos più famosa della città. Preparazioni su fetta di pane: gamberi, foie, brie con marmellata, tortilla, anchoas. Si prende un piatto, si sceglie dal bancone, si paga a fine. Di solito 1,50-2€ a pintxo.",
        tip: 'I pintxos caldi — quelli preparati al momento su richiesta — sono sempre migliori di quelli freddi sul bancone da ore. Chiedete "¿hay pintxos calientes?" quando entrate.',
        where: "Carrer de Blai, Poble Sec — La Tasqueta de Blai, Blai 9",
        price: "€",
        tag: "Street food",
      },
      {
        name: "Vermut",
        subtitle: "Aperitivo catalano — rito del mezzogiorno",
        description:
          "A Barcellona il vermut non è solo un drink — è un rito sociale con orario preciso: dalle 12 alle 14, il sabato e la domenica in particolare. Si beve il vermut rosso locale (Yzaguirre, Miró, o Cinzano) con ghiaccio, scorza d'arancia e olive, accompagnato da chips, acciughe o qualche tapa. Niente spumante, niente Aperol — quello è Milano.",
        tip: "I locali a Barcellona fanno l'aperitivo a mezzogiorno, non alle 18. Se volete fare il vermut come i barcellonesi, sedetevi in una piazza di Gràcia o del Born verso le 12:30 di sabato.",
        where:
          "El Xampanyet, Bar Calders, qualsiasi bar con tavolini all'aperto a Gràcia",
        price: "€",
        tag: "Aperitivo",
      },
      {
        name: "Cava",
        subtitle: "Spumante catalano metodo classico",
        description:
          "Il cava è lo spumante catalano prodotto principalmente nel Penedès, a 40 km da Barcellona, con metodo classico (seconda fermentazione in bottiglia — stesso metodo dello Champagne). Le uve principali sono Macabeo, Xarel·lo e Parellada — varietà autoctone catalane. Il cava brut è secco e minerale; il semiseco è leggermente dolce. Costa una frazione dello Champagne e spesso è altrettanto buono.",
        tip: "Codorníu e Freixenet sono i produttori industriali più noti. Per qualcosa di più interessante: Recaredo, Raventós i Blanc o Gramona — biologici, non sboccati, di altissimo livello. Li trovate in qualsiasi vinoteca del Born.",
        where: "El Xampanyet (cava della casa ottimo), qualsiasi vinoteca",
        price: "€-€€",
        tag: "Da bere",
      },
    ],
  },

  // ── RISTORANTI ────────────────────────────────────────────
  {
    id: "ristoranti",
    title: "Ristoranti consigliati",
    emoji: "🍴",
    intro:
      "Non una classifica generica, ma locali divisi per occasione e budget — da quello da colazione veloce a quello dove spendere bene l'ultima sera. Barcellona ha una densità gastronomica altissima: questi sono i posti che vale la pena cercare.",
    entries: [
      {
        name: "Bar Pinotxo",
        subtitle: "Colazione e pranzo — Mercat de la Boqueria",
        description:
          "Il bancone più famoso della Boqueria e probabilmente di tutta Barcellona. Juanito Bayen — il proprietario storico, cappello bianco e sorriso perenne — ha cucinato qui per decenni. Uova con botifarra, ceci con bacalà, sanguinaccio con ceci, succo di canna da zucchero. Cibo autentico, veloce, seduti su uno sgabello in mezzo al mercato.",
        tip: "Arrivate alle 9 o troverete fila. Apre solo la mattina — chiude verso le 16.",
        where:
          "Mercat de la Boqueria, bancone a destra dell'ingresso principale",
        price: "€€",
        tag: "Colazione / Pranzo",
      },
      {
        name: "Bar del Pla",
        subtitle: "Tapas catalane — El Born",
        description:
          "Uno dei migliori bar di tapas del Born: crocchette perfette, patatas bravas con salsa generosa, cap i pota (trippa con testa di maiale — suona peggio di quanto sia), buon menú del giorno. Ambiente informale, prezzi onesti, sempre pieno. Aperto sia a pranzo che a cena.",
        tip: "Prenotate per la cena — a pranzo i posti al bancone si trovano più facilmente. Le crocchette di jamón e il baccalà gratinato sono i piatti migliori.",
        where: "Carrer de la Montcada 2, El Born",
        price: "€€",
        tag: "Pranzo / Cena",
      },
      {
        name: "El Xampanyet",
        subtitle: "Osteria con cava — El Born",
        description:
          "Dal 1929. Muri di mattonelle bianche e blu, botti di legno, cava della casa a 2€ al bicchiere. Acciughe, formaggio, pane con pomodoro, qualche tapa semplice. Non è un ristorante — è un posto dove bersi qualcosa e mangiucchiare in piedi o seduti su sgabelli traballanti. Perfetto dopo Santa Maria del Mar.",
        tip: "Il cava della casa è anonimo ma onesto. Le acciughe del Cantabrico sono la cosa migliore del menu. Apre solo pranzo e parte del pomeriggio — verificate gli orari.",
        where: "Carrer de la Montcada 22, El Born",
        price: "€",
        tag: "Aperitivo / Spuntino",
      },
      {
        name: "La Cova Fumada",
        subtitle: "Inventori della bomba — Barceloneta",
        description:
          "Un locale senza insegna, senza carta dei vini, senza prenotazioni, aperto solo a pranzo e solo finché dura il cibo. La famiglia Solé gestisce questo posto dal 1944 e rivendica l'invenzione delle bombas. Oltre alle polpette: frittura di pesce, bacalà, calamaretti. Cucina popolare barcellonese nella sua forma più autentica.",
        tip: "Apre alle 9, esaurisce il cibo verso le 15. Non accettano prenotazioni. Arrivate presto e fate la fila — ne vale la pena.",
        where: "Carrer del Baluard 56, Barceloneta",
        price: "€",
        tag: "Pranzo",
      },
      {
        name: "Cervecería Catalana",
        subtitle: "Tapas e birra — Eixample",
        description:
          "Il posto giusto per un pranzo veloce nell'Eixample dopo La Pedrera o Casa Batlló. Tapas di qualità, pane con pomodoro sempre presente, birra fresca, menú del giorno decente. C'è quasi sempre una piccola fila fuori — di solito scorre in 10-15 minuti.",
        tip: "Arrivate alle 13 o alle 14:30 per evitare il picco. I tavoli fuori sono i migliori in giornate di sole.",
        where: "Carrer de Mallorca 236, Eixample",
        price: "€€",
        tag: "Pranzo",
      },
      {
        name: "Bilbao",
        subtitle: "Cucina catalana tradizionale — Gràcia",
        description:
          "Un classico di Gràcia dal 1979. Cucina catalana senza fronzoli: botifarra amb mongetes, bacalà in mille modi, escudella (lo stufato catalano invernale), ottimi dolci. Ambiente da trattoria di quartiere, prezzi onesti, frequentato dai barcellonesi del quartiere — non dai turisti.",
        tip: "Prenotate: è piccolo e sempre pieno la sera. Il menú del giorno a pranzo è uno dei migliori rapporti qualità-prezzo di Gràcia.",
        where: "Carrer del Perill 33, Gràcia",
        price: "€€",
        tag: "Cena",
      },
      {
        name: "Can Culleretes",
        subtitle: "Il ristorante più antico di Barcellona — Gotico",
        description:
          "Aperto nel 1786, terzo ristorante più antico della Spagna. Cucina catalana classica: escudella i carn d'olla, botifarra, bacalà, fricandó (stufato di vitello con morels). Le pareti tappezzate di foto di personaggi famosi che ci hanno mangiato negli ultimi due secoli. Non è cool, non è moderno — è autentico in un modo che non si trova quasi più.",
        tip: "Prenotate anche qui: è sempre pieno, specialmente la domenica a pranzo quando i barcellonesi vengono per il pranzo di famiglia. I menú fissi sono la scelta migliore.",
        where: "Carrer dels Escudellers 5, Barrio Gótico",
        price: "€€",
        tag: "Pranzo / Cena",
      },
      {
        name: "La Mar Salada",
        subtitle: "Pesce e paella — Porto",
        description:
          "Se volete spendere bene una sera su pesce e frutti di mare in un posto serio, La Mar Salada è la scelta più affidabile vicino al porto. Paella di pesce, fideuà, gamberi di Palamós (i migliori della Costa Brava), aragoste. Vista sul porto. Prezzi alti ma giustificati.",
        tip: "Prenotate — è sempre pieno. La paella richiede minimo due persone e 30 minuti di cottura: ordinate subito. I gamberi di Palamós al sale sono la cosa migliore del menu.",
        where: "Passeig de Joan de Borbó 58, Barceloneta",
        price: "€€€",
        tag: "Cena speciale",
      },
      {
        name: "Bodega Sepúlveda",
        subtitle: "Tapas e vino sfuso — Eixample / Born",
        description:
          "Una bodega nel senso originale del termine: cantina dove si vende vino sfuso e si mangia qualcosa. Atmosfera da anni '70, vino catalano al bicchiere a prezzi da supermercato, tapas semplici e buone. Il tipo di posto che i turisti non trovano mai perché non ha presenza online degna di nota.",
        tip: "Il vino sfuso della casa — rosso o bianco — costa circa 1,50€ al bicchiere. Non chiedete la carta dei vini perché non esiste.",
        where: "Carrer de Sepúlveda 173, Eixample Esquerra",
        price: "€",
        tag: "Aperitivo / Cena",
      },
      {
        name: "La Barraca",
        subtitle: "Paella e riso — Barceloneta",
        description:
          "Direttamente sul Passeig Marítim con vista sul Mediterraneo. La paella valenciana è preparata con riso bomba di Calasparra, brodo di pesce fatto in casa e zafferano — niente scorciatoie. Il socarrat è garantito. Tra i posti più seri per il riso in città, senza cadere nella trappola turistica del lungomare.",
        tip: "La paella richiede minimo due persone e 25-30 minuti di cottura — ordinate appena seduti. Evitate i ristoranti vicini con foto plastificate fuori: Barraca non ne ha.",
        where: "Passeig Marítim de la Barceloneta 1, Barceloneta",
        price: "€€€",
        tag: "Paella",
      },
    ],
  },

  // ── LOCALI E DISCOTECHE ───────────────────────────────────
  {
    id: "locali",
    title: "Locali, bar e discoteche",
    emoji: "🎶",
    intro:
      "Barcellona ha una delle scene notturne più vivaci d'Europa — ma funziona con orari completamente diversi dall'Italia. I bar si riempiono dopo le 23, i club aprono a mezzanotte e diventano interessanti dall'1 in poi. Pianificate di conseguenza.",
    entries: [
      {
        name: "Paradiso",
        subtitle: "Cocktail bar nascosto — El Born",
        description:
          "Uno dei cocktail bar più famosi d'Europa, classificato regolarmente nella World's 50 Best Bars. L'ingresso è attraverso un frigorifero finto in una panineria — Pastrami Bar — su Carrer de Rera Palau. Dentro: 30 posti, cocktail di ricerca elaboratissimi, atmosfera intima. Ogni drink è un progetto: ingredienti inaspettati, tecniche da laboratorio, presentazioni teatrali.",
        tip: "Prenotate online — esaurisce sempre. In alternativa arrivate alle 19:30 appena apre e chiedete posti walk-in. Lista d'attesa sul sito la domenica mattina per la settimana successiva.",
        where: "Carrer de Rera Palau 4, El Born (ingresso dal Pastrami Bar)",
        price: "€€€",
        tag: "Cocktail bar",
      },
      {
        name: "Bar Marsella",
        subtitle: "Il bar più antico di Barcellona — El Raval",
        description:
          "Aperto nel 1820, quasi certamente il bar più antico di Barcellona ancora in funzione. Le bottiglie sugli scaffali sono alcune le stesse degli anni '50 — ricoperte di polvere, mai spostate. Servono assenzio con il rituale tradizionale: bicchiere, zolletta di zucchero, cucchiaino forato, acqua versata lentamente. Atmosfera da altro secolo, prezzi bassissimi, frequentato da artisti, nottambuli e curiosi da generazioni.",
        tip: "Apre tardi (dalle 22 circa) e chiude quando il gestore ha voglia. Non sempre aperto — se la porta è chiusa, tornate un'altra sera. Portate cash.",
        where: "Carrer de Sant Pau 65, El Raval",
        price: "€",
        tag: "Bar storico",
      },
      {
        name: "El Xampanyet",
        subtitle: "Cava e tapas — El Born",
        description:
          "Lo stesso El Xampanyet già citato tra i ristoranti — ma merita menzione anche come primo stop della serata, prima di cena. Cava della casa, acciughe, atmosfera autentica. Il posto giusto per iniziare una serata nel Born senza spendere molto.",
        where: "Carrer de la Montcada 22, El Born",
        price: "€",
        tag: "Aperitivo",
      },
      {
        name: "Heliogàbal",
        subtitle: "Live music e concerti — Gràcia",
        description:
          "Un locale minuscolo su Carrer de Ramon i Cajal a Gràcia: 60-70 persone al massimo, acustica sorprendentemente buona, concerti quasi ogni sera — indie, jazz, sperimentale, world music. Non è uno spazio pretenzioso: è un posto dove la gente va per la musica. Ingresso spesso gratuito o con consumazione.",
        tip: "Controllate il programma su Instagram o sul sito prima di andarci. I concerti iniziano tardi — verso le 22-23. Dopo la musica rimane aperto come bar.",
        where: "Carrer de Ramon i Cajal 80, Gràcia",
        price: "€",
        tag: "Live music",
      },
      {
        name: "Moog",
        subtitle: "Club di musica elettronica — El Raval",
        description:
          "Uno dei club storici della scena elettronica barcellonese, aperto dal 1996. Due sale: techno e minimal di qualità nella sala principale, musica commerciale e pop al piano superiore. Piccolo, caldo, underground. Resident DJ di livello, ospiti internazionali nel weekend.",
        tip: "Apre a mezzanotte, diventa interessante dall'1:30 in poi. Ingresso 10-15€ spesso con una consumazione inclusa. Dress code inesistente — sneakers e t-shirt vanno benissimo.",
        where: "Carrer de l'Arc del Teatre 3, El Raval",
        price: "€€",
        tag: "Club / Elettronica",
      },
      {
        name: "Razzmatazz",
        subtitle: "Club multi-sala — Poblenou",
        description:
          "Il club più grande e famoso di Barcellona: cinque sale con generi diversi — indie rock, elettronica, pop, techno, musica alternativa — che funzionano simultaneamente. Capienza 3.000 persone. Ospita regolarmente concerti di artisti internazionali prima della parte club. È grande, può essere caotico, ma è l'esperienza-club barcellonese per eccellenza.",
        tip: "Controllate se c'è un concerto in programma la sera che andate — i biglietti per i concerti includono spesso l'accesso al club dopo. Apre all'1, picco alle 3-4. Taxi per tornare — è a Poblenou, lontano dal Born.",
        where: "Carrer dels Almogàvers 122, Poblenou",
        price: "€€",
        tag: "Club grande",
      },
      {
        name: "Sala Apolo",
        subtitle: "Storico club e live venue — Paral·lel",
        description:
          "Un teatro degli anni '40 convertito in club: il soffitto affrescato e il parquet originale convivono con un impianto audio da 3.000 watt. Concerti durante la settimana (rock, indie, elettronico), poi club il venerdì e sabato con le serate Nitsa (elettronica di qualità) e Nasty Mondays (indie/alternative). Una delle venue più caratteristiche di Barcellona.",
        tip: "La serata Nitsa il venerdì è un riferimento per la musica elettronica barcellonese da 25 anni — DJ internazionali, qualità costante. Biglietti online con anticipo per evitare file.",
        where: "Carrer Nou de la Rambla 113, Paral·lel",
        price: "€€",
        tag: "Club / Concerti",
      },
      {
        name: "Mond Bar",
        subtitle: "Bar indie e alternative — Gràcia",
        description:
          "Un bar piccolo e scuro su Plaça del Sol a Gràcia: musica alternative, indie e rock dalle casse, gente di quartiere, birra a prezzo onesto. Non è un club e non ha pretese — è il posto dove ci si ferma a bere qualcosa dopo cena prima di decidere cosa fare dopo. Terrazza sulla piazza nelle sere calde.",
        tip: "Apre verso le 20, si riempie dopo le 23. Niente fila, niente dress code, niente lista. Esattamente quello che sembra.",
        where: "Plaça del Sol, Gràcia",
        price: "€",
        tag: "Bar",
      },
      {
        name: "Marula Café",
        subtitle: "Funk, soul e R&B — El Born / Gotico",
        description:
          "Un club piccolo con una programmazione musicale specifica: funk, soul, R&B, afrobeat. Pista da ballo raccolta, DJ residenti di qualità, atmosfera calda e informale. Alternativa ai club di elettronica per chi preferisce ballare su qualcosa con groove.",
        tip: "Apre tardi (dall'1) ma si riempie in fretta perché è piccolo. Ingresso 10€ circa. Ottimi cocktail al bancone.",
        where: "Carrer dels Escudellers 49, Barrio Gótico",
        price: "€€",
        tag: "Club / Funk & Soul",
      },
      {
        name: "Bar Pastís",
        subtitle: "Bar francese anni '40 — El Raval",
        description:
          "Aperto nel 1947 da emigrati francesi come bar per marinai e lavoratori del porto. Servivano pastis — il liquore anice francese — e musica chanson. Oggi è rimasto esattamente com'era: minuscolo, le pareti coperte di foto e manifesti, musica francese e tango, clientela mista di bohémien e nottambuli. Un anacronismo perfetto.",
        tip: "Apre solo la sera tardi. Non ha insegna luminosa — cercate la porta con le tende. Ordinate il pastis: costa poco e è la cosa giusta da bere qui.",
        where: "Carrer de Santa Mònica 4, El Raval",
        price: "€",
        tag: "Bar storico",
      },
    ],
  },

  // ── CONSIGLI PRATICI ──────────────────────────────────────
  {
    id: "pratici",
    title: "Consigli pratici",
    emoji: "💡",
    intro:
      "Tutto quello che non sta negli altri tab ma che vi servirà comunque — trasporti, orari reali, app, sicurezza, meteo. Da leggere prima di partire.",
    entries: [
      {
        name: "Trasporti — Metro e bus",
        subtitle: "TMB: tutto quello che serve sapere",
        description:
          "La rete Metro di Barcellona ha 12 linee e copre quasi tutta la città. Il biglietto singolo costa ~2,40€ ma non vale la pena: prendete il T-Casual (10 viaggi, ~11,35€) al distributore automatico — vale su metro, bus, tram e funicolare di Montjuïc. È nominale ma in pratica si condivide in tre senza problemi. I distributori hanno interfaccia in italiano.",
        tip: "L'app TMB Barcelona (gratuita) mostra orari in tempo reale e permette di pianificare i percorsi offline. Scaricatela prima di partire in Italia.",
        tag: "Trasporti",
      },
      {
        name: "Aeroporto — Metro L9 Sud",
        subtitle: "Il biglietto speciale che in molti dimenticano",
        description:
          "La Metro L9 Sud collega l'aeroporto T1 e T2 con il centro in ~40 minuti. Il biglietto normale T-Casual NON è valido: serve il biglietto speciale aeroporto (~5,15€ a tratta, solo andata). Si acquista alle macchinette della stazione aeroporto o in qualsiasi stazione della L9. Non fate l'errore al tornello — la multa è 100€.",
        tip: "In alternativa: taxi dall'aeroporto al centro costa ~35-40€ (tariffa fissa per destinazioni entro la città). Utile se siete in tre con bagagli e l'orario è tardo.",
        tag: "Trasporti",
      },
      {
        name: "Orari reali di Barcellona",
        subtitle: "Non è come in Italia — è più tardi",
        description:
          "Barcellona funziona su orari propri. Colazione: 8-10. Pranzo: 14-16 (i ristoranti aprono alle 13:30 e si riempiono alle 14:30). Aperitivo: 19-21. Cena: 21-23 (ordinare prima delle 21 è da turisti). I locali aprono a mezzanotte. I club diventano interessanti all'1:30-2. I barcellonesi escono a fare la spesa alle 20.",
        tip: "Se entrate in un ristorante alle 19:30 per cenare, vi daranno da mangiare ma sarete praticamente soli. Alle 22:30 lo stesso ristorante sarà pieno e rumoroso.",
        tag: "Cultura locale",
      },
      {
        name: "Lingua — Spagnolo o Catalano?",
        subtitle: "Entrambi, ma il catalano è apprezzato",
        description:
          'Barcellona è ufficialmente bilingue: spagnolo e catalano. Quasi tutti i barcellonesi parlano entrambe le lingue, più spesso inglese. Iniziare in spagnolo è sempre corretto. Iniziare in catalano — anche solo con "bon dia" o "gràcies" — viene accolto sempre con un sorriso: dimostra rispetto per la cultura locale. Non abbiate paura di sbagliare.',
        tip: 'Se qualcuno vi risponde in catalano e non capite, dite "ho sento, no parlo català" (mi dispiace, non parlo catalano) e passerete automaticamente allo spagnolo o all\'inglese.',
        tag: "Cultura locale",
      },
      {
        name: "Sicurezza e borseggi",
        subtitle: "Barcellona è sicura — ma attenzione alle zone",
        description:
          "Barcellona è una città sicura ma con un problema noto di borseggi turistici, concentrati in zone specifiche: la Rambla (specialmente di notte), il Mercat de la Boqueria, la Metro L1 tra Plaça Catalunya e l'aeroporto, la spiaggia della Barceloneta. I metodi più comuni: distrazione, scippo rapido da motorino, falsi mendicanti.",
        tip: "Soluzioni pratiche: portafoglio davanti, telefono in tasca interna, zaino tenuto davanti sui mezzi. In spiaggia non lasciate mai incustoditi telefono, portafoglio o chiavi — neanche per 30 secondi mentre fate il bagno.",
        tag: "Sicurezza",
      },
      {
        name: "Meteo ad aprile",
        subtitle: "Cosa aspettarsi — cosa portare",
        description:
          "Aprile a Barcellona: temperature tra 13°C la notte e 20-22°C di giorno. Sole frequente ma con possibili piogge brevi e improvvise — tipiche della primavera mediterranea. Il mare è ancora freddo (15-16°C) — non si fa il bagno ma la spiaggia è percorribile. Il vento può essere fastidioso sulla collina di Montjuïc e ai Bunkers.",
        tip: "Portate: scarpe da camminata comode (fondamentale), un layer medio per la sera (felpa o giacca leggera), un impermeabile pieghevole nello zaino. Non serve abbigliamento pesante, ma una giacca leggera la sera è indispensabile.",
        tag: "Meteo",
      },
      {
        name: "App utili",
        subtitle: "Quelle che userete davvero",
        description:
          "TMB Barcelona (metro e bus, funziona offline), Google Maps (scaricare la mappa offline di Barcellona prima di partire), Glovo o Uber Eats (consegne se siete a casa), Uber o Cabify (taxi app — più affidabile e trasparente dei taxi di piazza), Google Translate con il catalano scaricato offline, Fever (eventi e concerti con biglietti last minute).",
        tip: "Scaricate la mappa offline di Barcellona su Google Maps prima di partire dall'Italia: risparmiate dati e funziona anche in metro dove non c'è segnale.",
        tag: "App",
      },
      {
        name: "Pagamenti e contanti",
        subtitle: "Carta ovunque — ma qualche eccezione",
        description:
          "Barcellona è quasi completamente cashless: supermercati, ristoranti, musei, metro, taxi app — tutto si paga con carta contactless o Apple/Google Pay. Le eccezioni: Bar Marsella (solo contanti), mercatini di strada, offerte nelle chiese, mance (non obbligatorie, ma apprezzate in contanti). Tenete 20-30€ in contanti per le eccezioni.",
        tip: "Non cambiate valuta in aeroporto o nei cambiavalute della Rambla — i tassi sono pessimi. Usate il bancomat di una banca locale (Caixabank, Sabadell) direttamente: la vostra banca applica il tasso interbancario.",
        tag: "Soldi",
      },
      {
        name: "Acqua del rubinetto",
        subtitle: "Si beve — ma sa di cloro",
        description:
          "L'acqua del rubinetto di Barcellona è potabile e sicura, ma ha un sapore di cloro pronunciato per via del trattamento che riceve dalla rete idrica locale. La maggior parte dei barcellonesi beve acqua filtrata o in bottiglia. Nei ristoranti è normale ordinare acqua in bottiglia.",
        tip: "Se avete un filtro portatile o una borraccia con filtro, portatelo — risolve il problema del gusto senza sprecare plastica. Altrimenti acqua in bottiglia al supermercato: 0,50€ per 1,5L contro 3-4€ al bar.",
        tag: "Pratico",
      },
      {
        name: "Mance",
        subtitle: "Non obbligatorie — ma come funziona",
        description:
          "In Spagna la mancia non è obbligatoria come negli USA — il servizio è incluso nel prezzo. Nei bar e per tapas non si lascia nulla o si arrotonda. Nei ristoranti di livello medio-alto, lasciare il 5-10% per un servizio buono è apprezzato ma facoltativo. Mai sentirsi in obbligo: nessuno vi guarderà storto se non lasciate nulla.",
        tip: "Il modo più naturale: lasciare gli spiccioli del resto sul piattino, o arrotondare il conto. Per una cena in tre da 60€, 3-5€ di mancia sono più che generosi.",
        tag: "Pratico",
      },
    ],
  },
];

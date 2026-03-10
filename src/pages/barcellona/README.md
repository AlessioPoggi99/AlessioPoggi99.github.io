# 🇪🇸 Barcellona — 4 Giorni

Progetto Astro per il piano di viaggio a Barcellona.

## Struttura

```
src/
├── data/
│   └── trip.ts            ← ✏️  MODIFICA QUI per aggiornare contenuti
├── components/
│   ├── DaySection.astro   ← Una giornata completa
│   ├── Stop.astro         ← Una singola tappa nella timeline
│   ├── InfoBlock.astro    ← Blocchi tip / photo / food / warning
│   ├── Banner.astro       ← Banner colorati (Pasqua, avvisi, opzionali)
│   └── Tag.astro          ← Etichette (prenota, affollato, gratis…)
├── layouts/
│   └── BaseLayout.astro   ← HTML base (solo <link> e <script>, zero inline)
├── styles/
│   └── main.css           ← Sorgente CSS (copiato in public/ al build)
└── scripts/
    └── nav.ts             ← Sorgente TypeScript della navigazione

public/
├── styles/
│   └── main.css           ← ✏️  CSS servito dal browser
└── scripts/
    └── nav.js             ← ✏️  JS servito dal browser (compilato da nav.ts)
```

> **Modifica CSS** → edita `public/styles/main.css` (e tieni sincronizzato `src/styles/main.css` come sorgente).  
> **Modifica JS** → edita `public/scripts/nav.js` (e tieni sincronizzato `src/scripts/nav.ts` come sorgente TypeScript).

## Come modificare i contenuti

**Tutto il contenuto del viaggio è in `src/data/trip.ts`.**

### Aggiungere una tappa
Aggiungi un oggetto `Stop` nell'array `stops` del giorno corretto:
```ts
{
  time: '15:00',
  name: 'Nome del posto',
  duration: '1 h',
  tags: [{ type: 'book', label: '📅 Prenota' }],
  description: 'Descrizione della tappa...',
  blocks: [
    { type: 'tip', text: 'Consiglio pratico...' },
    { type: 'photo', text: 'Nota fotografica...' },
    { type: 'food', text: 'Dove mangiare...' },
  ],
  transitAfter: 'A piedi 10 min verso il centro',
}
```

### Tipi di tag disponibili
| type    | colore  | uso                    |
|---------|---------|------------------------|
| `book`  | arancio | prenotazione richiesta |
| `crowd` | rosso   | affollamento           |
| `free`  | viola   | ingresso gratuito      |
| `walk`  | verde   | a piedi                |
| `metro` | blu     | in metro               |

### Tipi di InfoBlock
| type      | icona | colore  |
|-----------|-------|---------|
| `tip`     | 💡    | giallo  |
| `photo`   | 📸    | viola   |
| `food`    | 🍽    | verde   |
| `warning` | ⚠️    | rosso   |

### Aggiungere un banner
I banner possono essere inseriti **prima di una tappa specifica** usando `beforeStop`:
```ts
banners: [
  {
    type: 'optional',   // 'info' | 'warning' | 'optional'
    title: '📌 Titolo',
    text: 'Testo del banner...',
    beforeStop: 3,      // inserisce prima della tappa con indice 3
  }
]
```
Se `beforeStop` è omesso, il banner appare sopra la timeline.

### Tipi di banner
| type       | colore        | uso                       |
|------------|---------------|---------------------------|
| `info`     | colore giorno | informazione generica     |
| `warning`  | rosso scuro   | avviso importante         |
| `optional` | dorato        | attività opzionale        |

## Installazione e avvio

```bash
npm install
npm run dev      # sviluppo su http://localhost:4321
npm run build    # build produzione in dist/
npm run preview  # anteprima build
```

---
title: "Wordle"
description: "Unofficial Italian fan-made adaptation of the New York Time's Wordle game"
pubDate: "Sep 16 2023"
updatedDate: "Oct 03 2023"
heroImage: "/mijnlieff/hero.png"
tags: ["ReactJs, NextJs, Socket.IO"]
---

<div align='center'>
  <h1 class='my-8'>🇮🇹 Wordle-ita 🇮🇹</h1>
  &nbsp;
  <img width="100%" alt="lighthouse-score" src="https://github.com/AlessioPoggi99/Wordle-ita/assets/80333233/3c7f8d35-b880-4de8-9fa2-5ad2ad6bae77"/>  
  &nbsp;
  <h1></h1>
</div>

Unofficial Italian fan-made version of <a href="https://www.nytimes.com/games/wordle/index.html" target="_blank">Wordle</a>

You have six attempts to guess a five-letter word, with feedback given for each guess in the form of colored tiles indicating when letters match or occupy the correct position.

## 📚 Stack

- <a href="https://vitejs.dev" target="_blank">Vite.js</a> - A local development server and used by default by Vue and for React project templates
- <a href="https://react.dev" target="_blank">React.js</a> - A front-end JavaScript library
- <a href="https://zustand-demo.pmnd.rs" target="_blank">Zustand</a> - A small, fast and scalable bearbones state-management solution

## 📂 Project structure

```sh
$PROJECT_ROOT
│   # Source folder
├── src
│   │   # Images and other assets
│   ├── assets
│   │   # Json files (italian dictionary)
│   ├── dict
│   │   # React custom hooks
│   ├── hooks
│   │   # React components used as modals
│   ├── modals
│   │   # Utility functions
│   ├── utils
│   │   # App.tsx and main components
│   └── *
│
│   # Static files
└── public
```

## ▶️ How to try it

You can try this unofficial version of Wordle on the website:

- <a href="https://alessiopoggi99.github.io/Wordle-ita/" target="_blank">Wordle-ita 🇮🇹</a>
  <p>It's now possible to install the web app on your device and play <strong>OFFLINE</strong>. You can use Chrome on desktop, or you can add the website to your smartphone's home page.</p>

Otherwise you can clone the <a href="https://github.com/AlessioPoggi99/Wordle-ita" target="_blank">Github repository</a> and run it on your pc

```sh
yarn
yarn dev # run a local hosting server
npm run deploy # deploy to github pages
```

## 📷 Screenshots

#### Mobile (light theme)

<p align="center" class="grid grid-cols-4 gap-x-2">
  <img class="rounded-md shadow-black shadow-lg" alt="mobile-home" src="/wordle/mobile1.png"/>
  <img class="rounded-md shadow-black shadow-lg" alt="mobile-gameover" src="/wordle/mobile2.png"/>
  <img class="rounded-md shadow-black shadow-lg" alt="mobile-info" src="/wordle/mobile3.png"/>
  <img class="rounded-md shadow-black shadow-lg" alt="mobile-settings" src="/wordle/mobile4.png"/>
</p>

#### Desktop (dark theme)

<p align="center" class="grid grid-cols-2 gap-x-2">
  <img alt="desktop-home" src="/wordle/desktop1.png"/>
  <img alt="desktop-gameover" src="/wordle/desktop2.png"/>
  <img alt="desktop-info" src="/wordle/desktop3.png"/>
  <img alt="desktop-settings" src="/wordle/desktop4.png"/>
</p>

## 🔗 Links

- <a href="https://github.com/AlessioPoggi99" target="_blank">My Github</a>

- <span><a href="https://alessiopoggi99.github.io/Wordle-ita/" target="_blank">Wordle 🇮🇹</a> and <a href="https://github.com/AlessioPoggi99/Wordle-ita/" target="_blank">Wordle github repository</a></span>

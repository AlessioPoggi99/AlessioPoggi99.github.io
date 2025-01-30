---
title: Party games
description: Step into a world of fun and surprises! Connect with your friends in a virtual room to set up the game, then get ready for face-to-face action. Once the game begins, it's all about playing in person—strategy, quick thinking, and lots of laughs. Who will outsmart, outplay, and outlast the rest? The ultimate party experience is just a game away!
pubDate: Feb 23 2024
updatedDate: Jan 5 2025
heroImage: "/partygames/hero.png"
tags: ["nodejs","reactjs","socket-io"]
---

<div align='center'>
  <h1 class="main-title">🎉 Party Games 🎉</h1>
</div>

Step into a world of fun and surprises! Connect with your friends in a virtual room to set up the game, then get ready for face-to-face action. Once the game begins, it's all about playing in person—strategy, quick thinking, and lots of laughs. Who will outsmart, outplay, and outlast the rest? The ultimate party experience is just a game away!

## 🎮 Game List

1. <strong>Find the Impostor</strong>, a fun word, synonym, and deduction game. One of you plays the impostor, trying to stay hidden while also guessing the secret word.
2. <strong>Intesa</strong>, a twist on the famous TV game show _Intesa Vincente_, where fast thinking and quick answers are key.
3. <strong>Decrypto</strong>, a team-based word and deduction game where, on each turn, a player must communicate a coded word to their teammates. Can you crack the code?
4. <strong>Avalon</strong>, a hidden identity game set in a fantasy world filled with intrigue, quests, and mystery. Can you complete your missions without falling victim to the evil forces?
5. <strong>Fishbowl</strong>, a classic game with a twist, made even more exciting with some quirky and fun rules.
6. <strong>Werewords</strong>, a guessing game where you must figure out the magic word by asking the Mayor yes-or-no questions. But beware, a werewolf lurks among you, trying to mislead the group.
7. <strong>The Spy</strong>, similar to _Find the Impostor_, but here you’ll ask each other questions to uncover the spy hiding in your midst.

## 📚 Stack

- <a href="https://vitejs.dev" target="_blank">Vite.js</a> - A local development server and used by default by Vue and for React project templates
- <a href="https://react.dev" target="_blank">React.js</a> - A front-end JavaScript library
- <a href="https://zustand-demo.pmnd.rs" target="_blank">Zustand</a> - A small, fast and scalable bearbones state-management solution
- <a href="https://expressjs.com/it/" target="_blank">Express.js</a> - A back end web application framework for building RESTful APIs with Node.js,
- <a href="http://socket.io" target="_blank">Socket.io</a> - An event-driven library for real-time web applications

## 📂 Project structure

```sh
$PROJECT_ROOT
│   # Client folder
├── client
│   │   # Static files
│   ├── public
│   │   # Client source folder
│   └── src
│       │   # React router dom pages
│       ├── routes
│       │   # React components
│       ├── components
│       │   # React custom hooks
│       ├── hooks
│       │   # App.tsx and main css file
│       └── *
│
│   # Socket.io namespaces
└── server
│   # Express server
└── index.js
```

## ▶️ How to try it

You can access the website using the following link:

- <a href="https://partygames.alessiopoggi.org" target="_blank">Party Games 🎉</a>
  <p>You can install the site on your device using Google Chrome, both on Desktop and Android. This feature is currently unavailable on iOS due to the 'Screen Wake Lock API' not working.</p>

Alternatively, you can clone the <a href="https://github.com/AlessioPoggi99/Party-Games.git" target="_blank">Github repository</a>

```sh
npm run build # build client and server
npm run start # run a local hosting server -> localhost:8000
```

Currently, the site has been developed entirely in Italian. If you're a developer and interested in helping me translate it, feel free to reach out!

## 📷 Screenshots

### Mobile

<p align="center" class="img-grid">
  <img width="24%" height="auto" alt="mobile-home-page1" class="rounded-md" src="https://www.alessiopoggi.org/partygames/mobile1.png"/>
  <img width="24%" height="auto" alt="mobile-home-page2" class="rounded-md" src="https://www.alessiopoggi.org/partygames/mobile2.png"/>
  <img width="24%" height="auto" alt="mobile-werewords" class="rounded-md" src="https://www.alessiopoggi.org/partygames/mobile3.png"/>
  <img width="24%" height="auto" alt="mobile-decrypto" class="rounded-md" src="https://www.alessiopoggi.org/partygames/mobile4.png"/>
</p>

### Desktop

<p align="center" class="img-grid-2">
  <img width="49%" height="auto" alt="desktop-home-page1" class="no-shadow" src="https://www.alessiopoggi.org/partygames/desktop1.png"/>
  <img width="49%" height="auto" alt="desktop-home-page2" class="no-shadow" src="https://www.alessiopoggi.org/partygames/desktop2.png"/>
  <img width="49%" height="auto" alt="desktop-intesa" class="no-shadow" src="https://www.alessiopoggi.org/partygames/desktop3.png"/>
  <img width="49%" height="auto" alt="desktop-fishbowl" class="no-shadow" src="https://www.alessiopoggi.org/partygames/desktop4.png"/>
</p>

## 🔗 Links

- <a href="https://github.com/AlessioPoggi99" target="_blank">My Github</a>

- <a href="https://partygames.alessiopoggi.org" target="_blank">Party games 🎉</a>

- <span><a href="https://github.com/AlessioPoggi99/Party-Games" target="_blank">Party Games github repository</a> (the repository is actually private).</span>

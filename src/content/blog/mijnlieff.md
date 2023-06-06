---
title: "Mijnlieff"
description: "Unofficial fan-made adaptation of the bagstract game Mijnlieff, designed by Andy Hopwood"
pubDate: "Jun 06 2023"
updatedDate: "Jun 06 2023"
heroImage: "/mijnlieff/hero.png"
tags: ["ReactJs, NextJs, Socket.IO"]
---

Unofficial fan-made adaptation of the bagstract game Mijnlieff, designed by Andy Hopwood

The game is played on a 4 x 4 square grid. Each Player has eight pieces with two of four different symbols. Each piece when played determines where your opponent can play their next piece. For example you can force your opponent to play in a straight line (either othogonally or diagonally) from the piece just played, or to play next to or away from the piece just played. The aim is to form lines of 3 pieces of your color to get a point or lines of 4 that worth you two points.

## Stack
- <a href="https://react.dev" target="_blank">ReactJs</a> - A front-end JavaScript library
- <a href="https://nextjs.org/" target="_blank">Next.js</a> - A React framework with hybrid static & server rendering, and route pre-fetching, etc.
- <a href="https://chakra-ui.com/" target="_blank">Chakra UI</a> - A simple, modular and accessible component library for React
- <a href="https://www.framer.com/motion/" target="_blank">Framer Motion</a> - An animation library for React

## Project structure

```sh
$PROJECT_ROOT
│   # Front-end files
├── client
│   │   # Page files
│   ├── pages
│   │   # React component files
│   ├── components
│   │   # Non-react modules
│   ├── lib
│   │   # Static files for images and icons file
│   └── public
│
│   # Back-end files
└── server
    │   # To-Do
    └── *
```

## How to try it

You can try this unofficial app of Mijnlieff game on the website:
- <a href="https://mijnlieff.vercel.app" target="_blank">Mijnlieff</a>

Otherwise you can clone the <a href="https://github.com/AlessioPoggi99/Fan-made-Mijnlieff" target="_blank">Github repository</a> and run it on your pc
```sh
npm i
npm run dev
```

## To-Do

Actually only local games and against AI games are available. Socket connection for remote game play hasn't been implemented yet.
If you want to play remotly you can try <a href="https://mijnlieff.netlify.app" target="_blank">Vue Mijnlieff</a>, it is the same game
but in this version, written with VueJs, I've implement Socket.IO connection to play remotly with your friends.

If you are intrested in Socket.IO backend used in **Vue Myjnlieff** version you can check it out the <a href="https://github.com/AlessioPoggi99/vue-mijnlieff" target="_blank">Github repository</a>.

## Screenshots

![landscape-dark-1](/mijnlieff/LD1.png?raw=true "Home screen")
![landscape-dark-2](/mijnlieff/LD2.png?raw=true "Play screen")
![landscape-dark-3](/mijnlieff/LD3.png?raw=true "Game over")

![landscape-light-1](/mijnlieff/LL1.png?raw=true "Game mode selection")
![landscape-light-2](/mijnlieff/LL2.png?raw=true "How to play screen")
![landscape-light-3](/mijnlieff/LL3.png?raw=true "In game screen")

## Links

- <a href="https://github.com/AlessioPoggi99" target="_blank">My Github</a>

- <span><a href="https://mijnlieff.vercel.app" target="_blank">Mijnlieff</a> and <a href="https://github.com/AlessioPoggi99/Fan-made-Mijnlieff" target="_blank">Mijnlieff github repository</a></span>

- <span><a href="https://mijnlieff.netlify.app" target="_blank">Vue Mijnlieff</a> and <a href="https://github.com/AlessioPoggi99/vue-mijnlieff" target="_blank">Vue Mijnlieff github repository</a></span>
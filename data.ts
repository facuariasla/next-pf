import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiCss3,
  SiSass,
  SiStyledcomponents,
  SiChakraui,
  SiExpress,
  SiNodedotjs,
  SiFirebase,
  SiPostgresql,
  SiSequelize,
  SiFlutter,
  SiVuedotjs,
  SiTailwindcss,
  // Social Media:
  SiLinkedin,
  SiGithub,
} from "react-icons/si";

import img1 from "./public/assets/proyect-screens/rps-pvp.png";
import img2 from "./public/assets/proyect-screens/rps-single.png";
import img3 from "./public/assets/proyect-screens/cryptoinfo.png";
import img4 from "./public/assets/proyect-screens/yugioh.png";
import img5 from "./public/assets/proyect-screens/LandingPage2.png";
import img0 from "./public/assets/proyect-screens/realestate.png";
import img6 from "./public/assets/proyect-screens/icon-poke.png";
import img7 from "./public/assets/proyect-screens/lost-pets.png";
import img8 from "./public/assets/proyect-screens/movie-finder.png";
import img9 from "./public/assets/proyect-screens/pooltogether.png";
import img10 from "./public/assets/proyect-screens/basement.png";

export const techdata = [
  {
    id: 1,
    icon: SiJavascript,
    title: "JavaScript",
  },
  {
    id: 2,
    icon: SiTypescript,
    title: "TypeScript",
  },
  {
    id: 3,
    icon: SiReact,
    title: "ReactJS",
  },
  {
    id: 4,
    icon: SiNextdotjs,
    title: "NextJS",
  },
  {
    id: 5,
    icon: SiCss3,
    title: "CSS3",
  },
  {
    id: 5.5,
    icon: SiTailwindcss,
    title: "Tailwind",
  },
  {
    id: 6,
    icon: SiSass,
    title: "Sass",
  },
  {
    id: 7,
    icon: SiStyledcomponents,
    title: "Styled-Comp",
  },
  {
    id: 8,
    icon: SiChakraui,
    title: "ChakraUI",
  },
  {
    id: 9,
    icon: SiNodedotjs,
    title: "NodeJS",
  },
  {
    id: 10,
    icon: SiFirebase,
    title: "Firebase",
  },

  {
    id: 11,
    icon: SiPostgresql,
    title: "PostgreSQL",
  },
  {
    id: 12,
    icon: SiSequelize,
    title: "Sequelize",
  },
  {
    id: 13,
    icon: SiFlutter,
    title: "Flutter",
  },
  {
    id: 14,
    icon: SiVuedotjs,
    title: "Vue",
  },
];

export const projects = [
  {
    id: 7,
    title: "Mascotas Perdidas",
    img: img7,
    desc: "WebApp that helps people find their pets, using location with Mapbox. People can see the lost pets around them, and report them with the owner. Technologies: TypeScript, ReactJS & ChakraUI. MapBox and SendGrid. Backend with PostgreSQL - Sequelize and Algolia. ",
    link: "https://mascotasperdidas-iota.vercel.app/",
    repo: "https://github.com/facuariasla/lost-pets-vite",
  },
  {
    id: 10,
    title: "Basement Challenge",
    img: img10,
    desc: "Frontend challenge from basement.studio. State management with Zustand in NextJS, styled with Sass and Framer-motion",
    link: "https://basement-ch.vercel.app/",
    repo: "https://github.com/facuariasla/basement-ch-two",
  },
  {
    id: 8,
    title: "Movie Finder",
    img: img8,
    desc: "You can search movies, and see the details of each movie. Searching by filters as a year of release or/and series, episode, movie. Created with React Hooks, TypeScript, Styled-Components & AntDesign. API: omdbapi.com",
    link: "https://moviefinder-ch.vercel.app/",
    repo: "https://github.com/facuariasla/moviefinder-ch",
  },
  {
    id: 9,
    title: "Crypto Prices (Pooltoogether)",
    img: img9,
    desc: "Pooltogether challenge. You can 'add' fake money to your account filling a form, and then buy crypto currencies. React Hooks, state management with Zustand, react-hook-form, styled with ChakraUI. ",
    link: "https://2-pooltogether-challenge.vercel.app/#/",
    repo: "https://github.com/facuariasla/2-pooltogether-challenge",
  },
  {
    id: 0,
    title: "Real Estate Properties",
    img: img0,
    desc: "WebApp that shows properties to rent & buy; you can apply a couple of filters. Created using NextJS, React Hooks, & ChakraUI",
    link: "https://realestate-properties.vercel.app/",
    repo: "https://github.com/facuariasla/realestate-properties",
  },

  {
    id: 3,
    title: "Crypto info",
    img: img3,
    desc: "Application where you can see the flow of different cryptocurrencies over time, in a graph. Created using React Hooks, CoinGeko API, Axios, and react-chartjs-2",
    link: "https://cryptodata001.netlify.app",
    repo: "https://github.com/facuariasla/crypto-info",
  },
  {
    id: 1,
    title: "Rock, Paper & Scissors [PVP]",
    img: img1,
    desc: "The classic rock, paper and scissors game, but you can play against a friend! Created using VanillaJS/TypeScript, HTML & CSS. Firebase to manipulate and store data, ExpressJS and NodeJS to create the API REST. Stored in Heroku",
    link: "https://des6-2.herokuapp.com",
    repo: "https://github.com/facuariasla/des6-2",
  },
  {
    id: 2,
    title: "Rock, Paper & Scissors [SINGLE]",
    img: img2,
    desc: "The classic rock, paper and scissors game, user vs BOT. Created using VanillaJS/TypeScript, HTML & CSS. Usage of History API Web, sessionStorage & localStorage",
    link: "https://facuariasla.github.io/8des-m5",
    repo: "https://github.com/facuariasla/8des-m5",
  },
  {
    id: 6,
    title: "Who's that Pokemon?",
    img: img6,
    desc: "Who's that Pokemon!?. Created using React Hooks in Vite project, some CSS styles, and Piskel. Credits: goncypozzo challenges. Components from https://nostalgic-css.github.io/NES.css/  ",
    link: "https://pokemon-who.vercel.app/",
    repo: "https://github.com/facuariasla/pokemon-who",
  },
  // {
  //   id: 4,
  //   title: "YuGiOh Cards",
  //   img: img4,
  //   desc: "You can get random YuGiOh cards (Ygoprodeck API). In development...",
  //   link: "https://yugiohcards00.netlify.app ",
  //   repo: "https://github.com/facuariasla/yugioh-cards-cra",
  // },
  // {
  //   id: 5,
  //   title: "Landing Page",
  //   img: img5,
  //   desc: "Basic Landing Page using ReactJS (Create React App), and CSS Flexbox",
  //   link: "https://62543e5b0e435b7f891a0ce1--stellar-profiterole-99e7c9.netlify.app",
  //   repo: "https://github.com/facuariasla/landing-page-react",
  // },
];

export const social = [
  {
    id: 1,
    icon: SiLinkedin,
    title: "LinkedIn",
    link: "https://www.linkedin.com/in/facuariasla/"
  },
  {
    id: 2,
    icon: SiGithub,
    title: "GitHub",
    link: "https://github.com/facuariasla"

  },
];

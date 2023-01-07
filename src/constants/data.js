import { faBootstrap, faCss3Alt, faGithub, faGulp, faHtml5, faReact, faSass, faSquareJs } from "@fortawesome/free-brands-svg-icons";
import { FaGitAlt } from 'react-icons/fa';
import { SiNextdotjs, SiPug, SiRedux, SiTypescript } from 'react-icons/si';
import { images } from './index';


const Skills = [
  {
    "name": "HTML",
    "icon": faHtml5
  },
  {
    "name": "CSS",
    "icon": faCss3Alt
  },
  {
    "name": "JavaScript",
    "icon": faSquareJs
  },
  {
    "name": "Bootstrap",
    "icon": faBootstrap
  },
  {
    "name": "Sass",
    "icon": faSass
  },
  {
    "name": "Git",
    "iconAlt": <FaGitAlt />
  },
  {
    "name": "Github",
    "icon": faGithub
  },
  {
    "name": "Pug",
    "iconAlt": <SiPug />
  },
  {
    "name": "Gulp",
    "icon": faGulp
  },
  {
    "name": "React",
    "icon": faReact
  },
  {
    "name": "Redux",
    "iconAlt": <SiRedux />
  },
  {
    "name": "Next",
    "iconAlt": <SiNextdotjs />
  },
  {
    "name": "TypeScript",
    "iconAlt": <SiTypescript />
  },
];

const projects = [
  {
    "name": "Atsky",
    "img": images.project12,
    "github": "https://github.com/zaki164/Atsky",
    "website": "https://zaki164.github.io/Atsky"
  },
  {
    "name": "Dracarys",
    "img": images.project2,
    "github": "https://github.com/zaki164/Dracarys",
    "website": "https://zaki164.github.io/Dracarys"
  },
  {
    "name": "Special Design",
    "img": images.project9,
    "github": "https://github.com/zaki164/Special-Design",
    "website": "https://zaki164.github.io/Special-Design"
  },
  {
    "name": "Gericht",
    "img": images.project4,
    "github": "https://github.com/zaki164/Gericht",
    "website": "https://zaki164.github.io/Gericht"
  },
  {
    "name": "Galaxy",
    "img": images.project3,
    "github": "https://github.com/zaki164/Galaxy",
  },
  {
    "name": "Psycho",
    "img": images.project7,
    "github": "https://github.com/zaki164/Psycho",
    "website": "https://zaki164.github.io/Psycho"
  },
  {
    "name": "Kasper",
    "img": images.project5,
    "github": "https://github.com/zaki164/Kasper",
    "website": "https://zaki164.github.io/Kasper"
  },
  {
    "name": "leon",
    "img": images.project6,
    "github": "https://github.com/zaki164/Leon",
    "website": "https://zaki164.github.io/Leon"
  },
  {
    "name": "Sahem",
    "img": images.project8,
    "github": "https://github.com/zaki164/Sahem",
    "website": "https://zaki164.github.io/Sahem",
    "small": "small",
  },
  // {
  //   "name": "Weather App",
  //   "img": images.project11,
  //   "github": "https://github.com/zaki164/Weather",
  //   "website": "https://zaki164.github.io/Weather",
  //   "small": "small",
  // },
  // {
  //   "name": "Courselist App",
  //   "img": images.project1,
  //   "github": "https://github.com/zaki164/Courselist",
  //   "website": "https://zaki164.github.io/Courselist",
  //   "small": "small",
  // },
  // {
  //   "name": "Todolist App",
  //   "img": images.project10,
  //   "github": "https://github.com/zaki164/Todolist",
  //   "website": "https://zaki164.github.io/Todolist",
  //   "small": "small",
  // },
]

export default { Skills, projects };
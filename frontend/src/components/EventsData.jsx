import batbossTitle from "../assets/batbossHD.png";
import batbossBg from "../assets/batbossBg.png";
import batman from "../assets/bestmanagerHD.png";

import bizTitle from "../assets/bizvanguardHD.png";
import bizBg from "../assets/bgbizHd.png";
import bizMan from "../assets/batmanHd.png"

import escapeTitle from "../assets/EscapeGothamHD.png";
import escapeBg from "../assets/escapebg.png";
import escapeMan from "../assets/escaperoobatmanhd.png";

import arkhamTitle from "../assets/ArkhamtoAlphaHD.png";
import arkhamBg from "../assets/ideaBgHD.png";
import arkhamMan from "../assets/ideathonhd1.png";

import ideathonImg from "../assets/ideathonhd1.png";
import mangerImg from "../assets/bestmanagerhd.png";
import escapeImg from "../assets/escaperoobatmanhd.png";
import bizvanguard from "../assets/batbizHd.png";

import priceBiz from "../assets/7k.png";
import priceEscape from "../assets/7k.png";
import priceIdeathon from "../assets/12k.png";
import priceBatboss from "../assets/10k.png";


const EventsData = [
  {
    id: "bizvanguard",
    title: "BIZ VANGUARD",
    subtitle: "Biz Quiz",
    route: "/events/bizvanguard",
    image:bizvanguard,

    titleImage: bizTitle,
    priceTag:priceBiz,
    heroBg: bizBg,
    link:"https://tinyurl.com/emirise-bizquiz",
    characterImg: bizMan,
    date: "10 February 2025",
    description:
      `The Biz Quiz event evaluates participants on their
            knowledge of business concepts, current affairs,
            entrepreneurship, and analytical thinking through
            multiple challenging quiz rounds. The individual or
            team that demonstrates accuracy, speed, strategic
            thinking, and consistency across all rounds earns
            the title of Biz Quiz Champion.`,
    rules: [
      "Team of 2 members",
      "Multiple quiz rounds",
      "No electronic gadgets allowed",
      "Quiz master's decision is final",
    ],
  },
  {
    id: "escape-gotham",
    title: "ESCAPE GOTHAM",
    subtitle: "Escape Room",
    route: "/events/escape-gotham",
    image:escapeImg,

    titleImage: escapeTitle,
    heroBg: escapeBg,
    link:"https://tinyurl.com/mr3kccz2",
    priceTag:priceEscape,
    characterImg: escapeMan,
    date: "11 February 2025",
   description: `
The Escape Room event challenges participants to solve puzzles,
crack clues, and think critically under time pressure to escape
the room successfully. Participants are tested on logical reasoning,
teamwork, observation skills, and quick decision-making, with the
fastest and most efficient team emerging as the Escape Room Champions.
`,

    rules: [
      "Team size: 3–5 members",
      "Time-based challenge",
      "No damage to clues",
      "Cheating leads to disqualification",
    ],
  },
  {
    id: "arkham-to-alpha",
    title: "ARKHAM TO ALPHA",
    subtitle: "Ideathon",
    route: "/events/arkham-to-alpha",
    image:ideathonImg,

    titleImage: arkhamTitle,
    heroBg: arkhamBg,
    link:"https://tinyurl.com/emirise-ideathon",
    priceTag:priceIdeathon,
    characterImg: arkhamMan,
    date: "12 February 2025",
    description:
      `The Ideathon event challenges participants to 
            present innovative ideas and practical solutions
            to real-world problems through structured evaluation
            rounds. Participants are assessed on creativity,
            feasibility, problem understanding, and presentation
            skills, with the most impactful and well-structured 
            idea earning the title of Ideathon Winner.`,
    rules: [
      "Each participant/team must register with at least 2 members and can compete with a maximum of 3 members",
      "The presentation should be between 5 to 10 minutes to ensure clarity and impact",
      "Participants must submit their presentation via email before the event to avoid disqualification",
      "Email for submission: emiriseemea@gmail.com",
      "The event coordinators reserve the right to modify or update these rules as necessary",
      "Any changes will be communicated in advance",
    ],
  },
  {
    id: "batboss",
    title: "BATBOSS",
    subtitle: "Best Manager",
    route: "/events/batboss",
    image:mangerImg,

    titleImage: batbossTitle,
    heroBg: batbossBg,
    link:"https://tinyurl.com/3a4j9k9t",
    priceTag:priceBatboss,
    characterImg: batman,
    date: "13 February 2025",
    description:
      ` The Best Manager event assesses participants on their leadership abilities,
             decision-making skills, problem-solving approach, and strategic thinking
              through competitive rounds. Participants are challenged to think logically,
               manage situations effectively, and perform under pressure, with the most 
               confident and consistent performer earning the title of Best Manager.`,
    rules: [
      "Individual participation only",
      "Multiple elimination rounds",
      "Time-bound tasks",
      "Judges’ decision will be final",
    ],
  },
];

export default EventsData;

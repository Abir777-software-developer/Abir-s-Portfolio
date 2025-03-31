import { color } from "framer-motion";
import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  Whispr,
  Linkedin,
  jobit,
  tripguide,
  threejs,
} from "../assets";

const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Js Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  // {
  //   title: "Content Creator",
  //   icon: creator,
  // },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Offerz",
    icon: null,
    iconBg: "#FFFFFF",
    date: "March 2024 - May 2024",
    points: [
      "Took part in a Tech Fest, where our team developed an application named Offerz",
      "aimed at streamlining the discovery and management of offers and deals.",
      "I contributed as a full-stack developer, designing and implementing both the frontend and backend of the application.",
      "The project stood out for its functionality and usability, securing us 3rd place in the competition and further solidifying my expertise in building comprehensive applications.",
    ],
  },
  {
    title: "Problem Solving",
    company_name: "CodeGen",
    icon: tesla,
    iconBg: "#FFFFFF",
    date: "August 2024",
    points: [
      "Participated in the CodeGen competition held at our college, a problem-solving contest that tested algorithmic and coding skills.",
      "I tackled challenging programming problems, improving my logical thinking and problem-solving abilities.",
      "This experience helped me enhance my efficiency in writing optimized code under time constraints.",
      "My efforts earned me 3rd place in the competition, showcasing my ability to solve complex problems effectively.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a beautiful attractive website, but Abir proved me wrong.",
    name: "Soumyadeep Kundu",
    designation: "",
    company: "",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "Abir always helped me when needed like if i stuck somewhere doing a project, he always eager to help me out",
    name: "Soubhik Roy",
    designation: "",
    company: "",
    // image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Abir optimized my website, my website started to work so smooth and it was a like a better version. i can't thank him enough!",
    name: "Ankan Dey",
    designation: "",
    company: "",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Linkedin Clone",
    description:
      "A full-stack LinkedIn-inspired application built using React, Redux, Styled Components, and Appwrite, designed to replicate key features of the LinkedIn platform. This project demonstrates user authentication, posting updates, managing a real-time feed, and responsive UI design, all integrated with a robust backend.",
    tags: [
      {
        name: "reactjs",
        color: "blue-text-gradient",
      },
      {
        name: "Appwrite",
        color: "red-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: Linkedin,
    source_code_link: "https://github.com/",
  },
  {
    name: "Real time chat Application",
    description:
      "The Real-Time Chat Application is a user-friendly, responsive platform that enables users to connect and communicate in real time. Built using the MERN (MongoDB, Express.js, React.js, and Node.js) stack, this application demonstrates the integration of modern technologies to deliver seamless multiple servces .",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "expressjs",
        color: "black-text-gradient",
      },
    ],
    image: Whispr,
    source_code_link: "https://github.com/",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  projects,
  navLinks,
};

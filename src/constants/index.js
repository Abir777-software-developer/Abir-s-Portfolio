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
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Developer",
    company_name: "Offerz",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2024 - May 2024",
    points: [
      "Took part in a Tech Fest, where our team developed an application named Offerz",
       "aimed at streamlining the discovery and management of offers and deals.",
       "I contributed as a full-stack developer, designing and implementing both the frontend and backend of the application.",
       "The project stood out for its functionality and usability, securing us 3rd place in the competition and further solidifying my expertise in building comprehensive applications.",
    ],
  },
  {
    title: "React js Developer",
    company_name: "Smart India Hackathon",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "August 2024 - Novemeber 2024",
    points: [
      "Participated in the Smart India Hackathon, where our team worked on a project to replace the CAPTCHA system in Aadhaar card services.",
      " I played a key role in developing the frontend of our website, focusing on creating an accessible and user-friendly design.",
      "This experience enhanced my problem-solving skills and ability to work under tight deadlines.",
      " Our efforts earned us 2nd place in the internal SIH hackathon, demonstrating our capability to address complex real-world challenges",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Freelancing",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2024 - March 2024",
    points: [
      "In addition to team projects, I have experience as a freelance developer, creating frontend applications tailored to client needs.",
      " These projects allowed me to work with diverse requirements and technologies, honing my skills in delivering high-quality, responsive, and visually appealing user interfaces.",
      "Freelancing also taught me effective communication and time management to meet client expectations successfully.",
    ],
  },
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
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
    image: carrent,
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
        name:"mongodb",
        color:"green-text-gradient",
      },
      {
        name:"expressjs",
        color:"black-text-gradient"
      }
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects,navLinks };
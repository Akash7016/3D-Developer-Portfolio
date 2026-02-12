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
  framer,
  docker,
  carrent,
  jobit,
  tripguide,
  threejs,
  shop,
  apple,
  canva,
} from "../assets";

export const navLinks = [
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
    title: "UI/UX Designer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Full Stack Developer",
    icon: creator,
  },
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
    name: "framer",
    icon: framer,
  },
];

const experiences = [
  {
    title: "Frontend Developer",
    company_name: "Hatching",
    icon: creator,
    iconBg: "#383E56",
    date: "Aug 2024 - Present",
    points: [
      `Built and shipped client-facing web features using React, JavaScript, Node.js, and SQL Server, improving
workflow efficiency and user satisfaction by 15%.`,
      "Integrated backend services via REST APIs, handling authentication, business logic, and transactional data flows.",
      `Improved performance and maintainability through refactoring and responsive UI optimization, reducing page load
times by 20%.`,
      "Collaborated in an Agile/Scrum environment through sprint planning, pull requests, and code reviews.",
    ],
  },
  {
    title: "UI/UX Designer",
    company_name: "Beetonz Infotech",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Apr 2022",
    points: [
      `Designed and delivered 15+ responsive web interfaces using Figma, HTML, CSS, and JavaScript, increasing
engagement by 25%.`,
      "Worked closely with engineers to translate designs into accessible, production-ready UI components.",
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
    name: "3D Swag Customization App",
    description:
      "Interactive 3D web application that allows users to customize virtual swag in real-time using AI-generated logos, textures, and dynamic color themes. Built with React and Three.js, featuring smooth Framer Motion transitions and responsive 3D rendering.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "react-three-fiber",
        color: "pink-text-gradient",
      },
      {
        name: "framer-motion",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: shop,
    source_code_link: "https://github.com/",
  },
  {
    name: "Apple-Style 3D Product Experience",
    description:
      "Immersive 3D product showcase website featuring scroll-driven animations, pinned sections, and timeline-based transitions using GSAP and Three.js. Designed for high-performance (60fps) motion with responsive layouts and smooth interactive storytelling.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
      {
        name: "gsap",
        color: "pink-text-gradient",
      },
      {
        name: "scrolltrigger",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "vite",
        color: "pink-text-gradient",
      },
    ],
    image: apple,
    source_code_link: "https://github.com/",
  },
  {
    name: "Scroll-Based 3D Canvas Animation",
    description:
      "High-performance scroll-driven 3D animation built using HTML5 Canvas and JavaScript. Features frame-by-frame animation control, character movement, facial expression transitions, and optimized rendering for smooth 60fps performance.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "html5-canvas",
        color: "green-text-gradient",
      },
      {
        name: "css-animations",
        color: "pink-text-gradient",
      },
      {
        name: "scroll-animation",
        color: "blue-text-gradient",
      },
    ],
    image: canva,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };

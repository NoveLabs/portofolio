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
  generate_baju_threejs,
  travel_advisor,
  cryptoverse,
  dalle_clone,
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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
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
  // {
  //   name: "TypeScript",
  //   icon: typescript,
  // },
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
    title: "PHP Back End Developer",
    company_name: "Phicos",
    icon: backend,
    iconBg: "#383E56",
    date: "March 2019 - November 2019",
    points: [
      "Analyze, test and resolve issues with application software.",
      "Assist the customer in the development of business processes.",
      "Consistenly deliver a quality work product and work assignments based on estabilished project guidelines and objectives.",
      "Design and develop new websites.",
      "Develop and deploy new features of existing products.",
      "On-site design and development of web applications in PHP/MySQL."
    ],
  },
  {
    title: "IT Programmer",
    company_name: "Akun Biz",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "Dec 2019 - April 2020",
    points: [
      "Managed complex projects from start to finish.",
      "Advance Knowledge in developing HTML 5, CSS3, and responsive web portals.",
      "Good web fundamentals - caching strategies, session/cookie management, AJAX, cross browser support, etc.",
      "Work as part of our backend team and be responsible for diverse and challenging backend development efforts.",
    ],
  },
  {
    title: "Back End Developer",
    company_name: " Bikin.Co",
    icon: backend,
    iconBg: "#383E56",
    date: "March 2021 - June 2021",
    points: [
      "Working on E-Commerce project.",
      "Using AWS S3 for Cloud Service.",
      "Collaborating with other designers for the Front End.",
      "Delivering products on time with good quality.",
      "Building API Microservices",
      "Integrating with third party services such as Google, Facebook and shipment"
    ],
  },
  {
    title: "Web Programmer",
    company_name: "Medify",
    icon: backend,
    iconBg: "#E6DEDD",
    date: "April 2022 - Present",
    points: [
      "Developing and maintaining web applications using PHP Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Developing Web for Hospital (SIMRS)"
    ],
  },
];

const testimonials = [
  // {
  //   testimonial:
  //     "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
  //   name: "Sara Lee",
  //   designation: "CFO",
  //   company: "Acme Co",
  //   image: "https://randomuser.me/api/portraits/women/4.jpg",
  // },
  // {
  //   testimonial:
  //     "I've never met a web developer who truly cares about their clients' success like Rick does.",
  //   name: "Chris Brown",
  //   designation: "COO",
  //   company: "DEF Corp",
  //   image: "https://randomuser.me/api/portraits/men/5.jpg",
  // },
  // {
  //   testimonial:
  //     "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
  //   name: "Lisa Wang",
  //   designation: "CTO",
  //   company: "456 Enterprises",
  //   image: "https://randomuser.me/api/portraits/women/6.jpg",
  // },
];

const projects = [
  {
    name: "Generate Design 3D Print",
    description:
      "Web-based platform that allows users to edit and make their own design in 3D Model",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "threejs",
        color: "blue-text-gradient",
      },
      {
        name: "vite",
        color: "green-text-gradient",
      },
    ],
    image: generate_baju_threejs,
    source_code_link: "https://github.com/NoveLabs/threejs-generate-baju",
  },
  {
    name: "Travel Advisor API",
    description:
      "Web that enables users to search for nearest destination restaurant and can watch the review frm the restaurant",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "material-ui",
        color: "pink-text-gradient",
      },
    ],
    image: travel_advisor,
    source_code_link: "https://github.com/NoveLabs/travel_advisor_api",
  },
  {
    name: "Crypto App",
    description:
      "Web that enables user to watch Cryptocurrencies data sorting and know the data ",
    tags: [
      {
        name: "crypto",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
    ],
    image: cryptoverse,
    source_code_link: "https://github.com/NoveLabs/crytp_app_api",
  },
  {
    name: "Dall E Clone",
    description:
      "Web that enables user generate image and share prompt that used to generate the image in community",
    tags: [
      {
        name: "dall-e",
        color: "blue-text-gradient",
      },
      {
        name: "openai",
        color: "green-text-gradient",
      },
      {
        name: "react",
        color: "pink-text-gradient",
      },
      {
        name: "vite",
        color: "blue-text-gradient",
      },
    ],
    image: dalle_clone,
    source_code_link: "https://github.com/NoveLabs/openapi-dalle",
  },
];

export { services, technologies, experiences, testimonials, projects };

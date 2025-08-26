import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  weatherpedia,
  termpw,
  payloadmaster,
  threejs,
  mhft,
  sketcher,
  CompileVortex,
} from "../assets";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "work", title: "Work" },
  { id: "projects", title: "Projects" },
  { id: "contact", title: "Contact" },
];

export const services = [
  { title: "JavaScript", icon: javascript },
  { title: "Python", icon: python },
  { title: "SQL", icon: cpp },
  { title: "React.js", icon: reactjs },
  { title: "Node.js", icon: nodejs },
  { title: "Power BI", icon: tailwind }, // Replace with Power BI icon if available
  { title: "Tableau", icon: tailwind }, // Replace with Tableau icon if available
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "Python", icon: python },
  { name: "SQL", icon: cpp },
];

export const experiences = [
  {
    title: "Intern Data Analyst",
    company_name: "AI Variant (Remote) | Bangalore",
    icon: nodejs, // Replace with company logo if available
    iconBg: "#161329",
    date: "Feb 2025 – Present",
    points: [
      "Developed dynamic Power BI dashboards visualizing core KPIs (revenue, sales funnel, opportunities).",
      "Automated MySQL data integration, enabling real-time analytics and increased reporting efficiency.",
      "Analyzed lead/opportunity data by industry, channel, and sales stage, delivering crucial business insights.",
    ],
  },
];

export const projects = [
  {
    name: "Vogue Assist Chatbot",
    description:
      "Production-grade AI-powered fashion chatbot offering personalized real-time recommendations and interactive Q&A for users. Integrated WhatsApp and web chat for omnichannel engagement. Engineered scalable backend and responsive UI.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Node.js", color: "green-text-gradient" },
      { name: "AI/Chatbot", color: "pink-text-gradient" },
      { name: "Responsive UI", color: "yellow-text-gradient" },
    ],
    image: mhft,
    source_code_link: "https://github.com/mudigondapranay/Fashion-chatbot",
    live_demo: "https://fashionchatbot.in",
  },
  {
    name: "Crowd Funding Analytics",
    description:
      "End-to-end analytics solution for crowdfunding metrics, featuring dashboards, inferential modeling, and automated ETL workflows.",
    tags: [
      { name: "SQL", color: "blue-text-gradient" },
      { name: "Tableau", color: "green-text-gradient" },
      { name: "Power BI", color: "pink-text-gradient" },
      { name: "Excel", color: "yellow-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/mudigondapranay/Crowd-funding", // Update with actual repo if available
  },
  {
    name: "Hospitality Analytics",
    description:
      "Analyzed global hospitality booking data to uncover patterns in guest behavior and operational efficiency, using data visualization and advanced statistical techniques.",
    tags: [
      { name: "SQL", color: "blue-text-gradient" },
      { name: "Tableau", color: "green-text-gradient" },
      { name: "Power BI", color: "pink-text-gradient" },
      { name: "Excel", color: "yellow-text-gradient" },
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/mudigondapranay/Hospitality, ", // Update with actual repo if available
  },
  
];

export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/mudigondapranay/",
  },
  {
    name: "GitHub",
    url: "https://github.com/mudigondapranay",
  },
  {
    name: "Behance",
    url: "https://behance.net/pranaykumar23",
  },
  {
    name: "Gmail",
    url: "mailto:pranay0923@gmail.com", // Replace with your actual email
  },
];

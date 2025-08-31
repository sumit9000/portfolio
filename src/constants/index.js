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
  tableau,
  figma,
  devtown,
  Nba,
  blackcoffer,
  crowdfunding,
  hospitality,
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
  { title: "Power BI", icon: termpw },
  { title: "Tableau", icon: tableau },
  { title: "UI/UX Design", icon: figma }, 
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
  {
    title: "UI/UX Designer",
    company_name: "Freelance & Portfolio Projects | Remote",
    icon: figma, // Replace with a UI/UX-relevant or personal icon
    iconBg: "#eaeaea",
    date: "Sep 2022 – Present", // Adjust as appropriate
    points: [
      "Designed intuitive and visually appealing web/mobile interfaces for personal and freelance projects.",
      "Optimized user flows, wireframes, and prototypes using Figma and Adobe XD.",
      "Collaborated with developers to ensure pixel-perfect implementations and enhanced user experience.",
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
      "Led analysis on 365K+ Kickstarter campaigns, building a Tableau/Excel dashboard using a star schema and advanced data cleaning; visualized funding, category, region, and timing trends, providing actionable insights for creators and investors.",
    tags: [
      { name: "SQL", color: "blue-text-gradient" },
      { name: "Tableau", color: "green-text-gradient" },
      { name: "Power BI", color: "pink-text-gradient" },
      { name: "Excel", color: "green-text-gradient" },
      { name: "Data", color: "yellow-text-gradient" },
      { name: "Analytics", color: "yellow-text-gradient" },
    ],
    image: crowdfunding,
    source_code_link: "https://github.com/mudigondapranay/Crowd-funding", // Update with actual repo if available
  },
  {
    name: "Hospitality Analytics",
    description:
      "Hospitality analytics dashboards deliver actionable insights by tracking hotel metrics like occupancy, revenue, booking sources, guest satisfaction, and performance trends, empowering managers to optimize operations and enhance guest experiences.",
    tags: [
      { name: "SQL", color: "blue-text-gradient" },
      { name: "Tableau", color: "green-text-gradient" },
      { name: "Power BI", color: "pink-text-gradient" },
      { name: "Excel", color: "yellow-text-gradient" },
      { name: "Data", color: "yellow-text-gradient" },
      { name: "Analytics", color: "yellow-text-gradient" },

    ],
    image: hospitality,
    source_code_link: "https://github.com/mudigondapranay/Hospitality", // 
  },
  {
    name: " DevTown UI Design System",
    description:
      "DevTown UI Website Design showcases a modern, visually appealing interface focused on user experience, intuitive navigation, and responsive layouts, highlighting creative design elements and seamless interactions for a next-generation web platform.",
    tags: [
      { name: "UI Design", color: "blue-text-gradient" },
  { name: "Website Design", color: "green-text-gradient" },
  { name: "User Experience", color: "pink-text-gradient" },
  { name: "Responsive Design", color: "yellow-text-gradient" },
    ],
    image: CompileVortex,
    source_code_link: "https://github.com/mudigondapranay/DevTown-Website-UI-design", // Update with actual repo if available
  },
  {
    name: "HaveMore Design System",
    description:
      "HaveMore project on Behance showcases a visually engaging digital experience, highlighting UI design, branding, user-centered layouts, modern hospitality solutions, seamless multi-platform interaction, creative storytelling, and innovative digital brand identity for business growth.",
    tags: [
      { name: "Visual Design", color: "blue-text-gradient" },
      { name: "UX/UI", color: "green-text-gradient" },
      { name: "Prototyping", color: "pink-text-gradient" },
        { name: "Behance Portfolio", color: "yellow-text-gradient" }
    ],
    image: weatherpedia,
    source_code_link: "https://github.com/mudigondapranay/HaveMore-design", 
  },
  {
    name: "Hotel Booking Website & App UI",
    description:
      "Hotel Booking Website & App delivers a modern hospitality platform with sleek UI/UX, end-to-end booking, robust user management, admin analytics, and secure payments. Designed for web and mobile, it features real-time filters, reviews, responsive layouts, and branded microinteractions.",
    tags: [
       { name: "Website Design", color: "green-text-gradient" },
  { name: "User Experience", color: "pink-text-gradient" },

    ],
    image: sketcher,
    source_code_link: "https://github.com/mudigondapranay/Hotel-booking-website-and-app-UI", // 
  },
  {
    name: "DevTown Bootcamp Registration",
    description:
      "DevTown Bootcamp Registration features a modern, multi-step UI for seamless sign-ups, referral unlocks, and integrated social authentication. Responsive, mobile-friendly design ensures an intuitive registration experience, promoting engagement and viral reach for DevTown bootcamp eventss.",
    tags: [
{ name: "Referral System", color: "yellow-text-gradient" },
  { name: "Responsive Design", color: "blue-text-gradient" },
  { name: "Bootcamp", color: "green-text-gradient" },
  { name: "Social Login", color: "pink-text-gradient" }
    ],
    image: devtown,
    source_code_link: "https://github.com/mudigondapranay/DevTown-Bootcamp-registration", 
  },
    {
    name: "Blackcoffer Figma Design Assets",
    description:
      "Blackcoffer Figma Design Assets offers high-quality, exported mobile app UI/UX components, mockups, and detailed PDF documentation—streamlining developer handoff, ensuring visual consistency, and supporting collaborative, user-centric application design and testing workflows across teams.",
    tags: [
       { name: "UI Kit", color: "blue-text-gradient" },
  { name: "Mobile App", color: "green-text-gradient" },
  { name: "Design Assets", color: "yellow-text-gradient" },
    ],
    image: blackcoffer,
    source_code_link: "https://github.com/mudigondapranay/Blackcoffer-Figma-Designs", // Update with actual repo if available
  },
  {
    name: "Basketball League Table Predictions",
    description:
      "Basketball League Table Predictions features interactive, auto-updating dashboards for NBA-inspired analytics, with live scores, advanced game cards, responsive tables, and modern Figma-based UI for analysts, fans, and brand-driven visualizations.",
    tags: [
      { name: "Data Visualization", color: "blue-text-gradient" },
      { name: "Sports Analytics", color: "green-text-gradient" },
      { name: "UI Design", color: "pink-text-gradient" },
       { name: "Live Dashboard", color: "yellow-text-gradient" },
      { name: "Basketball", color: "blue-text-gradient" },
      { name: "NBA", color: "green-text-gradient" },
    ],
    image: Nba,
    source_code_link: "https://github.com/mudigondapranay/Basketball-league-table-predictions", // Update with actual repo if available
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

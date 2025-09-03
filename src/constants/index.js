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
  gen2,
  gen3,
  gandhi,
  science,
  analyst,
  healthcare,
  iipssr,
  ai,
  imageclass,
  smart,
  semantic,
  SumitDP,
  mysql,
  metlab,
  hug,
  r,
  kaggle,
  neo,
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
  { name: "Metlab", icon: metlab },
  { name: "My SQL", icon: mysql },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Node JS", icon: nodejs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
  { name: "Python", icon: python },
  { name: "Hug", icon: hug },
  { name: "Kaggle", icon: kaggle },
  { name: "R", icon: r },
  { name: "Neo4j", icon: neo },
];

export const experiences = [
  {
    title: "Data Analyst",
    company_name: "AI Variant (Remote) | Bangalore",
    icon: ai, // Replace with company logo if available
    iconBg: "#161329",
    date: "Feb 2025 – Present",
    points: [
      "Developed dynamic Power BI dashboards visualizing core KPIs (revenue, sales funnel, opportunities).",
      "Automated MySQL data integration, enabling real-time analytics and increased reporting efficiency.",
      "Analyzed lead/opportunity data by industry, channel, and sales stage, delivering crucial business insights.",
    ],
  },
  {
    title: "Data Science Intern",
    company_name: "IISPPR | Remote",
    icon: iipssr, // Replace with company logo if available
    iconBg: "#383E56",
    date: "AUG 2025 – Present", // Adjust as appropriate
    points: [
      "Developed and deployed machine learning models using Python, improving predictive accuracy by 15%.",
      "Conducted data cleaning, feature engineering, and exploratory data analysis to prepare datasets for modeling.",
      "Collaborated with cross-functional teams to understand business requirements and translate them into technical solutions.",
    ],
  },
  {
    title: "Project Engineer Trainee",
    company_name: "Gandhi Automation PVT LTD | On site",
    icon: gandhi, 
    iconBg: "#eaeaea",
    date: "Oct 2024 – Feb 2025", // Adjust as appropriate
    points: [
      "Conducted cost vs. performance analysis and presented findings to leadership, driving changes in operational workflows.",

      "Designed scalable data pipelines to support continuous data integration from transactional systems to dashboards.",
      "Facilitated training sessions for internal users on interpreting KPIs and using visual analytics tools effectively",
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
    source_code_link: "https://github.com/sumit9000/Fashion-Chatbot-Backend",
    live_demo: "https://fashionchatbot.in",
  },
  {
    name: "Advanced Semantic Search & Information Retrieval System",
    description:
      "Implemented sentence embedding pipeline using Hugging Face Transformers (sentence-BERT models) generating 384/768-dimension.",
    tags: [
      { name: "AI", color: "blue-text-gradient" },
      { name: "Transformers", color: "green-text-gradient" },
      { name: "RAG", color: "pink-text-gradient" },
      { name: "Search", color: "green-text-gradient" },
      { name: "Cosine Similarities", color: "yellow-text-gradient" },
      { name: "BERT", color: "yellow-text-gradient" },
    ],
    image: gen2,
    source_code_link: "", 
  },
  {
    name: "Advanced Rag Systems & Multimodal AI",
    description:
      "•Integrated document parsing using Unstructured.io for complex PDF processing with OCR capabilities.",
    tags: [
      { name: "RAG", color: "blue-text-gradient" },
      { name: "Langchain", color: "green-text-gradient" },
      { name: "Pipeline", color: "pink-text-gradient" },
      { name: "Chroma", color: "yellow-text-gradient" },
      { name: "SQL-Lite", color: "yellow-text-gradient" },
      { name: "Metrices", color: "yellow-text-gradient" },

    ],
    image: gen3,
    source_code_link: "", // 
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
    source_code_link: "https://github.com/sumit9000/crowdFunding", // Update with actual repo if available
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
    source_code_link: "https://github.com/sumit9000/Hospitality", // 
  },
  {
    name: " Health care Analytics",
    description:
      "This project analyzes healthcare data to uncover trends in patient demographics, treatment efficiency, sector performance, and operational challenges. The dashboards and visualizations offer a 360° view of healthcare services.",
    tags: [
      { name: "SQL", color: "blue-text-gradient" },
      { name: "Tableau", color: "green-text-gradient" },
      { name: "Power BI", color: "pink-text-gradient" },
      { name: "Excel", color: "yellow-text-gradient" },
      { name: "Data", color: "yellow-text-gradient" },
      { name: "Analytics", color: "yellow-text-gradient" },

    ],
    image: healthcare,
    source_code_link: "https://github.com/sumit9000/Health_Care-Analytics-", // Update with actual repo if available
  },
  {
    name: "AI-Enhanced Resume Analyzer",
    description:
      "Implemented semantic similarity search using OpenAI sentence embeddings to match candidate profiles with job descriptions via cosine similarity.",
    tags: [
      { name: "Database", color: "blue-text-gradient" },
      { name: "Graph RAG-Neo 4J", color: "green-text-gradient" },
      { name: "Fine tuning", color: "pink-text-gradient" },
        { name: "Deep-Layers", color: "yellow-text-gradient" }
    ],
    image: smart,
    source_code_link: "", 
  },
  {
    name: "Semantic Search",
    description:
      "Designed and deployed a semantic search system leveraging NLP and machine learning for context-aware information retrieval Utilized HuggingFace Sentence Transformers to generate vector embeddings, stored efficiently in Pinecone vector database.",
    tags: [
       { name: "Cosine similarity", color: "green-text-gradient" },
  { name: "RAG", color: "pink-text-gradient" },

    ],
    image: semantic,
    source_code_link: "", // 
  },
  {
    name: "Image-Based Person Classification using CNN",
    description:
      "Developed a binary image classification model using Convolutional Neural Networks (CNNs) to differentiate between two individuals. Implemented and trained the model with Keras on a TensorFlow backend, optimizing for accuracy and generalization.",
    tags: [
{ name: "CNN", color: "yellow-text-gradient" },
  { name: "Deep Learning", color: "blue-text-gradient" },
  { name: "Hidden Layers", color: "green-text-gradient" },
  { name: "Fine tuning", color: "pink-text-gradient" }
    ],
    image: imageclass,
    source_code_link: "", 
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

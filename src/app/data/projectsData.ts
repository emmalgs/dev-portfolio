export type Project = {
  id: number;
  title: string;
  summary: string;
  image: string;
  tag: string[];
  stack: string[];
  bullets: string[];
  gitUrl: string;
  previewUrl: string;
  company?: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "OneFlo",
    summary: "AI-powered post-hospital patient outreach platform.",
    image: "",
    tag: ["All", "Work"],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "AWS", "Twilio", "LLM APIs", "Vector DB"],
    bullets: [
      "Built a context builder that fed structured JSON discharge notes into an LLM API to determine patient discharge location and auto-tag discharge types, driving downstream AI agent behavior.",
      "Integrated a vector database to persist and retrieve patient context across multiple outreach sessions over time.",
      "Built phone validation using Twilio's line type intelligence API and a contact prioritization algorithm producing an ordered list for the AI agent to consume.",
    ],
    gitUrl: "",
    previewUrl: "",
    company: "Olio Apps",
  },
  {
    id: 2,
    title: "Schaiduler",
    summary: "AI-powered SMS appointment platform for small businesses.",
    image: "",
    tag: ["All", "Work"],
    stack: ["Next.js", "TypeScript", "LLM APIs", "Vector DB", "Twilio", "PostgreSQL", "Vercel"],
    bullets: [
      "Integrated LLM APIs and a vector database to track and contextualize past conversations with real customers, enabling coherent, personalized outreach across sessions over time.",
      "Built a production Twilio A2P SMS system including a phone number provisioning wizard and campaign registration infrastructure.",
      "Implemented end-to-end auth flows — registration and forgot-password — from backend token generation to frontend UI. Used Claude and Cursor to generate technical designs, decompose into tickets, and ship to production rapidly.",
    ],
    gitUrl: "",
    previewUrl: "",
    company: "Olio Apps",
  },
  {
    id: 3,
    title: "Earplanes",
    summary: "Fixed a crash in a consumer iOS health app that monitors in-flight barometric pressure — then built the UI.",
    image: "",
    tag: ["All", "Work"],
    stack: ["React Native", "Swift", "Xcode", "iOS SDK"],
    bullets: [
      "Implemented a Swift quantizer to aggregate altimeter readings every 50 samples, resolving a critical crash caused by storing raw sensor data every 5 seconds on long-haul flights (14+ hours).",
      "Ported the original Java quantizer to Swift for native iOS compatibility, ensuring accurate pressure-change visualization without memory overload.",
      "Built the iOS UI in React Native, surfacing real-time barometric pressure data and alerting users when to use pressure-relief earplugs.",
    ],
    gitUrl: "",
    previewUrl: "",
    company: "Olio Apps",
  },
  {
    id: 4,
    title: "Apptio — Cost Transparency",
    summary: "BI and admin web tools for a Fortune 5 client in a large-scale enterprise monorepo.",
    image: "",
    tag: ["All", "Work"],
    stack: ["TypeScript", "React", "Rush"],
    bullets: [
      "Built strongly-typed, reusable UI components connected to live data sources for a Fortune 5 client.",
      "Implemented role-based formatting, permissions, and configuration logic across multiple user tiers.",
      "Delivered high test coverage for frontend components in a large-scale Rush monorepo.",
    ],
    gitUrl: "",
    previewUrl: "",
    company: "Olio Apps",
  },
  {
    id: 5,
    title: "Apptio — Auth & Configuration",
    summary: "SSO and identity configuration interfaces for enterprise authentication workflows.",
    image: "",
    tag: ["All", "Work"],
    stack: ["TypeScript", "React", "Playwright", "Jest", "Axios", "TanStack Query"],
    bullets: [
      "Developed SSO and identity configuration UIs for enterprise authentication workflows.",
      "Integrated new UI flows with backend API endpoints using Axios and TanStack Query for efficient data caching.",
      "Authored data flow documentation to align frontend and backend teams across product and engineering.",
    ],
    gitUrl: "",
    previewUrl: "",
    company: "Olio Apps",
  },
  {
    id: 6,
    title: "Throwback Derby",
    summary: "Backend for a VR baseball game — serverless functions for leaderboards and game data persistence.",
    image: "",
    tag: ["All", "Work"],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "GCP", "Firebase", "Axios"],
    bullets: [
      "Built serverless functions to generate and serve real-time leaderboards, aggregating and ranking game results across the player base.",
      "Designed and implemented user game data tracking, persisting session and score data to PostgreSQL on GCP.",
    ],
    gitUrl: "",
    previewUrl: "",
    company: "Olio Apps",
  },
];

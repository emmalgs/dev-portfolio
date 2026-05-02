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

export type OsProject = {
  id: number;
  name: string;
  numLabel: string;
  desc: string;
  stackDisplay: string;
  accentColor: string;
  categories: string[];
  modalTitle: string;
  modalBody: string;
};

export const osProjects: OsProject[] = [
  {
    id: 1,
    name: "ONEFLO",
    numLabel: "01 · AI/LLM",
    desc: "Context builder + AI agent for post-hospital patient outreach",
    stackDisplay: "TS · NODE · POSTGRES · LLM · VECTOR DB · TWILIO · AWS",
    accentColor: "var(--pink)",
    categories: ["AI/LLM", "BACKEND"],
    modalTitle: "// ONEFLO",
    modalBody:
      "AI agent for post-hospital patient outreach.<br><br><strong>Stack: TS · Node.js · PostgreSQL · LLM APIs · Vector DB · Twilio · AWS</strong><br><br>Built a context builder feeding JSON discharge notes into LLM API to determine discharge location and auto-tag types. Vector DB for session persistence. Contact prioritization algorithm for AI consumption.",
  },
  {
    id: 2,
    name: "SCHAIDULER",
    numLabel: "02 · AI/SMS",
    desc: "AI-contextualized SMS with vector conversation memory",
    stackDisplay: "NEXT.JS · TS · LLM · VECTOR DB · TWILIO · POSTGRES · VERCEL",
    accentColor: "var(--lime)",
    categories: ["AI/LLM", "FRONTEND"],
    modalTitle: "// SCHAIDULER",
    modalBody:
      "AI-contextualized SMS appointment platform.<br><br><strong>Stack: Next.js · TS · LLM APIs · Vector DB · Twilio · PostgreSQL · Vercel</strong><br><br>LLM APIs + vector DB for conversation memory and personalized AI outreach. Production Twilio A2P SMS. End-to-end auth flows.",
  },
  {
    id: 3,
    name: "EARPLANES",
    numLabel: "03 · iOS",
    desc: "Swift quantizer resolving in-flight barometric crash",
    stackDisplay: "REACT NATIVE · SWIFT · XCODE · iOS SDK",
    accentColor: "var(--orange)",
    categories: ["FRONTEND"],
    modalTitle: "// EARPLANES",
    modalBody:
      "iOS barometric pressure monitor for in-flight ear protection.<br><br><strong>Stack: React Native · Swift · Xcode · iOS SDK</strong><br><br>Ported Java quantizer to Swift to aggregate altimeter readings every 50 samples, resolving a critical crash on 14+ hour flights.",
  },
  {
    id: 4,
    name: "APPTIO BI",
    numLabel: "04 · ENTERPRISE",
    desc: "Chart switcher · user-editable BI · Fortune 5 · shipped in sprint",
    stackDisplay: "TS · REACT · POSTGRES · RUSH MONOREPO · JIRA · CONFLUENCE",
    accentColor: "var(--dark-green)",
    categories: ["FRONTEND"],
    modalTitle: "// APPTIO BI",
    modalBody:
      "User-editable enterprise BI platform for Fortune 5 client.<br><br><strong>Stack: TypeScript · React · PostgreSQL · Rush monorepo</strong><br><br>Chart-swapping feature: 5 visualization types, all props persisting. Owned full arc: spec → design doc → stakeholder sign-off → tickets → production within sprint.",
  },
  {
    id: 5,
    name: "APPTIO SSO",
    numLabel: "05 · AUTH",
    desc: "SSO configuration UIs for enterprise auth workflows",
    stackDisplay: "TS · REACT · C#/.NET · PLAYWRIGHT · JEST · AXIOS",
    accentColor: "var(--pink)",
    categories: ["FRONTEND", "BACKEND"],
    modalTitle: "// APPTIO SSO",
    modalBody:
      "SSO and identity configuration UIs for enterprise auth workflows.<br><br><strong>Stack: TypeScript · React · C#/.NET · Playwright · Jest · Axios · TanStack Query</strong><br><br>Secure configuration interfaces for SSO and identity. Full E2E test coverage. Data flow documentation in Confluence.",
  },
  {
    id: 6,
    name: "CI/CD MIGRATE",
    numLabel: "06 · DEVOPS",
    desc: "23 steps · 6 suites · 2 months · Fortune 5",
    stackDisplay: "GITHUB ACTIONS · JAVA · BASH · TEAMCITY · LINUX",
    accentColor: "var(--lime)",
    categories: ["BACKEND"],
    modalTitle: "// CI/CD MIGRATION",
    modalBody:
      "Enterprise CI/CD migration for Fortune 5 client.<br><br><strong>Stack: GitHub Actions · Java · Bash · TeamCity · Linux</strong><br><br>Migrated 23 build steps over 2 months. Java build scripts + Bash automation across 6+ test suites. Designed and documented new testing framework from complex legacy TeamCity architecture.",
  },
];

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
      "Implemented end-to-end auth flows from backend token generation to frontend UI.",
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
      "Ported the original Java quantizer to Swift for native iOS compatibility.",
      "Built the iOS UI in React Native, surfacing real-time barometric pressure data and alerting users when to use pressure-relief earplugs.",
    ],
    gitUrl: "",
    previewUrl: "",
    company: "Olio Apps",
  },
];

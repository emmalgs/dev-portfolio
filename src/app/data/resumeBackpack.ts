/** Tools / libs / languages — backpack chips open the global modal with resume context. */
export type BackpackItem = {
  id: string;
  letter: string;
  modalTitle: string;
  modalBody: string;
};

export const BACKPACK_ITEMS: BackpackItem[] = [
  {
    id: "ts",
    letter: "TS",
    modalTitle: "// TYPESCRIPT",
    modalBody:
      "Primary production language for web and Node services: strict typing, generics, and shared types across API and UI boundaries.",
  },
  {
    id: "react",
    letter: "RC",
    modalTitle: "// REACT",
    modalBody:
      "Component-driven UIs, hooks, performance-minded lists and forms, and integration with design systems on Fortune 5 and startup codebases.",
  },
  {
    id: "next",
    letter: "NX",
    modalTitle: "// NEXT.JS",
    modalBody:
      "Full-stack routing, server components where appropriate, API routes, and Vercel-style deploy workflows for Schaiduler-style products.",
  },
  {
    id: "node",
    letter: "ND",
    modalTitle: "// NODE.JS",
    modalBody:
      "Services, workers, and Twilio/LLM orchestration with structured logging and PostgreSQL access patterns.",
  },
  {
    id: "pg",
    letter: "PG",
    modalTitle: "// POSTGRESQL",
    modalBody:
      "Relational modeling, migrations, query tuning, and pairing with vector extensions where the product needs both OLTP and retrieval.",
  },
  {
    id: "llm",
    letter: "AI",
    modalTitle: "// LLM APIS",
    modalBody:
      "Prompting, tool use, evaluation loops, cost/latency tradeoffs, and safe handling of PII in healthcare-adjacent flows.",
  },
  {
    id: "swift",
    letter: "SW",
    modalTitle: "// SWIFT / iOS",
    modalBody:
      "Native modules and performance fixes (e.g. Earplanes quantizer), bridging to React Native where the UI layer stays cross-platform.",
  },
  {
    id: "dotnet",
    letter: "C#",
    modalTitle: "// C# / .NET",
    modalBody:
      "Enterprise SSO and configuration UIs backed by .NET services; Playwright and Jest coverage for critical paths.",
  },
  {
    id: "gha",
    letter: "CI",
    modalTitle: "// GITHUB ACTIONS",
    modalBody:
      "CI/CD migration work: multi-step pipelines, secrets, artifacts, and parity with legacy TeamCity behavior where required.",
  },
  {
    id: "docker",
    letter: "DK",
    modalTitle: "// DOCKER",
    modalBody:
      "Containerized builds and repeatable local/prod parity for services and migration workstreams.",
  },
  {
    id: "twilio",
    letter: "TW",
    modalTitle: "// TWILIO",
    modalBody:
      "A2P registration, SMS orchestration, webhooks, and production phone-number lifecycle for AI outreach products.",
  },
  {
    id: "aws",
    letter: "AW",
    modalTitle: "// AWS",
    modalBody:
      "Cloud primitives for workloads that outgrow a single PaaS: queues, storage, IAM-shaped boundaries, and cost awareness.",
  },
];

export function getBackpackItemById(id: string): BackpackItem | undefined {
  return BACKPACK_ITEMS.find((b) => b.id === id);
}

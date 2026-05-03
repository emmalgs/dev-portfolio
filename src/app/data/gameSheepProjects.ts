import { osProjects } from "./projectsData";

/** One sheep = one shipped project; copy lines up with osProjects where possible. */
export type SheepProjectMeta = {
  displayName: string;
  modalTitle: string;
  modalBody: string;
};

function fromOs(
  p: (typeof osProjects)[number]
): SheepProjectMeta {
  return {
    displayName: p.name,
    modalTitle: p.modalTitle,
    modalBody: p.modalBody,
  };
}

/** Index matches `Sheep.projectIndex` (flock slot order). */
export const SHEEP_PROJECTS: SheepProjectMeta[] = [
  fromOs(osProjects[0]),
  fromOs(osProjects[1]),
  fromOs(osProjects[2]),
  fromOs(osProjects[3]),
  fromOs(osProjects[4]),
  fromOs(osProjects[5]),
  {
    displayName: "VECTOR + RAG",
    modalTitle: "// VECTOR + RAG",
    modalBody:
      "Vector search and retrieval-augmented patterns across Olio work: embeddings for session memory, similarity search over patient and scheduling context, and production guardrails around chunking and freshness.",
  },
  {
    displayName: "PROD INTEGRATIONS",
    modalTitle: "// PRODUCTION INTEGRATIONS",
    modalBody:
      "Shipping against real external APIs under constraints: Twilio messaging, LLM providers, auth vendors, and cloud data stores — error paths, retries, secrets, and observability treated as first-class.",
  },
];

export function getSheepProject(index: number): SheepProjectMeta {
  const i = Math.max(0, Math.min(SHEEP_PROJECTS.length - 1, index));
  return SHEEP_PROJECTS[i];
}

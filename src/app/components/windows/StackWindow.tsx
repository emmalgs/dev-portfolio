"use client";

import React from "react";
import { SkillBar } from "../os/molecules/SkillBar";

const SKILLS = [
  { name: "TYPESCRIPT", pct: 92, color: "var(--accent-yellow)" },
  { name: "REACT", pct: 90, color: "var(--accent-yellow)" },
  { name: "NEXT.JS", pct: 80, color: "var(--accent-cobalt)" },
  { name: "NODE.JS", pct: 82, color: "var(--accent-cobalt)" },
  { name: "POSTGRESQL", pct: 78, color: "var(--accent-cobalt)" },
  { name: "LLM APIs", pct: 75, color: "var(--accent-orange)" },
  { name: "SWIFT / iOS", pct: 54, color: "var(--accent-orange)" },
  { name: "C#/.NET", pct: 60, color: "var(--accent-yellow)" },
] as const;

export function StackWindow() {
  return (
    <div className="window-body-prose" style={{ paddingTop: 4 }}>
      {SKILLS.map((s) => (
        <SkillBar key={s.name} name={s.name} pct={s.pct} color={s.color} />
      ))}
    </div>
  );
}

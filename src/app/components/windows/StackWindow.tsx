"use client";

import React from "react";
import { SkillBar } from "../os/molecules/SkillBar";

const SKILLS = [
  { name: "TYPESCRIPT", pct: 92, color: "var(--lime)" },
  { name: "REACT", pct: 90, color: "var(--lime)" },
  { name: "NEXT.JS", pct: 80, color: "var(--lime)" },
  { name: "NODE.JS", pct: 82, color: "var(--dark-green)" },
  { name: "POSTGRESQL", pct: 78, color: "var(--dark-green)" },
  { name: "LLM APIs", pct: 75, color: "var(--pink)" },
  { name: "SWIFT / iOS", pct: 54, color: "var(--orange)" },
  { name: "C#/.NET", pct: 60, color: "var(--orange)" },
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

import React from "react";

interface SkillBarProps {
  name: string;
  pct: number;
  color: string;
}

export function SkillBar({ name, pct, color }: SkillBarProps) {
  return (
    <div className="sk">
      <div className="sk-name">{name}</div>
      <div className="sk-bar">
        <div className="sk-fill" style={{ width: `${pct}%`, background: color }} />
      </div>
    </div>
  );
}

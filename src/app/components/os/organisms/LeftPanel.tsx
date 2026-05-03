"use client";
import React from "react";
import { PanelSection } from "../molecules/PanelSection";
import { CorralThumb } from "../molecules/Thumb";
import { SkillBar } from "../molecules/SkillBar";
import { DataRow } from "../molecules/DataRow";
import { LegendRow } from "../molecules/LegendRow";

const SKILLS = [
  { name: "TYPESCRIPT", pct: 92, color: "var(--accent-yellow)" },
  { name: "REACT", pct: 90, color: "var(--accent-yellow)" },
  { name: "NEXT.JS", pct: 80, color: "var(--accent-cobalt)" },
  { name: "NODE.JS", pct: 82, color: "var(--accent-cobalt)" },
  { name: "POSTGRESQL", pct: 78, color: "var(--accent-cobalt)" },
  { name: "LLM APIs", pct: 75, color: "var(--accent-orange)" },
  { name: "SWIFT / iOS", pct: 54, color: "var(--accent-orange)" },
  { name: "C#/.NET", pct: 60, color: "var(--accent-yellow)" },
];

const LEGEND_ITEMS = [
  { color: "var(--accent-yellow)", label: "FRONT" },
  { color: "var(--accent-cobalt)", label: "BACK" },
  { color: "var(--accent-orange)", label: "AI" },
  { color: "var(--accent-orange)", label: "MOBILE" },
  { color: "var(--accent-cobalt)", label: "INFRA" },
];

export function LeftPanel() {
  return (
    <div className="panel panel-l">
      <PanelSection title="// FIELD LOG" headColor="blk" badge="▸ OLIO 23–26">
        <CorralThumb />
      </PanelSection>

      <PanelSection title="// STACK LOG" headColor="grn">
        {SKILLS.map((s) => (
          <SkillBar key={s.name} name={s.name} pct={s.pct} color={s.color} />
        ))}
      </PanelSection>

      <PanelSection title="// STATUS" headColor="lim">
        <DataRow label="MODE" value="OPEN" valueColor="g" />
        <DataRow label="REMOTE" value="YES" valueColor="g" />
        <DataRow label="EXP" value="3+ YRS" valueColor="o" />
        <DataRow label="BASE" value="OR, USA" />
        <DataRow label="TYPE" value="FULL-STK" valueColor="p" />
      </PanelSection>

      <PanelSection title="// LEGEND" headColor="blk">
        <LegendRow items={LEGEND_ITEMS} />
      </PanelSection>

      <div className="ps" style={{ borderBottom: "none" }}>
        <div className="ann">
          <span className="grn">▸ 6 projects</span>
          <br />
          <span className="red">▸ 2 AI/LLM</span>
          <br />
          <span className="lim">▸ 3+ yrs prod</span>
          <br />
          ▸ Fortune 5 client
          <br />▸ iOS · Web · Infra
        </div>
      </div>
    </div>
  );
}

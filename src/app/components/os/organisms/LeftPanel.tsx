"use client";
import React from "react";
import { PanelSection } from "../molecules/PanelSection";
import { BackpackStrip } from "../molecules/BackpackStrip";
import { CorralThumb } from "../molecules/Thumb";
import { SkillBar } from "../molecules/SkillBar";
import { DataRow } from "../molecules/DataRow";
import { LegendRow } from "../molecules/LegendRow";

const SKILLS = [
  { name: "TYPESCRIPT", pct: 92, color: "var(--lime)" },
  { name: "REACT", pct: 90, color: "var(--lime)" },
  { name: "NEXT.JS", pct: 80, color: "var(--lime)" },
  { name: "NODE.JS", pct: 82, color: "var(--dark-green)" },
  { name: "POSTGRESQL", pct: 78, color: "var(--dark-green)" },
  { name: "LLM APIs", pct: 75, color: "var(--pink)" },
  { name: "SWIFT / iOS", pct: 54, color: "var(--orange)" },
  { name: "C#/.NET", pct: 60, color: "var(--orange)" },
];

const LEGEND_ITEMS = [
  { color: "var(--lime)", label: "FRONT" },
  { color: "var(--dark-green)", label: "BACK" },
  { color: "var(--pink)", label: "AI" },
  { color: "var(--orange)", label: "MOBILE" },
  { color: "var(--cobalt)", label: "INFRA" },
];

export function LeftPanel() {
  return (
    <div className="panel panel-l">
      <PanelSection title="// FIELD LOG" headColor="blk" badge="▸ OLIO 23–26">
        <CorralThumb />
      </PanelSection>

      <PanelSection title="// BACKPACK" headColor="blk" badge="▸ STACK">
        <BackpackStrip />
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

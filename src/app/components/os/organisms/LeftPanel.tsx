"use client";
import React from "react";
import { PanelSection } from "../molecules/PanelSection";
import { Thumb, IlloThumb, CorralThumb } from "../molecules/Thumb";
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
        <div className="thumb-grid">
          <CorralThumb />
          <Thumb
            bg="var(--lime-pale)"
            label="APPTIO BI"
            modalTitle="// APPTIO BI"
            modalBody="Fortune 5 enterprise BI platform. Chart-swapping feature: 5 visualization types, all props persisting. Owned spec → design doc → stakeholder sign-off → tickets → production. Within sprint."
          >
            <svg viewBox="0 0 60 44" className="mini-svg">
              <rect x="4" y="28" width="8" height="14" fill="#1a3d2b" />
              <rect x="14" y="18" width="8" height="24" fill="#b8d400" />
              <rect x="24" y="22" width="8" height="20" fill="#e8638c" />
              <rect x="34" y="10" width="8" height="32" fill="#1a3d2b" />
              <rect x="44" y="16" width="8" height="26" fill="#b8d400" />
              <rect x="4" y="42" width="48" height="1" fill="#111" />
            </svg>
          </Thumb>
          <Thumb
            bg="var(--pink-pale)"
            label="ONEFLO"
            modalTitle="// ONEFLO"
            modalBody="AI agent for post-hospital patient outreach. Context builder fed JSON discharge notes into LLM API. Vector DB for session persistence. Contact prioritization algorithm."
          >
            <svg viewBox="0 0 60 44" className="mini-svg">
              <circle cx="12" cy="30" r="3" fill="#e8638c" />
              <circle cx="22" cy="18" r="2" fill="#1a3d2b" />
              <circle cx="32" cy="24" r="4" fill="#e8621a" />
              <circle cx="42" cy="12" r="2" fill="#e8638c" />
              <circle cx="18" cy="36" r="2" fill="#b8d400" />
              <circle cx="48" cy="28" r="3" fill="#1a3d2b" />
              <circle cx="8" cy="14" r="2" fill="#e8621a" />
              <circle cx="38" cy="38" r="2" fill="#b8d400" />
              <line x1="0" y1="42" x2="60" y2="42" stroke="#111" strokeWidth="0.5" />
            </svg>
          </Thumb>
          <IlloThumb />
        </div>
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
          <span className="grn">▸ 6 projects</span><br />
          <span className="red">▸ 2 AI/LLM</span><br />
          <span className="lim">▸ 3+ yrs prod</span><br />
          ▸ Fortune 5 client<br />
          ▸ iOS · Web · Infra
        </div>
      </div>
    </div>
  );
}

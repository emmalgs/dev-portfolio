"use client";
import React from "react";
import { PanelSection } from "../molecules/PanelSection";
import { Thumb, IlloThumb, DragonSteakThumb } from "../molecules/Thumb";
import { DataRow } from "../molecules/DataRow";
import { Timeline } from "../molecules/Timeline";
import { CtaLink } from "../atoms/CtaLink";
import { useModal } from "../../../contexts/ModalContext";

const TIMELINE_SEGMENTS = [
  { label: "2014–18", sublabel: "ART", flex: 2, bg: "var(--accent-yellow-pale)" },
  { label: "18–22", sublabel: "STUDIO", flex: 2, bg: "var(--accent-cobalt-pale)" },
  { label: "23", sublabel: "EPIC", flex: 1, bg: "var(--accent-orange-pale)" },
  { label: "23–NOW", sublabel: "OLIO", flex: 3, bg: "var(--accent-yellow)" },
];

export function RightPanel() {
  const { openModal } = useModal();

  return (
    <div className="panel panel-r">
      <PanelSection title="// SPECIMENS" headColor="blk" badge="▸ STACK">
        <div className="thumb-grid">
          <Thumb
            bg="var(--off-white)"
            label="SCHAIDULER"
            modalTitle="// SCHAIDULER"
            modalBody="AI-contextualized SMS with vector conversation memory. Next.js · Twilio · LLM APIs · Vector DB · PostgreSQL · Vercel"
          >
            <svg viewBox="0 0 60 44" className="mini-svg">
              <polyline points="4,36 12,24 22,28 32,14 42,20 54,8" fill="none" stroke="#e04a18" strokeWidth="1.5" />
              <polyline points="4,40 12,32 22,34 32,22 42,26 54,16" fill="none" stroke="#1e4ed8" strokeWidth="1" />
              <line x1="0" y1="42" x2="60" y2="42" stroke="#0a0a0a" strokeWidth="0.5" />
            </svg>
          </Thumb>
          <DragonSteakThumb />
          <IlloThumb />
          <Thumb
            bg="var(--accent-orange-pale)"
            label="EARPLANES"
            modalTitle="// EARPLANES"
            modalBody="iOS barometric pressure monitor. React Native · Swift · Xcode · iOS SDK. Swift quantizer resolved critical crash on 14+ hour flights."
          >
            <svg viewBox="0 0 60 50" className="mini-svg">
              <circle cx="30" cy="26" r="20" fill="none" stroke="#ccc" strokeWidth="0.7" />
              <circle cx="30" cy="26" r="13" fill="none" stroke="#ccc" strokeWidth="0.7" />
              <circle cx="30" cy="26" r="6" fill="none" stroke="#ccc" strokeWidth="0.7" />
              <line x1="10" y1="26" x2="50" y2="26" stroke="#ccc" strokeWidth="0.5" />
              <line x1="30" y1="6" x2="30" y2="46" stroke="#ccc" strokeWidth="0.5" />
              <polygon points="30,10 38,32 22,32" fill="rgba(224,74,24,0.35)" stroke="var(--accent-orange)" strokeWidth="1" />
              <circle cx="30" cy="26" r="2" fill="var(--accent-orange)" />
            </svg>
          </Thumb>
        </div>
      </PanelSection>

      <PanelSection title="// EDUCATION" headColor="org">
        <div className="ann" style={{ padding: "4px 5px", lineHeight: 1.7 }}>
          <span className="grn">EPICODUS · 2023</span><br />
          Full Stack Dev<br />
          <span style={{ color: "var(--accent-orange)" }}>↳ Olio Apps intern</span>
        </div>
        <div style={{ height: "1px", background: "#ccc", margin: "0 5px" }} />
        <div className="ann" style={{ padding: "4px 5px", lineHeight: 1.7 }}>
          <span className="grn">OCAC · 2018</span><br />
          MFA · Craft
        </div>
        <div style={{ height: "1px", background: "#ccc", margin: "0 5px" }} />
        <div className="ann" style={{ padding: "4px 5px", lineHeight: 1.7 }}>
          <span className="grn">GOSHEN COLLEGE · 2014</span><br />
          BA · Art / Env Sci<br />Social Policy
        </div>
      </PanelSection>

      <PanelSection title="// TIMELINE" headColor="lim">
        <Timeline segments={TIMELINE_SEGMENTS} />
      </PanelSection>

      <PanelSection title="// FIELD DATA" headColor="grn">
        <DataRow label="FORTUNE 5" value="✓" valueColor="g" />
        <DataRow label="HEALTHCARE" value="✓" valueColor="g" />
        <DataRow label="STARTUP" value="✓" valueColor="g" />
        <DataRow label="ENTERPRISE" value="✓" valueColor="g" />
        <DataRow label="iOS · MOBILE" value="✓" valueColor="g" />
      </PanelSection>

      <PanelSection title="// ALSO AN ARTIST" headColor="pnk">
        <div className="ann" style={{ padding: "4px 5px", fontFamily: "var(--serif)", fontStyle: "italic", lineHeight: 1.6 }}>
          Active studio. Solo shows. PNCA adjunct. Illustrator.
        </div>
        <CtaLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openModal(
              "// ALSO AN ARTIST",
              "Active painting studio. Solo shows. Adjunct at PNCA. Illustrator 2014–2023.<br><br><strong>↗ emmagerig.com</strong>"
            );
          }}
        >
          emmagerig.com ↗
        </CtaLink>
      </PanelSection>

      <PanelSection title="// CONTACT" headColor="blk" noBorder>
        <CtaLink href="https://www.linkedin.com/in/emma-gerig/">⬡ LINKEDIN</CtaLink>
        <CtaLink href="https://github.com/emmalgs">⬡ GITHUB</CtaLink>
        <CtaLink href="mailto:elgerig@gmail.com">⬡ EMAIL</CtaLink>
        <CtaLink href="/resume.pdf" variant="p">⬇ RESUME PDF</CtaLink>
      </PanelSection>
    </div>
  );
}

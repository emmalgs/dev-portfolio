"use client";
import React from "react";
import { PanelSection } from "../molecules/PanelSection";
import { Thumb, IlloThumb, DragonSteakThumb } from "../molecules/Thumb";
import { DataRow } from "../molecules/DataRow";
import { Timeline } from "../molecules/Timeline";
import { CtaLink } from "../atoms/CtaLink";
import { useModal } from "../../../contexts/ModalContext";

const TIMELINE_SEGMENTS = [
  {
    label: "2014–18",
    sublabel: "ART",
    flex: 2,
    bg: "var(--lime-pale)",
  },
  {
    label: "18–22",
    sublabel: "STUDIO",
    flex: 2,
    bg: "var(--orange-pale)",
  },
  { label: "23", sublabel: "EPIC", flex: 1, bg: "var(--pink-pale)" },
  { label: "23–NOW", sublabel: "OLIO", flex: 3, bg: "var(--lime)" },
];

export function RightPanel() {
  const { openModal } = useModal();

  return (
    <div className="panel panel-r">
      <PanelSection title="// SPECIMENS" headColor="blk" badge="▸ STACK">
        <DragonSteakThumb />
      </PanelSection>

      <PanelSection title="// EDUCATION" headColor="org">
        <div className="ann" style={{ padding: "4px 5px", lineHeight: 1.7 }}>
          <span className="grn">EPICODUS · 2023</span>
          <br />
          Full Stack Dev
          <br />
          <span style={{ color: "var(--pink)" }}>
            ↳ Olio Apps intern
          </span>
        </div>
        <div style={{ height: "1px", background: "#ccc", margin: "0 5px" }} />
        <div className="ann" style={{ padding: "4px 5px", lineHeight: 1.7 }}>
          <span className="grn">OCAC · 2018</span>
          <br />
          MFA · Craft
        </div>
        <div style={{ height: "1px", background: "#ccc", margin: "0 5px" }} />
        <div className="ann" style={{ padding: "4px 5px", lineHeight: 1.7 }}>
          <span className="grn">GOSHEN COLLEGE · 2014</span>
          <br />
          BA · Art / Env Sci
          <br />
          Social Policy
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
        <div
          className="ann"
          style={{
            padding: "4px 5px",
            fontFamily: "var(--serif)",
            fontStyle: "italic",
            lineHeight: 1.6,
          }}
        >
          Active studio. Solo shows. PNCA adjunct. Illustrator.
        </div>
        <CtaLink
          href="#"
          onClick={(e) => {
            e.preventDefault();
            openModal(
              "// ALSO AN ARTIST",
              "Active painting studio. Solo shows. Adjunct at PNCA. Illustrator 2014–2023.<br><br><strong>↗ emmagerig.com</strong>",
            );
          }}
        >
          emmagerig.com ↗
        </CtaLink>
      </PanelSection>

      <PanelSection title="// CONTACT" headColor="blk" noBorder>
        <CtaLink href="https://www.linkedin.com/in/emma-gerig/">
          ⬡ LINKEDIN
        </CtaLink>
        <CtaLink href="https://github.com/emmalgs">⬡ GITHUB</CtaLink>
        <CtaLink href="mailto:elgerig@gmail.com">⬡ EMAIL</CtaLink>
        <CtaLink href="/resume.pdf" variant="p">
          ⬇ RESUME PDF
        </CtaLink>
      </PanelSection>
    </div>
  );
}

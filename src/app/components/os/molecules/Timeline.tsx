import React from "react";

interface TlSegment {
  label: string;
  sublabel: string;
  flex: number;
  bg: string;
}

interface TimelineProps {
  segments: TlSegment[];
}

export function Timeline({ segments }: TimelineProps) {
  return (
    <div className="timeline">
      {segments.map(({ label, sublabel, flex, bg }) => (
        <div key={label} className="tl-seg" style={{ background: bg, flex }}>
          {label}
          <span className="tl-seg-sub">{sublabel}</span>
        </div>
      ))}
    </div>
  );
}

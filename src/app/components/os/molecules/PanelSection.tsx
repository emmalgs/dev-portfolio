import React from "react";

type HeadColor = "blk" | "grn" | "pnk" | "lim" | "org";

interface PanelSectionProps {
  title?: string;
  headColor?: HeadColor;
  badge?: string;
  children: React.ReactNode;
  noBorder?: boolean;
}

export function PanelSection({ title, headColor, badge, children, noBorder }: PanelSectionProps) {
  return (
    <div className="ps" style={noBorder ? { borderBottom: "none" } : undefined}>
      {title !== undefined && headColor && (
        <div className={`ps-head ${headColor}`}>
          <span>{title}</span>
          {badge && <span className="badge">{badge}</span>}
        </div>
      )}
      {children}
    </div>
  );
}

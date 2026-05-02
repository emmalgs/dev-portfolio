import React from "react";

interface LegendItem {
  color: string;
  label: string;
}

interface LegendRowProps {
  items: LegendItem[];
}

export function LegendRow({ items }: LegendRowProps) {
  return (
    <div className="legend-row">
      {items.map(({ color, label }) => (
        <div key={label} className="leg-item">
          <div className="leg-dot" style={{ background: color }} />
          <span>{label}</span>
        </div>
      ))}
    </div>
  );
}

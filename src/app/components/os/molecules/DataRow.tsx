import React from "react";

type DvColor = "g" | "p" | "o" | "l";

interface DataRowProps {
  label: string;
  value: string;
  valueColor?: DvColor;
}

export function DataRow({ label, value, valueColor }: DataRowProps) {
  return (
    <div className="dr">
      <span>{label}</span>
      <span className={`dv${valueColor ? " " + valueColor : ""}`}>{value}</span>
    </div>
  );
}

"use client";

import React from "react";
import styles from "./DesktopIcon.module.css";

interface DesktopIconProps {
  id: string;
  label: string;
  icon?: string;
  accent?: boolean;
  position: { x: number; y: number };
  onClick: () => void;
}

export function DesktopIcon({ id, label, icon = "◆", accent, position, onClick }: DesktopIconProps) {
  return (
    <div
      className={styles.icon}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
      onClick={onClick}
      data-icon={id}
    >
      <div className={`${styles.iconBox} ${accent ? styles.accent : ""}`}>
        {icon}
      </div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}

"use client";

import React from "react";
import styles from "./WindowBar.module.css";

type WindowBarProps = {
  label: string;
  accent: boolean;
  onClose: () => void;
  onDragStart: (e: React.MouseEvent) => void;
  className?: string;
};

export function WindowBar({ label, onClose, onDragStart }: WindowBarProps) {
  return (
    <div
      className={styles.bar}
      onMouseDown={(e) => {
        if ((e.target as HTMLElement).closest("button")) return;
        onDragStart(e);
      }}
    >
      <span className={styles.label}>{label}</span>
      <button type="button" className={styles.close} onClick={onClose} aria-label={`Close ${label}`}>
        ✕
      </button>
    </div>
  );
}

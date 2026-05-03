"use client";

import React from "react";
import { useWindows } from "@/state/windowContext";

export function RightNav() {
  const { state, openWindow } = useWindows();
  const closed = state.windows.filter((w) => w.status === "closed");

  return (
    <nav className="portfolio-right-nav" aria-label="Closed windows">
      <span className="portfolio-right-nav__label">CLOSED</span>
      {closed.map((w) => (
        <button
          key={w.id}
          type="button"
          className="portfolio-right-nav__btn"
          onClick={() => openWindow(w.id)}
          title={w.label}
        >
          <span
            className="portfolio-right-nav__dot"
            style={{
              background: w.accent ? "var(--accent-orange)" : "var(--black)",
            }}
            aria-hidden
          />
          <span className="portfolio-right-nav__text">{w.label}</span>
        </button>
      ))}
    </nav>
  );
}

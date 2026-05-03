"use client";

import React from "react";
import { useWindows } from "@/state/windowContext";

/** When the right dock is hidden on small phones, reopen minimized windows from here. */
export function MobileClosedDock() {
  const { state, openWindow } = useWindows();
  const closed = state.windows.filter((w) => w.status === "closed");

  if (closed.length === 0) return null;

  return (
    <div className="mobile-closed-dock" aria-label="Closed windows">
      <span className="mobile-closed-dock__label">CLOSED</span>
      <div className="mobile-closed-dock__scroll">
        {closed.map((w) => (
          <button
            key={w.id}
            type="button"
            className="mobile-closed-dock__chip"
            onClick={() => openWindow(w.id)}
            title={w.label}
          >
            <span
              className="mobile-closed-dock__dot"
              style={{
                background: w.accent ? "var(--accent-orange)" : "var(--black)",
              }}
              aria-hidden
            />
            {w.label}
          </button>
        ))}
      </div>
    </div>
  );
}

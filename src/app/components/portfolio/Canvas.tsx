"use client";

import React from "react";
import type { WindowId } from "@/state/types";
import { WINDOW_DISPLAY_ORDER } from "@/state/initialState";
import { useWindows } from "@/state/windowContext";
import { Window } from "@/app/components/window/Window";
import { DesktopIcon } from "@/app/components/window/DesktopIcon";
import { HelloWindow } from "@/app/components/windows/HelloWindow";
import { ProjectsWindow } from "@/app/components/windows/ProjectsWindow";
import { StatusWindow } from "@/app/components/windows/StatusWindow";
import { EducationWindow } from "@/app/components/windows/EducationWindow";
import { ContactWindow } from "@/app/components/windows/ContactWindow";
import { ArtWindow } from "@/app/components/windows/ArtWindow";
import { GameWindow } from "@/app/components/windows/GameWindow";

// Icon metadata for each window
const WINDOW_ICONS: Record<WindowId, { icon: string; label: string }> = {
  hello: { icon: "◆", label: "HELLO" },
  projects: { icon: "▣", label: "PROJECTS" },
  status: { icon: "◉", label: "STATUS" },
  education: { icon: "◈", label: "EDU" },
  contact: { icon: "◎", label: "CONTACT" },
  art: { icon: "◬", label: "ART" },
  game: { icon: "◉", label: "GAME" },
};


function WindowPane({ id }: { id: WindowId; }) {
  switch (id) {
    case "hello":
      return <HelloWindow />;
    case "projects":
      return <ProjectsWindow />;
    case "status":
      return <StatusWindow />;
    case "education":
      return <EducationWindow />;
    case "contact":
      return <ContactWindow />;
    case "art":
      return <ArtWindow />;
    case "game":
      return <GameWindow />;
  }
}

function sortOpenForDisplay<T extends { id: WindowId }>(open: ReadonlyArray<T>): T[] {
  const rank = (wid: WindowId) => {
    const i = WINDOW_DISPLAY_ORDER.indexOf(wid);
    return i === -1 ? WINDOW_DISPLAY_ORDER.length : i;
  };
  return [...open].sort((a, b) => rank(a.id) - rank(b.id));
}

export function Canvas() {
  const { state, openWindow } = useWindows();
  const open = sortOpenForDisplay(state.windows.filter((w) => w.status === "open"));
  const closed = state.windows.filter((w) => w.status === "closed");

  const handleIconClick = (id: WindowId) => {
    openWindow(id);
  };

  // Calculate icon positions in a grid
  const getIconPosition = (index: number) => {
    const startX = 20;
    const startY = 20;
    const gridSpacing = 100;
    const iconsPerRow = 6;

    const row = Math.floor(index / iconsPerRow);
    const col = index % iconsPerRow;

    return {
      x: startX + col * gridSpacing,
      y: startY + row * gridSpacing,
    };
  };

  return (
    <div className="portfolio-canvas">
      {/* Desktop Icons for closed windows */}
      {closed.map((w, index) => {
        const iconData = WINDOW_ICONS[w.id];
        return (
          <DesktopIcon
            key={w.id}
            id={w.id}
            label={iconData.label}
            icon={iconData.icon}
            accent={w.accent}
            position={getIconPosition(index)}
            onClick={() => handleIconClick(w.id)}
          />
        );
      })}

      {/* Open Windows */}
      {open.map((w) => (
        <Window
          key={w.id}
          id={w.id}
          label={w.label}
          accent={w.accent}
          position={w.position}
          zIndex={w.zIndex}
        >
          <WindowPane id={w.id} />
        </Window>
      ))}
    </div>
  );
}

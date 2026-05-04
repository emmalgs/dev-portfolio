"use client";

import React from "react";
import type { WindowId } from "@/state/types";
import { WINDOW_DISPLAY_ORDER } from "@/state/initialState";
import { useWindows } from "@/state/windowContext";
import { Window } from "@/app/components/window/Window";
import { HelloWindow } from "@/app/components/windows/HelloWindow";
import { ProjectsWindow } from "@/app/components/windows/ProjectsWindow";
import { StatusWindow } from "@/app/components/windows/StatusWindow";
import { EducationWindow } from "@/app/components/windows/EducationWindow";
import { ContactWindow } from "@/app/components/windows/ContactWindow";
import { ArtWindow } from "@/app/components/windows/ArtWindow";
import { GameWindow } from "@/app/components/windows/GameWindow";


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
  const { state } = useWindows();
  const open = sortOpenForDisplay(state.windows.filter((w) => w.status === "open"));

  return (
    <div className="portfolio-canvas">
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

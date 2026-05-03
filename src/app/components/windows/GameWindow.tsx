"use client";

import React from "react";
import { usePastureGate } from "@/app/contexts/PastureGateContext";
import { useGame } from "@/app/contexts/GameContext";

export function GameWindow() {
  const openPasture = usePastureGate();
  const { restartGame } = useGame();

  const launch = () => {
    restartGame();
    openPasture();
  };

  return (
    <button type="button" className="game-window-launch" onClick={launch}>
      <span className="game-window-launch__lead">
        Pasture — herd sheep, collect résumé backpack tokens, dodge the dragon. Keyboard or touch on
        narrow screens.
      </span>
      <span className="game-window-launch__blink">[ CLICK TO PLAY ]</span>
    </button>
  );
}

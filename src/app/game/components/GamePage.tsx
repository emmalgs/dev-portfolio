// src/pages/GamePage.tsx

import React from "react";
import { GameCanvas } from "./GameCanvas";
import { useGame } from "@/app/contexts/GameContext";

export const GamePage = () => {
  const { gameState, dismissPopup, restartGame, setPlayBounds } = useGame();
  return (
    <GameCanvas
      gameState={gameState}
      onDismissPopup={dismissPopup}
      onRestart={restartGame}
      setPlayBounds={setPlayBounds}
    />
  );
};
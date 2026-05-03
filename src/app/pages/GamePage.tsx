// src/pages/GamePage.tsx

import React from "react";
import { GameCanvas } from "../components/os/organisms/GameCanvas";
import { useGame } from "../contexts/GameContext";

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
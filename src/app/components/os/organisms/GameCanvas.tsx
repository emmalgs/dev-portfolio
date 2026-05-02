// src/components/GameCanvas.tsx

import React from "react";
import { GameState } from "../../../game/state/GameState";

type Props = {
  gameState: GameState;
};

export const GameCanvas: React.FC<Props> = ({ gameState }) => {
  return (
    <div
      style={{
        width: 600,
        height: 400,
        border: "2px solid black",
        position: "relative",
        overflow: "hidden",
        background: "#e6f2ff",
      }}
    >
      {/* Player */}
      <div style={{ position: "absolute", left: gameState.player.x, top: gameState.player.y }}>
        🤠🐎
      </div>

      {/* Sheep */}
      {gameState.sheep.map((s) => (
        <div key={s.id} style={{ position: "absolute", left: s.x, top: s.y }}>
          🐑
        </div>
      ))}

      {/* Dragon */}
      {gameState.dragon?.active && (
        <div style={{ position: "absolute", left: gameState.dragon.x, top: gameState.dragon.y }}>
          🐉🔥
        </div>
      )}
    </div>
  );
};
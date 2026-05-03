// src/components/GameCanvas.tsx

import React from "react";
import { GameState } from "../../../game/state/GameState";

type Props = {
  gameState: GameState;
};

export const GameCanvas: React.FC<Props> = ({ gameState }) => {
  return (
    <div tabIndex={0} className="game-canvas">
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

      {gameState.lasso && (
        <>
          {/* Rope */}
          <div
            style={{
              position: "absolute",
              left: gameState.player.x,
              top: gameState.player.y,
              width: Math.hypot(
                gameState.lasso.x - gameState.player.x,
                gameState.lasso.y - gameState.player.y
              ),
              height: 2,
              background: "brown",
              transformOrigin: "0 0",
              transform: `rotate(${Math.atan2(
                gameState.lasso.y - gameState.player.y,
                gameState.lasso.x - gameState.player.x
              )}rad)`,
            }}
          />

          {/* Lasso head */}
          <div
            style={{
              position: "absolute",
              left: gameState.lasso.x,
              top: gameState.lasso.y,
            }}
          >
            🪢
          </div>
        </>
      )}
    </div>
  );
};
// src/components/GameCanvas.tsx

import React, { useEffect } from "react";
import { GameState } from "../../../game/state/GameState";
import { Button } from "../atoms/Button";

type Props = {
  gameState: GameState;
  onDismissPopup: () => void;
};

export const GameCanvas: React.FC<Props> = ({ gameState, onDismissPopup }) => {
  useEffect(() => {
    if (!gameState.popup) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismissPopup();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gameState.popup, onDismissPopup]);

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

      {gameState.popup && (
        <div
          className="game-canvas__popup-backdrop"
          role="presentation"
          onClick={onDismissPopup}
        >
          <div
            className="game-canvas__popup-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="game-catch-popup-title"
            onClick={(e) => e.stopPropagation()}
          >
            <p id="game-catch-popup-title" className="game-canvas__popup-text">
              {gameState.popup}
            </p>
            <Button type="button" onClick={onDismissPopup}>
              GOT IT
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
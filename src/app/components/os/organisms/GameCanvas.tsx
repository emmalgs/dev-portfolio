// src/components/GameCanvas.tsx

import React, { useEffect, useLayoutEffect, useRef } from "react";
import { getBackpackItemById } from "../../../data/resumeBackpack";
import { clearAllTouchKeys } from "../../../game/engine/InputHandler";
import { GameState } from "../../../game/state/GameState";
import { Button } from "../atoms/Button";
import { GameTouchControls } from "./GameTouchControls";

type Props = {
  gameState: GameState;
  onDismissPopup: () => void;
  onRestart: () => void;
  setPlayBounds: (width: number, height: number) => void;
};

export const GameCanvas: React.FC<Props> = ({
  gameState,
  onDismissPopup,
  onRestart,
  setPlayBounds,
}) => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = canvasRef.current;
    if (!el) return;

    const publish = () => {
      setPlayBounds(el.clientWidth, el.clientHeight);
    };

    publish();
    const ro = new ResizeObserver(publish);
    ro.observe(el);
    return () => ro.disconnect();
  }, [setPlayBounds]);

  useEffect(() => {
    if (!gameState.popup) return;
    clearAllTouchKeys();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onDismissPopup();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gameState.popup, onDismissPopup]);

  useEffect(() => {
    if (!gameState.gameOverScore) return;
    clearAllTouchKeys();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onRestart();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [gameState.gameOverScore, onRestart]);

  const modalOpen = !!(gameState.popup || gameState.gameOverScore);

  return (
    <div
      ref={canvasRef}
      tabIndex={0}
      className={`game-canvas${modalOpen ? " game-canvas--modal" : ""}`}
    >
      <div className="game-canvas__fence" aria-hidden />

      {gameState.backpackPickups.map((p) => {
        const item = getBackpackItemById(p.itemId);
        return (
          <div
            key={p.id}
            className="game-canvas__pickup"
            style={{ left: p.x, top: p.y }}
            title={item?.modalTitle.replace(/^\/\/\s*/, "") ?? "Pickup"}
            aria-hidden
          >
            <span className="game-canvas__pickup-letter">{item?.letter ?? "?"}</span>
          </div>
        );
      })}

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

      <GameTouchControls />

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
            aria-labelledby="game-catch-popup-hook"
            onClick={(e) => e.stopPropagation()}
          >
            <p id="game-catch-popup-hook" className="game-canvas__popup-hook">
              {gameState.popup.hook}
            </p>
            <p className="game-canvas__popup-project-name">
              {gameState.popup.displayName}
            </p>
            <p className="game-canvas__popup-project-sub">{gameState.popup.subtitle}</p>
            <div
              className="game-canvas__popup-detail"
              dangerouslySetInnerHTML={{ __html: gameState.popup.detailHtml }}
            />
            <Button type="button" onClick={onDismissPopup}>
              GOT IT
            </Button>
          </div>
        </div>
      )}

      {gameState.gameOverScore && (
        <div
          className="game-canvas__score-backdrop"
          role="presentation"
          onClick={onRestart}
        >
          <div
            className="game-canvas__score-card"
            role="dialog"
            aria-modal="true"
            aria-labelledby="game-score-title"
            onClick={(e) => e.stopPropagation()}
          >
            <p id="game-score-title" className="game-canvas__score-title">
              ROUND OVER
            </p>
            <p className="game-canvas__score-line">
              You corralled:{" "}
              <strong>{gameState.gameOverScore.saved}</strong> 🐑
            </p>
            <p className="game-canvas__score-line">
              Dragon cooked:{" "}
              <strong>{gameState.gameOverScore.eaten}</strong> 🥩
            </p>
            <p className="game-canvas__score-verdict">
              {gameState.gameOverScore.saved > gameState.gameOverScore.eaten
                ? "You out-herded the dragon."
                : gameState.gameOverScore.eaten > gameState.gameOverScore.saved
                  ? "Dragon wins this round."
                  : "Dead heat."}
            </p>
            <Button type="button" onClick={onRestart}>
              PLAY AGAIN
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
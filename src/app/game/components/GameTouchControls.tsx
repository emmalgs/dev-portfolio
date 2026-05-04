"use client";

import React, { useCallback } from "react";
import { setTouchKey } from "../../game/engine/InputHandler";

const ARROW_UP = "ArrowUp";
const ARROW_DOWN = "ArrowDown";
const ARROW_LEFT = "ArrowLeft";
const ARROW_RIGHT = "ArrowRight";
const SPACE = "Space";

function usePointerBinding(code: string) {
  return useCallback((e: React.PointerEvent<HTMLButtonElement>) => {
    const el = e.currentTarget;
    if (e.type === "pointerdown") {
      e.preventDefault();
      el.setPointerCapture(e.pointerId);
      setTouchKey(code, true);
    } else {
      setTouchKey(code, false);
      if (el.hasPointerCapture(e.pointerId)) {
        el.releasePointerCapture(e.pointerId);
      }
    }
  }, [code]);
}

export function GameTouchControls() {
  const onUp = usePointerBinding(ARROW_UP);
  const onDown = usePointerBinding(ARROW_DOWN);
  const onLeft = usePointerBinding(ARROW_LEFT);
  const onRight = usePointerBinding(ARROW_RIGHT);
  const onLasso = usePointerBinding(SPACE);

  return (
    <div className="game-canvas__touch" role="toolbar" aria-label="Game touch controls">
      <div className="game-canvas__touch-dpad" role="group" aria-label="Move">
        <span className="game-canvas__touch-spacer" />
        <button
          type="button"
          className="game-canvas__touch-btn game-canvas__touch-btn--dir"
          aria-label="Up"
          onPointerDown={onUp}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          ↑
        </button>
        <span className="game-canvas__touch-spacer" />
        <button
          type="button"
          className="game-canvas__touch-btn game-canvas__touch-btn--dir"
          aria-label="Left"
          onPointerDown={onLeft}
          onPointerUp={onLeft}
          onPointerCancel={onLeft}
        >
          ←
        </button>
        <span className="game-canvas__touch-spacer" />
        <button
          type="button"
          className="game-canvas__touch-btn game-canvas__touch-btn--dir"
          aria-label="Right"
          onPointerDown={onRight}
          onPointerUp={onRight}
          onPointerCancel={onRight}
        >
          →
        </button>
        <span className="game-canvas__touch-spacer" />
        <button
          type="button"
          className="game-canvas__touch-btn game-canvas__touch-btn--dir"
          aria-label="Down"
          onPointerDown={onDown}
          onPointerUp={onDown}
          onPointerCancel={onDown}
        >
          ↓
        </button>
        <span className="game-canvas__touch-spacer" />
      </div>
      <button
        type="button"
        className="game-canvas__touch-btn game-canvas__touch-btn--lasso"
        aria-label="Throw lasso"
        onPointerDown={onLasso}
        onPointerUp={onLasso}
        onPointerCancel={onLasso}
      >
        Lasso
      </button>
    </div>
  );
}

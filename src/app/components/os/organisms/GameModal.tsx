"use client";

import React, { useEffect } from "react";
import { GameLoopGate } from "../../../contexts/GameContext";
import { clearAllTouchKeys } from "../../../game/engine/InputHandler";
import { GamePage } from "../../../pages/GamePage";

type GameModalProps = {
  open: boolean;
  onClose: () => void;
};

export function GameModal({ open, onClose }: GameModalProps) {
  useEffect(() => {
    if (!open) {
      clearAllTouchKeys();
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="game-modal-overlay open"
      role="dialog"
      aria-modal="true"
      aria-labelledby="game-modal-title"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="game-modal-shell" onClick={(e) => e.stopPropagation()}>
        <div className="game-modal-bar" id="game-modal-title">
          <span className="game-modal-bar__title">{`// PASTURE · OLIO FIELD`}</span>
          <button type="button" className="modal-x" onClick={onClose} aria-label="Close pasture">
            ✕
          </button>
        </div>
        <div className="game-modal-body">
          <GameLoopGate />
          <div className="hero-inner game-modal__hero-inner">
            <GamePage />
          </div>
          <p className="game-modal-hint">
            Arrows move · Space lasso · Esc closes · Ride tokens to fill your backpack
          </p>
        </div>
      </div>
    </div>
  );
}

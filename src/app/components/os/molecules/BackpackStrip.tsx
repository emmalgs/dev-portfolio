"use client";

import React, { useMemo } from "react";
import { useModal } from "../../../contexts/ModalContext";
import { useGame } from "../../../contexts/GameContext";
import { BACKPACK_ITEMS } from "../../../data/resumeBackpack";

export function BackpackStrip() {
  const { openModal } = useModal();
  const { gameState } = useGame();
  const collected = useMemo(
    () => new Set(gameState.collectedBackpackIds),
    [gameState.collectedBackpackIds]
  );

  return (
    <div className="backpack-strip" role="list" aria-label="Resume backpack">
      {BACKPACK_ITEMS.map((item) => {
        const isCollected = collected.has(item.id);
        return (
          <button
            key={item.id}
            type="button"
            className={`backpack-chip${isCollected ? "" : " backpack-chip--locked"}`}
            role="listitem"
            title={
              isCollected
                ? item.modalTitle.replace(/^\/\/\s*/, "")
                : "Collect in the pasture first"
            }
            onClick={() => {
              if (!isCollected) {
                openModal(
                  "// NOT IN PACK YET",
                  "Ride over this token in the hero pasture to pocket it — then tap again here for the full blurb."
                );
                return;
              }
              openModal(item.modalTitle, item.modalBody);
            }}
          >
            <span className="backpack-chip__letter">{item.letter}</span>
          </button>
        );
      })}
    </div>
  );
}

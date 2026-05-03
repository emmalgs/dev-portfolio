// src/game/systems/SheepSystem.ts

import { GameState } from "../state/GameState";

const WANDER_SPEED = 0.5;

export const updateSheep = (state: GameState): GameState => {
  const sheep = state.sheep.map((s) => {
    if (s.caught) return s;

    // small random drift
    const dx = (Math.random() - 0.5) * WANDER_SPEED;
    const dy = (Math.random() - 0.5) * WANDER_SPEED;

    return {
      ...s,
      x: s.x + dx,
      y: s.y + dy,
    };
  });

  return {
    ...state,
    sheep,
  };
};
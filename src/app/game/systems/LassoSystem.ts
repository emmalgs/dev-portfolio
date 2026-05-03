// src/game/systems/LassoSystem.ts

import { GameState } from "../state/GameState";

export const updateLasso = (
  state: GameState,
  input: { keys: Record<string, boolean>; justPressed: Record<string, boolean> },
  delta: number
): GameState => {
  let lasso = state.lasso;

  // 🎯 1. Spawn lasso on press
  if (input.justPressed["Space"] && !lasso) {
    return {
      ...state,
      lasso: {
        x: state.player.x,
        y: state.player.y,
        direction: state.player.direction,
        distanceTraveled: 0,
        maxDistance: 120,
      },
    };
  }

  // 🎯 2. Animate lasso forward
  if (!lasso) return state;

  const speed = 6;

  let { x, y, direction, distanceTraveled } = lasso;

  if (direction === "up") y -= speed;
  if (direction === "down") y += speed;
  if (direction === "left") x -= speed;
  if (direction === "right") x += speed;

  distanceTraveled += speed;

  if (distanceTraveled > lasso.maxDistance) {
    return { ...state, lasso: null };
  }

  return {
    ...state,
    lasso: { ...lasso, x, y, distanceTraveled },
  };
};
// src/game/systems/CollisionSystem.ts

import { GameState } from "../state/GameState";

export const handleLassoCollision = (state: GameState): GameState => {
  if (state.gameOverScore) return state;
  // ✅ Early return = TypeScript is happy
  if (!state.lasso) return state;

  const lasso = state.lasso;

  const remainingSheep: typeof state.sheep = [];
  const caughtSheep: typeof state.sheep = [];

  for (const sheep of state.sheep) {
    const dx = sheep.x - lasso.x;
    const dy = sheep.y - lasso.y;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < 25) {
      caughtSheep.push({ ...sheep, caught: true });
    } else {
      remainingSheep.push(sheep);
    }
  }

  // ✅ If nothing caught, return unchanged (no weird side effects)
  if (caughtSheep.length === 0) {
    return state;
  }

  return {
    ...state,
    sheep: remainingSheep,
    corral: [...state.corral, ...caughtSheep],
    lasso: null, // ✅ safe here
    popup: "You caught me!",
  };
};
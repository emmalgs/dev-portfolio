import { pickupCenter, playerBodyCenter } from "../playspace";
import { GameState } from "../state/GameState";

const COLLECT_RADIUS = 38;

export const collectBackpackPickups = (state: GameState): GameState => {
  if (state.gameOverScore || state.popup) return state;
  if (state.backpackPickups.length === 0) return state;

  const pc = playerBodyCenter(state.player);
  let collected = state.collectedBackpackIds;
  let changed = false;

  const backpackPickups = state.backpackPickups.filter((p) => {
    const c = pickupCenter(p);
    const dx = c.x - pc.x;
    const dy = c.y - pc.y;
    const dist = Math.hypot(dx, dy);
    if (dist < COLLECT_RADIUS) {
      if (!collected.includes(p.itemId)) {
        collected = [...collected, p.itemId];
      }
      changed = true;
      return false;
    }
    return true;
  });

  if (!changed) return state;

  return {
    ...state,
    backpackPickups,
    collectedBackpackIds: collected,
  };
};

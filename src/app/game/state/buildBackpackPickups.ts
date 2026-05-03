import { BACKPACK_ITEMS } from "../../data/resumeBackpack";
import {
  PlayBounds,
  clampPickupPosition,
  defaultPlayBounds,
} from "../playspace";
import { BackpackPickup } from "./GameState";

/** Spread tokens in a ring so the flock (center-left) and spawn (left) stay readable. */
export function buildBackpackPickups(
  bounds: PlayBounds = defaultPlayBounds()
): BackpackPickup[] {
  const w = bounds.width;
  const h = bounds.height;
  const cx = w * 0.58;
  const cy = h * 0.48;

  return BACKPACK_ITEMS.map((item, i) => {
    const angle = (i / BACKPACK_ITEMS.length) * Math.PI * 2 + 0.55;
    const r = Math.min(w, h) * 0.2 + (i % 5) * 12;
    const rawX = cx + Math.cos(angle) * r - 14;
    const rawY = cy + Math.sin(angle) * r - 12;
    const c = clampPickupPosition(rawX, rawY, bounds);
    return {
      id: `pick-${item.id}`,
      itemId: item.id,
      x: c.x,
      y: c.y,
    };
  });
}

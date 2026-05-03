/** Inner offset from canvas edge (aligns with fence overlay). */
export const PLAY_PADDING = 10;

/** Top-left anchor footprint — player sprite / sheep / dragon in GameCanvas. */
export const PLAYER_W = 52;
export const PLAYER_H = 36;
export const SHEEP_W = 28;
export const SHEEP_H = 28;

export const DRAGON_W = 44;
export const DRAGON_H = 40;

/** Backpack token on the field (matches sidebar chip footprint). */
export const PICKUP_W = 28;
export const PICKUP_H = 24;

export type PlayBounds = {
  width: number;
  height: number;
};

export const defaultPlayBounds = (): PlayBounds => ({
  width: 600,
  height: 400,
});

function clamp(
  value: number,
  min: number,
  max: number
): number {
  return Math.min(Math.max(value, min), max);
}

export function clampPlayerPosition(
  x: number,
  y: number,
  bounds: PlayBounds
): { x: number; y: number } {
  const min = PLAY_PADDING;
  const maxX = Math.max(min, bounds.width - PLAY_PADDING - PLAYER_W);
  const maxY = Math.max(min, bounds.height - PLAY_PADDING - PLAYER_H);
  return {
    x: clamp(x, min, maxX),
    y: clamp(y, min, maxY),
  };
}

export function clampSheepPosition(
  x: number,
  y: number,
  bounds: PlayBounds
): { x: number; y: number } {
  const min = PLAY_PADDING;
  const maxX = Math.max(min, bounds.width - PLAY_PADDING - SHEEP_W);
  const maxY = Math.max(min, bounds.height - PLAY_PADDING - SHEEP_H);
  return {
    x: clamp(x, min, maxX),
    y: clamp(y, min, maxY),
  };
}

/** Lasso tip as a point; padding keeps it inside the fence. */
export function isLassoInBounds(
  x: number,
  y: number,
  bounds: PlayBounds
): boolean {
  const pad = PLAY_PADDING + 4;
  return (
    x >= pad &&
    y >= pad &&
    x <= bounds.width - pad &&
    y <= bounds.height - pad
  );
}

export function clampDragonPosition(
  x: number,
  y: number,
  bounds: PlayBounds
): { x: number; y: number } {
  const min = PLAY_PADDING;
  const maxX = Math.max(min, bounds.width - PLAY_PADDING - DRAGON_W);
  const maxY = Math.max(min, bounds.height - PLAY_PADDING - DRAGON_H);
  return {
    x: clamp(x, min, maxX),
    y: clamp(y, min, maxY),
  };
}

export function dragonBodyCenter(d: { x: number; y: number }) {
  return { x: d.x + DRAGON_W * 0.42, y: d.y + DRAGON_H * 0.48 };
}

export function playerBodyCenter(p: { x: number; y: number }) {
  return { x: p.x + PLAYER_W * 0.38, y: p.y + PLAYER_H * 0.55 };
}

export function pickupCenter(p: { x: number; y: number }) {
  return { x: p.x + PICKUP_W / 2, y: p.y + PICKUP_H / 2 };
}

export function clampPickupPosition(
  x: number,
  y: number,
  bounds: PlayBounds
): { x: number; y: number } {
  const min = PLAY_PADDING;
  const maxX = Math.max(min, bounds.width - PLAY_PADDING - PICKUP_W);
  const maxY = Math.max(min, bounds.height - PLAY_PADDING - PICKUP_H);
  return {
    x: clamp(x, min, maxX),
    y: clamp(y, min, maxY),
  };
}

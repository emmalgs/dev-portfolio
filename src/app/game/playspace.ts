/** Inner offset from canvas edge (aligns with fence overlay). */
export const PLAY_PADDING = 10;

/** Top-left anchor footprint — emoji blocks in GameCanvas. */
export const PLAYER_W = 52;
export const PLAYER_H = 36;
export const SHEEP_W = 28;
export const SHEEP_H = 28;

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

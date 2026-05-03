// src/game/systems/SheepSystem.ts

import {
  PLAYER_H,
  PLAYER_W,
  PlayBounds,
  SHEEP_H,
  SHEEP_W,
  clampSheepPosition,
  dragonBodyCenter,
} from "../playspace";
import { GameState } from "../state/GameState";

/** Pull free sheep toward the flock centroid (loose herd). */
const COHESION = 0.024;

/** Push apart when centers are closer than this (px). */
const SEP_RADIUS = 40;
const SEP_STRENGTH = 0.52;

/** Cowboy rides through — sheep scatter from this radius (px). */
const PLAYER_PUSH_RADIUS = 78;
const PLAYER_PUSH_STRENGTH = 2.35;

/** Dragon panic — flee earlier than the burn radius. */
const DRAGON_FEAR_RADIUS = 130;
const DRAGON_FEAR_STRENGTH = 3.1;

/** Slight jitter so the blob does not freeze. */
const NOISE = 0.09;

/** Max displacement per tick (px) after combining forces. */
const MAX_STEP = 1.45;

function sheepCenter(s: { x: number; y: number }) {
  return { x: s.x + SHEEP_W / 2, y: s.y + SHEEP_H / 2 };
}

function playerBodyCenter(p: { x: number; y: number }) {
  return { x: p.x + PLAYER_W * 0.38, y: p.y + PLAYER_H * 0.55 };
}

function clampVec(mx: number, my: number, cap: number) {
  const len = Math.hypot(mx, my);
  if (len <= cap || len < 1e-6) return { x: mx, y: my };
  return { x: (mx / len) * cap, y: (my / len) * cap };
}

export const updateSheep = (
  state: GameState,
  bounds: PlayBounds
): GameState => {
  const free = state.sheep.filter((s) => !s.caught);
  if (free.length === 0) {
    return state;
  }

  let flockCx = 0;
  let flockCy = 0;
  for (const s of free) {
    const c = sheepCenter(s);
    flockCx += c.x;
    flockCy += c.y;
  }
  flockCx /= free.length;
  flockCy /= free.length;

  const pc = playerBodyCenter(state.player);
  const dragonC =
    state.dragon?.active === true ? dragonBodyCenter(state.dragon) : null;

  const sheep = state.sheep.map((s) => {
    if (s.caught) return s;

    const c = sheepCenter(s);
    let fx = 0;
    let fy = 0;

    fx += (flockCx - c.x) * COHESION;
    fy += (flockCy - c.y) * COHESION;

    for (const o of free) {
      if (o.id === s.id) continue;
      const oc = sheepCenter(o);
      const dx = c.x - oc.x;
      const dy = c.y - oc.y;
      const dist = Math.hypot(dx, dy);
      if (dist < SEP_RADIUS && dist > 1e-4) {
        const w = (SEP_RADIUS - dist) / SEP_RADIUS;
        fx += (dx / dist) * w * SEP_STRENGTH;
        fy += (dy / dist) * w * SEP_STRENGTH;
      }
    }

    const pdx = c.x - pc.x;
    const pdy = c.y - pc.y;
    const pd = Math.hypot(pdx, pdy);
    if (pd < PLAYER_PUSH_RADIUS && pd > 1e-4) {
      const w = (PLAYER_PUSH_RADIUS - pd) / PLAYER_PUSH_RADIUS;
      fx += (pdx / pd) * w * PLAYER_PUSH_STRENGTH;
      fy += (pdy / pd) * PLAYER_PUSH_STRENGTH;
    }

    if (dragonC) {
      const ddx = c.x - dragonC.x;
      const ddy = c.y - dragonC.y;
      const dd = Math.hypot(ddx, ddy);
      if (dd < DRAGON_FEAR_RADIUS && dd > 1e-4) {
        const w = (DRAGON_FEAR_RADIUS - dd) / DRAGON_FEAR_RADIUS;
        fx += (ddx / dd) * w * DRAGON_FEAR_STRENGTH;
        fy += (ddy / dd) * w * DRAGON_FEAR_STRENGTH;
      }
    }

    fx += (Math.random() - 0.5) * NOISE;
    fy += (Math.random() - 0.5) * NOISE;

    const step = clampVec(fx, fy, MAX_STEP);
    const nextCx = c.x + step.x;
    const nextCy = c.y + step.y;
    const next = clampSheepPosition(
      nextCx - SHEEP_W / 2,
      nextCy - SHEEP_H / 2,
      bounds
    );

    return { ...s, x: next.x, y: next.y };
  });

  return { ...state, sheep };
};

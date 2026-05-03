// src/game/systems/DragonSystem.ts

import {
  DRAGON_H,
  PLAY_PADDING,
  PlayBounds,
  SHEEP_H,
  SHEEP_W,
  clampDragonPosition,
  dragonBodyCenter,
} from "../playspace";
import { GameState, Sheep } from "../state/GameState";

/** Time with no dragon before the next one appears (ms). */
const SPAWN_INTERVAL_MS = 10_500;

/** Dragon leaves after this long on the field (ms). */
const VISIT_MS = 14_000;

/** Chase speed (px per ~16.7ms frame). */
const CHASE_SPEED = 2.05;

/** Sheep center within this distance of the dragon body is burned (removed). */
const BURN_RADIUS = 28;

function sheepCenter(s: Sheep) {
  return { x: s.x + SHEEP_W / 2, y: s.y + SHEEP_H / 2 };
}

function flockCentroid(free: Sheep[]) {
  let cx = 0;
  let cy = 0;
  for (const s of free) {
    const c = sheepCenter(s);
    cx += c.x;
    cy += c.y;
  }
  return { x: cx / free.length, y: cy / free.length };
}

export const updateDragon = (
  state: GameState,
  bounds: PlayBounds,
  deltaMs: number
): GameState => {
  if (state.popup || state.gameOverScore) {
    return state;
  }

  const dt = Math.min(40, Math.max(0, deltaMs));
  const stepScale = dt / 16.667;

  if (!state.dragon) {
    const timer = state.dragonSpawnTimerMs + dt;
    if (timer < SPAWN_INTERVAL_MS) {
      return { ...state, dragonSpawnTimerMs: timer };
    }

    const ySpan = Math.max(
      24,
      bounds.height - PLAY_PADDING * 2 - DRAGON_H
    );
    const spawnY = PLAY_PADDING + Math.random() * ySpan;
    const spawnX = PLAY_PADDING;

    return {
      ...state,
      dragon: {
        id: "d1",
        x: spawnX,
        y: spawnY,
        active: true,
        ageMs: 0,
      },
      dragonSpawnTimerMs: 0,
    };
  }

  const d = state.dragon;
  let ageMs = d.ageMs + dt;
  const free = state.sheep.filter((s) => !s.caught);

  let nx = d.x;
  let ny = d.y;

  if (free.length > 0) {
    const dc = dragonBodyCenter(d);
    const target = flockCentroid(free);
    const tx = target.x - dc.x;
    const ty = target.y - dc.y;
    const len = Math.hypot(tx, ty) || 1;
    nx += (tx / len) * CHASE_SPEED * stepScale;
    ny += (ty / len) * CHASE_SPEED * stepScale;
  }

  const clamped = clampDragonPosition(nx, ny, bounds);
  const moved: typeof d = {
    ...d,
    x: clamped.x,
    y: clamped.y,
    ageMs,
  };

  const dCenter = dragonBodyCenter(moved);
  let sheep = state.sheep;
  let dragonSteaks = state.dragonSteaks;

  if (free.length > 0) {
    const nextSheep: Sheep[] = [];
    const newSteaks: typeof dragonSteaks = [...dragonSteaks];
    for (const s of state.sheep) {
      if (s.caught) {
        nextSheep.push(s);
        continue;
      }
      const sc = sheepCenter(s);
      const dist = Math.hypot(sc.x - dCenter.x, sc.y - dCenter.y);
      if (dist <= BURN_RADIUS) {
        newSteaks.push({ id: s.id });
      } else {
        nextSheep.push(s);
      }
    }
    sheep = nextSheep;
    dragonSteaks = newSteaks;
  }

  const preyLeft = sheep.some((s) => !s.caught);
  if (ageMs >= VISIT_MS || !preyLeft) {
    return {
      ...state,
      dragon: null,
      dragonSpawnTimerMs: 0,
      sheep,
      dragonSteaks,
    };
  }

  return {
    ...state,
    dragon: moved,
    sheep,
    dragonSteaks,
  };
};

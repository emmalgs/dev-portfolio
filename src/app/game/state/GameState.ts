// src/game/state/GameState.ts

export type Entity = {
  id: string;
  x: number;
  y: number;
};

export type Player = Entity & {
  direction: "up" | "down" | "left" | "right";
};

export type Sheep = Entity & {
  caught: boolean;
};

export type Dragon = Entity & {
  active: boolean;
  /** Time this dragon has been on the field (ms). */
  ageMs: number;
};

/** Sheep lost to the dragon — shown as steaks in the dragon corral. */
export type DragonSteak = {
  id: string;
};

export type GameState = {
  player: Player;
  sheep: Sheep[];
  dragon: Dragon | null;
  /** Counts up while `dragon` is null; next spawn when this exceeds the interval. */
  dragonSpawnTimerMs: number;
  corral: Sheep[];
  /** Dragon’s “plate”: one entry per sheep cooked. */
  dragonSteaks: DragonSteak[];
  popup: string | null;
  lasso: Lasso | null;
  /** Set when no sheep remain on the field; pauses the sim until restart. */
  gameOverScore: { saved: number; eaten: number } | null;
};

type Lasso = {
  x: number;
  y: number;
  direction: "up" | "down" | "left" | "right";
  distanceTraveled: number;
  maxDistance: number;
};
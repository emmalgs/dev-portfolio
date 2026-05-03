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
  /** Index into `SHEEP_PROJECTS` — which portfolio piece this sheep represents. */
  projectIndex: number;
};

/** In-canvas catch modal: hook line + project identity + HTML body. */
export type CatchPopup = {
  hook: string;
  displayName: string;
  subtitle: string;
  detailHtml: string;
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

/** Collectible resume token on the pasture (links to `BACKPACK_ITEMS`). */
export type BackpackPickup = Entity & {
  itemId: string;
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
  /** Tokens still on the field; walk over to collect. */
  backpackPickups: BackpackPickup[];
  /** `BACKPACK_ITEMS` ids the player has picked up. */
  collectedBackpackIds: string[];
  popup: CatchPopup | null;
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
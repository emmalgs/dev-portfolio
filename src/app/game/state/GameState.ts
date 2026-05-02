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
};

export type GameState = {
  player: Player;
  sheep: Sheep[];
  dragon: Dragon | null;
  corral: Sheep[];
  popup: string | null;
  lasso: Lasso | null;
};

type Lasso = {
  x: number;
  y: number;
  direction: "up" | "down" | "left" | "right";
  distanceTraveled: number;
  maxDistance: number;
  active: boolean;
};
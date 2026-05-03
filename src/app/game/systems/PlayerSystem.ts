// src/game/systems/PlayerSystem.ts

import { GameState } from "../state/GameState";

const SPEED = 2;

export const updatePlayer = (
  state: GameState,
  input: Record<string, boolean>
): GameState => {
  let { x, y, direction } = state.player;

  let moving = false;

  if (input["ArrowUp"]) {
    y -= SPEED;
    direction = "up";
    moving = true;
  }

  if (input["ArrowDown"]) {
    y += SPEED;
    direction = "down";
    moving = true;
  }

  if (input["ArrowLeft"]) {
    x -= SPEED;
    direction = "left";
    moving = true;
  }

  if (input["ArrowRight"]) {
    x += SPEED;
    direction = "right";
    moving = true;
  }

  // Optional: prevent diagonal speed boost (normalize movement)
  if (moving && input["ArrowUp"] && input["ArrowRight"]) {
    x -= SPEED * 0.3;
    y += SPEED * 0.3;
  }

  return {
    ...state,
    player: {
      ...state.player,
      x,
      y,
      direction,
    },
  };
};
// src/game/engine/InputHandler.ts

const keys: Record<string, boolean> = {};

window.addEventListener("keydown", (e) => {
  keys[e.key] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

export const getInput = () => keys;
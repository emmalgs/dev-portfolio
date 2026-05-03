// src/game/engine/InputHandler.ts

const keys: Record<string, boolean> = {};
const justPressed: Record<string, boolean> = {};

window.addEventListener("keydown", (e) => {
  if (e.code === "Space") {
    e.preventDefault(); // 🚨 stops page scroll
  }

  if (!keys[e.code]) {
    justPressed[e.code] = true;
  }

  keys[e.code] = true;
});

window.addEventListener("keyup", (e) => {
  keys[e.key] = false;
});

export const getInput = () => ({
  keys,
  justPressed,
});

export const clearJustPressed = () => {
  for (const key in justPressed) {
    justPressed[key] = false;
  }
};

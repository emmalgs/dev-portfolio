// src/game/engine/InputHandler.ts

const keys: Record<string, boolean> = {};
const justPressed: Record<string, boolean> = {};

function gameCanvasIsFocused(): boolean {
  const el = document.activeElement;
  return el instanceof HTMLElement && el.classList.contains("game-canvas");
}

function onKeyDown(e: KeyboardEvent) {
  if (e.code === "Space") {
    e.preventDefault(); // stops page scroll
  }

  if (
    gameCanvasIsFocused() &&
    (e.code === "ArrowUp" ||
      e.code === "ArrowDown" ||
      e.code === "ArrowLeft" ||
      e.code === "ArrowRight")
  ) {
    e.preventDefault();
  }

  if (!keys[e.code]) {
    justPressed[e.code] = true;
  }

  keys[e.code] = true;
}

function onKeyUp(e: KeyboardEvent) {
  keys[e.code] = false;
}

let listenersAttached = false;

function attachInputListeners() {
  if (typeof window === "undefined" || listenersAttached) return;
  listenersAttached = true;
  window.addEventListener("keydown", onKeyDown);
  window.addEventListener("keyup", onKeyUp);
}

attachInputListeners();

export const getInput = () => {
  attachInputListeners();
  return {
    keys,
    justPressed,
  };
};

export const clearJustPressed = () => {
  for (const key in justPressed) {
    justPressed[key] = false;
  }
};

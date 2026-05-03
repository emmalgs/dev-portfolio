// src/game/engine/InputHandler.ts

const keys: Record<string, boolean> = {};
const justPressed: Record<string, boolean> = {};

/** Virtual controls (mobile); merged with keyboard in getInput. */
const touchKeys: Record<string, boolean> = {};
const touchJustPressed: Record<string, boolean> = {};

const TOUCH_CONTROL_CODES = [
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Space",
] as const;

export function setTouchKey(code: string, down: boolean) {
  if (down) {
    if (!touchKeys[code]) {
      touchJustPressed[code] = true;
    }
    touchKeys[code] = true;
  } else {
    touchKeys[code] = false;
  }
}

/** Call when a modal opens so a lifted finger off-screen does not leave keys stuck. */
export function clearAllTouchKeys() {
  for (const c of TOUCH_CONTROL_CODES) {
    touchKeys[c] = false;
    touchJustPressed[c] = false;
  }
}

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

function mergeKeyRecords(
  a: Record<string, boolean>,
  b: Record<string, boolean>
): Record<string, boolean> {
  const out: Record<string, boolean> = {};
  for (const c of Object.keys(a)) {
    out[c] = !!a[c] || !!b[c];
  }
  for (const c of Object.keys(b)) {
    out[c] = !!a[c] || !!b[c];
  }
  return out;
}

export const getInput = () => {
  attachInputListeners();
  return {
    keys: mergeKeyRecords(keys, touchKeys),
    justPressed: mergeKeyRecords(justPressed, touchJustPressed),
  };
};

export const clearJustPressed = () => {
  for (const key in justPressed) {
    justPressed[key] = false;
  }
  for (const key in touchJustPressed) {
    touchJustPressed[key] = false;
  }
};

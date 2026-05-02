// src/hooks/useGameLoop.ts

import { useEffect } from "react";
import { GameLoop } from "../game/engine/GameLoop";

export const useGameLoop = (update: (delta: number) => void) => {
  useEffect(() => {
    const loop = new GameLoop();
    loop.start(update);
  }, [update]);
};
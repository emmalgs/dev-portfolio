"use client";

import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
import { useGameLoop } from "../hooks/useGameLoop";
import { clearJustPressed, getInput } from "../game/engine/InputHandler";
import { defaultPlayBounds } from "../game/playspace";
import { GameState } from "../game/state/GameState";
import { updatePlayer } from "../game/systems/PlayerSystem";
import { updateLasso } from "../game/systems/LassoSystem";
import { handleLassoCollision } from "../game/systems/CollisionSystem";
import { updateDragon } from "../game/systems/DragonSystem";
import { updateSheep } from "../game/systems/SheepSystem";

const FLOCK_HOME = { x: 300, y: 175 };
const FLOCK_OFFSETS: [number, number][] = [
  [0, 0],
  [24, -6],
  [-20, 14],
  [32, 16],
  [-14, -20],
  [10, 24],
  [-30, 8],
  [18, -22],
];

const initialState: GameState = {
  player: { id: "p1", x: 100, y: 100, direction: "down" },
  sheep: FLOCK_OFFSETS.map(([dx, dy], i) => ({
    id: `s${i + 1}`,
    x: FLOCK_HOME.x + dx,
    y: FLOCK_HOME.y + dy,
    caught: false,
  })),
  dragon: null,
  dragonSpawnTimerMs: 6000,
  corral: [],
  popup: null,
  lasso: null,
};

type GameContextValue = {
  gameState: GameState;
  dismissPopup: () => void;
  setPlayBounds: (width: number, height: number) => void;
};

const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [gameState, setGameState] = useState(initialState);
  const playBoundsRef = useRef(defaultPlayBounds());

  const setPlayBounds = useCallback((width: number, height: number) => {
    playBoundsRef.current = {
      width: Math.max(200, width),
      height: Math.max(150, height),
    };
  }, []);

  const dismissPopup = useCallback(() => {
    setGameState((prev) => ({ ...prev, popup: null }));
  }, []);

  const update = useCallback((delta: number) => {
    const raw = getInput();
    const input = {
      keys: { ...raw.keys },
      justPressed: { ...raw.justPressed },
    };
    const bounds = playBoundsRef.current;

    setGameState((prev) => {
      let next = { ...prev };
      next = updatePlayer(next, input.keys, bounds);
      next = updateLasso(next, input, delta, bounds);
      next = updateDragon(next, bounds, delta);
      next = updateSheep(next, bounds);
      next = handleLassoCollision(next);
      return next;
    });

    clearJustPressed();
  }, []);

  useGameLoop(update);

  const value = useMemo(
    () => ({ gameState, dismissPopup, setPlayBounds }),
    [gameState, dismissPopup, setPlayBounds]
  );

  return (
    <GameContext.Provider value={value}>{children}</GameContext.Provider>
  );
}

export function useGame(): GameContextValue {
  const ctx = useContext(GameContext);
  if (!ctx) {
    throw new Error("useGame must be used within GameProvider");
  }
  return ctx;
}

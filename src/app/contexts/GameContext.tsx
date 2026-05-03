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
import { buildInitialGameState } from "../game/state/buildInitialGameState";
import { updatePlayer } from "../game/systems/PlayerSystem";
import { updateLasso } from "../game/systems/LassoSystem";
import { handleLassoCollision } from "../game/systems/CollisionSystem";
import { updateDragon } from "../game/systems/DragonSystem";
import { updateSheep } from "../game/systems/SheepSystem";
import { collectBackpackPickups } from "../game/systems/BackpackPickupSystem";
import { checkGameOver } from "../game/systems/GameOverSystem";
import { GameState } from "../game/state/GameState";

type GameContextValue = {
  gameState: GameState;
  dismissPopup: () => void;
  restartGame: () => void;
  setPlayBounds: (width: number, height: number) => void;
};

const GameContext = createContext<GameContextValue | null>(null);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [gameState, setGameState] = useState(() => buildInitialGameState());
  const playBoundsRef = useRef(defaultPlayBounds());

  const setPlayBounds = useCallback((width: number, height: number) => {
    playBoundsRef.current = {
      width: Math.max(200, width),
      height: Math.max(150, height),
    };
  }, []);

  const restartGame = useCallback(() => {
    setGameState(buildInitialGameState());
  }, []);

  const dismissPopup = useCallback(() => {
    setGameState((prev) => checkGameOver({ ...prev, popup: null }));
  }, []);

  const update = useCallback((delta: number) => {
    const raw = getInput();
    const input = {
      keys: { ...raw.keys },
      justPressed: { ...raw.justPressed },
    };
    const bounds = playBoundsRef.current;

    setGameState((prev) => {
      if (prev.gameOverScore) return prev;

      let next = { ...prev };
      next = updatePlayer(next, input.keys, bounds);
      next = collectBackpackPickups(next);
      next = updateLasso(next, input, delta, bounds);
      next = updateDragon(next, bounds, delta);
      next = updateSheep(next, bounds);
      next = handleLassoCollision(next);
      next = checkGameOver(next);
      return next;
    });

    clearJustPressed();
  }, []);

  useGameLoop(update);

  const value = useMemo(
    () => ({
      gameState,
      dismissPopup,
      restartGame,
      setPlayBounds,
    }),
    [gameState, dismissPopup, restartGame, setPlayBounds]
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

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

/** Tick fn for {@link GameLoopGate} only — keeps the loop out of unrelated UI trees. */
const GameTickContext = createContext<((delta: number) => void) | null>(null);

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

  const tickFrame = useCallback((_delta: number) => {
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
      next = updateLasso(next, input, _delta, bounds);
      next = updateDragon(next, bounds, _delta);
      next = updateSheep(next, bounds);
      next = handleLassoCollision(next);
      next = checkGameOver(next);
      return next;
    });

    clearJustPressed();
  }, []);

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
    <GameContext.Provider value={value}>
      <GameTickContext.Provider value={tickFrame}>{children}</GameTickContext.Provider>
    </GameContext.Provider>
  );
}

/** Mount only while the pasture modal is open so input/simulation stay isolated. */
export function GameLoopGate() {
  const tickFrame = useContext(GameTickContext);
  if (!tickFrame) {
    throw new Error("GameLoopGate must be used inside GameProvider");
  }
  useGameLoop(tickFrame);
  return null;
}

export function useGame(): GameContextValue {
  const ctx = useContext(GameContext);
  if (!ctx) {
    throw new Error("useGame must be used within GameProvider");
  }
  return ctx;
}

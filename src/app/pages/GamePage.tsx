// src/pages/GamePage.tsx

import React, { useState, useCallback, useEffect } from "react";
import { GameCanvas } from "../components/os/organisms/GameCanvas";
import { useGameLoop } from "../hooks/useGameLoop";
import { clearJustPressed, getInput } from "../game/engine/InputHandler";
import { GameState } from "../game/state/GameState";
import { updatePlayer } from "../game/systems/PlayerSystem";
import { updateLasso } from "../game/systems/LassoSystem";
import { handleLassoCollision } from "../game/systems/CollisionSystem";
import { updateSheep } from "../game/systems/SheepSystem";

const initialState: GameState = {
    player: { id: "p1", x: 100, y: 100, direction: "down" },
    sheep: [
        { id: "s1", x: 200, y: 150, caught: false },
        { id: "s2", x: 300, y: 200, caught: false },
    ],
    dragon: null,
    corral: [],
    popup: null,
    lasso: null
};

export const GamePage = () => {
    const [gameState, setGameState] = useState(initialState);
    const [isFocused, setIsFocused] = useState(false);

    useEffect(() => {
        const canvas = document.getElementById("game-canvas");

        if (!canvas) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (!isFocused) return;

            if (e.code === "Space") {
                e.preventDefault();
            }

            if (!keys[e.code]) {
                justPressed[e.code] = true;
            }

            keys[e.code] = true;
        };

        const handleKeyUp = (e: KeyboardEvent) => {
            if (!isFocused) return;

            keys[e.code] = false;
        };

        canvas.addEventListener("keydown", handleKeyDown);
        canvas.addEventListener("keyup", handleKeyUp);

        return () => {
            canvas.removeEventListener("keydown", handleKeyDown);
            canvas.removeEventListener("keyup", handleKeyUp);
        };
    }, []);

    const update = useCallback((delta: number) => {
        setGameState((prev) => {
            const input = getInput();

            let next = { ...prev };

            next = updatePlayer(next, input.keys);
            next = updateLasso(next, input, delta);
            next = updateSheep(next);
            next = handleLassoCollision(next);

            clearJustPressed(); // 👈 important

            return next;
        });
    }, []);

    useGameLoop(update);

    return <GameCanvas gameState={gameState} />;
};
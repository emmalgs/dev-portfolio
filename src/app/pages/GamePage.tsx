// src/pages/GamePage.tsx

import React, { useState, useCallback } from "react";
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

    const update = useCallback((delta: number) => {
        const raw = getInput();
        // Copy so clearJustPressed() cannot erase data before React runs this updater.
        const input = {
            keys: { ...raw.keys },
            justPressed: { ...raw.justPressed },
        };

        setGameState((prev) => {
            let next = { ...prev };

            next = updatePlayer(next, input.keys);
            next = updateLasso(next, input, delta);
            next = updateSheep(next);
            next = handleLassoCollision(next);

            return next;
        });

        clearJustPressed();
    }, []);

    useGameLoop(update);

    return <GameCanvas gameState={gameState} />;
};
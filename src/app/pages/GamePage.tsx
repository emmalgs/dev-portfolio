// src/pages/GamePage.tsx

import React, { useState, useCallback } from "react";
import { GameCanvas } from "../components/os/organisms/GameCanvas";
import { useGameLoop } from "../hooks/useGameLoop";
import { getInput } from "../game/engine/InputHandler";
import { GameState } from "../game/state/GameState";

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
        setGameState((prev) => {
            const input = getInput();
            let { x, y } = prev.player;

            if (input["ArrowUp"]) y -= 2;
            if (input["ArrowDown"]) y += 2;
            if (input["ArrowLeft"]) x -= 2;
            if (input["ArrowRight"]) x += 2;

            const updatedSheep = prev.sheep.map((s) => {
                const dx = s.x - x;
                const dy = s.y - y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 30 && !s.caught) {
                    return { ...s, caught: true };
                }

                return s;
            });
            if (input[" "] && !prev.lasso) {
                return {
                    ...prev,
                    lasso: {
                        x: prev.player.x,
                        y: prev.player.y,
                        direction: prev.player.direction,
                        distanceTraveled: 0,
                        maxDistance: 120,
                        active: true,
                    },
                };
            }

            const caughtSheep = updatedSheep.filter((s) => s.caught);

            return {
                ...prev,
                player: { ...prev.player, x, y },
                sheep: updatedSheep.filter((s) => !s.caught),
                corral: [...prev.corral, ...caughtSheep],
                popup: caughtSheep.length ? "You caught me!" : null,
            };
        });
    }, []);

    useGameLoop(update);

    return <GameCanvas gameState={gameState} />;
};
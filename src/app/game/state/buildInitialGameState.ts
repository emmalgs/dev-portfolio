import { buildBackpackPickups } from "./buildBackpackPickups";
import { GameState } from "./GameState";

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

export function buildInitialGameState(): GameState {
  return {
    player: { id: "p1", x: 100, y: 100, direction: "down" },
    sheep: FLOCK_OFFSETS.map(([dx, dy], i) => ({
      id: `s${i + 1}`,
      x: FLOCK_HOME.x + dx,
      y: FLOCK_HOME.y + dy,
      caught: false,
      projectIndex: i,
    })),
    dragon: null,
    dragonSpawnTimerMs: 6000,
    corral: [],
    dragonSteaks: [],
    backpackPickups: buildBackpackPickups(),
    collectedBackpackIds: [],
    popup: null,
    lasso: null,
    gameOverScore: null,
  };
}

import { GameState } from "../state/GameState";

/** When the field has no sheep, show score (after any catch popup is dismissed). */
export function checkGameOver(state: GameState): GameState {
  if (state.gameOverScore) return state;
  if (state.sheep.length > 0) return state;
  if (state.popup) return state;

  return {
    ...state,
    dragon: null,
    lasso: null,
    gameOverScore: {
      saved: state.corral.length,
      eaten: state.dragonSteaks.length,
    },
  };
}

import type { AppState, WindowPosition, WindowId } from "./types";

export type WindowAction =
  | { type: "OPEN"; id: WindowId }
  | { type: "CLOSE"; id: WindowId }
  | { type: "FOCUS"; id: WindowId }
  | { type: "MOVE"; id: WindowId; position: WindowPosition };

export const windowReducer = (state: AppState, action: WindowAction): AppState => {
  switch (action.type) {
    case "OPEN":
      return {
        ...state,
        topZ: state.topZ + 1,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, status: "open" as const, zIndex: state.topZ + 1 } : w,
        ),
      };

    case "CLOSE":
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, status: "closed" as const } : w,
        ),
      };

    case "FOCUS":
      return {
        ...state,
        topZ: state.topZ + 1,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, zIndex: state.topZ + 1 } : w,
        ),
      };

    case "MOVE":
      return {
        ...state,
        windows: state.windows.map((w) =>
          w.id === action.id ? { ...w, position: action.position } : w,
        ),
      };

    default:
      return state;
  }
};

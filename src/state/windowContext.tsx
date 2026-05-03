"use client";

import React, { createContext, useContext, useMemo, useReducer } from "react";
import { windowReducer } from "./windowReducer";
import type { AppState, WindowId, WindowPosition } from "./types";
import { initialWindowState } from "./initialState";

type WindowContextValue = {
  state: AppState;
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  moveWindow: (id: WindowId, position: WindowPosition) => void;
};

const WindowCtx = createContext<WindowContextValue | null>(null);

export function WindowProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(windowReducer, initialWindowState);

  const value = useMemo(
    (): WindowContextValue => ({
      state,
      openWindow: (id: WindowId) => dispatch({ type: "OPEN", id }),
      closeWindow: (id: WindowId) => dispatch({ type: "CLOSE", id }),
      focusWindow: (id: WindowId) => dispatch({ type: "FOCUS", id }),
      moveWindow: (id: WindowId, position: WindowPosition) =>
        dispatch({ type: "MOVE", id, position }),
    }),
    [state],
  );

  return <WindowCtx.Provider value={value}>{children}</WindowCtx.Provider>;
}

export function useWindows(): WindowContextValue {
  const ctx = useContext(WindowCtx);
  if (!ctx) throw new Error("useWindows must be used inside WindowProvider");
  return ctx;
}

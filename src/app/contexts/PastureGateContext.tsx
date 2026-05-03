"use client";

import React, { createContext, useContext } from "react";

const PastureGateCtx = createContext<(() => void) | null>(null);

export function PastureGateProvider({
  openPasture,
  children,
}: {
  openPasture: () => void;
  children: React.ReactNode;
}) {
  return <PastureGateCtx.Provider value={openPasture}>{children}</PastureGateCtx.Provider>;
}

export function usePastureGate(): () => void {
  const fn = useContext(PastureGateCtx);
  if (!fn) throw new Error("usePastureGate must be used inside PastureGateProvider");
  return fn;
}

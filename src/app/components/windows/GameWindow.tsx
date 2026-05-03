"use client";

import React from "react";
import { usePastureGate } from "@/app/contexts/PastureGateContext";
import { Button } from "../os/atoms/Button";

export function GameWindow() {
  const openPasture = usePastureGate();

  return (
    <div className="window-body-prose">
      <p>
        Pasture — herd sheep, collect résumé backpack tokens, dodge the dragon. Keyboard or touch (mobile).
      </p>
      <Button type="button" onClick={openPasture}>
        OPEN PASTURE ↗
      </Button>
    </div>
  );
}

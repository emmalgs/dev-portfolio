"use client";

import React from "react";
import { Button } from "../atoms/Button";

type HeroPastureInviteProps = {
  onOpenPasture: () => void;
};

export function HeroPastureInvite({ onOpenPasture }: HeroPastureInviteProps) {
  return (
    <div className="hero-pasture-invite">
      <div className="illo-corner tl" />
      <div className="illo-corner tr" />
      <div className="illo-corner bl" />
      <div className="illo-corner br" />
      <p className="hero-name">
        Emma Gerig <em>Scott</em>
      </p>
      <p className="hero-sub">Full-stack · TypeScript · shipped production systems</p>
      <div className="illo-box" role="presentation">
        <span className="illo-hint">
          Open the pasture to herd sheep, pocket résumé tokens, and dodge the dragon.
        </span>
      </div>
      <Button type="button" className="hero-pasture-invite__cta" onClick={onOpenPasture}>
        OPEN PASTURE ↗
      </Button>
    </div>
  );
}

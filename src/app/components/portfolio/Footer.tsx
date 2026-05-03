"use client";

import React from "react";

export function Footer() {
  return (
    <footer className="sbar">
      <span>
        PROJ: <span className="sbar-val">6 loaded</span>
      </span>
      <span>
        STACK: <span className="sbar-val">TS · REACT · NODE · POSTGRES · LLM</span>
      </span>
      <span>
        MODE: <span className="sbar-val">AVAILABLE</span>
      </span>
      <span>
        ◈ <span className="sbar-val">emmagerig.com</span>
      </span>
    </footer>
  );
}

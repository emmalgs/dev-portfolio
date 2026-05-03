"use client";

import React from "react";

export function Header() {
  return (
    <header className="menu-bar">
      <div className="menu-left">
        <span className="menu-name">EMMA GERIG</span>
        <span className="menu-sep">·</span>
        <span>Full Stack Engineer</span>
        <span className="menu-sep">·</span>
        <span>Hood River, OR</span>
        <span className="menu-sep">·</span>
        <span>Open to Remote</span>
      </div>
      <div className="menu-right">
        <a href="https://linkedin.com/in/emma-gerig" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/emmalgs" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="http://emmagerig.com" target="_blank" rel="noopener noreferrer">emmagerig.com</a>
        <a href="#" style={{ color: 'var(--orange)' }}>⬇ Resume</a>
      </div>
    </header>
  );
}

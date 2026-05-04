"use client";

import React from "react";

export function Header() {
  return (
    <header className="menu-bar">
      <div className="menu-left">
        <span className="menu-name">EMMA GERIG</span>
        <span>{`<<>><<>>`}</span>
        <span>FULL STACK ENGINEER</span>
        <span>{`<<>><<>>`}</span>
        <span>HOOD RIVER, OR</span>
        <span>{`<<>><<>>`}</span>
        <span>OPEN TO REMOTE</span>
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

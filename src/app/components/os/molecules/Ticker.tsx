import React from "react";

interface TickerProps {
  text: string;
}

export function Ticker({ text }: TickerProps) {
  return (
    <div className="ticker">
      <span className="ticker-inner">{text}</span>
    </div>
  );
}

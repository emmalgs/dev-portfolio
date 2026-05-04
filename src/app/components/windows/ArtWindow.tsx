"use client";

import React from "react";

const ASCII_ART = [
  "      %%%",
  "   =====",
  "  &%&%%%&",
  "  %& < <% ",
  "   &\\__/",
  "    \\ |____",
  "   .', ,  ()",
  "  / -.  _)| ",
  " |_(_.    |",
  " '-'\\  )  |",
  " mrf )    |",
  "    /  .  ).",
  "   /    _. |",
  " /'---':.-'|",
  "(__.' /    /",
  " \\   ( /  /",
  "  \\ /  _  | ",
  "   \\  |  '|",
  "   | . \\  |",
  "   |(     | ",
  "   |  \\ \\ |",
  "    \\  )\\ |",
  "   __)/ / \\",
  "--\"--(_.Ooo'----",
].join("\n");

export function ArtWindow() {
  return (
    <div className="window-body-prose">
      <p>I am also an artist</p>
      <p>
        You can view my art at{" "}
        <a
          href="https://www.emmagerig.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          emmagerig.com
        </a>
      </p>
      <pre
        style={{
          fontFamily: "var(--mono)",
          fontStyle: "normal",
          margin: 0,
          whiteSpace: "pre",
        }}
      >
        {ASCII_ART}
      </pre>
    </div>
  );
}

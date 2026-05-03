"use client";
import React, { useState } from "react";
import { ModalProvider } from "../../contexts/ModalContext";
import { GameProvider } from "../../contexts/GameContext";
import { MenuBar } from "./organisms/MenuBar";
import { Toolbar } from "./organisms/Toolbar";
import { Ticker } from "./molecules/Ticker";
import { LeftPanel } from "./organisms/LeftPanel";
import { CenterPanel } from "./organisms/CenterPanel";
import { RightPanel } from "./organisms/RightPanel";
import { StatusBar } from "./organisms/StatusBar";
import { Modal } from "./organisms/Modal";

const TICKER_TEXT =
  "◈ TypeScript · React · Next.js · Node.js · PostgreSQL · LLM APIs · Vector DB · Twilio · AWS · Swift · C#/.NET · GitHub Actions · Docker · Playwright · Jest · Vercel · Neon ◈ Hood River OR · Open to Remote ◈ 3+ yrs production · Full-stack · Artist ◈";

export function OsWindow() {
  const [filter, setFilter] = useState("ALL");

  return (
    <ModalProvider>
      <Modal />
      <div className="os-window">
        <MenuBar />
        <Toolbar filter={filter} onFilterChange={setFilter} />
        <Ticker text={TICKER_TEXT} />
        <GameProvider>
          <div className="os-body">
            <LeftPanel />
            <CenterPanel filter={filter} />
            <RightPanel />
          </div>
        </GameProvider>
        <StatusBar />
      </div>
    </ModalProvider>
  );
}

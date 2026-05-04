"use client";

import React, { useState } from "react";
import { GameProvider } from "@/app/contexts/GameContext";
import { ModalProvider } from "@/app/contexts/ModalContext";
import { PastureGateProvider } from "@/app/contexts/PastureGateContext";
import { WindowProvider } from "@/state/windowContext";
import { Ticker } from "@/app/components/os/molecules/Ticker";
import { Modal } from "@/app/components/os/organisms/Modal";
import { GameModal } from "@/app/game/components/GameModal";
import { Header } from "./Header";
import { Canvas } from "./Canvas";
import { RightNav } from "./RightNav";
import { MobileClosedDock } from "./MobileClosedDock";

const TICKER_TEXT =
  "◈ TypeScript · React · Next.js · Node.js · PostgreSQL · LLM APIs · Vector DB · Twilio · AWS · Swift · C#/.NET · GitHub Actions · Docker · Playwright · Jest · Vercel · Neon ◈ Hood River OR · Open to Remote ◈ 3+ yrs production · Full-stack · Artist ◈";

export function Portfolio() {
  const [pastureOpen, setPastureOpen] = useState(false);

  return (
    <GameProvider>
      <ModalProvider>
        <WindowProvider>
          <PastureGateProvider openPasture={() => setPastureOpen(true)}>
            <Modal />
            <GameModal open={pastureOpen} onClose={() => setPastureOpen(false)} />
            <div className="portfolio-root">
              <Header />
              <div className="portfolio-body">
                <Canvas />
                <RightNav />
              </div>
              <MobileClosedDock />
              <div className="portfolio-ticker-wrap">
                <Ticker text={TICKER_TEXT} />
              </div>
            </div>
          </PastureGateProvider>
        </WindowProvider>
      </ModalProvider>
    </GameProvider>
  );
}

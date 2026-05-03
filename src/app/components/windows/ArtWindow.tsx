"use client";

import React from "react";
import { useModal } from "@/app/contexts/ModalContext";
import { Button } from "../os/atoms/Button";

export function ArtWindow() {
  const { openModal } = useModal();

  return (
    <div className="window-body-prose">
      <p style={{ fontFamily: "var(--serif)", fontStyle: "italic" }}>
        Active studio practice — solo shows, PNCA adjunct, illustration 2014–2023.
      </p>
      <Button
        type="button"
        onClick={() =>
          openModal(
            "// ALSO AN ARTIST",
            "Active painting studio. Solo shows. Adjunct at PNCA. Illustrator, 2014–2023.<br><br><strong>↗ emmagerig.com</strong>",
          )
        }
      >
        MORE ↗
      </Button>
    </div>
  );
}

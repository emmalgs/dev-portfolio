"use client";
import React from "react";
import { useModal } from "../../../contexts/ModalContext";

export function MenuBar() {
  const { openModal } = useModal();

  return (
    <div className="menu-bar">
      <span className="logo">◈</span>
      <span className="menu-item">FILE</span>
      <span className="menu-item">WORK</span>
      <span className="menu-item">SKILLS</span>
      <span className="menu-item">CONTACT</span>
      <span
        className="menu-item"
        onClick={() =>
          openModal(
            "// ALSO AN ARTIST",
            "Active painting studio. Solo shows. Adjunct at PNCA. Illustrator, 2014–2023.<br><br><strong>↗ emmagerig.com</strong>"
          )
        }
      >
        ART ↗
      </span>
      <span className="menu-right">EMMA GERIG · PORTFOLIO 2026</span>
    </div>
  );
}

"use client";
import React from "react";
import { useModal } from "../../../contexts/ModalContext";

export function Modal() {
  const { modal, closeModal } = useModal();

  return (
    <div
      className={`overlay${modal.isOpen ? " open" : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) closeModal(); }}
    >
      <div className="modal">
        <div className="modal-bar">
          <span>{modal.title}</span>
          <button className="modal-x" onClick={closeModal}>✕</button>
        </div>
        <div className="modal-body" dangerouslySetInnerHTML={{ __html: modal.body }} />
      </div>
    </div>
  );
}

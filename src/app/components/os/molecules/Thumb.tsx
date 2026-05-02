import React from "react";
import { useModal } from "../../../contexts/ModalContext";

interface ThumbProps {
  modalTitle?: string;
  modalBody?: string;
  label?: string;
  bg?: string;
  children?: React.ReactNode;
}

export function Thumb({ modalTitle, modalBody, label, bg, children }: ThumbProps) {
  const { openModal } = useModal();

  return (
    <div
      className="thumb"
      style={bg ? { background: bg } : undefined}
      onClick={modalTitle && modalBody ? () => openModal(modalTitle, modalBody) : undefined}
    >
      {children}
      {label && <div className="thumb-label">{label}</div>}
    </div>
  );
}

export function IlloThumb() {
  return <div className="thumb-illo">your<br />illo<br />here</div>;
}

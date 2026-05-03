import React from "react";
import { useModal } from "../../../contexts/ModalContext";
import { useGame } from "../../../contexts/GameContext";

interface ThumbProps {
  modalTitle?: string;
  modalBody?: string;
  label?: string;
  bg?: string;
  children?: React.ReactNode;
}

export function Thumb({
  modalTitle,
  modalBody,
  label,
  bg,
  children,
}: ThumbProps) {
  const { openModal } = useModal();

  return (
    <div
      className="thumb"
      style={bg ? { background: bg } : undefined}
      onClick={
        modalTitle && modalBody
          ? () => openModal(modalTitle, modalBody)
          : undefined
      }
    >
      {children}
      {label && <div className="thumb-label">{label}</div>}
    </div>
  );
}

export function IlloThumb() {
  return (
    <div className="thumb-illo">
      your
      <br />
      illo
      <br />
      here
    </div>
  );
}

/** FIELD LOG grid cell: same placeholder as IlloThumb until sheep are corralled. */
export function CorralThumb() {
  const { gameState } = useGame();
  const corral = gameState.corral;

  return (
    <div className="thumb-illo thumb-corral" aria-label="Corral">
      <div className="thumb-corral__sheep" aria-hidden>
        {corral.map((s) => (
          <span key={s.id} className="thumb-corral__emoji" title={s.id}>
            🐑
          </span>
        ))}
      </div>
      <div className="thumb-corral__tag">CORRAL</div>
    </div>
  );
}

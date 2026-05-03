import React from "react";
import { useModal } from "../../../contexts/ModalContext";
import { useGame } from "../../../contexts/GameContext";
import { getSheepProject } from "../../../data/gameSheepProjects";

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
    <div className="thumb-illo thumb-corral" aria-label="Your corral">
        <div className="thumb-corral__sheep" aria-hidden>
          {corral.map((s) => (
            <span
              key={s.id}
              className="thumb-corral__emoji"
              title={getSheepProject(s.projectIndex).displayName}
            >
              🐑
            </span>
          ))}
      </div>
      <div className="thumb-corral__tag">CORRAL</div>
    </div>
  );
}

/** SPECIMENS cell: steaks for every sheep the dragon caught. */
export function DragonSteakThumb() {
  const { gameState } = useGame();
  const steaks = gameState.dragonSteaks;

  return (
    <div className="thumb-illo thumb-dragon-pit" aria-label="Dragon corral">
      <div className="thumb-dragon-pit__steaks" aria-hidden>
        {steaks.map((t) => (
          <span key={t.id} className="thumb-dragon-pit__emoji" title={t.id}>
            🥩
          </span>
        ))}
      </div>
      <div className="thumb-dragon-pit__tag">DRAGON</div>
    </div>
  );
}

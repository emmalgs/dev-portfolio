"use client";

import React, { useCallback, useRef } from "react";
import type { WindowId, WindowPosition } from "@/state/types";
import { useWindows } from "@/state/windowContext";
import { useWindowDrag } from "@/app/hooks/useWindowDrag";
import { WindowBar } from "./WindowBar";
import styles from "./Window.module.css";

type WindowFrameProps = {
  id: WindowId;
  label: string;
  accent: boolean;
  position: WindowPosition;
  zIndex: number;
  children: React.ReactNode;
};

export function Window({ id, label, accent, position, zIndex, children }: WindowFrameProps) {
  const { closeWindow, focusWindow, moveWindow } = useWindows();
  const ref = useRef<HTMLDivElement>(null);

  const onMove = useCallback(
    (next: WindowPosition) => {
      moveWindow(id, next);
    },
    [id, moveWindow],
  );

  const { onDragStart } = useWindowDrag({ ref, onMove });

  return (
    <div
      ref={ref}
      data-window={id}
      className={`${styles.window} portfolio-window`}
      style={{
        left: position.x,
        top: position.y,
        zIndex,
      }}
      onMouseDown={() => focusWindow(id)}
    >
      <WindowBar
        label={label}
        accent={accent}
        className="portfolio-window-bar"
        onClose={() => closeWindow(id)}
        onDragStart={onDragStart}
      />
      <div className={styles.body}>{children}</div>
    </div>
  );
}

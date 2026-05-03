"use client";

import { type RefObject, useCallback } from "react";
import type { WindowPosition } from "@/state/types";

type UseWindowDragOptions = {
  ref: RefObject<HTMLDivElement | null>;
  onMove: (position: WindowPosition) => void;
};

export function useWindowDrag({ ref, onMove }: UseWindowDragOptions) {
  const onDragStart = useCallback(
    (e: React.MouseEvent) => {
      if (e.button !== 0) return;
      if (typeof window !== "undefined" && window.matchMedia("(max-width: 1024px)").matches) {
        return;
      }
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const offsetX = e.clientX - rect.left;
      const offsetY = e.clientY - rect.top;

      const onMouseMove = (ev: MouseEvent) => {
        const canvas = ref.current?.offsetParent?.getBoundingClientRect();
        if (!canvas) return;
        onMove({
          x: ev.clientX - canvas.left - offsetX,
          y: ev.clientY - canvas.top - offsetY,
        });
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [ref, onMove],
  );

  return { onDragStart };
}

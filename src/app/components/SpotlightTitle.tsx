"use client";

import { useEffect, useRef } from "react";
import styles from "./SpotlightTitle.module.css";

export function SpotlightTitle({ children }: { children: React.ReactNode }) {
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    function handleMove(e: MouseEvent) {
      const rect = wrap!.getBoundingClientRect();
      wrap!.style.setProperty("--spot-x", `${e.clientX - rect.left}px`);
      wrap!.style.setProperty("--spot-y", `${e.clientY - rect.top}px`);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div className={styles.wrap} ref={wrapRef}>
      <h1 className={`text-title ${styles.base}`}>{children}</h1>
      <h1 className={`text-title ${styles.spot}`} aria-hidden="true">
        {children}
      </h1>
    </div>
  );
}

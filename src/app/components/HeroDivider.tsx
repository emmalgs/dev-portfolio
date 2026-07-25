"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "./HeroDivider.module.css";

export function HeroDivider({ height }: { height: number }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 640px)");
    setIsMobile(query.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    query.addEventListener("change", handleChange);
    return () => query.removeEventListener("change", handleChange);
  }, []);

  if (isMobile) {
    return (
      <div className={styles.wrapHorizontal}>
        <motion.div
          className={styles.lineHorizontal}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
      </div>
    );
  }

  return (
    <div className={styles.wrap} style={{ height }}>
      <motion.div
        className={styles.line}
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      />
    </div>
  );
}

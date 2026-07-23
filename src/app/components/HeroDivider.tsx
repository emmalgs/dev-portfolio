"use client";

import { motion } from "framer-motion";
import styles from "./HeroDivider.module.css";

export function HeroDivider({ height }: { height: number }) {
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

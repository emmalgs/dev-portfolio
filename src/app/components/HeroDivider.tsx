"use client";

import { motion } from "framer-motion";
import styles from "./HeroDivider.module.css";

const DOT_SIZE = 12;

export function HeroDivider({ height }: { height: number }) {
  return (
    <div className={styles.wrap} style={{ height }}>
      <motion.div
        className={styles.shape}
        style={{ width: DOT_SIZE, height: DOT_SIZE, borderRadius: DOT_SIZE / 2 }}
        initial={{ scaleX: 1, scaleY: 1 }}
        animate={{ scaleX: 2 / DOT_SIZE, scaleY: height / DOT_SIZE * 1.5 }}
        transition={{ type: "spring", duration: 4, bounce: 0.75, delay: 0.2 }}
      />
    </div>
  );
}

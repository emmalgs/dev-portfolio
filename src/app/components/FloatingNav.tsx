"use client";

import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Nav } from "./Nav";
import styles from "./FloatingNav.module.css";

const NAV_TOP_HOME = 400;
const NAV_TOP_DEFAULT = 64;

/**
 * Mounted once in the root layout so it never unmounts on navigation —
 * that's what lets it slide between the home and default positions
 * instead of just popping between two independently-rendered navs.
 */
export function FloatingNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <motion.div
      className={styles.wrapper}
      animate={{ top: isHome ? NAV_TOP_HOME : NAV_TOP_DEFAULT }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
    >
      <Nav />
    </motion.div>
  );
}

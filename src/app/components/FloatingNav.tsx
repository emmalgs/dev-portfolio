"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Nav } from "./Nav";
import styles from "./FloatingNav.module.css";

const NAV_TOP_HOME = 500;
const NAV_TOP_DEFAULT = 64;
const NAV_MOBILE_DOT_SIZE = 44;
const NAV_MOBILE_BOTTOM_GAP = 40;

/**
 * Mounted once in the root layout so it never unmounts on navigation —
 * that's what lets it slide between the home and default positions
 * instead of just popping between two independently-rendered navs.
 */
export function FloatingNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isMobile, setIsMobile] = useState(false);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 640px)");
    setIsMobile(query.matches);
    const handleChange = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    query.addEventListener("change", handleChange);

    const updateHeight = () => setViewportHeight(window.innerHeight);
    updateHeight();
    window.addEventListener("resize", updateHeight);

    return () => {
      query.removeEventListener("change", handleChange);
      window.removeEventListener("resize", updateHeight);
    };
  }, []);

  const homeTop =
    isMobile && viewportHeight
      ? viewportHeight - NAV_MOBILE_BOTTOM_GAP - NAV_MOBILE_DOT_SIZE
      : NAV_TOP_HOME;

  return (
    <motion.div
      className={styles.wrapper}
      animate={{ top: isHome ? homeTop : NAV_TOP_DEFAULT }}
      transition={{ type: "spring", stiffness: 260, damping: 28 }}
    >
      <Nav />
    </motion.div>
  );
}

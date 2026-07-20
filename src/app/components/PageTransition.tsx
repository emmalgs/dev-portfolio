"use client";

import { AnimatePresence } from "framer-motion";

/**
 * Only owns the AnimatePresence boundary. It has to stay mounted in the
 * (persistent) root layout so exit animations aren't lost — the actual
 * per-route motion.div/key lives in template.tsx, which Next.js remounts
 * on every navigation, so its mount/unmount timing lines up with when the
 * new route's content is actually ready (avoids a double fade).
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  return <AnimatePresence mode="wait">{children}</AnimatePresence>;
}

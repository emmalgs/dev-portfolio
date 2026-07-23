"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import styles from "./Nav.module.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/contact", label: "Contact" },
];

export function Nav({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <nav className={`${styles.nav} ${className ?? ""}`}>
      {links.map((link) => {
        const isCurrent = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            aria-label={link.label}
            aria-current={isCurrent ? "page" : undefined}
            className={`${styles.dotWrap} ${isCurrent ? styles.isCurrent : ""}`}
          >
            <span className={styles.dot} />
            {isCurrent && (
              <motion.span
                layoutId="nav-selected-ring"
                className={styles.selectedRing}
                transition={{ type: "spring", stiffness: 350, damping: 30 }}
              />
            )}
          </Link>
        );
      })}
    </nav>
  );
}

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
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
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          aria-label={link.label}
          aria-current={pathname === link.href ? "page" : undefined}
          className={`${styles.dot} ${pathname === link.href ? styles.isCurrent : ""}`}
        />
      ))}
    </nav>
  );
}

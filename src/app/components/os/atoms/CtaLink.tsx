import React from "react";

interface CtaLinkProps {
  href: string;
  variant?: "p";
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export function CtaLink({ href, variant, children, onClick }: CtaLinkProps) {
  return (
    <a
      className={`cta${variant === "p" ? " p" : ""}`}
      href={href}
      target={href.startsWith("mailto") ? undefined : "_blank"}
      rel="noopener noreferrer"
      onClick={onClick}
    >
      {children}
    </a>
  );
}

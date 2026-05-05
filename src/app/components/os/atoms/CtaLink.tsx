import React from "react";

interface CtaLinkProps {
  href: string;
  variant?: "p";
  download?: string;
  children: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
}

export function CtaLink({ href, variant, download, children, onClick }: CtaLinkProps) {
  const openInNewTab =
    !download && !href.startsWith("mailto") && !href.startsWith("tel:");

  return (
    <a
      className={`cta${variant === "p" ? " p" : ""}`}
      href={href}
      download={download}
      target={openInNewTab ? "_blank" : undefined}
      rel={openInNewTab ? "noopener noreferrer" : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

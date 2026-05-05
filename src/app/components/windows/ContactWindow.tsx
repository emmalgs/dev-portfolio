"use client";

import React from "react";
import { CtaLink } from "../os/atoms/CtaLink";

export function ContactWindow() {
  return (
    <div className="window-body-prose">
      <CtaLink href="https://www.linkedin.com/in/emma-gerig/">⬡ LINKEDIN</CtaLink>
      <CtaLink href="https://github.com/emmalgs">⬡ GITHUB</CtaLink>
      <CtaLink href="mailto:elgerig@gmail.com">⬡ EMAIL</CtaLink>
      <CtaLink href="/resume.pdf" download="Emma-Gerig-Resume.pdf" variant="p">
        ⬇ RESUME PDF
      </CtaLink>
    </div>
  );
}

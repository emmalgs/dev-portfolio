"use client";

import type { ReactNode } from "react";
import styled from "@emotion/styled";
import Link from "next/link";

const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  flex: 1;
  min-height: 0;
`;

const NavList = styled.ul`
  display: flex;
  gap: 16px;
`;

export default function Canvas({ children }: { children: ReactNode }) {
  return (
    <Body>
      <NavList>
        <li>
          <Link href="/v2/about">About</Link>
        </li>
        <li>
          <Link href="/v2/education">Education</Link>
        </li>
      </NavList>
      {children}
    </Body>
  );
}
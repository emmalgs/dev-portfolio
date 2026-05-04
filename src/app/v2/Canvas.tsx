"use client";

import styled from "@emotion/styled";
import Link from "next/link";

const NavList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export default function Canvas() {
  return (
    <NavList>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/education">Education</Link>
      </li>
    </NavList>
  )
}
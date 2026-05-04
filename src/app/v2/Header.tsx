"use client";

import React from "react";
import styled from "@emotion/styled";

const HeaderContainer = styled.header`
  background: var(--forest);
  color: var(--light-grey);
  font-family: Helvetica, Arial, sans-serif;
  font-size: 24px;
  padding: 16px;
  width: 100vw;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  flex: 1;
`;

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <span>EMMA GERIG</span>
        <span>•</span>  
        <span>FULL STACK ENGINEER</span>
        <span>•</span>
        <span>HOOD RIVER, OR</span>
        <span>•</span>
        <span>OPEN TO REMOTE</span>
      </HeaderContent>
    </HeaderContainer>
  );
}

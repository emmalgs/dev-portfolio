"use client";

import styled from "@emotion/styled";

export function Footer() {
  const FooterContainer = styled.footer`
    position: fixed;
    background: var(--forest);
    color: var(--light-grey);
    font-family: Helvetica, Arial, sans-serif;
    font-size: 24px;
    padding: 16px;
    bottom: 0;
    width: 100%;
  `;

  const FooterContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    flex: 1;
  `;

  return (
    <FooterContainer>
      <FooterContent>
        <span>copyright 2026</span>
        <span>all rights reserved</span>
        <span>emma gerig</span>
        <span>linkedin</span>
        <span>github</span>
        <span>email</span>
        <span>resume</span>
      </FooterContent>
    </FooterContainer>
  );
}

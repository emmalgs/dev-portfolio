import React from "react";

type TagColor = "l" | "g" | "p" | "o";

interface TagProps {
  color: TagColor;
  children: React.ReactNode;
}

export function Tag({ color, children }: TagProps) {
  return <span className={`tag ${color}`}>{children}</span>;
}

import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "red";
  active?: boolean;
}

export function Button({ variant, active, className = "", children, ...props }: ButtonProps) {
  const cls = ["tb", variant === "red" ? "red" : "", active ? "on" : "", className]
    .filter(Boolean).join(" ");
  return <button className={cls} {...props}>{children}</button>;
}

"use client";

import { useRef, useState } from "react";
import styles from "./CopyEmailButton.module.css";

export function CopyEmailButton({ email }: { email: string }) {
  const [visible, setVisible] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout>>();

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // clipboard API unavailable; nothing to fall back to here
    }
    setVisible(true);
    clearTimeout(hideTimer.current);
    hideTimer.current = setTimeout(() => setVisible(false), 2000);
  };

  return (
    <>
      <button type="button" className={`${styles.button} text-info`} onClick={handleClick}>
        email
      </button>
      <div className={`${styles.toast} ${visible ? styles.isVisible : ""}`} role="status">
        email copied to clipboard
      </div>
    </>
  );
}

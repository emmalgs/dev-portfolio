import Image from "next/image";
import styles from "./Illustration.module.css";

type IllustrationProps = {
  src?: string;
  alt?: string;
  width?: number | string;
  height?: number | string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
};

/** Renders artwork when a src is provided; otherwise falls back to a placeholder. */
export function Illustration({ src, alt, width, height, label, className, style }: IllustrationProps) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt ?? ""}
        width={typeof width === "number" ? width : undefined}
        height={typeof height === "number" ? height : undefined}
        className={className}
        style={{ display: "block", width, height, position: label ? "relative" : undefined, ...style }}
      />
    );
  }

  return (
    <div
      className={`${styles.illustration} ${className ?? ""}`}
      style={{ width, height, position: label ? "relative" : undefined, ...style }}
    >
      {label ? <span className={styles.label}>{label}</span> : null}
    </div>
  );
}

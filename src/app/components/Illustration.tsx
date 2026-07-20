import styles from "./Illustration.module.css";

type IllustrationProps = {
  width?: number | string;
  height?: number | string;
  label?: string;
  className?: string;
  style?: React.CSSProperties;
};

/** Placeholder for artwork that will be swapped in later. */
export function Illustration({ width, height, label, className, style }: IllustrationProps) {
  return (
    <div
      className={`${styles.illustration} ${className ?? ""}`}
      style={{ width, height, position: label ? "relative" : undefined, ...style }}
    >
      {label ? <span className={styles.label}>{label}</span> : null}
    </div>
  );
}

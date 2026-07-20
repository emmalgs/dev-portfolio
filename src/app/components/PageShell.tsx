import styles from "./PageShell.module.css";

export function PageShell({ children }: { children: React.ReactNode }) {
  return <div className={styles.shell}>{children}</div>;
}

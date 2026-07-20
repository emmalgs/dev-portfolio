import { PageShell } from "./components/PageShell";
import { Illustration } from "./components/Illustration";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <PageShell>
      {/* <Illustration width={370} height={165} label="illustration" className={styles.illustration} /> */}

      <div className={styles.heroRow}>
        <h1 className="text-title">
          Emma
          <br />
          Gerig
        </h1>
        <div className="divider" style={{ height: 110 }} />
        <div className={styles.tags}>
          <p className="text-info">visual craft</p>
          <p className="text-info">systems thinking</p>
          <p className="text-info">technical depth</p>
        </div>
      </div>
    </PageShell>
  );
}

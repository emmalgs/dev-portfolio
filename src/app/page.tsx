import { PageShell } from "./components/PageShell";
import { Illustration } from "./components/Illustration";
import { HeroDivider } from "./components/HeroDivider";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <PageShell>
      <Illustration
        src="/images/art_1.png"
        alt="Dragon lady illustration"
        width={550}
        height={300}
        className={styles.illustration}
      />

      <div className={styles.heroRow}>
        <h1 className="text-title">
          Emma
          <br />
          Gerig
        </h1>
        <HeroDivider height={100} />
        <div className={styles.tags}>
          <p className="text-info">visual craft</p>
          <p className="text-info">systems thinking</p>
          <p className="text-info">technical depth</p>
        </div>
      </div>
    </PageShell>
  );
}

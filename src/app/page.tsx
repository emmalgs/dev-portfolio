import { PageShell } from "./components/PageShell";
import { Illustration } from "./components/Illustration";
import { HeroDivider } from "./components/HeroDivider";
import { SpotlightTitle } from "./components/SpotlightTitle";
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
        <SpotlightTitle>
          Emma
          <br />
          Gerig
        </SpotlightTitle>
        <HeroDivider height={120} />
        <div className={styles.tags}>
          <p className="text-info">visual craft</p>
          <p className="text-info">systems thinking</p>
          <p className="text-info">technical depth</p>
        </div>
      </div>
    </PageShell>
  );
}

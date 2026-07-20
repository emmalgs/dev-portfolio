import { PageShell } from "../components/PageShell";
import { Illustration } from "../components/Illustration";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <PageShell>
      <div className={styles.intro}>
        <p className="text-body">software engineer with an mfa in craft</p>
        <p className={`text-info ${styles.description}`}>
          3+ years production software engineering experience. 14+ years studio art, illustration,
          and design experience. represented by froelick gallery (portland) and uprise art (nyc).
        </p>
      </div>

      {/* <Illustration width={340} height={165} className={styles.illustration} /> */}
    </PageShell>
  );
}

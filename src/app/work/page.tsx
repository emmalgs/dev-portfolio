import { PageShell } from "../components/PageShell";
import { Illustration } from "../components/Illustration";
import styles from "./page.module.css";

export default function WorkPage() {
  return (
    <PageShell>
      <p className={`text-info ${styles.resumeLink}`}>
        <a href="/resume.pdf" download>
          download resume
        </a>
      </p>

      <div className={styles.statements}>
        <p className={`text-body ${styles.statement1}`}>
          i design with the data model already in hand.
        </p>
        <p className={`text-body ${styles.statement2}`}>
          i build what i design.
        </p>
        <p className={`text-body ${styles.statement3}`}>
          i speak design to engineers and engineering to designers.
        </p>
      </div>

      <Illustration
        src="/images/art_3.png"
        width={340}
        height={165}
        className={styles.illustration}
      />
    </PageShell>
  );
}

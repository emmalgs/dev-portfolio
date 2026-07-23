import { PageShell } from "../components/PageShell";
import { Illustration } from "../components/Illustration";
import { CopyEmailButton } from "../components/CopyEmailButton";
import { CONTACT_EMAIL } from "../siteConfig";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <PageShell>
      <div className={styles.heroRow}>
        <h1 className="text-title">
          Let&apos;s
          <br />
          Chat
        </h1>
        <div className="divider" style={{ height: 150 }} />
        <div className={styles.links}>
          <a className={`text-info ${styles.link}`} href="#">
            linkedin
          </a>
          <a className={`text-info ${styles.link}`} href="#">
            github
          </a>
          <CopyEmailButton email={CONTACT_EMAIL} />
        </div>
      </div>

      <Illustration width={340} height={165} className={styles.illustration} />
    </PageShell>
  );
}

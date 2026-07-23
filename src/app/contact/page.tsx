import Image from "next/image";
import { PageShell } from "../components/PageShell";
import { Illustration } from "../components/Illustration";
import { ContactForm } from "../components/ContactForm";
import { SpotlightTitle } from "../components/SpotlightTitle";
import styles from "./page.module.css";
import { HeroDivider } from "../components/HeroDivider";

export default function ContactPage() {
  return (
    <PageShell>
      <div className={styles.heroRow}>
        <SpotlightTitle>
          Let&apos;s
          <br />
          Chat
        </SpotlightTitle>
        <HeroDivider height={280} />
        <div className={styles.contactColumn}>
          <div className={styles.links}>
            <a className={styles.link} target="blank" href="https://www.linkedin.com/in/emma-gerig">
              <Image src="/images/linkedinMove.gif" alt="linkedin" width={40} height={40} unoptimized />
            </a>
            <a className={styles.link} target="blank" href="https://www.github.com/emmalgs">
              <Image src="/images/githubMove.gif" alt="github" width={40} height={40} unoptimized />
            </a>
          </div>
          <ContactForm />
        </div>
      </div>

      <Illustration
        src="/images/art_4.png"
        width={480}
        height={235}
        className={styles.illustration}
      />
    </PageShell>
  );
}

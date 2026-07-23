"use client";

import { useState } from "react";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    setStatus("sending");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          subject: data.get("subject"),
          message: data.get("message"),
        }),
      });

      const json = await res.json();
      if (!res.ok) {
        throw new Error(json.error ?? "Something went wrong.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setErrorMessage(err instanceof Error ? err.message : "Something went wrong.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return <p className={`text-info ${styles.success}`}>Thanks — I&apos;ll be in touch soon.</p>;
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <input className={styles.input} type="text" name="name" placeholder="name" required />
        <input className={styles.input} type="email" name="email" placeholder="email" required />
      </div>
      <input className={styles.input} type="text" name="subject" placeholder="subject" required />
      <textarea className={styles.textarea} name="message" placeholder="message" rows={3} required />
      <button className={styles.submit} type="submit" disabled={status === "sending"}>
        {status === "sending" ? "sending..." : "send"}
      </button>
      {status === "error" && <p className={styles.error}>{errorMessage}</p>}
    </form>
  );
}

import { NextResponse } from "next/server";
import { Resend } from "resend";

// Humans can't fill in four fields in under 3 seconds.
const MIN_FILL_MS = 3000;
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX = { name: 100, email: 254, subject: 200, message: 5000 };

function escapeHtml(text: string) {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.FROM_EMAIL;
  const myEmail = process.env.MY_EMAIL;

  if (!apiKey || !fromEmail || !myEmail) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 503 }
    );
  }

  let body: unknown;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON." }, { status: 400 });
  }

  const rec = (body ?? {}) as Record<string, unknown>;
  const email = typeof rec.email === "string" ? rec.email.trim() : "";
  const name = typeof rec.name === "string" ? rec.name.trim() : "";
  const subject = typeof rec.subject === "string" ? rec.subject.trim() : "";
  const message = typeof rec.message === "string" ? rec.message.trim() : "";
  const honeypot = typeof rec.website === "string" ? rec.website : "";
  const elapsedMs = typeof rec.elapsedMs === "number" ? rec.elapsedMs : NaN;

  // Bot checks: honeypot filled, or submitted too fast / without the timing
  // field (i.e. posted directly to the endpoint). Pretend success so bots
  // don't learn they were caught.
  if (honeypot || !Number.isFinite(elapsedMs) || elapsedMs < MIN_FILL_MS) {
    console.warn("Contact form: blocked likely bot", {
      honeypot: Boolean(honeypot),
      elapsedMs,
    });
    return NextResponse.json({ data: { ok: true } });
  }

  if (!email || !name || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  if (!EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email." }, { status: 400 });
  }

  if (
    name.length > MAX.name ||
    email.length > MAX.email ||
    subject.length > MAX.subject ||
    message.length > MAX.message
  ) {
    return NextResponse.json({ error: "One of the fields is too long." }, { status: 400 });
  }

  const notifyHtml = `
    <h1>New contact form submission</h1>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  function errorMessage(error: unknown) {
    return typeof error === "object" && error !== null && "message" in error
      ? String((error as { message: unknown }).message)
      : "Send failed.";
  }

  try {
    const resend = new Resend(apiKey);

    // Only notify me. No auto-reply to the submitter: it doubled the email
    // count and let anyone send arbitrary text to any address from my domain.
    const notify = await resend.emails.send({
      from: fromEmail,
      to: [myEmail],
      reply_to: email,
      subject: `New message: ${subject}`,
      html: notifyHtml,
    });

    if (notify.error) {
      return NextResponse.json({ error: errorMessage(notify.error) }, { status: 502 });
    }

    return NextResponse.json({ data: notify.data });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Send failed.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

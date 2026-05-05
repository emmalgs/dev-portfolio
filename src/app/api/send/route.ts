import { NextResponse } from "next/server";
import { Resend } from "resend";

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

  const rec = body as Record<string, unknown>;
  const email = typeof rec.email === "string" ? rec.email.trim() : "";
  const name = typeof rec.name === "string" ? rec.name.trim() : "";
  const subject = typeof rec.subject === "string" ? rec.subject.trim() : "";
  const message = typeof rec.message === "string" ? rec.message.trim() : "";

  if (!email || !name || !subject || !message) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const html = `
    <h1>Thank you for contacting me!</h1>
    <p>I&apos;ll get back to you as soon as possible.</p>
    <hr />
    <p><strong>Email:</strong> ${escapeHtml(email)}</p>
    <p><strong>Name:</strong> ${escapeHtml(name)}</p>
    <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
    <p><strong>Message:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
  `;

  try {
    const resend = new Resend(apiKey);
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [myEmail, email],
      subject,
      html,
    });

    if (error) {
      const msg =
        typeof error === "object" && error !== null && "message" in error
          ? String((error as { message: unknown }).message)
          : "Send failed.";
      return NextResponse.json({ error: msg }, { status: 502 });
    }

    return NextResponse.json({ data });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Send failed.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

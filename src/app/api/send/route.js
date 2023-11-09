import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const body = await req.json();
  const { email, name, subject, message } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: [process.env.MY_EMAIL, email],
      subject: subject,
      react: (
        <>
          <h1>Thank you for contacting me!</h1>
          <h4>I'll get back to you as soon as possible</h4>
          <hr></hr>
          <p>Email: {email}</p>
          <p>Name: {name}</p>
          <p>Subject: {subject}</p>
          <p>Message: {message}</p>
        </>
      ),
    });

    if (error) {
      return NextResponse.json({ error });
    }

    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

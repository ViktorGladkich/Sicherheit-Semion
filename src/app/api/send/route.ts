import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(
  process.env.VITE_RESEND_API_KEY || process.env.RESEND_API_KEY,
);

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, phone, message } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "A.S.S Security <onboarding@resend.dev>", // Change or verify domain later
      to: ["info@ass-sicurity.de"],
      subject: `Neue Anfrage von ${firstName} ${lastName}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefon:</strong> ${phone || "N/A"}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error }, { status: 400 });
    }

    return NextResponse.json({ data }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}

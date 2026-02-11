import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({ to, subject, html }) {
  try {
    await resend.emails.send({
      from: "Your Store <noreply@yourdomain.com>",
      to,
      subject,
      html,
    });
  } catch (err) {
    console.log("Email Error:", err);
  }
}

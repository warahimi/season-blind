import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  try {
    const { fullName, phone, email, message } = req.body;

    if (!fullName || !phone || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const { data, error } = await resend.emails.send({
      from: "Season Blinds <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL],
      subject: `New Free Measurement Request - ${fullName}`,
      html: `
        <h2>New Free Measurement Request</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email,
    });

    if (error) {
      return res.status(500).json({ message: "Email failed", error });
    }

    return res.status(200).json({ message: "Email sent successfully", data });
  } catch (error) {
    return res.status(500).json({ message: "Server error", error });
  }
}
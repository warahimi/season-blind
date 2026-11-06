// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     return res.status(405).json({ message: "Method not allowed" });
//   }

//   try {
//     const { fullName, phone, email, message } = req.body;

//     if (!fullName || !phone || !email || !message) {
//       return res.status(400).json({ message: "All fields are required." });
//     }

//     const { data, error } = await resend.emails.send({
//       from: "Season Blinds <noreply@seasonblindsusa.com>",
//       to: [process.env.CONTACT_TO_EMAIL],
//       subject: `New Free Measurement Request - ${fullName}`,
//       html: `
//         <h2>New Free Measurement Request</h2>
//         <p><strong>Name:</strong> ${fullName}</p>
//         <p><strong>Phone:</strong> ${phone}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong></p>
//         <p>${message}</p>
//       `,
//       replyTo: email,
//     });

//     if (error) {
//       return res.status(500).json({ message: "Email failed", error });
//     }

//     return res.status(200).json({ message: "Email sent successfully", data });
//   } catch (error) {
//     return res.status(500).json({ message: "Server error", error });
//   }
// }

import { Resend } from "resend";

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => {
    const entities = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };
    return entities[char];
  });

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      message: "Method not allowed",
    });
  }

  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_TO_EMAIL;

    if (!apiKey || !contactEmail) {
      console.error("Missing Resend environment variables");

      return res.status(500).json({
        message: "Email service is not configured.",
      });
    }

    const { fullName, phone, email, message } = req.body || {};

    if (
      [fullName, phone, email, message].some(
        (value) =>
          typeof value !== "string" || !value.trim()
      )
    ) {
      return res.status(400).json({
        message: "All fields are required.",
      });
    }

    if (
      fullName.length > 150 ||
      phone.length > 50 ||
      email.length > 254 ||
      message.length > 5000 ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      return res.status(400).json({
        message: "Please check your form details.",
      });
    }

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Season Blinds <noreply@seasonblindsusa.com>",
      to: [contactEmail],
      replyTo: email.trim(),
      subject: `New Free Measurement Request - ${fullName.trim()}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:auto;">
          <h2 style="color:#F26A00;">
            New Free Measurement Request
          </h2>

          <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
          <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>

          <h3>Customer Message</h3>
          <p style="white-space:pre-wrap;">${escapeHtml(message)}</p>

          <hr />
          <p style="color:#777;font-size:12px;">
            Sent from Season Blinds website.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);

      return res.status(502).json({
        message: "Email provider rejected the request.",
        ...(process.env.NODE_ENV !== "production"
          ? { details: error.message }
          : {}),
      });
    }

    console.log("Resend accepted email:", data?.id);

    return res.status(200).json({
      message: "Email request accepted successfully.",
    });
  } catch (error) {
    console.error("Send email error:", error);

    return res.status(500).json({
      message: "An unexpected server error occurred.",
    });
  }
}

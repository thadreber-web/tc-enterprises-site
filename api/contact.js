// Server handler to send contact mail with optional reCAPTCHA v3 verification.
// Env vars: SMTP_HOST, SMTP_PORT (optional, default 587), SMTP_SECURE ('true'|'false'), SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO,
//           RECAPTCHA_SECRET (optional)
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }
  try {
    const { name, email, message, ...rest } = req.body || {};
    // Verify reCAPTCHA if configured
    const secret = process.env.RECAPTCHA_SECRET;
    if (secret && req.body?.["g-recaptcha-response"]) {
      try {
        const ver = await fetch("https://www.google.com/recaptcha/api/siteverify", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams({ secret, response: req.body["g-recaptcha-response"] })
        });
        const vjson = await ver.json();
        if (!vjson.success) return res.status(400).json({ ok: false, error: "reCAPTCHA failed" });
      } catch (e) {
        // Fall through to allow mail attempt if verification can't be performed
      }
    }

    if (!name || !email || !message) {
      return res.status(400).json({ ok: false, error: "Missing fields" });
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT || 587),
      secure: String(process.env.SMTP_SECURE || "false") === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    });

    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: process.env.SMTP_TO || process.env.SMTP_USER,
      subject: `New contact from ${name}`,
      replyTo: email,
      text: message,
    });

    return res.status(200).json({ ok: true, id: info.messageId });
  } catch (err) {
    return res.status(500).json({ ok: false, error: err?.message || "Server error" });
  }
}

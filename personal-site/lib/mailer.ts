import nodemailer, { type Transporter } from "nodemailer";

// ── Gmail SMTP lead mailer ───────────────────────────────────────────────────
// Sends a lead-notification email through a Gmail account using an App Password
// (Gmail blocks normal-password SMTP). Everything is env-driven and the whole
// thing no-ops gracefully when not configured, so local/dev never crashes.
//
// Required env:
//   GMAIL_USER          the Gmail address that authenticates SMTP (the login)
//   GMAIL_APP_PASSWORD  a 16-char Google App Password (needs 2FA on the account)
// Optional env:
//   LEAD_FROM_EMAIL     "send mail as" address; falls back to GMAIL_USER. Note:
//                       Gmail only honours this if it's a VERIFIED alias on the
//                       account, otherwise it silently rewrites it to GMAIL_USER.
//   LEAD_TO_EMAIL       where leads land; falls back to GMAIL_USER.

let cached: Transporter | null = null;

function getTransport(): Transporter | null {
  const user = process.env.GMAIL_USER;
  const pass = process.env.GMAIL_APP_PASSWORD;
  if (!user || !pass) return null;
  if (cached) return cached;
  cached = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: { user, pass },
  });
  return cached;
}

export function isMailerConfigured(): boolean {
  return Boolean(process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD);
}

export interface Lead {
  name: string;
  email: string;
  intent: string;
  page?: string;
}

/**
 * Email a captured lead to the owner. Returns true if actually sent.
 * Never throws — a mail failure must not break the chat response.
 */
export async function sendLeadEmail(lead: Lead): Promise<boolean> {
  const transport = getTransport();
  if (!transport) {
    console.warn("[mailer] SMTP not configured — lead not emailed:", JSON.stringify(lead));
    return false;
  }

  const to = process.env.LEAD_TO_EMAIL || process.env.GMAIL_USER!;
  const from = process.env.LEAD_FROM_EMAIL || process.env.GMAIL_USER!;
  const safe = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

  try {
    await transport.sendMail({
      from: `"Hamd's AI twin" <${from}>`,
      to,
      replyTo: lead.email, // reply goes straight to the visitor
      subject: `New lead from the site: ${lead.name}`,
      text:
        `New lead captured by the chatbot\n\n` +
        `Name:   ${lead.name}\n` +
        `Email:  ${lead.email}\n` +
        (lead.page ? `Page:   ${lead.page}\n` : "") +
        `\nWhat they need:\n${lead.intent}\n`,
      html:
        `<h2 style="margin:0 0 12px">New lead from the site</h2>` +
        `<p style="margin:0 0 4px"><b>Name:</b> ${safe(lead.name)}</p>` +
        `<p style="margin:0 0 4px"><b>Email:</b> <a href="mailto:${safe(lead.email)}">${safe(lead.email)}</a></p>` +
        (lead.page ? `<p style="margin:0 0 4px"><b>Page:</b> ${safe(lead.page)}</p>` : "") +
        `<p style="margin:12px 0 4px"><b>What they need:</b></p>` +
        `<p style="margin:0;white-space:pre-wrap">${safe(lead.intent)}</p>`,
    });
    return true;
  } catch (err) {
    console.error("[mailer] failed to send lead email:", err);
    return false;
  }
}

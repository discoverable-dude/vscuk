"use server";

// Sends enquiries through Resend's REST API. Configure in Vercel (Project > Settings > Environment Variables):
//   RESEND_API_KEY      API key from resend.com (keep secret; never commit it)
//   CONTACT_TO_EMAIL    where enquiries are delivered, e.g. info@vscuk.org (comma separate for several)
//   CONTACT_FROM_EMAIL  a sender on a domain verified in Resend, e.g. "VSC UK website <website@vscuk.org>"
type Result = { ok: boolean; error?: string };

const hits = new Map<string, number[]>(); // best-effort per-instance limit; the honeypot and Resend's own limits are the backstop
const esc = (s: string) => s.replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]!));
const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export async function sendEnquiry(_: unknown, form: FormData): Promise<Result> {
  if (form.get("website")) return { ok: true }; // honeypot: bots fill the hidden field; drop silently

  const name = oneLine(String(form.get("name") ?? "")).slice(0, 120);
  const email = oneLine(String(form.get("email") ?? "")).slice(0, 200);
  const message = String(form.get("message") ?? "").trim();
  if (!name || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || message.length < 5) return { ok: false, error: "Please complete all fields with a valid email." };
  if (message.length > 5000) return { ok: false, error: "Message is too long." };

  const now = Date.now();
  const recent = (hits.get(email.toLowerCase()) ?? []).filter(t => now - t < 3600_000);
  if (recent.length >= 3) return { ok: false, error: "Too many enquiries. Please try later or email us." };

  const key = process.env.RESEND_API_KEY, to = process.env.CONTACT_TO_EMAIL, from = process.env.CONTACT_FROM_EMAIL;
  if (!key || !to || !from) {
    console.error("Contact form not configured: set RESEND_API_KEY, CONTACT_TO_EMAIL and CONTACT_FROM_EMAIL");
    return { ok: false, error: "Sorry, we can't send enquiries from this page right now. Please email or call us instead." };
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: to.split(",").map(s => s.trim()).filter(Boolean),
        reply_to: email,
        subject: `Website enquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
        html: `<p><strong>Name:</strong> ${esc(name)}<br><strong>Email:</strong> ${esc(email)}</p><p style="white-space:pre-wrap">${esc(message)}</p>`,
      }),
      signal: AbortSignal.timeout(10000),
    });
    if (!res.ok) {
      console.error("Resend rejected enquiry", res.status, (await res.text()).slice(0, 300));
      return { ok: false, error: "Sorry, something went wrong sending your enquiry. Please email or call us instead." };
    }
  } catch (err) {
    console.error("Resend request failed", err);
    return { ok: false, error: "Sorry, something went wrong sending your enquiry. Please email or call us instead." };
  }

  hits.set(email.toLowerCase(), [...recent, now]);
  return { ok: true };
}

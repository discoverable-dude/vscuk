"use server";
// TODO: send via email provider (Resend/Postmark) or write to Sanity. Currently validates only.
const hits = new Map<string, number[]>();
export async function sendEnquiry(_: unknown, form: FormData) {
  if (form.get("website")) return { ok: true }; // honeypot: silently drop bots
  const name = String(form.get("name") ?? "").trim();
  const email = String(form.get("email") ?? "").trim();
  const message = String(form.get("message") ?? "").trim();
  if (!name || !/^\S+@\S+\.\S+$/.test(email) || message.length < 5) return { ok: false, error: "Please complete all fields with a valid email." };
  if (message.length > 5000) return { ok: false, error: "Message is too long." };
  const now = Date.now();
  const recent = (hits.get(email) ?? []).filter(t => now - t < 3600_000);
  if (recent.length >= 3) return { ok: false, error: "Too many enquiries. Please try later or email us." };
  hits.set(email, [...recent, now]);
  return { ok: true };
}

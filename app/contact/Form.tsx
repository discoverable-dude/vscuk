"use client";
import { useFormState } from "react-dom";
import { sendEnquiry } from "./actions";
export default function Form() {
  const [state, action] = useFormState(sendEnquiry, null as null | { ok: boolean; error?: string });
  if (state?.ok) return <p role="status" className="note">Thank you. We will be in touch soon.</p>;
  return (
    <form action={action}>
      <label htmlFor="name">Name</label><input id="name" name="name" required autoComplete="name" />
      <label htmlFor="email">Email</label><input id="email" name="email" type="email" required autoComplete="email" />
      <label htmlFor="message">How can we help?</label><textarea id="message" name="message" rows={6} required />
      <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" />
      <p style={{ fontSize: ".9rem" }}>By sending this you agree to our <a href="/privacy">privacy notice</a>.</p>
      {state && !state.ok && <p role="alert" style={{ color: "#b00020", fontWeight: 600 }}>{state.error}</p>}
      <button className="btn blue" type="submit">Send enquiry</button>
    </form>
  );
}

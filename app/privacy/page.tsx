import type { Metadata } from "next";
import { SITE } from "@/lib/site";
export const metadata: Metadata = { title: "Privacy notice" };
export default function Privacy() {
  return (
    <section className="block"><div className="wrap prose">
      <h1>Privacy notice</h1>
      <p className="note">DRAFT. Must be reviewed by the charity before launch.</p>
      <p>When you use our contact form we collect your name, email address and message so we can reply. We do not sell your data. We keep enquiries only as long as needed to respond and for reasonable record keeping.</p>
      <p>You can ask to see, correct or delete your data by emailing <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. You can also complain to the Information Commissioner's Office (ico.org.uk).</p>
    </div></section>
  );
}

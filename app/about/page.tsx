import type { Metadata } from "next";
import { SITE, STEPS } from "@/lib/site";
export const metadata: Metadata = { title: "About VSC", description: `About ${SITE.fullName}: charity centres at lower rents since 2004.` };
export default function About() {
  return (
    <section className="page wrap"><div className="prose">
      <h1>About VSC</h1>
      <p className="note">Draft copy built from the homepage concept. VSC to confirm mission wording, trustees and governance details.</p>
      <p>{SITE.description}</p>
      <h2>How we work</h2>
      <p>Most charities can't commit to a long commercial lease. VSC can, and passes the saving on.</p>
      <ol style={{ display: "flex", flexDirection: "column", gap: 12 }}>{STEPS.map((s, i) => <li key={s.title}><strong>{i + 1}. {s.title}.</strong> {s.body}</li>)}</ol>
      <h2>Governance</h2>
      <p>{SITE.fullName} is a registered charity, no. {SITE.charityNumber}.</p>
    </div></section>
  );
}

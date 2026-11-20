import type { Metadata } from "next";
import Link from "next/link";
import { EC_SPACES } from "@/lib/site";

export const metadata: Metadata = {
  title: "Spaces at the Enterprise Centre",
  description: "Hot desks, permanent desks, office suites, meeting and training rooms, a podcast suite and a 200-seat event space at Life Campus, Dover.",
};

export default function Spaces() {
  return (
    <section className="page wrap">
      <p style={{ marginBottom: 16 }}><Link href="/enterprise-centre">The Enterprise Centre</Link></p>
      <h1>Spaces</h1>
      <p className="note" style={{ marginBottom: 32 }}>Draft descriptions from the project brief. VSC to confirm sizes, capacities and prices before launch.</p>
      <div className="ec-list">
        {EC_SPACES.map(s => (
          <article key={s.slug} id={s.slug} style={{ borderLeft: `6px solid ${s.accent}` }}>
            <h2>{s.title}</h2>
            <p>{s.body}</p>
            <p className="meta"><strong>Good for:</strong> {s.for}</p>
          </article>
        ))}
      </div>
      <div className="actions" style={{ marginTop: 40 }}>
        <Link className="btn blue" href="/contact">Register your interest</Link>
        <Link className="btn outline" href="/enterprise-centre/membership">How membership works</Link>
      </div>
    </section>
  );
}

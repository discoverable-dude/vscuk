import type { Metadata } from "next";
import Link from "next/link";
import { EC, EC_SPACES, EC_STEPS, SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Enterprise Centre at Life Campus",
  description: `Over 100 co-working desks, office suites, meeting rooms, a podcast suite and event space for charities at Life Campus, Whitfield, Dover. Opening ${EC.opening}.`,
};

export default function EnterpriseCentre() {
  const ld = { "@context": "https://schema.org", "@type": "Place", name: EC.name, address: EC.address, containedInPlace: { "@type": "Place", name: "Life Campus, Whitfield, Dover" }, maximumAttendeeCapacity: 200 };
  return (
    <>
      <section className="ec-hero wrap">
        <p className="kicker">Opening {EC.opening}</p>
        <h1>{EC.name}</h1>
        <p className="lead">Over 100 co-working desks, office suites, meeting and training rooms, a podcast suite and a media and event space, built for charities and not-for-profits.</p>
        <div className="actions">
          <Link className="btn blue" href="/contact">Register your interest</Link>
          <Link className="btn ghost" href="/enterprise-centre/membership">How membership works</Link>
        </div>
      </section>

      <section className="sec wrap">
        <div className="sec-head"><h2 className="t">Spaces for every kind of work</h2><Link className="more" href="/enterprise-centre/spaces">All spaces in detail</Link></div>
        <div className="ec-grid">
          {EC_SPACES.map(s => (
            <article className="ccard" key={s.slug} style={{ borderTop: `6px solid ${s.accent}` }}>
              <div className="in"><h3>{s.title}</h3><p>{s.body}</p></div>
            </article>
          ))}
        </div>
        <p className="note" style={{ marginTop: 24 }}>CGI renders of the centre will go here once supplied. VSC to confirm space names and descriptions.</p>
      </section>

      <section className="sec wrap how">
        <div className="lead"><h2 className="t">Join first, then book</h2><p>The centre is run for its members. Once you have joined you can see availability and book what you need.</p></div>
        <ol className="steps">{EC_STEPS.map((s, i) => <li key={s.title}><span className="n">{i + 1}</span><h3>{s.title}</h3><p>{s.body}</p></li>)}</ol>
      </section>

      <section className="lead-band wrap">
        <div className="l">
          <h2 className="t">Part of a six-acre charity campus</h2>
          <p>The Enterprise Centre joins the charities, preschool, church and community organisations already at Life Campus in Whitfield, just outside Dover.</p>
          <Link className="btn navy" href="/centres">See our other centres</Link>
        </div>
        <ul><li>{EC.address}</li><li>Opening {EC.opening}</li><li>Co-working, offices, rooms, studios and events</li></ul>
      </section>

      <section className="enq">
        <div><h2>Want to be among the first members?</h2><p>Tell us what you need and we will be in touch before opening. Or call {SITE.phone}.</p></div>
        <Link className="btn blue" href="/contact">Register your interest</Link>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />
    </>
  );
}

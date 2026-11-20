import Link from "next/link";
import { SITE, STATS, CURRENT_CENTRES, TIMELINE, STEPS, LEADERSHIP, NEWS } from "@/lib/site";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="copy">
          <h1>{SITE.tagline}</h1>
          <p>{SITE.description}</p>
          <div className="actions">
            <Link className="btn blue" href="/centres">Our charity centres</Link>
            <Link className="btn ghost" href="/leadership">Leadership and training</Link>
          </div>
        </div>
        <div className="pic">
          <img src="/images/willesden.jpg" alt="226 Church Road, the Willesden charity centre" />
          <span>226 Church Road, Willesden</span>
        </div>
      </section>

      <section className="stats wrap">
        {STATS.map(s => <div key={s.value}><b>{s.value}</b><span>{s.label}</span></div>)}
      </section>

      <section className="sec wrap">
        <div className="sec-head"><h2 className="t">Our charity centres</h2><Link className="more" href="/centres">All centres, past and present</Link></div>
        <div className="centres">
          {CURRENT_CENTRES.map(c => (
            <article className="ccard" key={c.name}>
              <img src={c.image} alt={c.alt} />
              <div className="in">
                <h3>{c.name}</h3><p>{c.body}</p>
                <div className="pills">{c.tenants.map(t => <span key={t}>{t}</span>)}</div>
                <Link href="/centres">{c.link}</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="feature">
        <div className="in">
          <p className="kicker">Opening April 2027</p>
          <h2>The Enterprise Centre at Life Campus</h2>
          <p className="b">Our newest charity centre: over 100 co-working desks, office suites, meeting and training rooms, a podcast suite and a media and event space, built for charities and not-for-profits.</p>
          <a className="btn navy" href={SITE.enterpriseCentreUrl}>Visit the Enterprise Centre site</a>
        </div>
        <div className="ph">[Enterprise Centre CGI]</div>
      </section>

      <section className="tl wrap">
        <div className="intro">
          <h2>Twenty-two years of charity centres</h2>
          <p>From 2004 to 2011, VSC housed charities in four London buildings at 50% of the market rent. The same model now runs in Willesden and Whitfield.</p>
        </div>
        <ol>
          {TIMELINE.map(t => (
            <li key={t.name}>
              <span className="when">{t.when}</span>
              {t.image ? <img src={t.image} alt={t.alt} /> : <div className="soon">Opening April</div>}
              <strong>{t.name}</strong><p>{t.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="sec wrap how">
        <div className="lead"><h2 className="t">We take the lease so charities don't have to</h2><p>Most charities can't commit to a long commercial lease. VSC can, and passes the saving on.</p></div>
        <ol className="steps">{STEPS.map((s, i) => <li key={s.title}><span className="n">{i + 1}</span><h3>{s.title}</h3><p>{s.body}</p></li>)}</ol>
      </section>

      <section className="lead-band wrap">
        <div className="l">
          <h2 className="t">Leadership and training for the voluntary sector</h2>
          <p>Coaching and training that works on people, process and principles together, so teams know where to focus and leaders build character that lasts.</p>
          <Link className="btn navy" href="/leadership">Explore leadership and training</Link>
        </div>
        <ul>{LEADERSHIP.map(l => <li key={l}>{l}</li>)}</ul>
      </section>

      <section className="sec wrap">
        <div className="sec-head"><h2 className="t">News from our centres</h2><Link className="more" href="/news">All news</Link></div>
        <div className="news">
          {NEWS.map(n => (
            <article key={n.title}>
              {n.image ? <img src={n.image} alt={n.alt} /> : <div className="ph">[Enterprise Centre build photo]</div>}
              <p className="meta">{n.place}. {n.date}</p><h3>{n.title}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="enq">
        <div><h2>Looking for office space for your charity?</h2><p>Talk to us Monday to Friday, 9am to 5pm, on {SITE.phone} or at {SITE.email}.</p></div>
        <Link className="btn blue" href="/contact">Enquire about space</Link>
      </section>
    </>
  );
}

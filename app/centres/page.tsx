import type { Metadata } from "next";
import Link from "next/link";
import { CURRENT_CENTRES, TIMELINE } from "@/lib/site";
export const metadata: Metadata = { title: "Charity centres", description: "VSC charity centres at Life Campus, Whitfield and Willesden, London, plus past centres." };
export default function Centres() {
  return (
    <section className="page wrap">
      <h1>Charity centres</h1>
      <div className="centres" style={{ marginBottom: 64 }}>
        {CURRENT_CENTRES.map(c => (
          <article className="ccard" key={c.name}><img src={c.image} alt={c.alt} />
            <div className="in"><h3>{c.name}</h3><p>{c.body}</p><div className="pills">{c.tenants.map(t => <span key={t}>{t}</span>)}</div></div></article>
        ))}
      </div>
      <h2 className="t" style={{ marginBottom: 24 }}>Past and upcoming centres</h2>
      <div className="news">
        {TIMELINE.map(t => (
          <article key={t.name}>
            {t.image ? <img src={t.image} alt={t.alt} /> : <div className="ph">Opening April 2027</div>}
            <p className="meta">{t.when}</p><h3>{t.name}</h3><p style={{ color: "var(--body)" }}>{t.body}</p>
            {!t.image && <Link href="/enterprise-centre">Explore the Enterprise Centre</Link>}
          </article>
        ))}
      </div>
    </section>
  );
}

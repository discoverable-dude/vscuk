import Link from "next/link";
import { SITE, CENTRES, SERVICES } from "@/lib/site";
const accents = ["#840043", "#40469c", "#0f7d3e", "#e71d25"];
export default function Home() {
  return (
    <>
      <section className="hero"><div className="wrap">
        <h1>{SITE.tagline}</h1>
        <p className="lead">{SITE.description}</p>
        <div className="actions">
          <Link className="btn" href="/centres">Find a centre</Link>
          <Link className="btn alt" href="/contact">Talk to us</Link>
        </div>
      </div></section>
      <section className="block band"><div className="wrap">
        <h2>What we offer</h2>
        <div className="grid">{SERVICES.map((s, i) => (
          <div className="card" key={s.title} style={{ ["--accent" as string]: accents[i % 4] }}>
            <h3>{s.title}</h3><p>{s.body}</p>
          </div>))}</div>
      </div></section>
      <section className="block"><div className="wrap">
        <h2>Our centres</h2>
        <div className="grid">{CENTRES.map(c => (
          <div className="card" key={c.slug}>
            <span className="tag">{c.status === "open" ? "Open" : "Opening soon"}</span>
            <h3>{c.name}</h3><p>{c.place}</p><p>{c.summary}</p>
            <Link href="/centres">Read more</Link>
          </div>))}</div>
      </div></section>
    </>
  );
}

import type { Metadata } from "next";
import { CENTRES } from "@/lib/site";
export const metadata: Metadata = { title: "Our centres", description: "VSC UK centres for charities and community groups." };
export default function Centres() {
  return (
    <section className="block"><div className="wrap">
      <h1>Our centres</h1>
      <p className="note">Only the Enterprise Centre is listed. The five existing centres need names, locations and copy.</p>
      <div className="grid">{CENTRES.map(c => (
        <article className="card" key={c.slug}>
          <span className="tag">{c.status === "open" ? "Open" : "Opening soon"}</span>
          <h2 style={{ fontSize: "1.4rem" }}>{c.name}</h2>
          <p>{c.place}</p><p>{c.summary}</p>
          {c.link && <a href={c.link}>Visit the centre site</a>}
        </article>))}</div>
    </div></section>
  );
}

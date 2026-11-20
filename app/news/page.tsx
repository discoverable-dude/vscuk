import type { Metadata } from "next";
import { NEWS } from "@/lib/site";
export const metadata: Metadata = { title: "News", description: "News from VSC charity centres." };
export default function News() {
  return (
    <section className="page wrap">
      <h1>News from our centres</h1>
      <div className="news">{NEWS.map(n => (
        <article key={n.title}>{n.image ? <img src={n.image} alt={n.alt} /> : <div className="ph">[Enterprise Centre build photo]</div>}
          <p className="meta">{n.place}. {n.date}</p><h3>{n.title}</h3></article>))}</div>
    </section>
  );
}

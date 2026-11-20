import type { Metadata } from "next";
import Link from "next/link";
import { SERVICES } from "@/lib/site";
export const metadata: Metadata = { title: "Work with us", description: "Desks, offices, rooms and community for charities." };
export default function Services() {
  return (
    <section className="block"><div className="wrap">
      <h1>Work with us</h1>
      <div className="grid">{SERVICES.map(s => <div className="card" key={s.title}><h2 style={{ fontSize: "1.3rem" }}>{s.title}</h2><p>{s.body}</p></div>)}</div>
      <div className="actions"><Link className="btn" href="/contact">Enquire now</Link></div>
    </div></section>
  );
}

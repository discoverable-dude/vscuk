import type { Metadata } from "next";
import Link from "next/link";
import { LEADERSHIP } from "@/lib/site";
export const metadata: Metadata = { title: "Leadership and training", description: "Coaching and training for voluntary sector leaders and teams." };
export default function Leadership() {
  return (
    <section className="page wrap"><div className="prose">
      <h1>Leadership and training for the voluntary sector</h1>
      <p className="note">Draft copy from the homepage concept. VSC to supply programme detail.</p>
      <p>Coaching and training that works on people, process and principles together, so teams know where to focus and leaders build character that lasts.</p>
      <ul style={{ display: "flex", flexDirection: "column", gap: 8, fontWeight: 600, color: "var(--ink)" }}>{LEADERSHIP.map(l => <li key={l}>{l}</li>)}</ul>
      <div><Link className="btn navy" href="/contact">Get in touch</Link></div>
    </div></section>
  );
}

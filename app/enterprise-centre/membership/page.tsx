import type { Metadata } from "next";
import Link from "next/link";
import { EC, EC_STEPS } from "@/lib/site";

export const metadata: Metadata = {
  title: "Membership at the Enterprise Centre",
  description: "How membership works at the Enterprise Centre: join first, then book desks, rooms and studios.",
};

export default function Membership() {
  return (
    <section className="page wrap"><div className="prose">
      <p><Link href="/enterprise-centre">The Enterprise Centre</Link></p>
      <h1>Membership</h1>
      <p className="note">Draft. Prices are from early conversations and VSC must confirm them. Online sign-up opens closer to launch.</p>
      <p>The Enterprise Centre is run as a members' centre. Join first, then see availability and book the desks, rooms and studios you need.</p>
      <div className="ec-price">
        <div><b>{EC.membership.monthly}</b><span>a month</span></div>
        <div><b>{EC.membership.annual}</b><span>a year</span></div>
      </div>
      <p>Membership for office suites is included in the suite contract, so suite tenants do not pay separately.</p>
      <h2>How it works</h2>
      <ol style={{ display: "flex", flexDirection: "column", gap: 12 }}>{EC_STEPS.map((s, i) => <li key={s.title}><strong>{i + 1}. {s.title}.</strong> {s.body}</li>)}</ol>
      <div className="actions"><Link className="btn blue" href="/contact">Register your interest</Link><Link className="btn outline" href="/enterprise-centre/spaces">See the spaces</Link></div>
    </div></section>
  );
}

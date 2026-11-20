import Link from "next/link";
import { SITE } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="ftr wrap">
      <div className="col">
        <img src="/images/vsc-logo.png" alt="VSC United Kingdom" width={150} height={50} />
        <p>{SITE.fullName}. {SITE.tagline}</p>
        <p className="small">Registered charity no. {SITE.charityNumber}</p>
      </div>
      <div className="col"><p className="h">Centres</p>
        <Link href="/centres">Life Campus, Whitfield</Link><Link href="/centres">Willesden, London</Link>
        <Link href="/enterprise-centre">The Enterprise Centre</Link><Link href="/centres">Previous centres</Link></div>
      <div className="col"><p className="h">VSC</p>
        <Link href="/about">About</Link><Link href="/leadership">Leadership and training</Link><Link href="/news">News</Link><a href="https://governanceministries.org">Governance Ministries</a><Link href="/privacy">Privacy</Link></div>
      <div className="col"><p className="h">Contact</p>
        <p>{SITE.address}</p>
        <a href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}>{SITE.phone}</a>
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a></div>
    </footer>
  );
}

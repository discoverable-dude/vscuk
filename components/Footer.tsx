import Link from "next/link";
import { SITE, NAV } from "@/lib/site";
export default function Footer() {
  return (
    <footer className="site">
      <div className="wrap cols">
        <div><strong>{SITE.name}</strong><p>Registered charity no. {SITE.charityNumber}</p></div>
        <div><strong>Contact</strong><p><a href={`mailto:${SITE.email}`}>{SITE.email}</a><br /><a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></p></div>
        <div><strong>Explore</strong><p>{NAV.map(n => <span key={n.href}><Link href={n.href}>{n.label}</Link><br /></span>)}<Link href="/privacy">Privacy</Link></p></div>
      </div>
    </footer>
  );
}

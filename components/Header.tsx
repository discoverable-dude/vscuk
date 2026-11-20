import Link from "next/link";
import { NAV, SITE } from "@/lib/site";
export default function Header() {
  return (
    <header className="site">
      <div className="wrap">
        <Link href="/" className="brand">{SITE.name}</Link>
        <nav aria-label="Main"><ul>{NAV.map(n => <li key={n.href}><Link href={n.href}>{n.label}</Link></li>)}</ul></nav>
      </div>
    </header>
  );
}

"use client";
import Link from "next/link";
import { useState } from "react";
import { NAV, SITE } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="hdr">
      <div className="wrap">
        <Link href="/" aria-label="VSC United Kingdom home">
          <img src="/images/vsc-logo.png" alt="VSC United Kingdom" width={150} height={50} />
        </Link>
        <button type="button" className="menu-btn" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="main-nav" onClick={() => setOpen(o => !o)}>
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
            {open ? <><line x1="5" y1="5" x2="19" y2="19" /><line x1="19" y1="5" x2="5" y2="19" /></> : <><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></>}
          </svg>
        </button>
        <nav id="main-nav" aria-label="Main" className={open ? "open" : ""}>
          {NAV.map(n => <Link key={n.href} href={n.href} onClick={() => setOpen(false)}>{n.label}</Link>)}
          <Link href="/contact" className="cta" onClick={() => setOpen(false)}>Enquire about space</Link>
        </nav>
      </div>
    </header>
  );
}

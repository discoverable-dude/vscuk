"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Progressive-enhancement scroll reveals. Content is visible by default. Only elements that are
// below the fold when the page loads get hidden, then revealed as they scroll into view.
// Nothing runs for people who prefer reduced motion, or in browsers without IntersectionObserver.
const TARGETS = [
  ".sec-head", ".centres > *", ".feature > *", ".tl .intro", ".tl ol", ".tl li", ".how .lead", ".steps li",
  ".lead-band > *", ".lead-band li", ".news article", ".enq", ".ftr > *", ".page .prose > *",
].join(",");

export default function Motion() {
  const path = usePathname();
  useEffect(() => {
    if (typeof IntersectionObserver === "undefined" || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const els = Array.from(document.querySelectorAll<HTMLElement>(TARGETS));
    const vh = window.innerHeight;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add("rv-in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -6% 0px" });
    els.forEach(el => {
      if (el.getBoundingClientRect().top < vh * 0.92) return; // already on screen: leave alone
      const sibs = el.parentElement ? Array.from(el.parentElement.children) : [];
      el.style.setProperty("--d", `${Math.min(sibs.indexOf(el), 6) * 70}ms`);
      el.classList.add("rv-hide");
      io.observe(el);
    });
    const safety = window.setTimeout(() => document.querySelectorAll(".rv-hide:not(.rv-in)").forEach(e => e.classList.add("rv-in")), 6000);
    return () => { io.disconnect(); window.clearTimeout(safety); };
  }, [path]);
  return null;
}

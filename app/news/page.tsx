import type { Metadata } from "next";
export const metadata: Metadata = { title: "News", description: "News and updates from VSC UK." };
export default function News() {
  return (
    <section className="block"><div className="wrap prose">
      <h1>News</h1>
      <p>Updates from our centres will appear here. PLACEHOLDER: connect to Sanity (or markdown) when a CMS decision is made.</p>
    </div></section>
  );
}

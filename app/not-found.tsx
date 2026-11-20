import Link from "next/link";
export default function NotFound() {
  return (
    <section className="page wrap"><div className="prose">
      <h1>We can't find that page</h1>
      <p>It may have moved. Try one of the links below.</p>
      <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
        <Link className="btn navy" href="/">Home</Link><Link className="btn outline" href="/centres">Charity centres</Link><Link className="btn outline" href="/contact">Enquire about space</Link>
      </div>
    </div></section>
  );
}

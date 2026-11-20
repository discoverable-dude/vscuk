import type { Metadata } from "next";
import { SITE } from "@/lib/site";
export const metadata: Metadata = { title: "About us", description: `About ${SITE.name}, a registered charity running centres for the third sector.` };
export default function About() {
  return (
    <section className="block"><div className="wrap prose">
      <h1>About {SITE.name}</h1>
      <p className="note">PLACEHOLDER copy. Replace with the charity's own story, mission and trustees once supplied.</p>
      <p>{SITE.description}</p>
      <p>We run centres that give charities, not-for-profits and community groups affordable, flexible space, and a community of peers to work alongside.</p>
      <h2>Our mission</h2><p>PLACEHOLDER: mission statement.</p>
      <h2>Governance</h2><p>Registered charity no. {SITE.charityNumber}.</p>
    </div></section>
  );
}

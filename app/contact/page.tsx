import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import Form from "./Form";
export const metadata: Metadata = { title: "Contact", description: "Get in touch with VSC UK." };
export default function Contact() {
  return (
    <section className="block"><div className="wrap prose">
      <h1>Contact us</h1>
      <p>Email <a href={`mailto:${SITE.email}`}>{SITE.email}</a> or call <a href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a>.</p>
      <Form />
    </div></section>
  );
}

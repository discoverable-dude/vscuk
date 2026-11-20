import type { Metadata } from "next";
import { SITE } from "@/lib/site";
import Form from "./Form";
export const metadata: Metadata = { title: "Enquire about space", description: "Enquire about office space for your charity." };
export default function Contact() {
  return (
    <section className="page wrap"><div className="prose">
      <h1>Looking for office space for your charity?</h1>
      <p>Talk to us Monday to Friday, 9am to 5pm, on <a href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`}>{SITE.phone}</a> or at <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Or send an enquiry below.</p>
      <p>{SITE.address}</p>
      <Form />
    </div></section>
  );
}

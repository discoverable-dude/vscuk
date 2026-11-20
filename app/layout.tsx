import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Motion from "@/components/Motion";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: `${SITE.name} | Charity centres, leadership and training`, template: `%s | ${SITE.name}` },
  description: SITE.description,
  alternates: { canonical: "./" },
  openGraph: { siteName: SITE.name, type: "website", locale: "en_GB" },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const org = {
    "@context": "https://schema.org", "@type": "NGO", name: SITE.fullName, alternateName: SITE.name, url: SITE.url,
    email: SITE.email, telephone: SITE.phone,
    address: { "@type": "PostalAddress", streetAddress: "226 Church Road", addressLocality: "Willesden, London", postalCode: "NW10 9NR", addressCountry: "GB" },
  };
  return (
    <html lang="en-GB">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <a className="skip" href="#main">Skip to content</a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
        <Motion />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(org) }} />
      </body>
    </html>
  );
}

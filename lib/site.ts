// CONTENT STATUS: everything marked PLACEHOLDER needs confirming with John Fleming (VSC UK)
// before launch. Facts below come from the Discoverable Notion records, not the live site.
export const SITE = {
  name: "VSC UK",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vscuk.org", // PLACEHOLDER: confirm domain
  tagline: "Centres where charities and communities grow together", // PLACEHOLDER
  description:
    "VSC UK is a registered charity that creates centres where third sector organisations, charities and community groups work side by side.", // PLACEHOLDER
  email: "john@vscuk.org", // from sales record; swap for a general inbox
  phone: "0796 9951962", // from sales record; confirm public number
  charityNumber: "PLACEHOLDER", // legally required on charity sites
};

export const NAV = [
  { href: "/about", label: "About" },
  { href: "/centres", label: "Our centres" },
  { href: "/services", label: "Work with us" },
  { href: "/news", label: "News" },
  { href: "/contact", label: "Contact" },
];

export type Centre = {
  slug: string; name: string; place: string; status: "open" | "opening-soon";
  summary: string; link?: string;
};

// Six centres in total per the sales record; only the sixth is known.
export const CENTRES: Centre[] = [
  {
    slug: "enterprise-centre",
    name: "The Enterprise Centre at Life Campus",
    place: "Mansion Gardens, Whitfield, Dover",
    status: "opening-soon",
    summary:
      "A 100+ desk co-working venue on a 6-acre campus, with hot desks, office suites, meeting and training rooms, a podcast suite and a 200-seat media and events space. Opening April 2027.",
    link: "https://enterprise-centre.vercel.app",
  },
  // PLACEHOLDER: add the five existing VSC UK centres once names and locations are supplied.
];

export const SERVICES = [
  { title: "Desks and offices", body: "Hot desks, permanent desks and office suites for charities and not-for-profits, from a single desk to a full suite." },
  { title: "Meeting and training rooms", body: "Bookable rooms for team days, trustee meetings and training." },
  { title: "Media and events", body: "A podcast suite and a 200-seat auditorium for recordings, launches and community events." },
  { title: "Community", body: "A neighbourhood of like-minded organisations sharing space, skills and ideas." },
];

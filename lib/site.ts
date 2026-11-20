// Copy and facts come from the approved homepage concept (Design canvas) and the Discoverable Notion records.
// Items still marked [PLACEHOLDER] need confirming with VSC UK before launch.
export const SITE = {
  name: "VSC UK",
  fullName: "Voluntary Sector Centres",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.vscuk.org",
  tagline: "Working with the charity sector to build a better world.",
  description:
    "Since 2004, VSC has helped charities become more effective, efficient and economical. We house them in shared charity centres at lower rents, and we train and coach the people who lead them.",
  email: "info@vscuk.org",
  phone: "+44 (0)20 8208 5693",
  address: "226 Church Road, Willesden, London NW10 9NR",
  charityNumber: "[number]", // PLACEHOLDER: legally required on charity sites
  enterpriseCentrePath: "/enterprise-centre",
};

export const NAV = [
  { href: "/centres", label: "Charity centres" },
  { href: "/enterprise-centre", label: "Enterprise Centre" },
  { href: "/leadership", label: "Leadership and training" },
  { href: "/news", label: "News" },
  { href: "/about", label: "About VSC" },
];

export const STATS = [
  { value: "2004", label: "Working with the charity sector since" },
  { value: "80", label: "Charities housed in our centres" },
  { value: "Up to 50%", label: "Below standard commercial rent per square foot" },
];

export const CURRENT_CENTRES = [
  {
    name: "Life Campus, Whitfield, Dover",
    image: "/images/life-campus.jpg",
    alt: "Site plan of Life Campus, Whitfield",
    body: "A six-acre site where VSC is one of the landlords, alongside Dover Port Authority, Mansion Garden Estates and Governance Ministries Charitable Trust.",
    tenants: ["Graceworks Ministries", "Kingdom Preschool", "Living Well Church", "Phoenix Community Care", "Burn Dover"],
    link: "About Life Campus",
  },
  {
    name: "Willesden, London",
    image: "/images/willesden-studio.jpg",
    alt: "Camera in the Willesden studios",
    body: "32,000 square feet over three floors, operated by VSC since 2013. A church and television studio facility with a 200-seat auditorium for live filming.",
    tenants: ["TBN UK", "TBN Europe", "Nejat TV", "Alhoreya"],
    link: "About Willesden",
  },
];

export const TIMELINE = [
  { when: "2004 to 2011", name: "Charles' House", image: "/images/charles-house.jpg", alt: "Charles' House, Kensington", body: "Kensington High Street. 35,000 sq ft, over 50 charities." },
  { when: "2004 to 2011", name: "Royal London House", image: "/images/royal-london-house.jpg", alt: "Royal London House, Finsbury Square", body: "Finsbury Square. 17,000 sq ft." },
  { when: "2004 to 2011", name: "The Merchant Centre", image: "/images/merchant-centre.jpg", alt: "The Merchant Centre, New Street Square", body: "1 New Street Square, EC4. 33,000 sq ft." },
  { when: "2004 to 2011", name: "Hillgate House", image: "/images/hillgate-house.jpg", alt: "Hillgate House, Hillgate Street", body: "Hillgate Street, W8. 28,500 sq ft." },
  { when: "2013", name: "Willesden", image: "/images/willesden.jpg", alt: "Willesden charity centre", body: "226 Church Road, NW10. 32,000 sq ft." },
  { when: "2016", name: "Life Campus", image: "/images/life-campus.jpg", alt: "Life Campus site plan", body: "Whitfield, Dover. A six-acre site." },
  { when: "2027", name: "The Enterprise Centre", image: "", alt: "", body: "Life Campus. Co-working and media space." },
];

export const STEPS = [
  { title: "We listen", body: "We work out what a charity actually needs from a building before we look for one." },
  { title: "We secure the building", body: "A minimum five-year lease without a right to terminate, or we buy the freehold." },
  { title: "You move in", body: "Office space with integrated services, alongside other charities, at a lower rent." },
];

export const LEADERSHIP = [
  "Strategic support for leadership teams",
  "Coaching",
  "Leadership development programmes",
  "Training programmes for teams",
  "Keynote speakers on leading teams",
];

export const NEWS = [
  { place: "Life Campus", date: "[Date]", title: "The Enterprise Centre opens at Life Campus in April 2027", image: "" , alt: "" }, // PLACEHOLDER date and photo
  { place: "Life Campus", date: "13 June 2016", title: "Life Campus, operated by the Voluntary Sector Centres charity", image: "/images/life-campus.jpg", alt: "Life Campus site plan" },
  { place: "Willesden", date: "17 January 2014", title: "VSC takes on the lease to operate the new studios in Willesden", image: "/images/willesden-studio.jpg", alt: "Studio camera at Willesden" },
];

// Enterprise Centre at Life Campus. Source: Discoverable Notion project record (Jul to Oct 2026).
export const EC = {
  name: "The Enterprise Centre at Life Campus",
  address: "Life Campus, Mansion Gardens, Whitfield, Dover",
  opening: "April 2027",
  membership: { monthly: "£25", annual: "£125" }, // PLACEHOLDER: from intro-call notes ("about £25 a month or £125 a year"); VSC to confirm
};

export const EC_SPACES = [
  { slug: "hot-desks", title: "Hot desks", accent: "#40469c", body: "Flexible desks on the ground floor, booked by the hour or the day, for people who need a good place to work without a commitment.", for: "Charity staff, trustees and volunteers who work between sites." },
  { slug: "permanent-desks", title: "Permanent desks", accent: "#0f7d3e", body: "Your own desk on the upper floors, kept for you every day, in a shared floor with other charities.", for: "Small teams and sole workers who want a settled base." },
  { slug: "office-suites", title: "Office suites", accent: "#840043", body: "Private suites on monthly or annual contracts, with membership of the centre included. Sized from a small team up to a full office.", for: "Charities that need their own front door and room to grow." },
  { slug: "meeting-rooms", title: "Meeting and training rooms", accent: "#e71d25", body: "Rooms you can book for trustee meetings, team days and training sessions, with the centre's facilities on hand.", for: "Anyone running a meeting, workshop or course." },
  { slug: "podcast-suite", title: "Podcast suite", accent: "#f15722", body: "A purpose-built suite for recording podcasts and audio, so charities can tell their story in their own voice.", for: "Charities building an audience through audio." },
  { slug: "media-space", title: "Media and event space", accent: "#8b8c39", body: "A 200-seat auditorium for events, launches, conferences and filming, next to the studios at Life Campus.", for: "Community groups, charities and media producers." },
];

export const EC_STEPS = [
  { title: "Join", body: "Become a member. The centre is for members, so you join first." },
  { title: "Book", body: "See what is free and book desks, rooms and studios online." },
  { title: "Work", body: "Arrive, plug in and get on with it, alongside other charities." },
];

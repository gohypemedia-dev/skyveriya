export interface ServiceItem {
  id: string; // "01", "02", etc.
  numeral: string; // "I", "II", etc.
  title: string; // Exact approved service title
  intro: string; // Exact approved introductory line
  description: string; // Exact approved description
  cloudType: number; // 1 to 9
}

export const servicesData: ServiceItem[] = [
  {
    id: "01",
    numeral: "I",
    title: "Management, Documentation and Legal Support",
    intro: "Organised, protected and legally sound foundations for your practice.",
    description:
      "Contracts and agreements, IP and copyright documentation, archiving and cataloguing, and licensing and compliance paperwork.",
    cloudType: 1,
  },
  {
    id: "02",
    numeral: "II",
    title: "Presentation, Representation and Operations",
    intro: "Your work—presented and managed with professionalism.",
    description:
      "Portfolio and proposal presentation, professional representation, exhibition and event operations, and administrative support.",
    cloudType: 2,
  },
  {
    id: "03",
    numeral: "III",
    title: "Marketing, Online and Offline",
    intro: "Visibility that reaches the right audience.",
    description:
      "Brand identity & positioning, website & social media presence, campaigns & content, and offline promotion & event marketing.",
    cloudType: 3,
  },
  {
    id: "04",
    numeral: "IV",
    title: "Business and Growth Strategy",
    intro: "Clear direction at every stage of your career.",
    description:
      "Business planning, revenue & pricing models, opportunity evaluation, and partnership & expansion strategy.",
    cloudType: 4,
  },
  {
    id: "05",
    numeral: "V",
    title: "PR and Client Relationship Management",
    intro: "Reputation and relationships built to last.",
    description:
      "Media relations & press outreach, brand storytelling, client & collector communication, and long-term relationship management.",
    cloudType: 5,
  },
  {
    id: "06",
    numeral: "VI",
    title: "Logistics, Freight and Customs",
    intro: "Your work, delivered safely across borders.",
    description:
      "Specialised art & equipment handling, freight & transport coordination, customs clearance & documentation, and supply chain management.",
    cloudType: 6,
  },
  {
    id: "07",
    numeral: "VII",
    title: "Wealth Management",
    intro: "Financial planning designed for creative incomes.",
    description:
      "Income & cash-flow planning, tax & investment guidance, asset & legacy planning, and financial structuring for artists and studios.",
    cloudType: 7,
  },
  {
    id: "08",
    numeral: "VIII",
    title: "Lifestyle Curation and Management",
    intro: "A curated professional life that supports your art practice.",
    description:
      "Professional travel & residency scheduling & planning, events, and selective networking opportunities.",
    cloudType: 8,
  },
  {
    id: "09",
    numeral: "IX",
    title: "Creative CSR Advisory",
    intro: "Purposeful impact through creative work.",
    description:
      "CSR strategy for creative professionals and organisations, art-led social initiatives, community and cultural partnerships, and impact planning and reporting.",
    cloudType: 9,
  },
];

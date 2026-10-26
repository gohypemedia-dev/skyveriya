export interface ServiceItem {
  id: string; // "01", "02", etc.
  numeral: string; // "I", "II", etc.
  shortLabel: string; // Exact short label from prompt
  fullTitle: string; // Full official title
  intro: string; // Introductory line
  summary: string; // Editorial narrative
  pillars: {
    title: string;
    description: string;
  }[];
  deliverables: string[];
  cloudType: number; // 1 to 9
}

export const servicesData: ServiceItem[] = [
  {
    id: "01",
    numeral: "I",
    shortLabel: "01 Management & Legal",
    fullTitle: "Strategic Management, Contractual Architecture & Intellectual Property Protection",
    intro: "Providing visionary creators with impenetrable legal frameworks, autonomous career representation, and intellectual property guardianship.",
    summary:
      "Creative sovereignty requires a fortress of legal precision. We structure contracts, negotiate master agreements, and establish multi-jurisdictional copyright defense so creators retain uncompromised ownership of their output, likeness, and intellectual capital.",
    pillars: [
      {
        title: "Contract Structuring & Negotiation",
        description:
          "End-to-end drafting, vetting, and aggressive advocacy for global publishing, licensing, representation, and commercial contracts.",
      },
      {
        title: "IP Architecture & Trademark Portfolios",
        description:
          "Worldwide trademark registration, copyright deposits, design patent filings, and counterfeit monitoring across digital and physical domains.",
      },
      {
        title: "Autonomous Career Representation",
        description:
          "Executive talent stewardship, institutional diplomacy, and agency oversight without agency conflicts of interest.",
      },
      {
        title: "Dispute Mitigation & Legacy Defense",
        description:
          "Discreet dispute resolution, breach of contract enforcement, and narrative shielding in complex legal disputes.",
      },
    ],
    deliverables: [
      "Master Services Agreements (MSA) & Bespoke Contracts",
      "Global Intellectual Property Strategy Document",
      "Worldwide Trademark & Copyright Filings",
      "Autonomous Representation Charter",
    ],
    cloudType: 1,
  },
  {
    id: "02",
    numeral: "II",
    shortLabel: "02 Presentation & Operations",
    fullTitle: "Curation, Exhibition Architecture & Operational Infrastructure",
    intro: "Elevating creative presentations with museum-grade spatial design and flawless studio operational management.",
    summary:
      "A masterpiece demands an environment worthy of its gravitas. We engineer spatial scenography, bespoke plinths, and museum lighting for physical retrospectives, while standardizing studio logistics and private digital archives for global collectors.",
    pillars: [
      {
        title: "Exhibition Scenography & Architecture",
        description:
          "Spatial flow planning, lighting choreography, bespoke architectural fabrication, and exhibition design for international debuts.",
      },
      {
        title: "Studio Operational Systems",
        description:
          "Lean workflow orchestration, vendor management, material supply procurement, and studio protocol architecture.",
      },
      {
        title: "Digital Viewing Suites & Collector Portals",
        description:
          "Bespoke password-protected online viewing rooms (OVR) with interactive high-resolution media for institutional patrons.",
      },
      {
        title: "Archival Management & Catalogue Raisonné",
        description:
          "Rigorous provenance documentation, museum-grade conservation standards, and physical-to-digital catalogue raisonné development.",
      },
    ],
    deliverables: [
      "Exhibition Scenography & Spatial Blueprint",
      "Complete Studio Operational Manual",
      "Private VIP Digital Viewing Room",
      "Archival Catalogue Raisonné Ledger",
    ],
    cloudType: 2,
  },
  {
    id: "03",
    numeral: "III",
    shortLabel: "03 Marketing",
    fullTitle: "Editorial Brand Strategy, Cultural Positioning & Narrative Campaigning",
    intro: "Sculpting rare, culturally resonant campaigns that position creators as enduring cultural institutions.",
    summary:
      "We reject transient viral gimmicks in favor of enduring prestige. Through high-concept editorial monographs, documentary-grade film, and curated drops, we cultivate high-net-worth patronage and institutional reverence.",
    pillars: [
      {
        title: "Brand Narrative Architecture",
        description:
          "Distilling the creator’s singular aesthetic into comprehensive brand books, editorial guidelines, and monograph treatises.",
      },
      {
        title: "Curated Edition Drops & Releases",
        description:
          "Choreographing limited edition launches, bespoke time-limited unveilings, and private collector pre-sale campaigns.",
      },
      {
        title: "Cinematic & Editorial Production",
        description:
          "Directing museum-grade monographs, behind-the-scenes film documentaries, and bespoke studio portraiture.",
      },
      {
        title: "High-Net-Worth Patron Cultivation",
        description:
          "Targeted engagement frameworks reaching family office art advisors, private collectors, and international cultural foundations.",
      },
    ],
    deliverables: [
      "Master Brand Identity & Monograph Dossier",
      "Edition Launch Strategy & Timeline Roadmap",
      "Documentary Film & Editorial Imagery Suite",
      "Patron Outreach & Acquisition Charter",
    ],
    cloudType: 3,
  },
  {
    id: "04",
    numeral: "IV",
    shortLabel: "04 Business & Growth",
    fullTitle: "Commercial Expansion, Venture Strategy & Enterprise Incubation",
    intro: "Transforming singular artistic genius into diversified, sustainable commercial enterprises without diluting creative purity.",
    summary:
      "Creative brilliance must be fortified with commercial independence. We structure multi-tiered revenue engines, brand ventures, and strategic luxury partnerships that ensure financial abundance while preserving creative integrity.",
    pillars: [
      {
        title: "Revenue Diversification & Secondary Streams",
        description:
          "Establishing recurring royalties, limited product lines, licensing models, and educational academies.",
      },
      {
        title: "Prestige Brand Alliances",
        description:
          "Curating cross-disciplinary collaborations with historic heritage luxury houses, haute couture ateliers, and architectural masters.",
      },
      {
        title: "Creative Venture Incubation",
        description:
          "Capital allocation, pitch architecture, angel financing negotiation, and equity retention strategies for creator-led startups.",
      },
      {
        title: "International Market Entry",
        description:
          "Orchestrating strategic expansion across global creative capitals including Paris, Tokyo, London, New York, and Dubai.",
      },
    ],
    deliverables: [
      "5-Year Commercial Enterprise Strategy",
      "Prestige Collaboration Term Sheets",
      "Creator Equity & Venture Cap Tables",
      "Global Market Penetration Blueprint",
    ],
    cloudType: 4,
  },
  {
    id: "05",
    numeral: "V",
    shortLabel: "05 PR & Relationships",
    fullTitle: "Global Press Relations, Cultural Diplomacy & VIP Patron Management",
    intro: "Fostering deep, symbiotic bonds with international media editors, museum trustees, and cultural patrons.",
    summary:
      "Prestige is built on authentic cultural relationships. We curate discreet relationships with leading editors at premier publications, manage institutional alliances with world museums, and host private salons for the world's most discerning collectors.",
    pillars: [
      {
        title: "Premier Global Media Placements",
        description:
          "Exclusive cover features and profiles across world-leading titles such as Architectural Digest, Vogue, Frieze, and The New York Times.",
      },
      {
        title: "Private Collector Salons & Dinners",
        description:
          "Intimate, invitation-only salon gatherings uniting creators directly with museum trustees, gallery owners, and top patrons.",
      },
      {
        title: "Institutional Diplomacy",
        description:
          "Fostering acquisitions, grants, and biennial invitations through direct diplomacy with national cultural ministries and art foundations.",
      },
      {
        title: "Discreet Narrative Shielding",
        description:
          "White-glove crisis response, narrative alignment, and proactive reputation guardianship in sensitive cultural contexts.",
      },
    ],
    deliverables: [
      "Targeted Press Placement Portfolio",
      "VIP Patron & Collector Dossier",
      "Institutional Exhibition Invitation Strategy",
      "Discreet Narrative Protection Plan",
    ],
    cloudType: 5,
  },
  {
    id: "06",
    numeral: "VI",
    shortLabel: "06 Logistics & Customs",
    fullTitle: "Global Fine-Art Transport, Climate-Controlled Warehousing & Customs Clearance",
    intro: "Mastering the international transit and vault preservation of irreplaceable creative works with forensic white-glove precision.",
    summary:
      "When works of art travel the globe, margin for error is zero. We oversee museum-specification timber crating, ATA Carnet international filings, armed escort transit, and zero-fluctuation climate-controlled storage facilities.",
    pillars: [
      {
        title: "White-Glove International Freight",
        description:
          "Air, maritime, and overland transport with temperature regulation, vibration dampening, and bonded courier accompaniment.",
      },
      {
        title: "Customs, Tariffs & ATA Carnets",
        description:
          "Expedited customs clearance, temporary export bonds, cultural heritage documentation, and duty-exempt exhibition routing.",
      },
      {
        title: "Museum-Standard Conservation Crating",
        description:
          "Engineered wooden crating, internal archival foam cavities, shock sensors, and environmental monitoring devices.",
      },
      {
        title: "Bonded Climate Vault Storage",
        description:
          "Secure freeport and private vault storage with 24/7 biometric armed monitoring, 21°C/50% RH environmental stability.",
      },
    ],
    deliverables: [
      "International Transit Manifest & ATA Carnets",
      "Detailed Pre/Post Transit Condition Reports",
      "Custom Crate Engineering Specifications",
      "Comprehensive Marine & Transit Insurance Binders",
    ],
    cloudType: 6,
  },
  {
    id: "07",
    numeral: "VII",
    shortLabel: "07 Wealth Management",
    fullTitle: "Family Office Advisory, Creative Asset Valuation & Estate Succession",
    intro: "Structuring generational wealth security, creative asset valuation, and tax-efficient legacy preservation.",
    summary:
      "Artistic output constitutes a rare financial asset class. We collaborate with private family offices to conduct actuarial art valuations, establish copyright trusts, and design generational succession plans that safeguard estates for decades to come.",
    pillars: [
      {
        title: "Creative Asset Appraisal & Valuation",
        description:
          "Actuarial valuation of artist inventories, physical masterworks, intellectual copyrights, and secondary market royalties.",
      },
      {
        title: "Generational Estate & Succession Planning",
        description:
          "Creation of private testamentary trusts, artist foundations, and governance charters to protect collections past lifetime.",
      },
      {
        title: "Fiscal Optimization & Cross-Border Advisory",
        description:
          "Structuring international royalties, artist tax relief, philanthropic deductions, and domicile optimization.",
      },
      {
        title: "Private Family Office Architecture",
        description:
          "Consolidating creator liquid capital, physical assets, real estate, and art holdings into unified institutional governance.",
      },
    ],
    deliverables: [
      "Certified Creative Asset Valuation Report",
      "Artist Estate Succession & Trust Charter",
      "Cross-Border Royalty Structuring Blueprint",
      "Philanthropic Foundation Bylaws",
    ],
    cloudType: 7,
  },
  {
    id: "08",
    numeral: "VIII",
    shortLabel: "08 Lifestyle Curation",
    fullTitle: "Private Sanctuary Design, Global Concierge & Bespoke Travel Itineraries",
    intro: "Orchestrating private studio sanctuaries, tranquil creative retreats, and discreet international lifestyle travel.",
    summary:
      "A transcendent mind requires an uncompromised environment. We design private studio sanctuaries with optimized acoustic and natural lighting dynamics, secure secluded international creative residencies, and orchestrate private transit.",
    pillars: [
      {
        title: "Creative Residency & Sanctuary Sourcing",
        description:
          "Securing secluded estates, private islands, and modernist villas worldwide designed for intense creative sprints.",
      },
      {
        title: "Studio Architectural & Lighting Curation",
        description:
          "Interior architecture optimization, acoustic treatments, circadian lighting systems, and custom studio furnishings.",
      },
      {
        title: "Private Aviation & Discreet Transit",
        description:
          "Seamless private air chartering, VIP tarmac transfers, and armored security details for high-profile creators.",
      },
      {
        title: "Holistic Wellness & Private Hospitality",
        description:
          "Private nutritionists, private culinary masters, bodywork specialists, and tailored lifestyle management.",
      },
    ],
    deliverables: [
      "Global Private Sanctuary Dossier",
      "Studio Architectural & Ergonomics Specification",
      "Private Air & Ground Travel Protocols",
      "Personalized Creative Residency Itinerary",
    ],
    cloudType: 8,
  },
  {
    id: "09",
    numeral: "IX",
    shortLabel: "09 Creative CSR",
    fullTitle: "Cultural Philanthropy, Public Art Endowments & Educational Residencies",
    intro: "Harnessing creative influence to build social legacy, public cultural endowments, and mentorship for future generations.",
    summary:
      "True greatness gives back to the cosmos. We assist creators in establishing non-profit cultural foundations, funding emerging artist fellowships, commissioning civic public monuments, and implementing circular, eco-conscious studio practices.",
    pillars: [
      {
        title: "Philanthropic Foundation Formation",
        description:
          "Founding tax-exempt 501(c)(3) or charitable trust entities dedicated to art education and cultural preservation.",
      },
      {
        title: "Civic Public Art Endowments",
        description:
          "Negotiating monumental public art commissions with municipal governments, public parks, and cultural centers.",
      },
      {
        title: "Emerging Creator Fellowships & Mentorship",
        description:
          "Creating fully endowed studio fellowships, grants, and residency stipends for promising underrepresented talent.",
      },
      {
        title: "Eco-Conscious Studio Practices",
        description:
          "Auditing studio emissions, transitioning to non-toxic pigments and sustainable materials, and carbon-offsetting global tours.",
      },
    ],
    deliverables: [
      "Philanthropic Trust Incorporation Papers",
      "Public Art Installation Impact Studies",
      "Fellowship & Grant Governance Framework",
      "Sustainable Studio Environmental Certification",
    ],
    cloudType: 9,
  },
];

import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SkyveriyaEmblem } from "@/components/Wordmark";
import { CloudScroll, CloudWisp, CelestialStar } from "@/components/OrnamentalCloud";

export const metadata: Metadata = {
  title: "About — SKYVERIYA | Nine skies entrusted. Built for artists.",
  description:
    "The philosophy, origins, and foundational beliefs of SKYVERIYA. Nine skies entrusted. Built for artists.",
};

export default function AboutPage() {
  const beliefs = [
    {
      numeral: "01",
      roman: "I",
      title: "Creative Freedom Requires Structural Armor",
      statement:
        "True artistic independence is not the absence of boundaries; it is the presence of an impenetrable legal, financial, and operational fortress. When an artist's intellectual property and rights are exposed, creative compromise is inevitable. We forge the armor so your vision remains entirely uncompromised.",
    },
    {
      numeral: "02",
      roman: "II",
      title: "Craft Over Speed",
      statement:
        "The contemporary creative landscape is obsessed with ephemeral novelty and relentless velocity. We champion deliberate slowness, archival preservation, and generation-spanning permanence. A cultural work intended to endure for centuries demands stewardship engineered for centuries.",
    },
    {
      numeral: "03",
      roman: "III",
      title: "True Patronage is Symbiotic",
      statement:
        "The relationship between visionary creators, custodians, and patrons is a sacred cultural covenant. We do not commodify creative output; we cultivate an ecosystem where genius flourishes, elevating creators from transient producers into indelible cultural institutions.",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col bg-[#BC4639] text-[#F3E0DC]">
      {/* Editorial Header */}
      <Header />

      {/* ==============================================================
          HERO BANNER: NINE SKIES ENTRUSTED. BUILT FOR ARTISTS.
         ============================================================== */}
      <section className="relative w-full py-20 sm:py-28 lg:py-36 px-4 sm:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-[#BC4639] via-[#A83A2E] to-[#5C2018] select-none">
        <div className="absolute inset-0 editorial-grain opacity-30 pointer-events-none" />

        {/* Ambient Ornamental Clouds */}
        <div className="absolute top-8 -left-12 sm:left-6 opacity-40 pointer-events-none animate-cloud-slow">
          <CloudScroll className="w-56 h-36 sm:w-72 sm:h-44" opacity={0.65} />
        </div>
        <div className="absolute top-12 -right-12 sm:right-8 opacity-35 pointer-events-none animate-cloud-medium">
          <CloudWisp className="w-64 h-32 sm:w-80 sm:h-40" opacity={0.6} />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
          <div className="inline-flex items-center gap-3 sm:gap-4 mb-6">
            <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-r from-transparent to-[#F3E0DC]/40" />
            <span className="font-display text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#D4A59A] font-medium">
              Atelier Philosophy & Genesis
            </span>
            <span className="w-8 sm:w-16 h-[1px] bg-gradient-to-l from-transparent to-[#F3E0DC]/40" />
          </div>

          <h1 className="font-display font-light text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.14em] sm:tracking-[0.18em] uppercase text-[#F3E0DC] leading-none mb-4 sm:mb-6">
            About SKYVERIYA
          </h1>

          <p className="font-editorial italic text-xl sm:text-3xl md:text-4xl lg:text-5xl text-[#F3E0DC] font-normal leading-tight max-w-3xl mb-6 sm:mb-8">
            “Nine skies entrusted. Built for artists.”
          </p>

          <div className="w-20 sm:w-24 h-[1px] bg-gradient-to-r from-transparent via-[#F3E0DC]/50 to-transparent mb-6 sm:mb-8" />

          <p className="font-editorial text-lg sm:text-xl text-[#F3E0DC]/85 max-w-2xl leading-relaxed">
            A bespoke atelier founded on a singular conviction: creators must be liberated from the mundane friction of administration to build indelible cultural legacies.
          </p>
        </div>
      </section>

      {/* ==============================================================
          PALE IVORY READING AREA: WHY 'NINE SKIES' & NARRATIVE MONOGRAPH
         ============================================================== */}
      <section className="relative w-full py-24 sm:py-32 lg:py-40 px-4 sm:px-8 lg:px-16 bg-[#F3E0DC] text-[#5C2018] overflow-hidden select-none">
        <div className="absolute inset-0 editorial-grain opacity-25 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto space-y-20 sm:space-y-28">
          {/* Chapter 01: Why 'Nine Skies' */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start border-b border-[#BC4639]/25 pb-16 sm:pb-24">
            <div className="lg:col-span-5">
              <span className="font-display text-xs uppercase tracking-[0.3em] text-[#BC4639] block mb-2 font-medium">
                Cosmology & Heritage
              </span>
              <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.16em] text-[#5C2018] leading-tight">
                Why ‘nine skies’
              </h2>
              <div className="mt-6 flex items-center gap-3">
                <SkyveriyaEmblem className="w-10 h-10 text-[#5C2018]" light={false} />
                <span className="font-display text-[10px] tracking-[0.25em] uppercase text-[#BC4639]">
                  Celestial Sovereign Motif
                </span>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6 font-editorial text-lg sm:text-xl text-[#5C2018]/85 leading-relaxed">
              <p>
                In classical cosmology and ancient architectural treatises, the heavens were not conceived as a single void, but as <strong className="font-medium text-[#5C2018]">nine concentric celestial spheres</strong>—each governing a higher tier of harmony, geometry, and creative ether.
              </p>
              <p>
                The name <strong className="font-medium text-[#5C2018]">SKYVERIYA</strong> marries the boundless realm of the heavens (<em>Sky</em>) with the sacred root of truth and singular vision (<em>Veriya</em>). We recognize that every profound creator carries a private celestial kingdom within their mind.
              </p>
              <p>
                Yet to inhabit that celestial kingdom without crashing into the harsh gravity of worldly affairs requires nine unshakeable terrestrial disciplines: legal sovereignty, spatial exhibition architecture, cultural positioning, venture incubation, patron diplomacy, fine-art logistics, multi-generational wealth preservation, private lifestyle curation, and public philanthropic legacy.
              </p>
              <p className="font-editorial italic text-xl sm:text-2xl text-[#BC4639] pt-2 border-l-2 border-[#BC4639] pl-6">
                When nine skies are entrusted to our stewardship, the creator is finally liberated to ascend.
              </p>
            </div>
          </div>

          {/* Chapter 02: Complete Supplied About Monograph */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
            <div className="lg:col-span-5">
              <span className="font-display text-xs uppercase tracking-[0.3em] text-[#BC4639] block mb-2 font-medium">
                The Atelier Thesis
              </span>
              <h2 className="font-display font-light text-3xl sm:text-4xl lg:text-5xl uppercase tracking-[0.16em] text-[#5C2018] leading-tight">
                Built for artists.
              </h2>
              <p className="font-editorial italic text-base sm:text-lg text-[#BC4639] mt-3">
                A private sanctuary standing between the artist and worldly friction.
              </p>
            </div>

            <div className="lg:col-span-7 space-y-6 font-editorial text-lg sm:text-xl text-[#5C2018]/85 leading-relaxed">
              <p>
                Visionary artists and creators are routinely asked to perform an impossible dual role: to remain intensely sensitive, vulnerable, and attuned to the subtle muse of creation, while concurrently acting as fierce negotiators, forensic legal analysts, logistics coordinators, and commercial strategists.
              </p>
              <p>
                When an artist is forced to spend half their waking energy managing agency politics, reviewing complex foreign exhibition riders, or chasing royalty statements, the creative reservoir is depleted. The world gains an administrator, but loses a masterwork.
              </p>
              <p>
                <strong className="font-medium text-[#5C2018]">SKYVERIYA was founded to eradicate this compromise.</strong> Headquartered in Mumbai with private salon representation across Paris, London, and New York, we operate not as an aggressive agency, but as a bespoke creative atelier. We surround our creators with an impenetrable circle of trust, precision, and institutional mastery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ==============================================================
          THE THREE "WHAT WE BELIEVE" STATEMENTS
         ============================================================== */}
      <section className="relative w-full py-28 sm:py-36 lg:py-44 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#5C2018] via-[#4A1913] to-[#3D130E] text-[#F3E0DC] overflow-hidden select-none border-t border-[#F3E0DC]/15">
        <div className="absolute inset-0 editorial-grain opacity-20 pointer-events-none" />

        <div className="relative z-10 max-w-5xl mx-auto">
          {/* Header */}
          <div className="max-w-2xl mb-20 sm:mb-28">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-8 sm:w-12 h-[1px] bg-[#BC4639]" />
              <span className="font-display text-[10px] sm:text-xs uppercase tracking-[0.35em] text-[#D4A59A] font-semibold">
                Foundational Principles
              </span>
            </div>

            <h2 className="font-display font-light text-4xl sm:text-6xl uppercase tracking-[0.16em] text-[#F3E0DC] mb-4">
              What We Believe
            </h2>

            <p className="font-editorial italic text-xl sm:text-2xl text-[#F3E0DC]/80">
              Three immutable tenets that guide every representation, contract, and commission we undertake.
            </p>
          </div>

          {/* Three Beliefs Layout */}
          <div className="flex flex-col space-y-16 sm:space-y-20">
            {beliefs.map((b, idx) => (
              <div
                key={idx}
                className="pt-10 border-t border-[#F3E0DC]/20 flex flex-col md:flex-row items-start justify-between gap-6 md:gap-12 group"
              >
                <div className="w-full md:w-4/12 flex items-baseline gap-4">
                  <span className="font-display text-4xl sm:text-5xl font-light text-[#BC4639]">
                    {b.numeral}
                  </span>
                  <div>
                    <span className="font-display text-[10px] tracking-[0.3em] uppercase text-[#D4A59A] block mb-1">
                      Belief {b.roman}
                    </span>
                    <h3 className="font-display text-xl sm:text-2xl uppercase tracking-[0.18em] text-[#F3E0DC] leading-snug">
                      {b.title}
                    </h3>
                  </div>
                </div>

                <div className="w-full md:w-8/12">
                  <p className="font-editorial text-lg sm:text-xl text-[#F3E0DC]/85 leading-relaxed font-normal">
                    {b.statement}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Transition CTA */}
          <div className="mt-24 pt-12 border-t border-[#F3E0DC]/20 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <span className="font-display text-xs uppercase tracking-[0.25em] text-[#D4A59A] block mb-1">
                Explore the Pantheon
              </span>
              <p className="font-editorial italic text-base text-[#F3E0DC]/80">
                Discover how our nine clouds manifest these beliefs into tangible practice.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/services"
                className="px-8 py-3.5 rounded-full bg-[#F3E0DC] text-[#5C2018] font-display text-xs uppercase tracking-[0.2em] font-semibold hover:bg-[#FAF4F2] transition-all"
              >
                The Nine Disciplines
              </Link>
              <Link
                href="/contact"
                className="px-8 py-3.5 rounded-full border border-[#F3E0DC]/40 text-[#F3E0DC] font-display text-xs uppercase tracking-[0.2em] hover:bg-[#F3E0DC]/10 transition-all"
              >
                Inquire
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Refined Footer */}
      <Footer />
    </main>
  );
}

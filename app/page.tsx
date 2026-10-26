import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NineCloudsSection from "@/components/NineCloudsSection";
import HowWeWork from "@/components/HowWeWork";
import PromiseSection from "@/components/PromiseSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#BC4639] text-[#F3E0DC]">
      {/* 01. Editorial Responsive Navigation Header */}
      <Header />

      {/* 02. Terracotta Hero with Pale Ivory Typography & Ornamental Clouds */}
      <Hero />

      {/* 03. The Signature Nine-Cloud Services Section */}
      <NineCloudsSection />

      {/* 04. “How we work” with Selectively, Rigorously, and In step with you (Pale Ivory Reading Area) */}
      <HowWeWork />

      {/* 05. The Manifesto: “Our promise is in our tagline: nine skies entrusted.” */}
      <PromiseSection />

      {/* 06. Final Contact Invitation: “Every engagement begins with a conversation.” */}
      <ContactSection />

      {/* 07. Refined Footer with Navigation and Confirmed Contact Details */}
      <Footer />
    </main>
  );
}




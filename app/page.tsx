import Hero from "@/components/Hero";
import NineCloudsSection from "@/components/NineCloudsSection";
import HowWeWork from "@/components/HowWeWork";
import PromiseSection from "@/components/PromiseSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#BC4639] text-[#F3E0DC]">
      <Hero />
      <NineCloudsSection />
      <HowWeWork />
      <PromiseSection />
      <Footer />
    </main>
  );
}

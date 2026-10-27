import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NineCloudsSection from "@/components/NineCloudsSection";
import HowWeWork from "@/components/HowWeWork";
import PromiseSection from "@/components/PromiseSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F3E0DC] text-[#5C2018]">
      <Header />
      <Hero />
      <NineCloudsSection />
      <HowWeWork />
      <PromiseSection />
      <Footer />
    </main>
  );
}


import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { LiveStats } from "@/components/sections/LiveStats";
import { Pricing } from "@/components/sections/Pricing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#0A0B13]">
      <Navbar />
      <Hero />
      <Features />
      <LiveStats />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;

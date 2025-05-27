
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { LiveStats } from "@/components/sections/LiveStats";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { TrustBar } from "@/components/sections/TrustBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <LiveStats />
      <Testimonials />
      <Pricing />
      <TrustBar />
      <Footer />
    </div>
  );
};

export default Index;

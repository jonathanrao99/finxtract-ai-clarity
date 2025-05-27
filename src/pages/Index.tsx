
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { TrustedBy } from "@/components/sections/TrustedBy";
import { Testimonials } from "@/components/sections/Testimonials";
import { Pricing } from "@/components/sections/Pricing";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Features />
      <TrustedBy />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;

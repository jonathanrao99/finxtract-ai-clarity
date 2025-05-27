
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ["Home", "Features", "Pricing"];

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0B13]/80 backdrop-blur-md border-b border-[#00E5FF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold font-orbitron text-[#F5F5F5]">
              Fin<span className="text-[#00E5FF] neon-text">X</span>tract
            </h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#B0B0B0] hover:text-[#00E5FF] px-3 py-2 text-sm font-medium transition-colors hover:neon-glow"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center">
            <Button className="bg-[#7FFF00] hover:bg-[#7FFF00]/80 text-[#0A0B13] font-semibold hover:cyber-lime-glow transition-all duration-300 transform hover:scale-105">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#B0B0B0] hover:text-[#00E5FF]"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-[#00E5FF]/10">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-[#B0B0B0] hover:text-[#00E5FF] block px-3 py-2 text-sm font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <div className="pt-4">
                <Button className="w-full bg-[#7FFF00] hover:bg-[#7FFF00]/80 text-[#0A0B13] font-semibold">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

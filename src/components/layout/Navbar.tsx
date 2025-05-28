'use client';

import { useState } from "react";
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "Features", href: "/#features" },
    { name: "Pricing", href: "/billing" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#111221] text-white border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-white">FinXtract</h1>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login">
              <Button variant="ghost" className="text-gray-300 hover:text-white">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-[#84CC16] hover:bg-[#65A30D] text-black font-medium">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-800">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="text-gray-300 hover:text-white block px-3 py-2 text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 space-y-2">
                <Link href="/login">
                  <Button variant="ghost" className="w-full text-gray-300 hover:text-white">
                    Login
                  </Button>
                </Link>
                <Link href="/signup">
                  <Button className="w-full bg-[#84CC16] hover:bg-[#65A30D] text-black font-medium">
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

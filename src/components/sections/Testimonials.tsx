'use client';

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

export const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      quote: "FinXtract has completely transformed how I handle my business expenses. What used to take hours now takes minutes!",
      name: "Jane M.",
      role: "Freelancer"
    },
    {
      quote: "The OCR accuracy is incredible. It catches details I would have missed manually reviewing hundreds of receipts.",
      name: "Michael R.",
      role: "Small Business Owner"
    },
    {
      quote: "The auto-categorization feature saves me so much time during tax season. Highly recommended!",
      name: "Sarah L.",
      role: "Accountant"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-[#F4F8FF]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111221] mb-4">
            What Our Users Say
          </h2>
        </div>

        <div className="relative">
          <div className="bg-white rounded-lg shadow-lg p-8 mx-8">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
            </div>
            
            <blockquote className="text-xl text-gray-700 text-center mb-6 leading-relaxed">
              "{testimonials[currentSlide].quote}"
            </blockquote>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-gray-200 rounded-full mx-auto mb-3"></div>
              <div className="font-semibold text-[#111221]">
                {testimonials[currentSlide].name}
              </div>
              <div className="text-gray-600">
                {testimonials[currentSlide].role}
              </div>
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white hover:bg-gray-50"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>

        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentSlide ? 'bg-[#007BFF]' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

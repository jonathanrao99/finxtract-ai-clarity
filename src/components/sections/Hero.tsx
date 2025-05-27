
import { Button } from "@/components/ui/button";
import { Upload, Eye, CheckCircle, Download } from "lucide-react";

export const Hero = () => {
  const workflowSteps = [
    { icon: Upload, label: "Upload Documents" },
    { icon: Eye, label: "AI Extraction & OCR Hints" },
    { icon: CheckCircle, label: "Review & Categorize" },
    { icon: Download, label: "Download Excel/CSV/PDF" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#111221] via-[#1a1b3a] to-[#2d2d5f] text-white overflow-hidden">
      {/* Abstract SVG Background */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
          <path
            d="M0,300 Q300,100 600,250 T1200,200 L1200,800 L0,800 Z"
            fill="url(#gradient1)"
          />
          <path
            d="M0,500 Q400,300 800,450 T1200,400 L1200,800 L0,800 Z"
            fill="url(#gradient2)"
          />
          <defs>
            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#007BFF" />
              <stop offset="100%" stopColor="#84CC16" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#84CC16" />
              <stop offset="100%" stopColor="#007BFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-tight">
            One-Click AI Extraction: Your Bills & Statements,{" "}
            <span className="text-[#007BFF]">Perfectly Structured</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Upload PDFs, images or scans. Instantly get Excel, CSV or PDF exports with OCR hints, 
            categorization, and auto-reconciliation.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-[#84CC16] hover:bg-[#65A30D] text-black font-semibold px-8 py-3 text-lg"
            >
              Try 3 Free Scans
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white px-8 py-3 text-lg"
            >
              Watch Demo
            </Button>
          </div>

          {/* Workflow Steps */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex flex-col items-center space-y-3">
                <div className="w-16 h-16 bg-[#007BFF] rounded-full flex items-center justify-center">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-center">
                  <div className="text-sm text-[#007BFF] font-semibold mb-1">
                    Step {index + 1}
                  </div>
                  <div className="text-sm text-gray-300">{step.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


import { Button } from "@/components/ui/button";
import { Upload, Eye, CheckCircle, Download } from "lucide-react";

export const Hero = () => {
  const workflowSteps = [
    { icon: Upload, label: "Upload" },
    { icon: Eye, label: "AI Insight" },
    { icon: CheckCircle, label: "Approve" },
    { icon: Download, label: "Export" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#0A0B13] overflow-hidden">
      {/* Animated particles background */}
      <div className="absolute inset-0">
        <div className="particle absolute top-20 left-20 w-2 h-2 bg-[#00E5FF] rounded-full opacity-30"></div>
        <div className="particle absolute top-40 right-32 w-1 h-1 bg-[#7FFF00] rounded-full opacity-40"></div>
        <div className="particle absolute bottom-32 left-40 w-3 h-3 bg-[#00E5FF] rounded-full opacity-20"></div>
        <div className="particle absolute bottom-20 right-20 w-2 h-2 bg-[#7FFF00] rounded-full opacity-30"></div>
        <div className="particle absolute top-60 left-60 w-1 h-1 bg-[#00E5FF] rounded-full opacity-50"></div>
        <div className="particle absolute top-80 right-60 w-2 h-2 bg-[#7FFF00] rounded-full opacity-25"></div>
      </div>

      {/* Gradient wave background */}
      <div className="absolute inset-0 opacity-5">
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
              <stop offset="0%" stopColor="#00E5FF" />
              <stop offset="100%" stopColor="#7FFF00" />
            </linearGradient>
            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7FFF00" />
              <stop offset="100%" stopColor="#00E5FF" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight tracking-wider font-orbitron neon-text">
            AI-Driven Extraction,{" "}
            <span className="text-[#7FFF00]">Redefined for Tomorrow</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-[#B0B0B0] mb-8 max-w-3xl mx-auto leading-relaxed font-inter">
            Upload invoices, receipts, statements—get back Excel, CSV, or PDF in one click.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="bg-[#00E5FF] hover:bg-[#00E5FF]/80 text-[#0A0B13] font-semibold px-8 py-3 text-lg hover:neon-glow transition-all duration-300 transform hover:scale-105"
            >
              Try 3 Free Scans
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-[#00E5FF] text-[#00E5FF] hover:bg-[#00E5FF]/10 hover:text-[#00E5FF] px-8 py-3 text-lg hover:neon-glow transition-all duration-300"
            >
              See It in Action
            </Button>
          </div>

          {/* Workflow Steps */}
          <div className="flex justify-center items-center space-x-8 max-w-2xl mx-auto">
            {workflowSteps.map((step, index) => (
              <div key={index} className="flex items-center">
                <div className="flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 bg-[#00E5FF]/20 border border-[#00E5FF] rounded-full flex items-center justify-center hover:neon-glow transition-all duration-300">
                    <step.icon className="w-6 h-6 text-[#00E5FF]" />
                  </div>
                  <div className="text-xs text-[#B0B0B0] font-medium">{step.label}</div>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="w-8 h-px bg-gradient-to-r from-[#00E5FF] to-[#7FFF00] mx-4 opacity-50"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

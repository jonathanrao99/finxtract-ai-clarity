
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1E1E1E] leading-tight tracking-tight">
              One-Click AI Extraction for Your Bills & Statements
            </h1>
            
            <p className="text-lg md:text-xl text-[#6B6B6B] leading-relaxed max-w-2xl">
              Upload PDFs or scans. Instantly export Excel, CSV or PDF.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-[#007BFF] hover:bg-[#0056b3] text-white font-medium px-8 py-3 text-lg transition-all duration-200"
              >
                Try 3 Free Scans
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#6B6B6B] text-[#6B6B6B] hover:bg-[#6B6B6B] hover:text-white px-8 py-3 text-lg transition-all duration-200"
              >
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Placeholder for graphic/video */}
          <div className="flex justify-center">
            <div className="w-full max-w-md h-96 bg-gradient-to-br from-[#007BFF]/10 to-[#007BFF]/5 rounded-lg border border-[#007BFF]/20 flex items-center justify-center">
              <div className="text-center text-[#6B6B6B]">
                <div className="w-16 h-16 bg-[#007BFF]/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="w-8 h-8 bg-[#007BFF] rounded-sm"></div>
                </div>
                <p className="text-sm">Upload & Download Flow</p>
                <p className="text-xs">Demo Video Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


import { Button } from "@/components/ui/button";

export const TrustBar = () => {
  const logos = [
    "QuickBooks",
    "Xero", 
    "FreshBooks",
    "Sage",
    "Wave"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg text-gray-600 mb-8">
            Trusted by leading accounting platforms
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="bg-white px-6 py-4 rounded-lg shadow-sm border border-gray-200 text-gray-600 font-semibold"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#007BFF] rounded-lg p-8 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ready to streamline your accounting?
          </h2>
          <p className="text-xl mb-6 opacity-90">
            Start your free trial today and see the difference AI can make.
          </p>
          <Button 
            size="lg"
            className="bg-[#84CC16] hover:bg-[#65A30D] text-black font-semibold px-8 py-3"
          >
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

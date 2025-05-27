
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      monthlyPrice: 9.99,
      yearlyPrice: 99,
      features: [
        "50 pages/month",
        "OCR guidance & categorization",
        "Email support"
      ]
    },
    {
      name: "Pro",
      monthlyPrice: 24.99,
      yearlyPrice: 249,
      popular: true,
      features: [
        "500 pages/month",
        "All Basic + reconciliation & bulk upload",
        "Priority chat & email"
      ]
    },
    {
      name: "Enterprise",
      custom: true,
      features: [
        "Unlimited pages + API access",
        "Dedicated account team & SLA"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-[#0A0B13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4 font-orbitron tracking-wider">
            Pricing
          </h2>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-inter ${!isYearly ? 'text-[#F5F5F5] font-semibold' : 'text-[#B0B0B0]'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-[#00E5FF] neon-glow' : 'bg-[#B0B0B0]/20'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm font-inter ${isYearly ? 'text-[#F5F5F5] font-semibold' : 'text-[#B0B0B0]'}`}>
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`glass-card rounded-lg p-8 relative transition-all duration-300 ${
                plan.popular ? 'border-[#00E5FF] neon-glow scale-105' : 'border-[#00E5FF]/20 hover:neon-glow'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#00E5FF] text-[#0A0B13] px-4 py-1 rounded-full text-sm font-semibold cyber-lime-glow animate-pulse">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#F5F5F5] mb-4 font-orbitron">
                  {plan.name}
                </h3>
                
                {plan.custom ? (
                  <div className="text-3xl font-bold text-[#7FFF00] font-orbitron">
                    Custom
                  </div>
                ) : (
                  <div>
                    <span className="text-4xl font-bold text-[#7FFF00] font-orbitron">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-[#B0B0B0] font-inter">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-[#7FFF00] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#B0B0B0] font-inter">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-[#00E5FF] hover:bg-[#00E5FF]/80 text-[#0A0B13] hover:neon-glow'
                    : 'bg-[#7FFF00] hover:bg-[#7FFF00]/80 text-[#0A0B13] hover:cyber-lime-glow'
                } transform hover:scale-105`}
              >
                {plan.custom ? 'Contact Sales' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-[#B0B0B0] font-inter">
            New users receive 3 free scans upon sign-up.
          </p>
        </div>
      </div>
    </section>
  );
};

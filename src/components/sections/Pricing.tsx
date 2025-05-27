
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
        "OCR previews & categorization",
        "Email support"
      ],
      cta: "Get Started",
      ctaVariant: "default" as const
    },
    {
      name: "Pro",
      subtitle: "Most Popular",
      monthlyPrice: 24.99,
      yearlyPrice: 249,
      popular: true,
      features: [
        "500 pages/month",
        "All Basic features",
        "Reconciliation & bulk upload",
        "Priority chat & email"
      ],
      cta: "Get Started",
      ctaVariant: "default" as const
    },
    {
      name: "Enterprise",
      custom: true,
      features: [
        "Unlimited pages + API access",
        "Dedicated account team & SLA"
      ],
      cta: "Contact Sales",
      ctaVariant: "outline" as const
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-8">
            Simple, Transparent Pricing
          </h2>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${!isYearly ? 'text-[#1E1E1E] font-semibold' : 'text-[#6B6B6B]'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-[#007BFF]' : 'bg-gray-200'
              }`}
            >
              <span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
              />
            </button>
            <span className={`text-sm ${isYearly ? 'text-[#1E1E1E] font-semibold' : 'text-[#6B6B6B]'}`}>
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 relative transition-all duration-300 hover:shadow-xl ${
                plan.popular ? 'ring-2 ring-[#007BFF] scale-105' : 'border border-gray-200'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-[#007BFF] text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-[#1E1E1E] mb-2">
                  {plan.name}
                </h3>
                {plan.subtitle && (
                  <p className="text-[#6B6B6B] mb-4">{plan.subtitle}</p>
                )}
                
                {plan.custom ? (
                  <div className="text-3xl font-bold text-[#1E1E1E]">
                    Custom pricing
                  </div>
                ) : (
                  <div>
                    <span className="text-4xl font-bold text-[#1E1E1E]">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-[#6B6B6B]">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-[#007BFF] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-[#6B6B6B]">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full font-semibold ${
                  plan.ctaVariant === "outline"
                    ? 'border-[#007BFF] text-[#007BFF] hover:bg-[#007BFF] hover:text-white'
                    : 'bg-[#007BFF] hover:bg-[#0056b3] text-white'
                }`}
                variant={plan.ctaVariant}
              >
                {plan.cta}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-[#6B6B6B]">
            First-time users receive 3 free scans upon sign-up.
          </p>
        </div>
      </div>
    </section>
  );
};

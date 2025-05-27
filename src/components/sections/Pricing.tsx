
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      subtitle: "For freelancers",
      monthlyPrice: 19,
      yearlyPrice: 190,
      features: [
        "50 pages/month",
        "OCR hints & basic categorization",
        "Email support",
        "Basic export formats"
      ]
    },
    {
      name: "Pro",
      subtitle: "Most Popular",
      monthlyPrice: 49,
      yearlyPrice: 490,
      popular: true,
      features: [
        "500 pages/month",
        "All Basic features",
        "Auto-reconciliation & bulk upload",
        "Priority email & chat support",
        "Advanced categorization"
      ]
    },
    {
      name: "Enterprise",
      subtitle: "Custom pricing",
      custom: true,
      features: [
        "Unlimited pages",
        "API access",
        "Dedicated account manager",
        "SLA & compliance features",
        "Custom integrations"
      ]
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111221] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Choose the plan that fits your needs
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm ${!isYearly ? 'text-[#111221] font-semibold' : 'text-gray-500'}`}>
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
            <span className={`text-sm ${isYearly ? 'text-[#111221] font-semibold' : 'text-gray-500'}`}>
              Yearly
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-8 relative ${
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
                <h3 className="text-2xl font-bold text-[#111221] mb-2">
                  {plan.name}
                </h3>
                <p className="text-gray-600 mb-4">{plan.subtitle}</p>
                
                {plan.custom ? (
                  <div className="text-3xl font-bold text-[#111221]">
                    Custom
                  </div>
                ) : (
                  <div>
                    <span className="text-4xl font-bold text-[#111221]">
                      ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    </span>
                    <span className="text-gray-600">
                      /{isYearly ? 'year' : 'month'}
                    </span>
                  </div>
                )}
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-5 h-5 text-[#84CC16] mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                className={`w-full ${
                  plan.popular
                    ? 'bg-[#007BFF] hover:bg-[#0056b3]'
                    : 'bg-[#84CC16] hover:bg-[#65A30D]'
                } text-white font-semibold`}
              >
                {plan.custom ? 'Contact Sales' : 'Get Started'}
              </Button>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">
            First-time users get 3 free scans when you sign up.
          </p>
        </div>
      </div>
    </section>
  );
};

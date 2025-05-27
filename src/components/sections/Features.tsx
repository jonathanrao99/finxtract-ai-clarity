
import { Eye, Tag, GitMerge } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Eye,
      title: "Neon OCR Guidance",
      description: "See live text-recognition highlights as you hover."
    },
    {
      icon: Tag,
      title: "Smart Categorization", 
      description: "Auto-assign line-items: Rent, Supplies, Payroll, & more."
    },
    {
      icon: GitMerge,
      title: "Reconciliation AI",
      description: "Instantly match payments to statements—no manual work."
    }
  ];

  return (
    <section id="features" className="py-20 bg-[#0A0B13]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#F5F5F5] mb-4 font-orbitron tracking-wider">
            Features Showcase
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="glass-card p-8 rounded-lg hover:neon-glow transition-all duration-300 group transform hover:scale-105"
            >
              <div className="w-16 h-16 bg-[#00E5FF]/20 border border-[#00E5FF] rounded-lg flex items-center justify-center mb-6 group-hover:cyber-lime-glow transition-all duration-300">
                <feature.icon className="w-8 h-8 text-[#00E5FF] group-hover:text-[#7FFF00]" />
              </div>
              <h3 className="text-xl font-bold text-[#F5F5F5] mb-3 font-orbitron">
                {feature.title}
              </h3>
              <p className="text-[#B0B0B0] leading-relaxed font-inter">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

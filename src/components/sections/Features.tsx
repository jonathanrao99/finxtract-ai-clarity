
import { Upload, Eye, Tag, GitMerge } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Upload,
      title: "One-Click Extraction",
      description: "Upload one or dozens of documents in a single drag & drop."
    },
    {
      icon: Eye,
      title: "Live OCR Previews", 
      description: "See highlighted text and line-items before you download."
    },
    {
      icon: Tag,
      title: "Smart Categorization",
      description: "Auto-assign rents, utilities, payroll, and more."
    },
    {
      icon: GitMerge,
      title: "Auto-Reconciliation",
      description: "Match payments to bank entries—zero manual work."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1E1E1E] mb-4">
            Powerful Features for Modern Accounting
          </h2>
          <p className="text-xl text-[#6B6B6B] max-w-3xl mx-auto">
            Transform your workflow with AI-driven tools
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 group hover:border-[#007BFF] hover:translate-y-[-4px]"
            >
              <div className="w-12 h-12 bg-[#007BFF]/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#007BFF]/20 transition-colors">
                <feature.icon className="w-6 h-6 text-[#007BFF]" />
              </div>
              <h3 className="text-xl font-bold text-[#1E1E1E] mb-3">
                {feature.title}
              </h3>
              <p className="text-[#6B6B6B] leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

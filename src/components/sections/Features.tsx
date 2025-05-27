
import { Scan, Tag, GitMerge, Upload } from "lucide-react";

export const Features = () => {
  const features = [
    {
      icon: Scan,
      title: "Smart OCR Hints",
      description: "Highlight line-items as you hover with intelligent text recognition and extraction."
    },
    {
      icon: Tag,
      title: "Auto-Categorization", 
      description: "Automatically sort rent, utilities, payroll and more with AI-powered classification."
    },
    {
      icon: GitMerge,
      title: "Reconciliation Engine",
      description: "Match payments to statements automatically with our advanced reconciliation system."
    },
    {
      icon: Upload,
      title: "Bulk Upload & API",
      description: "Drag & drop multiple files plus REST endpoint for seamless integration."
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#111221] mb-4">
            Powerful Features for Modern Accounting
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to transform your document processing workflow
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 group"
            >
              <div className="w-12 h-12 bg-[#007BFF] rounded-lg flex items-center justify-center mb-4 group-hover:bg-[#0056b3] transition-colors">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-[#111221] mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

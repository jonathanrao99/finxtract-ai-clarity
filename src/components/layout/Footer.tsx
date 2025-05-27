
export const Footer = () => {
  const footerLinks = ["Home", "Features", "Pricing", "API Docs"];

  return (
    <footer className="bg-[#F8F8F8] text-[#1E1E1E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <div className="flex flex-wrap justify-center space-x-8 mb-6">
            {footerLinks.map((link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(' ', '-')}`}
                className="text-[#1E1E1E] hover:text-[#007BFF] transition-colors text-sm font-medium"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="text-sm text-[#6B6B6B] space-x-4">
            <span>© 2025 FinXtract</span>
            <span>•</span>
            <a href="#" className="hover:text-[#007BFF] transition-colors">
              Terms
            </a>
            <span>•</span>
            <a href="#" className="hover:text-[#007BFF] transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

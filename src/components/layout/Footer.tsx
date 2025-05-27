
export const Footer = () => {
  const footerSections = [
    {
      title: "Product",
      links: ["Features", "Pricing", "API", "Status"]
    },
    {
      title: "Company", 
      links: ["About", "Careers", "Press", "Blog"]
    },
    {
      title: "Resources",
      links: ["Help Center", "Documentation", "Security", "GDPR"]
    },
    {
      title: "Contact",
      links: ["Email", "Twitter", "LinkedIn", "GitHub"]
    }
  ];

  return (
    <footer className="bg-[#111221] text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {footerSections.map((section, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-400">
            © 2025 FinXtract • All rights reserved
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Terms
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

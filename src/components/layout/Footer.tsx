
export const Footer = () => {
  const links = ["Home", "Features", "Pricing", "API Docs"];

  return (
    <footer className="bg-[#0A0B13] border-t border-[#00E5FF]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center space-y-4">
          <div className="flex justify-center space-x-8">
            {links.map((link, index) => (
              <a
                key={index}
                href="#"
                className="text-[#B0B0B0] hover:text-[#00E5FF] transition-colors text-sm font-inter"
              >
                {link}
              </a>
            ))}
          </div>
          
          <div className="text-sm text-[#B0B0B0] font-inter">
            © 2025 FinXtract • 
            <a href="#" className="hover:text-[#00E5FF] transition-colors ml-1">Terms</a>
            <span className="mx-1">·</span>
            <a href="#" className="hover:text-[#00E5FF] transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

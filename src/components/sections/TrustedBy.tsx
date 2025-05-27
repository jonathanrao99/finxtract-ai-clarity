
export const TrustedBy = () => {
  const logos = [
    "QuickBooks",
    "Xero", 
    "FreshBooks",
    "Sage",
    "Wave"
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-lg text-[#6B6B6B] mb-8">
            Trusted by Leading Platforms
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="text-[#6B6B6B] font-semibold text-lg opacity-60 hover:opacity-100 hover:text-[#007BFF] transition-all duration-300 cursor-pointer"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

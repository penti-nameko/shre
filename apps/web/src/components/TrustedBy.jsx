export default function TrustedBy() {
  const servers = [
    {
      name: "PewDiePie | Floor Gang",
      members: "200,000 Members",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=64&h=64&fit=crop&crop=center"
    },
    {
      name: "Gaming Community",
      members: "150,000 Members", 
      image: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=64&h=64&fit=crop&crop=center"
    },
    {
      name: "Anime Soul Discord",
      members: "688,000 Members",
      image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=64&h=64&fit=crop&crop=center"
    },
    {
      name: "Tech Hub",
      members: "400,000 Members",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=64&h=64&fit=crop&crop=center"
    },
    {
      name: "Developer Community",
      members: "120,000 Members",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=64&h=64&fit=crop&crop=center"
    },
    {
      name: "Crypto Trading",
      members: "300,000 Members",
      image: "https://images.unsplash.com/photo-1559526324-593bc054d0c4?w=64&h=64&fit=crop&crop=center"
    }
  ];

  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap"
        rel="stylesheet"
      />

      <section
        className="py-16 md:py-20 px-6 bg-white dark:bg-[#121212] border-b border-[#E8E6E1] dark:border-[#404040]"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Section heading */}
          <div className="text-center mb-12">
            <p className="text-sm font-semibold text-[#8B7355] dark:text-[#D4C4A8] uppercase tracking-wide mb-4">
              Trusted by over 12.8 million Discord servers, including
            </p>
          </div>

          {/* Server logos grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {servers.map((server, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Server Icon */}
                <div className="relative mb-3 group-hover:scale-105 transition-transform duration-200">
                  <img
                    src={server.image}
                    alt={server.name}
                    className="w-16 h-16 rounded-2xl object-cover shadow-md border-2 border-[#E8E6E1] dark:border-[#404040] group-hover:border-[#8B7355] dark:group-hover:border-[#D4C4A8] transition-colors duration-200"
                  />
                  {/* Active indicator */}
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#28CA42] border-2 border-white dark:border-[#121212] rounded-full"></div>
                </div>
                
                {/* Server Info */}
                <div className="space-y-1">
                  <h3 className="text-sm font-semibold text-[#2C2419] dark:text-white group-hover:text-[#8B7355] dark:group-hover:text-[#D4C4A8] transition-colors duration-200 line-clamp-2">
                    {server.name}
                  </h3>
                  <p className="text-xs text-[#5C5347] dark:text-[#B0B0B0] font-medium">
                    {server.members}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scrolling animation hint for mobile */}
          <div className="flex md:hidden justify-center mt-8">
            <div className="flex items-center space-x-2 text-[#8B7355] dark:text-[#D4C4A8]">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-[#8B7355] dark:bg-[#D4C4A8] rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-[#8B7355] dark:bg-[#D4C4A8] rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></div>
                <div className="w-2 h-2 bg-[#8B7355] dark:bg-[#D4C4A8] rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></div>
              </div>
            </div>
          </div>

          {/* Bottom text */}
          <div className="text-center mt-12">
            <p className="text-[#5C5347] dark:text-[#B0B0B0] font-medium">
              Join thousands of communities already using ProBot to enhance their Discord experience
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
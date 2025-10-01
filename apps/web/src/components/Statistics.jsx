import { useState, useEffect } from "react";
import { ArrowUp, Clock, Star, Zap } from "lucide-react";

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    {
      icon: ArrowUp,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service you can count on",
      trend: "+0.1% this month",
      color: "text-[#28CA42]",
      bgColor: "bg-[#28CA42]/10",
    },
    {
      icon: Clock,
      value: "<1s",
      label: "Response Time", 
      description: "Lightning fast command execution",
      trend: "Optimized for speed",
      color: "text-[#8B7355]",
      bgColor: "bg-[#8B7355]/10",
    },
    {
      icon: Star,
      value: "1M+",
      label: "Daily Commands",
      description: "Commands processed every day",
      trend: "+12% this week",
      color: "text-[#FFB800]",
      bgColor: "bg-[#FFB800]/10",
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Active Support",
      description: "Community and developer support",
      trend: "Always available",
      color: "text-[#5865F2]",
      bgColor: "bg-[#5865F2]/10",
    },
  ];

  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@700&display=swap"
        rel="stylesheet"
      />

      <section className="py-20 md:py-28 px-6 bg-white dark:bg-[#121212]">
        <div className="max-w-[1200px] mx-auto">
          {/* Section heading */}
          <div className="text-center mb-16 md:mb-20">
            <h2
              className="text-4xl md:text-[52px] leading-tight md:leading-[1.1] text-[#2C2419] dark:text-white mb-6"
              style={{
                fontFamily: "Playfair Display, serif",
                fontWeight: "700",
              }}
            >
              Built for <em className="font-bold">performance</em> and reliability
            </h2>
            <p
              className="text-lg md:text-xl text-[#5C5347] dark:text-[#B0B0B0] max-w-[60ch] mx-auto"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              ProBot delivers exceptional performance with industry-leading reliability metrics
            </p>
          </div>

          {/* Statistics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              
              return (
                <div
                  key={index}
                  className={`
                    bg-[#FAF9F7] dark:bg-[#1E1E1E] border border-[#E8E6E1] dark:border-[#404040] 
                    rounded-2xl p-8 transition-all duration-500 hover:shadow-xl hover:scale-105
                    ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
                  `}
                  style={{ 
                    transitionDelay: `${index * 100}ms`,
                    fontFamily: "Inter, system-ui, sans-serif"
                  }}
                >
                  {/* Icon */}
                  <div className={`
                    w-16 h-16 rounded-xl ${stat.bgColor} flex items-center justify-center mb-6
                  `}>
                    <IconComponent size={32} className={stat.color} strokeWidth={1.5} />
                  </div>

                  {/* Main Value */}
                  <div className="mb-2">
                    <span className="text-4xl md:text-5xl font-bold text-[#2C2419] dark:text-white">
                      {stat.value}
                    </span>
                  </div>

                  {/* Label */}
                  <h3 className="text-xl font-semibold text-[#2C2419] dark:text-white mb-3">
                    {stat.label}
                  </h3>

                  {/* Description */}
                  <p className="text-[#5C5347] dark:text-[#B0B0B0] text-base mb-4 leading-relaxed">
                    {stat.description}
                  </p>

                  {/* Trend */}
                  <div className="flex items-center">
                    <span className={`text-sm font-medium ${stat.color}`}>
                      {stat.trend}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16 md:mt-20">
            <div className="bg-gradient-to-r from-[#F5F4F0] to-[#EDEAE5] dark:from-[#1E1E1E] dark:to-[#262626] rounded-3xl p-8 md:p-12 border border-[#E8E6E1] dark:border-[#404040]">
              <h3 
                className="text-2xl md:text-3xl font-bold text-[#2C2419] dark:text-white mb-4"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Let ProBot take care of your server
              </h3>
              <p className="text-lg text-[#5C5347] dark:text-[#B0B0B0] mb-8 max-w-[50ch] mx-auto">
                Join over 12.8 million servers using ProBot to create amazing Discord communities
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <button className="px-8 py-4 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:ring-offset-2 shadow-lg hover:shadow-xl">
                  Add to Discord
                </button>
                <button className="px-8 py-4 rounded-xl border border-[#8B7355] text-[#8B7355] hover:bg-[#8B7355] hover:text-white font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2">
                  View Dashboard
                </button>
              </div>

              {/* Trust indicators */}
              <div className="flex flex-wrap justify-center items-center gap-6 mt-8 pt-8 border-t border-[#E8E6E1] dark:border-[#404040]">
                <div className="flex items-center space-x-2 text-[#5C5347] dark:text-[#B0B0B0]">
                  <div className="w-2 h-2 bg-[#28CA42] rounded-full"></div>
                  <span className="text-sm font-medium">Free forever</span>
                </div>
                <div className="flex items-center space-x-2 text-[#5C5347] dark:text-[#B0B0B0]">
                  <div className="w-2 h-2 bg-[#28CA42] rounded-full"></div>
                  <span className="text-sm font-medium">No setup required</span>
                </div>
                <div className="flex items-center space-x-2 text-[#5C5347] dark:text-[#B0B0B0]">
                  <div className="w-2 h-2 bg-[#28CA42] rounded-full"></div>
                  <span className="text-sm font-medium">24/7 support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
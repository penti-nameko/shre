import { useState } from "react";
import { MessageCircle, Shield, UserCheck, TrendingUp, Image, Zap, Settings, Users } from "lucide-react";

export default function Features() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const features = [
    {
      id: "welcome-messages",
      icon: MessageCircle,
      title: "Welcome Messages",
      description: "Create custom welcome images with user avatars and customizable backgrounds to greet new members in style.",
      isActive: true,
    },
    {
      id: "moderation",
      icon: Shield,
      title: "Powerful Moderation",
      description: "Advanced auto-moderation, detailed logs, and comprehensive moderation tools to keep your server safe.",
    },
    {
      id: "reaction-roles",
      icon: UserCheck,
      title: "Reaction Roles",
      description: "Let members assign roles to themselves by reacting to messages. Support for 250+ roles with various modes.",
    },
    {
      id: "leveling",
      icon: TrendingUp,
      title: "Leveling System",
      description: "Reward active members with level roles and permissions as they participate in your community.",
    },
    {
      id: "embed-builder",
      icon: Image,
      title: "Embed Messages",
      description: "Create beautiful embed messages with custom colors, fields, and images using our intuitive builder.",
    },
    {
      id: "automod",
      icon: Zap,
      title: "Smart Automod",
      description: "Automatically detect and handle spam, bad words, suspicious links, and unwanted content.",
    },
    {
      id: "custom-commands",
      icon: Settings,
      title: "Custom Commands",
      description: "Create powerful custom commands with variables, conditions, and advanced scripting capabilities.",
    },
    {
      id: "user-engagement",
      icon: Users,
      title: "User Engagement",
      description: "Starboard, giveaways, polls, and interactive features to keep your community active and engaged.",
    },
  ];

  const isCardActive = (feature) => {
    return feature.isActive || hoveredCard === feature.id;
  };

  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:wght@400;700&display=swap"
        rel="stylesheet"
      />

      <section 
        id="features"
        className="py-20 md:py-28 px-6 bg-[#F5F4F0] dark:bg-[#1A1A1A]"
      >
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
              Everything you need for a <em className="font-bold">thriving</em> Discord server
            </h2>

            {/* Sub-headline */}
            <p
              className="text-lg md:text-xl text-[#5C5347] dark:text-[#B0B0B0] max-w-[60ch] mx-auto"
              style={{
                fontFamily: "Inter, system-ui, sans-serif",
              }}
            >
              From welcoming new members to advanced moderation, ProBot has all the tools you need
            </p>
          </div>

          {/* Feature cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {features.map((feature) => {
              const IconComponent = feature.icon;
              const active = isCardActive(feature);

              return (
                <div
                  key={feature.id}
                  role="button"
                  tabIndex={0}
                  className={`
                    relative p-6 md:p-8 rounded-2xl border transition-all duration-300 ease-out cursor-pointer group
                    focus:outline-none focus:ring-2 focus:ring-[#8B7355] dark:focus:ring-[#D4C4A8] focus:ring-opacity-50
                    ${
                      active
                        ? "bg-[#2C2419] dark:bg-[#404040] border-transparent shadow-xl"
                        : "bg-white dark:bg-[#1E1E1E] border-[#E8E6E1] dark:border-[#404040] hover:bg-[#FEFEFE] dark:hover:bg-[#262626] hover:shadow-lg"
                    }
                  `}
                  onMouseEnter={() => setHoveredCard(feature.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Icon container */}
                  <div
                    className={`
                      w-14 h-14 rounded-xl border flex items-center justify-center mb-6 transition-all duration-300 ease-out
                      ${
                        active
                          ? "bg-[#8B7355] border-[#8B7355]"
                          : "bg-[#F5F4F0] dark:bg-[#262626] border-[#E8E6E1] dark:border-[#404040] group-hover:bg-[#8B7355] group-hover:border-[#8B7355]"
                      }
                    `}
                  >
                    <IconComponent
                      size={28}
                      strokeWidth={1.5}
                      className={`transition-all duration-300 ease-out ${
                        active
                          ? "text-white"
                          : "text-[#8B7355] group-hover:text-white"
                      }`}
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className={`
                      text-xl font-semibold mb-3 transition-all duration-300 ease-out
                      ${active ? "text-white" : "text-[#2C2419] dark:text-white"}
                    `}
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                    }}
                  >
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`
                      text-base leading-relaxed transition-all duration-300 ease-out
                      ${active ? "text-[#D4C4A8]" : "text-[#5C5347] dark:text-[#B0B0B0]"}
                    `}
                    style={{
                      fontFamily: "Inter, system-ui, sans-serif",
                      maxWidth: "32ch",
                    }}
                  >
                    {feature.description}
                  </p>

                  {/* Learn more link */}
                  <div className={`
                    mt-6 transition-all duration-300 ease-out
                    ${active ? "opacity-100" : "opacity-0 group-hover:opacity-100"}
                  `}>
                    <span className={`
                      text-sm font-medium transition-colors duration-300
                      ${active ? "text-[#D4C4A8]" : "text-[#8B7355]"}
                    `}>
                      Learn more →
                    </span>
                  </div>

                  {/* Background decoration */}
                  <div className={`
                    absolute top-0 right-0 w-20 h-20 rounded-2xl transition-opacity duration-300
                    ${active ? "opacity-10" : "opacity-0"}
                  `}
                  style={{
                    background: `radial-gradient(circle at center, ${active ? "#D4C4A8" : "#8B7355"} 0%, transparent 70%)`,
                  }}
                  />
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 md:mt-20">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4">
              <button className="px-8 py-4 rounded-xl bg-[#8B7355] hover:bg-[#75624A] text-white font-semibold text-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2 shadow-lg hover:shadow-xl">
                See All Features
              </button>
              <span className="text-[#5C5347] dark:text-[#B0B0B0] font-medium">
                or browse our documentation
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
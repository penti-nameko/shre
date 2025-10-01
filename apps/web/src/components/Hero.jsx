import { useState, useEffect } from "react";
import { Play, Users, Server, Star } from "lucide-react";

export default function Hero() {
  const [statsVisible, setStatsVisible] = useState(false);
  const [stats, setStats] = useState({
    servers: "125K+",
    members: "15M+",
    rating: "4.9/5"
  });
  const [loading, setLoading] = useState(true);

  // Fetch live stats from Discord API
  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('/api/discord-stats');
        if (response.ok) {
          const data = await response.json();
          setStats({
            servers: data.stats.serverCount || "125K+",
            members: data.stats.memberCount || "15M+",
            rating: "4.9/5"
          });
        }
      } catch (error) {
        console.error('Failed to fetch stats:', error);
        // Keep default fallback values
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  // Animate stats on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setStatsVisible(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap"
        rel="stylesheet"
      />

      <section
        className="relative py-20 md:py-32 px-6 bg-gradient-to-b from-[#F5F4F0] to-[#EDEAE5] dark:from-[#1A1A1A] dark:to-[#0F0F0F]"
        style={{
          fontFamily: "Inter, system-ui, sans-serif",
        }}
      >
        <div className="max-w-[1200px] mx-auto">
          {/* Headline Block */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-[64px] leading-tight md:leading-[1.1] text-[#2C2419] dark:text-white mb-6 max-w-4xl mx-auto"
              style={{
                fontFamily: "Playfair Display, serif",
                letterSpacing: "-0.02em",
              }}
            >
              Make a <em className="font-bold">Professional</em> Discord Server
            </h1>

            {/* Sub-headline */}
            <p className="text-lg md:text-xl text-[#5C5347] dark:text-[#C0C0C0] opacity-90 mb-8 max-w-[60ch] mx-auto">
              A very customizable multipurpose bot for welcome images, moderation, 
              reaction roles, leveling system and many more features.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-6 mb-20">
              {/* Add to Discord button */}
              <button className="px-8 py-4 rounded-xl bg-[#5865F2] hover:bg-[#4752C4] text-white font-semibold text-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-[#5865F2] focus:ring-offset-2 shadow-lg hover:shadow-xl">
                Add to Discord
              </button>

              {/* How it works button */}
              <button className="group flex items-center gap-3 px-8 py-4 bg-white dark:bg-[#262626] border border-[#D4C4A8] dark:border-[#404040] rounded-xl hover:border-[#8B7355] dark:hover:border-[#606060] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2">
                <div className="flex items-center justify-center w-6 h-6 border border-[#D4C4A8] dark:border-[#404040] rounded-full">
                  <Play
                    size={12}
                    className="text-[#2C2419] dark:text-white opacity-70 ml-[1px]"
                  />
                </div>
                <span className="text-[#2C2419] dark:text-white font-semibold text-lg">
                  Browse Features
                </span>
              </button>
            </div>

            {/* Live Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Servers */}
              <div
                className={`text-center transition-all duration-500 ${
                  statsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#8B7355] rounded-2xl mx-auto mb-4">
                  <Server size={32} className="text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#2C2419] dark:text-white mb-2">
                  {loading ? "..." : stats.servers}
                </div>
                <div className="text-[#5C5347] dark:text-[#B0B0B0] font-medium">
                  Servers
                </div>
              </div>

              {/* Users */}
              <div
                className={`text-center transition-all duration-500 ${
                  statsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#8B7355] rounded-2xl mx-auto mb-4">
                  <Users size={32} className="text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#2C2419] dark:text-white mb-2">
                  {loading ? "..." : stats.members}
                </div>
                <div className="text-[#5C5347] dark:text-[#B0B0B0] font-medium">
                  Members Served
                </div>
              </div>

              {/* Rating */}
              <div
                className={`text-center transition-all duration-500 ${
                  statsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="flex items-center justify-center w-16 h-16 bg-[#8B7355] rounded-2xl mx-auto mb-4">
                  <Star size={32} className="text-white" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-[#2C2419] dark:text-white mb-2">
                  {stats.rating}
                </div>
                <div className="text-[#5C5347] dark:text-[#B0B0B0] font-medium">
                  User Rating
                </div>
              </div>
            </div>
          </div>

          {/* Device Showcase - Bot Dashboard Preview */}
          <div className="relative max-w-[900px] mx-auto">
            <div className="relative">
              {/* Dashboard Frame */}
              <div
                className="relative rounded-2xl border-2 border-[#2C2419] dark:border-[#404040] overflow-hidden bg-white dark:bg-[#1A1A1A] shadow-2xl"
                style={{
                  height: "500px",
                }}
              >
                {/* Dashboard Header */}
                <div className="bg-[#F5F4F0] dark:bg-[#262626] px-6 py-4 border-b border-[#E8E6E1] dark:border-[#404040]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold text-[#2C2419] dark:text-white">
                      MoneBot Dashboard
                    </h3>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 bg-[#FF5F57] rounded-full"></div>
                      <div className="w-3 h-3 bg-[#FFBD2E] rounded-full"></div>
                      <div className="w-3 h-3 bg-[#28CA42] rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="p-6 h-full bg-gradient-to-br from-[#FAF9F7] to-[#F0EFEB] dark:from-[#1A1A1A] dark:to-[#0F0F0F]">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
                    {/* Welcome Messages Card */}
                    <div className="bg-white dark:bg-[#262626] rounded-xl p-6 border border-[#E8E6E1] dark:border-[#404040]">
                      <h4 className="text-lg font-semibold text-[#2C2419] dark:text-white mb-4">
                        Welcome Messages
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-[#28CA42] rounded-full"></div>
                          <span className="text-[#5C5347] dark:text-[#B0B0B0]">Active</span>
                        </div>
                        <div className="text-sm text-[#5C5347] dark:text-[#B0B0B0]">
                          Channel: #welcome
                        </div>
                        <div className="text-sm text-[#5C5347] dark:text-[#B0B0B0]">
                          Custom image enabled
                        </div>
                      </div>
                    </div>

                    {/* Moderation Card */}
                    <div className="bg-white dark:bg-[#262626] rounded-xl p-6 border border-[#E8E6E1] dark:border-[#404040]">
                      <h4 className="text-lg font-semibold text-[#2C2419] dark:text-white mb-4">
                        Moderation
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-[#28CA42] rounded-full"></div>
                          <span className="text-[#5C5347] dark:text-[#B0B0B0]">Auto-mod enabled</span>
                        </div>
                        <div className="text-sm text-[#5C5347] dark:text-[#B0B0B0]">
                          Logs: #mod-logs
                        </div>
                        <div className="text-sm text-[#5C5347] dark:text-[#B0B0B0]">
                          Mute role configured
                        </div>
                      </div>
                    </div>

                    {/* Reaction Roles Card */}
                    <div className="bg-white dark:bg-[#262626] rounded-xl p-6 border border-[#E8E6E1] dark:border-[#404040]">
                      <h4 className="text-lg font-semibold text-[#2C2419] dark:text-white mb-4">
                        Reaction Roles
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-[#28CA42] rounded-full"></div>
                          <span className="text-[#5C5347] dark:text-[#B0B0B0]">3 active setups</span>
                        </div>
                        <div className="text-sm text-[#5C5347] dark:text-[#B0B0B0]">
                          Channel: #self-roles
                        </div>
                      </div>
                    </div>

                    {/* Leveling System Card */}
                    <div className="bg-white dark:bg-[#262626] rounded-xl p-6 border border-[#E8E6E1] dark:border-[#404040]">
                      <h4 className="text-lg font-semibold text-[#2C2419] dark:text-white mb-4">
                        Leveling System
                      </h4>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3">
                          <div className="w-3 h-3 bg-[#28CA42] rounded-full"></div>
                          <span className="text-[#5C5347] dark:text-[#B0B0B0]">Level rewards active</span>
                        </div>
                        <div className="text-sm text-[#5C5347] dark:text-[#B0B0B0]">
                          Leaderboard enabled
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Interactive Callouts */}
              {/* User callout - bottom left */}
              <div
                className={`absolute bottom-4 left-4 transition-all duration-300 ${
                  statsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "400ms" }}
              >
                <div className="bg-[#8B7355] text-white px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap">
                  Server Admin
                </div>
              </div>

              {/* Status callout - right mid-height */}
              <div
                className={`absolute top-1/2 -right-4 transform -translate-y-1/2 transition-all duration-300 ${
                  statsVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-2"
                }`}
                style={{ transitionDelay: "500ms" }}
              >
                <div className="bg-[#2C2419] dark:bg-[#404040] text-white px-4 py-2 rounded-xl font-semibold text-sm whitespace-nowrap">
                  All Systems Active
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
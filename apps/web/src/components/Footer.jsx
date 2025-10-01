import { Bot, Twitter, Github, MessageCircle } from "lucide-react";

export default function Footer() {
  const navigationLinks = [
    { name: "Features", href: "#features" },
    { name: "Premium", href: "/premium" },
    { name: "API Documentation", href: "/api-docs" },
    { name: "Webhooks", href: "/webhooks" },
    { name: "Support", href: "#support" },
    { name: "Status", href: "#status" },
  ];

  const legalLinks = [
    { name: "Terms of Service", href: "#terms" },
    { name: "Privacy Policy", href: "#privacy" },
    { name: "Refund Policy", href: "#refund" },
  ];

  const socialLinks = [
    {
      name: "Discord",
      href: "#discord",
      icon: MessageCircle,
      description: "Join our support server",
    },
    {
      name: "Twitter",
      href: "#twitter",
      icon: Twitter,
      description: "Follow for updates",
    },
    {
      name: "GitHub",
      href: "#github",
      icon: Github,
      description: "View our open source projects",
    },
  ];

  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <footer
        className="bg-[#F5F4F0] dark:bg-[#1A1A1A] border-t border-[#E8E6E1] dark:border-[#404040] py-16 px-6"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-[1280px] mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Column */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <img
                  src="https://raw.createusercontent.com/a799031b-5d59-43ac-97df-4edda7d9e21d/"
                  alt="MoneBot Logo"
                  className="h-10 w-10 rounded-xl"
                />
                <span className="text-[#2C2419] dark:text-white text-xl font-semibold">
                  MoneBot
                </span>
              </div>

              <p className="text-[#5C5347] dark:text-[#B0B0B0] text-base leading-relaxed mb-6 max-w-md">
                A very customizable multipurpose bot for welcome images,
                in-depth logs, social commands, moderation and many more
                features to make your Discord server professional.
              </p>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.href}
                      className="group flex items-center justify-center w-12 h-12 bg-white dark:bg-[#262626] border border-[#E8E6E1] dark:border-[#404040] rounded-xl hover:bg-[#8B7355] dark:hover:bg-[#8B7355] hover:border-[#8B7355] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2"
                      title={social.description}
                    >
                      <IconComponent
                        size={20}
                        className="text-[#5C5347] dark:text-[#B0B0B0] group-hover:text-white transition-colors duration-200"
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-[#2C2419] dark:text-white font-semibold text-lg mb-6">
                Quick Links
              </h3>
              <nav className="space-y-4">
                {navigationLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="block text-[#5C5347] dark:text-[#B0B0B0] hover:text-[#8B7355] dark:hover:text-[#D4C4A8] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2 focus:ring-inset rounded-sm px-1 py-1"
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-[#2C2419] dark:text-white font-semibold text-lg mb-6">
                Resources
              </h3>
              <nav className="space-y-4">
                <a
                  href="#guides"
                  className="block text-[#5C5347] dark:text-[#B0B0B0] hover:text-[#8B7355] dark:hover:text-[#D4C4A8] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2 focus:ring-inset rounded-sm px-1 py-1"
                >
                  Setup Guides
                </a>
                <a
                  href="#tutorials"
                  className="block text-[#5C5347] dark:text-[#B0B0B0] hover:text-[#8B7355] dark:hover:text-[#D4C4A8] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2 focus:ring-inset rounded-sm px-1 py-1"
                >
                  Video Tutorials
                </a>
                <a
                  href="#changelog"
                  className="block text-[#5C5347] dark:text-[#B0B0B0] hover:text-[#8B7355] dark:hover:text-[#D4C4A8] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2 focus:ring-inset rounded-sm px-1 py-1"
                >
                  Changelog
                </a>
                <a
                  href="/api-docs"
                  className="block text-[#5C5347] dark:text-[#B0B0B0] hover:text-[#8B7355] dark:hover:text-[#D4C4A8] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2 focus:ring-inset rounded-sm px-1 py-1"
                >
                  API Documentation
                </a>
                <a
                  href="/webhooks"
                  className="block text-[#5C5347] dark:text-[#B0B0B0] hover:text-[#8B7355] dark:hover:text-[#D4C4A8] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2 focus:ring-inset rounded-sm px-1 py-1"
                >
                  Webhook Integration
                </a>
              </nav>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-[#E8E6E1] dark:border-[#404040]">
            {/* Copyright */}
            <div className="text-[#5C5347] dark:text-[#B0B0B0] text-sm font-medium order-2 md:order-1 mt-4 md:mt-0">
              © 2025 MoneBot. All rights reserved.
            </div>

            {/* Legal Links */}
            <div className="flex items-center order-1 md:order-2">
              {legalLinks.map((link, index) => (
                <div key={link.name} className="flex items-center">
                  <a
                    href={link.href}
                    className="text-[#5C5347] dark:text-[#B0B0B0] hover:text-[#8B7355] dark:hover:text-[#D4C4A8] text-sm font-medium transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2 focus:ring-inset rounded-sm px-2 py-1"
                  >
                    {link.name}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="text-[#5C5347] dark:text-[#B0B0B0] text-sm mx-4">
                      |
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Server Statistics */}
          <div className="text-center mt-8 pt-8 border-t border-[#E8E6E1] dark:border-[#404040]">
            <p className="text-[#8B7355] dark:text-[#D4C4A8] font-semibold text-sm">
              Serving 1,476,241,022 members in 12,888,325 servers
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

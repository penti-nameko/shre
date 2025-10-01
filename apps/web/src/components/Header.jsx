import { useState } from "react";
import { ChevronDown, Menu, X, Bot } from "lucide-react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { name: "Features", href: "#features" },
    { name: "Commands", href: "#commands" },
    { name: "Documentation", href: "#docs" },
    { name: "Premium", href: "#premium" },
    { name: "Support", href: "#support" },
  ];

  return (
    <>
      {/* Google Fonts import */}
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      <header
        className="bg-[#F5F4F0] dark:bg-[#1E1E1E] h-16 md:h-16 px-6 border-b border-[#E8E6E1] dark:border-[#3A3A3A]"
        style={{ fontFamily: "Inter, system-ui, sans-serif" }}
      >
        <div className="max-w-[1200px] mx-auto flex items-center justify-between h-full">
          {/* Logo block */}
          <div className="flex items-center space-x-3">
            <img
              src="https://raw.createusercontent.com/a799031b-5d59-43ac-97df-4edda7d9e21d/"
              alt="ProBot Logo"
              className="h-10 w-10 rounded-xl"
            />
            <span className="text-[#2C2419] dark:text-white font-semibold text-xl">
              ProBot
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-[#5C5347] dark:text-[#B0B0B0] hover:text-[#8B7355] dark:hover:text-[#D4C4A8] transition-colors duration-150 font-medium text-base focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2 rounded-lg px-3 py-2"
              >
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="px-6 py-3 rounded-xl border border-[#D4C4A8] dark:border-[#3A3A3A] text-[#2C2419] dark:text-white font-semibold text-sm hover:bg-[#EEEAE4] dark:hover:bg-[#262626] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2">
              Dashboard
            </button>
            <button className="px-6 py-3 rounded-xl bg-[#8B7355] hover:bg-[#75624A] text-white font-semibold text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2">
              Add to Discord
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#2C2419] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2 rounded-lg"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 bg-[#F5F4F0] dark:bg-[#1E1E1E] z-50 flex flex-col">
            {/* Mobile Header */}
            <div className="flex items-center justify-between h-16 px-6 border-b border-[#E8E6E1] dark:border-[#3A3A3A]">
              <div className="flex items-center space-x-3">
                <img
                  src="https://raw.createusercontent.com/a799031b-5d59-43ac-97df-4edda7d9e21d/"
                  alt="ProBot Logo"
                  className="h-10 w-10 rounded-xl"
                />
                <span className="text-[#2C2419] dark:text-white font-semibold text-xl">
                  ProBot
                </span>
              </div>
              <button
                className="p-2 text-[#2C2419] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2 rounded-lg"
                onClick={() => setIsMobileMenuOpen(false)}
                aria-label="Close mobile menu"
              >
                <X size={24} />
              </button>
            </div>

            {/* Mobile Navigation */}
            <nav className="flex-1 px-6 py-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center justify-between py-3 text-[#2C2419] dark:text-white hover:text-[#8B7355] dark:hover:text-[#D4C4A8] transition-colors duration-150 font-medium text-base border-b border-[#E8E6E1] dark:border-[#3A3A3A] last:border-b-0"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>

            {/* Mobile Action Buttons */}
            <div className="px-6 py-6 space-y-3 border-t border-[#E8E6E1] dark:border-[#3A3A3A]">
              <button
                className="w-full px-6 py-3 rounded-xl border border-[#D4C4A8] dark:border-[#3A3A3A] text-[#2C2419] dark:text-white font-semibold text-sm hover:bg-[#EEEAE4] dark:hover:bg-[#262626] transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Dashboard
              </button>
              <button
                className="w-full px-6 py-3 rounded-xl bg-[#8B7355] hover:bg-[#75624A] text-white font-semibold text-sm transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-[#8B7355] focus:ring-offset-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Add to Discord
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}

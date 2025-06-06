"use client";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Tracks", href: "#tracks" },
    { name: "Sponsors", href: "#sponsors" },
    { name: "Team", href: "#team" },
  ];

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setIsOpen(false); // Close mobile menu after click
  };

  // Scroll to top function for logo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false); // Close mobile menu if open
  };

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = ["about", "tracks", "sponsors", "team"];
      const scrollPos = scrollPosition + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Floating Navbar */}
      <nav
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-40 transition-all duration-300 w-full max-w-5xl px-4 ${
          isScrolled ? "translate-y-0 opacity-100" : "translate-y-0 opacity-95"
        }`}
      >
        <div className="relative">
          {/* Single subtle glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur-sm"></div>

          {/* Main navbar container */}
          <div className="relative bg-black/90 backdrop-blur-md border border-pink-500/40 rounded-2xl shadow-xl shadow-pink-500/10">
            <div className="px-6 py-3">
              <div className="flex items-center justify-between">
                {/* Simplified Logo */}
                <div className="flex-shrink-0">
                  <h1
                    className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500 hover:from-pink-300 hover:to-purple-400 transition-all duration-300 cursor-pointer"
                    onClick={scrollToTop}
                  >
                    CodeClash.in
                  </h1>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center space-x-1 ml-8">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeSection === item.href
                          ? "text-white bg-gradient-to-r from-pink-500 to-purple-500"
                          : "text-gray-300 hover:text-white hover:bg-pink-500/20"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>

                {/* Mobile menu button */}
                <div className="md:hidden">
                  <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="p-2 rounded-lg text-gray-300 hover:text-white hover:bg-pink-500/20 transition-all duration-200"
                  >
                    {isOpen ? (
                      <X className="h-5 w-5" />
                    ) : (
                      <Menu className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden mt-2 animate-in slide-in-from-top-2 duration-200">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-b from-pink-500/20 to-purple-500/20 rounded-xl blur-sm"></div>

              <div className="relative bg-black/90 backdrop-blur-md border border-pink-500/40 rounded-xl">
                <div className="p-3 space-y-1">
                  {navItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeSection === item.href
                          ? "text-white bg-gradient-to-r from-pink-500 to-purple-500"
                          : "text-gray-300 hover:text-white hover:bg-pink-500/20"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Add space for floating navbar */}
      <div className="h-16"></div>
    </>
  );
}

"use client";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  const navItems = [
    { name: "About", href: "#about", type: "anchor" },
    { name: "Tracks", href: "#tracks", type: "anchor" },
    { name: "Prize", href: "#prize-pool", type: "anchor" },
    { name: "Sponsors", href: "#sponsors", type: "anchor" },
    { name: "Team", href: "#team", type: "anchor" },
  ];

  const resultsItems = [
    { name: "Idea Submission", href: "/results/round-1" },
    { name: "Prototype Presentation", href: "/results/prototype-presentation" },
  ];

  // Handle navigation (both anchor scroll and route navigation)
  const handleNavigation = (href: string, type: string = "anchor") => {
    if (type === "route") {
      router.push(href);
    } else {
      scrollToSection(href);
    }
    setIsOpen(false); // Close mobile menu after click
    setIsResultsOpen(false); // Close results dropdown
  };

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId.replace("#", ""));
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  // Scroll to top function for logo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setIsOpen(false); // Close mobile menu if open
    setIsResultsOpen(false); // Close results dropdown
  };

  // Track active section and scroll state
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      const sections = ["about", "tracks", "prize-pool", "sponsors", "team"];
      let currentSection = "";

      // Find which section is currently most visible in the viewport
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;

          // Check if section is in viewport (with some buffer)
          if (
            scrollPosition + 200 >= elementTop &&
            scrollPosition < elementBottom - 100
          ) {
            currentSection = `#${section}`;
          }
        }
      }

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-results-dropdown]')) {
        setIsResultsOpen(false);
      }
    };

    if (isResultsOpen) {
      document.addEventListener("click", handleClickOutside);
    }
    
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isResultsOpen]);

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
                      onClick={() => handleNavigation(item.href, item.type)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeSection === item.href
                          ? "text-white bg-gradient-to-r from-pink-500 to-purple-500"
                          : "text-gray-300 hover:text-white hover:bg-pink-500/20"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                  
                  {/* Results Dropdown */}
                  <div className="relative" data-results-dropdown>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setIsResultsOpen(!isResultsOpen);
                      }}
                      className="flex items-center px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-pink-500/20 transition-all duration-200"
                    >
                      Results
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-200 ${isResultsOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isResultsOpen && (
                      <div className="absolute top-full mt-2 right-0 w-48 bg-black/95 backdrop-blur-md border border-pink-500/40 rounded-xl shadow-xl shadow-pink-500/10 overflow-hidden z-50">
                        {resultsItems.map((item) => (
                          <button
                            key={item.name}
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              handleNavigation(item.href, "route");
                            }}
                            className="block w-full text-left px-4 py-3 text-sm font-medium text-gray-300 hover:text-white hover:bg-pink-500/20 transition-all duration-200"
                          >
                            {item.name}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
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
                      onClick={() => handleNavigation(item.href, item.type)}
                      className={`block w-full text-left px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeSection === item.href
                          ? "text-white bg-gradient-to-r from-pink-500 to-purple-500"
                          : "text-gray-300 hover:text-white hover:bg-pink-500/20"
                      }`}
                    >
                      {item.name}
                    </button>
                  ))}
                  
                  {/* Mobile Results Section */}
                  <div className="pt-2 border-t border-gray-700/50">
                    <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                      Results
                    </div>
                    {resultsItems.map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavigation(item.href, "route")}
                        className="block w-full text-left px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-pink-500/20 transition-all duration-200 ml-2"
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
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

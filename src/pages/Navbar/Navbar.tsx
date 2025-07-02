import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { Link } from "react-router-dom";

export const Navbar = (): JSX.Element => {
  // State for mobile menu
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation menu items data
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 right-0 z-[100] bg-black/10 backdrop-blur-sm border-b border-white/5 py-3 md:py-4">
      <div className="max-w-[1200px] mx-auto px-4 h-full">
        <div className="flex items-center justify-start h-full gap-x-4 md:gap-x-16">
          {/* Logo - Wrapped in link to home */}
          <a href="/" className="flex items-center justify-center flex-shrink-0">
            <img
              src="/Navbar/SyntoraLogo1.png"
              alt="Syntora Logo"
              width={140}
              height={32}
              className="h-7 md:h-[32px] w-auto max-w-full"
              style={{ objectFit: 'contain' }}
            />
          </a>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex mr-auto">
            <ul className="flex space-x-6 lg:space-x-10">
              {navItems.map((item, index) => (
                <li key={index} className="relative group">
                  {item.href.startsWith('/') ? (
                    <Link
                      to={item.href}
                      className="text-gray-400 text-base font-normal hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-gray-400 text-base font-normal hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                  {/* Underline hover effect */}
                  <div className="absolute -bottom-1 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300" />
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button (visible < md) */}
          <div className="md:hidden ml-auto mr-2">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6 text-white" />
              ) : (
                <MenuIcon className="h-6 w-6 text-white" />
              )}
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>

          {/* Call to Action Button (remains at the end) */}
          <div className="hidden md:flex flex-shrink-0">
            <Link to="/book-a-call">
              <ShinyButton
                className="rounded-full text-sm font-normal px-5 py-2 border-[0.8px] border-solid border-[#1a1d31]"
                style={{
                  background: '#0d0d12',
                  '--primary': '#6E86FF',
                  boxShadow: '0 0 15px 2px rgba(110, 134, 255, 0.5)',
                } as React.CSSProperties}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6E86FF] to-[#FF6BBA]">
                  Book A Call
                </span>
              </ShinyButton>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 w-full bg-black border-b border-gray-800 shadow-lg md:hidden z-40">
          <nav className="px-4 pt-4 pb-6">
            <ul className="flex flex-col space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  {item.href.startsWith('/') ? (
                    <Link
                      to={item.href}
                      className="text-white text-base font-medium hover:text-gray-300 transition-colors block py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <a
                      href={item.href}
                      className="text-white text-base font-medium hover:text-gray-300 transition-colors block py-1"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar; 
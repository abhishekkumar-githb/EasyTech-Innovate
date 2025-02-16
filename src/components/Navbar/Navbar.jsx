/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { X } from "lucide-react"; // Using lucide-react for the close icon

function Navbar({ scrollToFeatures }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "About", to: "/about-us" },
    { name: "Contact", to: "/contactus" },
  ];

  return (
    <>
      <nav
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300
          ${isScrolled
            ? "bg-[#0A0A0A]/90 backdrop-blur-md shadow-lg"
            : "bg-gradient-to-r from-[#0A0A0A] via-[#1C3144]/50 to-[#0A0A0A]"
          }
        `}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center transform transition-transform duration-300 hover:scale-105"
              onClick={closeMobileMenu}
            >
              <span
                className={`
                  text-2xl sm:text-3xl md:text-4xl font-bold text-transparent bg-clip-text
                  ${isScrolled
                    ? "bg-gradient-to-r from-[#00FFFF] to-[#FF00A6]"
                    : "bg-gradient-to-r from-[#00FFFF] to-[#FF00A6] hover:from-[#FF00A6] hover:to-[#00FFFF] transition-all duration-500"
                  }
                `}
              >
                EasyTech Innovate
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) => `
                    text-lg font-semibold transition-colors duration-300 group relative
                    ${isActive ? 'text-[#00FFFF]' : 'text-gray-300 hover:text-[#00FFFF]'}
                  `}
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#FF00A6] transition-all duration-300 group-hover:w-full"></span>
                </NavLink>
              ))}

              <Link
                to="/ConnectWithUs"
                className="px-6 py-3 text-lg font-semibold bg-[#1C3144] text-white rounded-lg hover:bg-[#00FFFF] hover:text-black transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                Reach Out
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 rounded-lg text-[#00FFFF] hover:bg-[#1C3144]/30 transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu with Close Button */}
        <div
          className={`
            fixed inset-0 z-50 bg-gradient-to-br from-[#0A0A0A] via-[#1C3144]/95 to-[#0A0A0A]
            transform transition-all duration-300 ease-in-out
            ${isMobileMenuOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
            md:hidden
          `}
        >
          {/* Close Button */}
          <button
            onClick={closeMobileMenu}
            className="absolute top-4 right-4 p-2 rounded-full bg-[#1C3144]/50 text-[#00FFFF] hover:bg-[#1C3144] transition-all duration-300 transform hover:scale-110"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col h-full pt-20 px-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={closeMobileMenu}
                className={({ isActive }) => `
                  py-4 text-xl font-semibold border-b border-gray-700
                  ${isActive ? 'text-[#00FFFF]' : 'text-gray-300'}
                  transition-colors duration-300 hover:text-[#00FFFF]
                `}
              >
                {item.name}
              </NavLink>
            ))}
            <Link
              to="/ConnectWithUs"
              onClick={closeMobileMenu}
              className="mt-8 px-6 py-4 text-xl font-semibold bg-[#1C3144] text-white rounded-lg hover:bg-[#00FFFF] hover:text-black text-center transition-all duration-300"
            >
              Reach Out
            </Link>
          </div>
        </div>
      </nav>

      <div className="h-16 sm:h-20"></div>
    </>
  );
}

export default Navbar;
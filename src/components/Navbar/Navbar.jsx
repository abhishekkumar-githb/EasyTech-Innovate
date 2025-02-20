import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { X } from "lucide-react";
import Logo from "../../assets/Logo.jpeg";

function Navbar({ scrollToFeatures }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

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

  useEffect(() => {
    closeMobileMenu();
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? "hidden" : "unset";
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = "unset";
  };

  const navItems = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "About", to: "/about-us" },
    { name: "Our Team", to: "/ourteam" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Desktop Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3"
              onClick={closeMobileMenu}
            >
              <img
                src={Logo}
                alt="EasyTech Logo"
                className="h-12 w-12 sm:h-14 sm:w-14 rounded-full" // Increased logo size
              />
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#FF00A6]">
                EasyTech Innovate
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8 items-center">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  className={({ isActive }) =>
                    `text-lg font-semibold ${
                      isActive
                        ? "text-[#00FFFF]"
                        : "text-gray-300 hover:text-[#00FFFF]"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
              <Link
                to="/ConnectWithUs"
                className="px-6 py-3 text-lg font-semibold bg-gradient-to-r from-[#00FFFF] to-[#FF00A6] text-black rounded-lg hover:opacity-90 transition-all"
              >
                Reach Out
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="md:hidden p-2 text-[#00FFFF]"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
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

        {/* Mobile Menu */}
        <div
          className={`
            fixed inset-0 bg-black/95 md:hidden
            transform transition-transform duration-300 ease-in-out
            ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
          `}
        >
          <div className="flex flex-col h-full relative">
            {/* Mobile Header with Logo and Close Button */}
            <div className="flex items-center justify-between p-4 border-b border-gray-800">
              <Link
                to="/"
                className="flex items-center space-x-2"
                onClick={closeMobileMenu}
              >
                <img
                  src={Logo}
                  alt="EasyTech Logo"
                  className="h-8 w-8 rounded-full"
                />
                <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-[#FF00A6]">
                  EasyTech
                </span>
              </Link>
              <button
                onClick={closeMobileMenu}
                className="p-2 rounded-full bg-[#1C3144]/50 text-[#00FFFF] hover:bg-[#1C3144] transition-all duration-300"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col pt-8 px-6">
              {navItems.map((item, index) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `relative text-2xl font-semibold py-4
                    ${isActive ? "text-[#00FFFF]" : "text-gray-300"} 
                    transition-all duration-300 hover:text-[#00FFFF]
                    ${
                      index !== navItems.length - 1
                        ? "border-b border-gray-800"
                        : ""
                    }
                    group`
                  }
                >
                  <span className="relative inline-block">
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FFFF] transition-all duration-300 group-hover:w-full"></span>
                  </span>
                </NavLink>
              ))}

              <Link
                to="/ConnectWithUs"
                onClick={closeMobileMenu}
                className="mt-8 relative group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] to-[#FF00A6] rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity"></span>
                <span className="relative block px-8 py-3 text-xl font-semibold bg-gradient-to-r from-[#00FFFF] to-[#FF00A6] rounded-lg text-black text-center">
                  Reach Out
                </span>
              </Link>
            </div>

            {/* Bottom Gradient */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#1C3144] to-transparent pointer-events-none opacity-50"></div>
          </div>
        </div>
      </nav>
      <div className="h-16 sm:h-20"></div>
    </>
  );
}

export default Navbar;

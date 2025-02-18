import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Mobile View */}
      <div className="sm:hidden flex flex-col px-6 py-8">
        {/* Logo Section */}
        <div className="flex items-center justify-center space-x-2 mb-2">
          <div className="w-8 h-8 bg-[#00FFFF] rounded-full flex items-center justify-center">
            <span className="text-black font-bold text-sm">ET</span>
          </div>
          <span className="text-[#00FFFF] text-lg">EasyTech</span>
        </div>
        
        <p className="text-gray-300 text-sm text-center mb-8">
          Pioneering digital transformation through cutting-edge
          technology and innovative solutions.
        </p>

        {/* Quick Navigation */}
        <div className="mb-6">
          <h4 className="text-[#FF00A6] text-base mb-4 text-center">
            Quick Navigation
          </h4>
          <ul className="space-y-2">
            {[
              "Home",
              "Services",
              "Projects",
              "About Us",
              "Contact"
            ].map((item) => (
              <li key={item} className="flex items-center justify-center">
                <span className="inline-flex items-center text-gray-300">
                  <span className="w-1 h-1 bg-[#FF00A6] rounded-full mr-2"></span>
                  <span className="text-sm">{item}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Our Expertise */}
        <div className="mb-6">
          <h4 className="text-[#FF00A6] text-base mb-4 text-center">
            Our Expertise
          </h4>
          <ul className="space-y-2">
            {[
              "Web Development",
              "Mobile Solutions",
              "Cloud Engineering",
              "AI/ML Consulting",
              "Cybersecurity"
            ].map((item) => (
              <li key={item} className="flex items-center justify-center">
                <span className="inline-flex items-center text-gray-300">
                  <span className="w-1 h-1 bg-[#00FFFF] rounded-full mr-2"></span>
                  <span className="text-sm">{item}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Get In Touch */}
        <div className="mb-6">
          <h4 className="text-[#FF00A6] text-base mb-4 text-center">
            Get In Touch
          </h4>
          <div className="flex flex-col items-center space-y-2">
            <div className="flex items-center justify-center text-gray-300">
              <Mail className="text-[#00FFFF] w-4 h-4 mr-2" />
              <span className="text-sm">contact@easytechinnovate.com</span>
            </div>
            <div className="flex items-center justify-center text-gray-300">
              <Phone className="text-[#00FFFF] w-4 h-4 mr-2" />
              <span className="text-sm">+91 6206761669</span>
            </div>
            <div className="flex items-center justify-center text-gray-300">
              <MapPin className="text-[#00FFFF] w-4 h-4 mr-2" />
              <span className="text-sm">Banglore, Karnataka</span>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex justify-center space-x-4 mb-4">
          <Linkedin className="w-5 h-5 text-[#00FFFF]" />
          <Instagram className="w-5 h-5 text-[#00FFFF]" />
          <Facebook className="w-5 h-5 text-[#00FFFF]" />
          <Twitter className="w-5 h-5 text-[#00FFFF]" />
        </div>

        {/* Legal Links */}
        <div className="flex justify-center space-x-4 text-xs text-gray-400">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-service">Terms of Service</Link>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden sm:block">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-[#00FFFF] rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-lg">ET</span>
                </div>
                <h3 className="text-xl font-bold text-[#00FFFF]">EasyTech</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Pioneering digital transformation through cutting-edge technology
                and innovative solutions.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#FF00A6]">
                Quick Navigation
              </h4>
              <ul className="space-y-3">
                {[
                  { name: "Home", to: "/" },
                  { name: "Services", to: "/services" },
                  { name: "Projects", to: "/projects" },
                  { name: "About Us", to: "/about" },
                  { name: "Contact", to: "/contact" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-gray-300 hover:text-[#00FFFF] transition-colors flex items-center space-x-2"
                    >
                      <span className="w-1.5 h-1.5 bg-[#FF00A6] rounded-full"></span>
                      <span>{link.name}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#FF00A6]">
                Our Expertise
              </h4>
              <ul className="space-y-3">
                {[
                  "Web Development",
                  "Mobile Solutions",
                  "Cloud Engineering",
                  "AI/ML Consulting",
                  "Cybersecurity",
                ].map((service) => (
                  <li
                    key={service}
                    className="text-gray-300 hover:text-[#00FFFF] transition-colors flex items-center space-x-2"
                  >
                    <span className="w-1.5 h-1.5 bg-[#00FFFF] rounded-full"></span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-[#FF00A6]">
                Get In Touch
              </h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="text-[#00FFFF] w-5 h-5" />
                  <span>contact@easytechinnovate.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="text-[#00FFFF] w-5 h-5" />
                  <span>+91 6206761669</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="text-[#00FFFF] w-5 h-5" />
                  <span>Banglore, Karnataka</span>
                </div>

                {/* Social Media */}
                <div className="flex space-x-4 pt-4">
                  {[
                    { Icon: Linkedin, href: "#linkedin" },
                    { Icon: Instagram, href: "#instagram" },
                    { Icon: Facebook, href: "#facebook" },
                    { Icon: Twitter, href: "#twitter" },
                  ].map(({ Icon, href }) => (
                    <a
                      key={href}
                      href={href}
                      className="text-[#00FFFF] hover:text-[#FF00A6] transition-colors duration-300"
                    >
                      <Icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} EasyTech. All Rights Reserved.
              </p>
              <div className="flex space-x-6 text-sm text-gray-400">
                <Link to="/privacy-policy" className="hover:text-[#00FFFF]">
                  Privacy Policy
                </Link>
                <Link to="/terms-of-service" className="hover:text-[#00FFFF]">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
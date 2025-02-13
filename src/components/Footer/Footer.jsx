// import React from 'react';
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
    <footer className="bg-gradient-to-r from-[#0A0A0A] via-[#1C3144]/50 to-[#0A0A0A] text-white py-10 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Company Info */}
          <div className="space-y-4 text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center space-x-3">
              <div className="w-12 h-12 bg-[#00FFFF] rounded-full flex items-center justify-center">
                <span className="text-[#0A0A0A] font-bold text-xl">ET</span>
              </div>
              <h3 className="text-2xl font-bold text-[#00FFFF]">EasyTech</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Pioneering digital transformation through cutting-edge technology
              and innovative solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-xl font-semibold text-[#FF00A6] mb-4">
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
                    className="text-gray-300 hover:text-[#00FFFF] transition-colors flex items-center justify-center md:justify-start space-x-2"
                  >
                    <span className="w-2 h-2 bg-[#FF00A6] rounded-full"></span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-xl font-semibold text-[#FF00A6] mb-4">
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
                  className="text-gray-300 hover:text-[#00FFFF] transition-colors flex items-center justify-center md:justify-start space-x-2"
                >
                  <span className="w-2 h-2 bg-[#00FFFF] rounded-full"></span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4 text-center md:text-left">
            <h4 className="text-xl font-semibold text-[#FF00A6] mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-gray-300">
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Mail size={20} className="text-[#00FFFF]" />
                <span>contact@easytechinnovate.com</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <Phone size={20} className="text-[#00FFFF]" />
                <span>+91 6206761669</span>
              </div>
              <div className="flex items-center justify-center md:justify-start space-x-3">
                <MapPin size={20} className="text-[#00FFFF]" />
                <span>Banglore , Karnataka</span>
              </div>

              {/* Social Media Icons */}
              <div className="flex justify-center md:justify-start space-x-4 mt-6">
                <a
                  href="#linkedin"
                  className="text-[#00FFFF] hover:text-[#FF00A6] transition-colors duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#instagram"
                  className="text-[#00FFFF] hover:text-[#FF00A6] transition-colors duration-300"
                  aria-label="Instagram"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="#facebook"
                  className="text-[#00FFFF] hover:text-[#FF00A6] transition-colors duration-300"
                  aria-label="Facebook"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="#twitter"
                  className="text-[#00FFFF] hover:text-[#FF00A6] transition-colors duration-300"
                  aria-label="Twitter"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="mt-10 pt-6 border-t border-[#00FFFF]/20 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm text-gray-400 order-2 md:order-1">
            © {new Date().getFullYear()} EasyTech Innovate. All Rights Reserved.
          </p>
          <div className="flex space-x-4 text-sm text-gray-300 order-1 md:order-2">
            <Link to="/privacy-policy" className="hover:text-[#00FFFF]">
              Privacy Policy
            </Link>
            <Link to="/term-services" className="hover:text-[#00FFFF]">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

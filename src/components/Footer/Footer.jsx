import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  MapPin,
  Mail,
  Phone,
  Plus,
  Minus,
} from "lucide-react";
import { footerConfig } from "./footerConfig.js";
import Logo from "../../assets/Logo.jpeg";

const Footer = () => {
  const { company, navigation, expertise, contact, social, legal } = footerConfig;
  
  const [expandedSection, setExpandedSection] = useState("");
  
  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection("");
    } else {
      setExpandedSection(section);
    }
  };
  
  const IconMap = {
    Linkedin,
    Instagram,
    Facebook,
    Twitter,
  };

  return (
    <footer className="bg-gradient-to-r from-[#0A0A0A] via-[#1C3144]/50 to-[#0A0A0A]">
      <div className="grid grid-cols-6">
        <div className="h-1 bg-blue-400"></div>
        <div className="h-1 bg-cyan-400"></div>
        <div className="h-1 bg-teal-400"></div>
        <div className="h-1 bg-pink-400"></div>
        <div className="h-1 bg-purple-400"></div>
        <div className="h-1 bg-blue-400"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="hidden md:flex flex-col lg:flex-row justify-between gap-12 mb-12">
          <div className="w-full lg:w-1/3 space-y-6">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded bg-gradient-to-r from-[#00FFFF] to-[#FF00A6] p-[2px]">
                <div className="w-full h-full bg-black flex items-center justify-center rounded-sm overflow-hidden">
                  <img src={Logo} alt="EasyTech Logo" className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="text-white text-xl font-bold">{company.name}</span>
            </div>
            
            <p className="text-gray-400 leading-relaxed">
              {company.description}
            </p>
            
            <div className="space-y-4 pt-4">
              <h4 className="text-white text-lg font-medium mb-4">Contact Us</h4>
              <a 
                href={`mailto:${contact.email}`} 
                className="flex items-center space-x-3 text-gray-400 hover:text-[#00FFFF] transition duration-300 group"
              >
                <Mail className="text-[#00FFFF] w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{contact.email}</span>
              </a>
              <a 
                href={`tel:${contact.phone}`} 
                className="flex items-center space-x-3 text-gray-400 hover:text-[#00FFFF] transition duration-300 group"
              >
                <Phone className="text-[#00FFFF] w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>{contact.phone}</span>
              </a>
              <div className="flex items-center space-x-3 text-gray-400">
                <MapPin className="text-[#00FFFF] w-5 h-5" />
                <span>{contact.location}</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-1 justify-between gap-8">
            <div className="space-y-6">
              <h4 className="text-white text-lg font-medium">Quick Links</h4>
              <ul className="space-y-3">
                {navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-[#FF00A6] transition duration-300 block"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-white text-lg font-medium">Our Expertise</h4>
              <ul className="space-y-3">
                {expertise.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.to}
                      className="text-gray-400 hover:text-[#00FFFF] transition duration-300 block"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-white text-lg font-medium">Follow Us</h4>
              <div className="grid grid-cols-2 gap-4">
                {social.map((item) => {
                  const Icon = IconMap[item.icon];
                  return (
                    <a
                      key={item.name}
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-[#FF00A6] transition duration-300 group"
                    >
                      <div className="w-8 h-8 bg-gray-900 rounded flex items-center justify-center group-hover:bg-[#FF00A6]/20">
                        <Icon className="w-4 h-4 group-hover:text-[#FF00A6]" />
                      </div>
                      <span>{item.name}</span>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        
        <div className="md:hidden space-y-6">
          <div className="text-center pb-6 border-b border-gray-800">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="w-10 h-10 rounded bg-gradient-to-r from-[#00FFFF] to-[#FF00A6] p-[2px]">
                <div className="w-full h-full bg-black flex items-center justify-center rounded-sm overflow-hidden">
                  <img src={Logo} alt="EasyTech Logo" className="w-full h-full object-cover" />
                </div>
              </div>
              <span className="text-white text-xl font-bold">{company.name}</span>
            </div>
            
            <p className="text-gray-400 text-sm mb-6">
              {company.description}
            </p>
            
            <div className="flex justify-center space-x-4">
              {social.map((item) => {
                const Icon = IconMap[item.icon];
                return (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center text-[#00FFFF] hover:bg-[#00FFFF] hover:text-black transition-all duration-300"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div className="border-b border-gray-800 pb-4">
            <button 
              onClick={() => toggleSection("navigation")}
              className="w-full flex items-center justify-between py-2 text-white font-medium"
              aria-expanded={expandedSection === "navigation"}
            >
              <span>Quick Links</span>
              {expandedSection === "navigation" ? (
                <Minus className="w-5 h-5 text-[#FF00A6]" />
              ) : (
                <Plus className="w-5 h-5 text-[#FF00A6]" />
              )}
            </button>
            
            {expandedSection === "navigation" && (
              <ul className="mt-4 space-y-3 pl-2">
                {navigation.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-gray-400 hover:text-white transition duration-300 block py-1"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="border-b border-gray-800 pb-4">
            <button 
              onClick={() => toggleSection("expertise")}
              className="w-full flex items-center justify-between py-2 text-white font-medium"
              aria-expanded={expandedSection === "expertise"}
            >
              <span>Our Expertise</span>
              {expandedSection === "expertise" ? (
                <Minus className="w-5 h-5 text-[#00FFFF]" />
              ) : (
                <Plus className="w-5 h-5 text-[#00FFFF]" />
              )}
            </button>
            
            {expandedSection === "expertise" && (
              <ul className="mt-4 space-y-3 pl-2">
                {expertise.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.to}
                      className="text-gray-400 hover:text-white transition duration-300 block py-1"
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
          
          <div className="border-b border-gray-800 pb-4">
            <button 
              onClick={() => toggleSection("contact")}
              className="w-full flex items-center justify-between py-2 text-white font-medium"
              aria-expanded={expandedSection === "contact"}
            >
              <span>Contact Us</span>
              {expandedSection === "contact" ? (
                <Minus className="w-5 h-5 text-[#FF00A6]" />
              ) : (
                <Plus className="w-5 h-5 text-[#FF00A6]" />
              )}
            </button>
            
            {expandedSection === "contact" && (
              <div className="mt-4 space-y-4 pl-2">
                <a 
                  href={`mailto:${contact.email}`}
                  className="flex items-center space-x-3 text-gray-400"
                >
                  <Mail className="text-[#00FFFF] w-5 h-5" />
                  <span className="text-sm">{contact.email}</span>
                </a>
                <a 
                  href={`tel:${contact.phone}`}
                  className="flex items-center space-x-3 text-gray-400"
                >
                  <Phone className="text-[#00FFFF] w-5 h-5" />
                  <span className="text-sm">{contact.phone}</span>
                </a>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="text-[#00FFFF] w-5 h-5" />
                  <span className="text-sm">{contact.location}</span>
                </div>
              </div>
            )}
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0 text-center md:text-left">
              © {new Date().getFullYear()} {company.name}. All Rights Reserved.
            </p>
            
            <div className="flex space-x-6 text-sm text-gray-500">
              {legal.map((item) => (
                <Link
                  key={item.name}
                  to={item.to}
                  className="hover:text-[#00FFFF] transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
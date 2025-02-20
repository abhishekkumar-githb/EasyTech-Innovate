/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useRef, useState } from "react";
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Menu,
  Star,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import { homeConfig } from "./homeConfig.js";
import IdeaImg from "../../../assets/ideaa.png";
import AboutUsImg from "../../../assets/abou.webp";

const TestimonialCard = ({ image, quote, name, position, rating }) => (
  <div className="bg-[#1C3144]/30 p-6 rounded-xl border border-[#00FFFF]/20 hover:bg-[#1C3144]/50 transition-all duration-300">
    <div className="flex flex-col items-center text-center">
      <div className="w-20 h-20 mb-6">
        <img
          src={image}
          alt={name}
          className="rounded-full border-4 border-[#00FFFF]/10"
        />
      </div>

      <div className="flex gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#00FFFF] text-[#00FFFF]" />
        ))}
      </div>

      <p className="text-gray-300 text-base italic mb-6">"{quote}"</p>

      <div className="flex flex-col items-center">
        <h4 className="text-white font-semibold text-lg mb-1">{name}</h4>
        <p className="text-[#00FFFF]/80 text-sm">{position}</p>
      </div>
    </div>
  </div>
);

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#00FFFF]/20 rounded-lg overflow-hidden bg-[#1C3144]/30 hover:bg-[#1C3144]/50 transition-all duration-300">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-white">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-[#00FFFF]" />
        ) : (
          <ChevronDown className="w-5 h-5 text-[#00FFFF]" />
        )}
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-4 text-gray-300">{answer}</div>
      </div>
    </div>
  );
};

const HomePage = () => {
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar
        scrollToFeatures={scrollToFeatures}
        scrollToPricing={scrollToPricing}
      />

      {/* Hero Section */}
      <div className="pt-10 bg-gradient-to-r from-[#0A0A0A] via-[#1C3144]/50 to-[#0A0A0A]">
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 text-center lg:text-left">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
                {homeConfig.hero.title.primary}{" "}
                <span className="text-[#00FFFF]">
                  {homeConfig.hero.title.highlightFirst}
                </span>{" "}
                {homeConfig.hero.title.secondary}{" "}
                <span className="text-[#FF00A6]">
                  {homeConfig.hero.title.highlightSecond}
                </span>
              </h1>
              <div className="space-y-4 text-gray-300">
                <p className="text-base md:text-lg">
                  {homeConfig.hero.description}
                </p>
                <ul className="space-y-2 text-left max-w-md mx-auto lg:mx-0">
                  {homeConfig.hero.highlights.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="w-2 h-2 bg-[#FF00A6] rounded-full mr-2"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                to="/ConnectWithUs"
                className="mx-auto lg:mx-0 block w-full max-w-xs bg-[#1C3144] text-white px-6 py-3 rounded-lg hover:bg-[#00FFFF] hover:text-black transition-colors duration-300 flex items-center justify-center shadow-lg hover:shadow-xl"
              >
                Schedule a Meeting <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>

            <div className="flex justify-center lg:ml-auto">
              <img
                src={IdeaImg}
                alt="Technology Visualization"
                className="rounded-xl shadow-lg w-64 md:w-80 h-64 md:h-80 object-cover border-2"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-gradient-to-r from-[#0A0A0A] via-[#1C3144]/50 to-[#0A0A0A] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="order-2 lg:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 text-center lg:text-left">
                About <span className="text-[#00FFFF]">Our Company</span>
              </h2>
              <p className="text-base md:text-lg text-gray-300 mb-4 md:mb-6 text-center lg:text-left">
                We are a technology-driven innovation partner committed to
                transforming complex ideas into groundbreaking digital
                solutions. Our multidisciplinary team combines technical
                expertise with creative problem-solving to deliver cutting-edge
                products.
              </p>
              <div className="space-y-3 text-left max-w-md mx-auto lg:mx-0">
                {homeConfig.about.highlights.map((item) => (
                  <div key={item} className="flex items-center">
                    <span className="w-3 h-3 bg-[#FF00A6] rounded-full mr-3"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2 flex justify-center">
              <img
                src={AboutUsImg}
                alt="Company Mission Visualization"
                className="w-full max-w-md h-auto rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-gradient-to-r from-[#0A0A0A] via-[#1C3144]/50 to-[#0A0A0A] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 md:mb-12 text-center">
            Our <span className="text-[#00FFFF]">Services</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {homeConfig.services.map((service) => (
              <div
                key={service.title}
                className="bg-[#1C3144]/30 p-4 md:p-6 rounded-xl border border-[#00FFFF]/20 hover:bg-[#1C3144]/50 transition-all duration-300"
              >
                <div className="text-3xl md:text-4xl mb-3 md:mb-4 text-center">
                  {service.icon}
                </div>
                <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3 text-[#00FFFF] text-center">
                  {service.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-r from-[#0A0A0A] via-[#1C3144]/50 to-[#0A0A0A] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Client <span className="text-[#00FFFF]">Testimonials</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
              Don't just take our word for it - hear what our clients have to
              say about their experience working with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {homeConfig.testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-gradient-to-r from-[#0A0A0A] via-[#1C3144]/50 to-[#0A0A0A] text-white py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
              Frequently Asked <span className="text-[#00FFFF]">Questions</span>
            </h2>
            <p className="text-sm md:text-base text-gray-300 max-w-2xl mx-auto">
              {homeConfig.faq.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {homeConfig.faq.questions.map((item, index) => (
              <div
                key={index}
                className="bg-[#1C3144]/30 p-6 rounded-xl border border-[#00FFFF]/20 hover:bg-[#1C3144]/50 transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-[#00FFFF] mb-3">
                  {item.question}
                </h3>
                <p className="text-gray-300 text-base">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default HomePage;
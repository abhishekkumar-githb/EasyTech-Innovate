// import React from "react";
import { FileText, ChevronRight } from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

const TermServices = () => {
  const terms = [
    {
      title: "Agreement to Terms",
      content: "By accessing our service, you agree to be bound by these Terms. If you disagree with any part of the terms, you may not access the service.",
      items: [
        "You must be at least 18 years old",
        "You must provide accurate registration information",
        "You are responsible for maintaining account security",
        "You agree to use the service legally and appropriately"
      ]
    },
    {
      title: "Intellectual Property",
      content: "Our service and its original content, features, and functionality are owned by us and are protected by:",
      items: [
        "International copyright laws",
        "Trademark laws",
        "Other intellectual property rights",
        "Proprietary rights"
      ]
    },
    {
      title: "User Responsibilities",
      content: "When using our service, you agree not to:",
      items: [
        "Violate any applicable laws or regulations",
        "Infringe upon others' rights",
        "Distribute harmful content or malware",
        "Attempt to breach security measures"
      ]
    },
    {
      title: "Service Modifications",
      content: "We reserve the right to:",
      items: [
        "Modify or discontinue our service",
        "Change fees or pricing",
        "Limit service availability",
        "Restrict access to certain features"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-[#0A0A0A] py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FFFF]/10 via-transparent to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-[#1C3144]/20 backdrop-blur-sm" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <FileText className="w-16 h-16 text-[#00FFFF]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Terms of <span className="text-[#00FFFF]">Service</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Please read these terms carefully before using our services.
            </p>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="space-y-12">
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-300 text-lg">
              Last updated: February 13, 2025
            </p>
          </div>

          {terms.map((section, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-[#1C3144]/30 to-[#0A0A0A]/30 p-8 rounded-2xl border border-[#00FFFF]/20 hover:border-[#00FFFF]/30 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                <ChevronRight className="w-6 h-6 text-[#00FFFF] mr-2" />
                {section.title}
              </h2>
              <p className="text-gray-300 mb-4">{section.content}</p>
              <ul className="space-y-2">
                {section.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-gray-400 flex items-start"
                  >
                    <span className="text-[#00FFFF] mr-2">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="bg-gradient-to-br from-[#1C3144]/30 to-[#0A0A0A]/30 p-8 rounded-2xl border border-[#00FFFF]/20">
            <h2 className="text-2xl font-bold text-white mb-4">Questions?</h2>
            <p className="text-gray-300">
              If you have any questions about our Terms of Service, please contact us at:
            </p>
            <p className="text-[#00FFFF] mt-2">legal@company.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermServices;
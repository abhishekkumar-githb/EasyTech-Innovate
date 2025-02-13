// import React from "react";
import { Shield, ChevronRight } from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

const PrivacyPolicy = () => {
  const policies = [
    {
      title: "Information Collection",
      content: "We collect information that you provide directly to us, including but not limited to:",
      items: [
        "Name and contact information",
        "Payment information",
        "Device and usage information",
        "Communications with us"
      ]
    },
    {
      title: "Use of Information",
      content: "We use the information we collect for various purposes, including:",
      items: [
        "Providing and maintaining our services",
        "Processing your transactions",
        "Sending you technical notices",
        "Responding to your comments and questions"
      ]
    },
    {
      title: "Information Sharing",
      content: "We may share your information with:",
      items: [
        "Service providers and business partners",
        "Legal authorities when required",
        "Other parties with your consent",
        "During business transfers or acquisitions"
      ]
    },
    {
      title: "Data Security",
      content: "We implement appropriate security measures to protect your information:",
      items: [
        "Encryption of sensitive data",
        "Regular security assessments",
        "Access controls and monitoring",
        "Secure data storage systems"
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
              <Shield className="w-16 h-16 text-[#00FFFF]" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Privacy <span className="text-[#00FFFF]">Policy</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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

          {policies.map((section, index) => (
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
            <h2 className="text-2xl font-bold text-white mb-4">Contact Us</h2>
            <p className="text-gray-300">
              If you have any questions about our Privacy Policy, please contact us at:
            </p>
            <p className="text-[#00FFFF] mt-2">privacy@company.com</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
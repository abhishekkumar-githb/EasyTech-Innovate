import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Send,
  MessageSquare,
  ArrowRight,
  Clock,
} from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [activeSection, setActiveSection] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: "Visit Our Office",
      details: "Brigade Tech Park, Whitefield",
      description: "Bangalore, Karnataka 560066",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Business Hours",
      details: "Mon - Fri: 9:00 AM - 6:00 PM",
      description: "Weekend: Closed",
    },
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Contact Info",
      details: "+91 80 4123 5678",
      description: "contact@company.com",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden bg-[#0A0A0A] py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-[#00FFFF]/10 via-transparent to-transparent animate-pulse" />
          <div className="absolute inset-0 bg-[#1C3144]/20 backdrop-blur-sm" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Let's{" "}
              <span className="text-[#00FFFF] inline-block hover:scale-110 transition-transform">
                Connect
              </span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Transform ideas into reality. Reach out to us and let's create
              something extraordinary together.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Contact Cards */}
      <div className="max-w-7xl mx-auto px-4 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#1C3144]/90 to-[#0A0A0A]/90 p-8 rounded-2xl backdrop-blur-lg border border-[#00FFFF]/10 hover:border-[#00FFFF]/30 transition-all duration-300 transform hover:-translate-y-2"
              onMouseEnter={() => setActiveSection(index)}
              onMouseLeave={() => setActiveSection(null)}
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-4 bg-[#00FFFF]/10 rounded-full group-hover:bg-[#00FFFF]/20 transition-colors">
                  <div className="text-[#00FFFF]">{info.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {info.title}
                </h3>
                <p className="text-[#00FFFF] mb-2">{info.details}</p>
                <p className="text-gray-400">{info.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-gradient-to-br from-[#1C3144]/50 to-[#0A0A0A]/50 p-8 rounded-2xl border border-[#00FFFF]/20">
            <div className="flex items-center mb-8">
              <MessageSquare className="w-8 h-8 text-[#00FFFF] mr-4" />
              <h2 className="text-3xl font-bold text-white">Send Message</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-gray-300 text-sm">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-[#1C3144]/30 border border-[#00FFFF]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FFFF] transition-colors"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-gray-300 text-sm">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-[#1C3144]/30 border border-[#00FFFF]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FFFF] transition-colors"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-[#1C3144]/30 border border-[#00FFFF]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FFFF] transition-colors"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-gray-300 text-sm">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full bg-[#1C3144]/30 border border-[#00FFFF]/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[#00FFFF] transition-colors resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="group w-full bg-[#00FFFF] text-black px-6 py-4 rounded-lg hover:bg-[#00FFFF]/90 transition-all duration-300 flex items-center justify-center font-bold"
              >
                Send Message
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Map */}
          <div className="bg-gradient-to-br from-[#1C3144]/50 to-[#0A0A0A]/50 p-8 rounded-2xl border border-[#00FFFF]/20">
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-white">Our Location</h2>
              <p className="text-gray-400 mt-2">
                Find us in the heart of India's Silicon Valley
              </p>
            </div>
            <div className="w-full h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.3660091363997!2d77.7147873!3d13.0198416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1196bb17b8ad%3A0x85d576b04fcc1c9f!2sBrigade%20Tech%20Park%2C%20Whitefield%2C%20Bengaluru%2C%20Karnataka%20560066!5e0!3m2!1sen!2sin!4v1665147415267!5w200!5h200"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
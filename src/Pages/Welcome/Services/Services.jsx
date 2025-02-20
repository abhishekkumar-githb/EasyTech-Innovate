/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Code2,
  Smartphone,
  Cloud,
  Shield,
  Database,
  Bot,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

// Service Card Component
const ServiceCard = ({ icon: Icon, title, description, features }) => (
  <div className="group relative bg-[#1C3144]/30 rounded-xl p-8 border border-[#00FFFF]/20 hover:bg-[#1C3144]/50 transition-all duration-500 hover:transform hover:-translate-y-2">
    <div className="absolute inset-0 bg-gradient-to-b from-[#00FFFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
    <div className="flex flex-col items-center text-center relative z-10">
      <div className="p-4 bg-[#00FFFF]/10 rounded-full mb-6 group-hover:bg-[#00FFFF]/20 transition-all duration-500 transform group-hover:scale-110">
        <Icon className="w-10 h-10 text-[#00FFFF]" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      <p className="text-gray-300 mb-8 leading-relaxed">{description}</p>
      <ul className="space-y-4 text-left w-full">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start space-x-3 group/item">
            <CheckCircle className="w-5 h-5 text-[#FF00A6] mt-1 flex-shrink-0 transform group-hover/item:scale-110 transition-transform duration-300" />
            <span className="text-gray-300 group-hover/item:text-white transition-colors duration-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Stats Section Component
const StatsSection = () => {
  const stats = [
    { number: "500+", label: "Projects Completed", prefix: "" },
    { number: "98", label: "Client Satisfaction", prefix: "%" },
    { number: "50", label: "Expert Developers", prefix: "+" },
    { number: "24/7", label: "Support Available", prefix: "" }
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 my-20">
      {stats.map((stat, index) => (
        <div key={index} className="relative group">
          <div className="relative text-center p-6 bg-[#1C3144]/30 rounded-xl border border-[#00FFFF]/20 hover:border-[#00FFFF]/40 transition-all duration-500">
            <div className="text-4xl md:text-5xl font-bold text-[#00FFFF] mb-3 group-hover:transform group-hover:scale-110 transition-transform duration-500">
              {stat.number}{stat.prefix}
            </div>
            <div className="text-gray-300 font-medium">
              {stat.label}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Process Step Component
const ProcessStep = ({ number, title, description }) => (
  <div className="group relative">
    <div className="relative bg-[#1C3144]/30 p-8 rounded-xl border border-[#00FFFF]/20 hover:border-[#00FFFF]/40 transition-all duration-500">
      <div className="flex items-start space-x-6">
        <div className="w-12 h-12 rounded-full bg-[#FF00A6] flex items-center justify-center flex-shrink-0 transform group-hover:scale-110 transition-transform duration-500">
          <span className="text-white text-xl font-bold">{number}</span>
        </div>
        <div>
          <h4 className="text-xl font-bold text-white mb-3">{title}</h4>
          <p className="text-gray-300 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  </div>
);

// Hero Section Component
const HeroSection = ({ onConsultation, onPortfolio }) => (
  <div className="relative bg-gradient-to-r from-[#0A0A0A] via-[#1C3144]/50 to-[#0A0A0A] py-32">
    <div className="relative max-w-7xl mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          Transform Your Business with Our
          <span className="text-[#00FFFF] block mt-2">Digital Solutions</span>
        </h1>
        <p className="text-gray-300 text-xl mb-12 leading-relaxed">
          We offer comprehensive technology services to help your business thrive in the digital age. 
          Our expert team delivers innovative solutions tailored to your needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={onConsultation}
            className="group bg-[#00FFFF] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FF00A6] hover:text-white transition-all duration-500 flex items-center justify-center space-x-2"
          >
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-500" />
          </button>
          <button 
            onClick={onPortfolio}
            className="group border-2 border-[#00FFFF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#00FFFF]/10 transition-all duration-500"
          >
            Learn More
          </button>
        </div>
      </div>
    </div>
  </div>
);

// CTA Section Component
const CTASection = ({ onConsultation, onPortfolio }) => (
  <div className="max-w-7xl mx-auto px-4 py-20">
    <div className="relative group">
      <div className="relative bg-[#1C3144]/30 rounded-xl p-12 border border-[#00FFFF]/20 text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
        <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
          Let's discuss how we can help transform your business with our technology solutions.
          Our team is ready to bring your ideas to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <button 
            onClick={onConsultation}
            className="group bg-[#00FFFF] text-black px-8 py-4 rounded-lg font-semibold hover:bg-[#FF00A6] hover:text-white transition-all duration-500 flex items-center justify-center space-x-2"
          >
            <span>Schedule Consultation</span>
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-500" />
          </button>
          <button 
            onClick={onPortfolio}
            className="border-2 border-[#00FFFF] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#00FFFF]/10 transition-all duration-500"
          >
            View Portfolio
          </button>
        </div>
      </div>
    </div>
  </div>
);

// Main Services Page Component
const ServicesPage = () => {
  const navigate = useNavigate();
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);

  const handleConsultation = () => {
    navigate('/ConnectWithUs'); 
  };

  const handlePortfolio = () => {
    window.open('https://portfolio-two-eta-86.vercel.app/', '_blank'); 
  };

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const services = [
    {
      icon: Code2,
      title: "Web Development",
      description: "Create stunning, responsive websites and web applications",
      features: [
        "Custom website development",
        "Progressive Web Apps (PWA)",
        "E-commerce solutions",
        "Performance optimization"
      ]
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Build native and cross-platform mobile applications",
      features: [
        "iOS and Android development",
        "React Native solutions",
        "Mobile app maintenance",
        "App store optimization"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Scale your infrastructure with cloud solutions",
      features: [
        "Cloud migration",
        "AWS/Azure/GCP setup",
        "Cloud optimization",
        "DevOps automation"
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Protect your digital assets with advanced security",
      features: [
        "Security audits",
        "Penetration testing",
        "Compliance consulting",
        "Security training"
      ]
    },
    {
      icon: Database,
      title: "Data Analytics",
      description: "Transform your data into actionable insights",
      features: [
        "Business intelligence",
        "Data visualization",
        "Predictive analytics",
        "Data warehousing"
      ]
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "Leverage artificial intelligence for your business",
      features: [
        "Machine learning models",
        "Natural language processing",
        "Computer vision",
        "AI integration"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <Navbar
        scrollToFeatures={scrollToFeatures}
        scrollToPricing={scrollToPricing}
      />
      
      {/* Hero Section */}
      <HeroSection 
        onConsultation={handleConsultation}
        onPortfolio={handlePortfolio}
      />

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4">
        <StatsSection />
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our <span className="text-[#00FFFF]">Services</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Discover our comprehensive range of digital services designed to help your business succeed in the modern world.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="relative bg-gradient-to-r from-[#0A0A0A] via-[#1C3144]/50 to-[#0A0A0A] py-20">
        <div className="relative max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-[#00FFFF]">Process</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              We follow a proven methodology to ensure successful project delivery and client satisfaction.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProcessStep 
              number="1"
              title="Discovery"
              description="We analyze your requirements and create a comprehensive project plan aligned with your business goals."
            />
            <ProcessStep 
              number="2"
              title="Design"
              description="Our team creates detailed designs and interactive prototypes for your review and approval."
            />
            <ProcessStep 
              number="3"
              title="Development"
              description="We build your solution using cutting-edge technologies and industry best practices."
            />
            <ProcessStep 
              number="4"
              title="Delivery"
              description="After thorough testing and optimization, we deploy your solution and provide ongoing support."
            />
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <CTASection 
        onConsultation={handleConsultation}
        onPortfolio={handlePortfolio}
      />
      
      <Footer />
    </div>
  );
};

export default ServicesPage;
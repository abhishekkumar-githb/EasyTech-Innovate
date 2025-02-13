/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
import React, { useState, useEffect } from "react";
import {
  Users,
  Target,
  Award,
  TrendingUp,
  Clock,
  Globe,
  Star,
  Zap,
  CheckCircle,
  ArrowRight,
  ChevronDown,
} from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";
import TeamMember from "../../../assets/TeamMember.webp"

// Team Member Card Component
const TeamMemberCard = ({ image, name, role, description }) => (
  <div className="group relative bg-gradient-to-b from-[#1C3144]/50 to-[#1C3144]/30 rounded-2xl overflow-hidden shadow-xl transition-all duration-500 hover:transform hover:-translate-y-2">
    <div className="aspect-w-3 aspect-h-4">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-8">
      <h3 className="text-2xl font-bold text-white mb-2">{name}</h3>
      <p className="text-[#00FFFF] font-medium mb-4">{role}</p>
      <p className="text-gray-300 text-sm leading-relaxed transform transition-all duration-500 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0">
        {description}
      </p>
    </div>
  </div>
);

// Value Card Component
const ValueCard = ({ icon: Icon, title, description }) => (
  <div className="group relative bg-gradient-to-br from-[#1C3144]/50 to-[#1C3144]/30 rounded-2xl p-8 border border-[#00FFFF]/20 hover:border-[#00FFFF]/40 transition-all duration-500">
    <div className="absolute inset-0 bg-gradient-to-b from-[#00FFFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
    <div className="relative z-10">
      <div className="p-4 bg-[#00FFFF]/10 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-[#00FFFF]/20 transition-all duration-500 transform group-hover:scale-110">
        <Icon className="w-10 h-10 text-[#00FFFF]" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#00FFFF] transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-300 leading-relaxed">{description}</p>
    </div>
  </div>
);

// Achievement Card Component
const AchievementCard = ({ number, label, prefix = "", suffix = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const increment = number / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, number]);

  return (
    <div className="relative group" onMouseEnter={() => setIsVisible(true)}>
      <div className="relative text-center p-8 bg-gradient-to-br from-[#1C3144]/50 to-[#1C3144]/30 rounded-2xl border border-[#00FFFF]/20 hover:border-[#00FFFF]/40 transition-all duration-500 shadow-lg">
        <div className="text-6xl font-bold text-[#00FFFF] mb-4 group-hover:transform group-hover:scale-110 transition-transform duration-500">
          {prefix}
          {count}
          {suffix}
        </div>
        <div className="text-gray-300 font-medium text-lg">{label}</div>
      </div>
    </div>
  );
};

// Timeline Item Component
const TimelineItem = ({ year, title, description }) => (
  <div className="relative pl-12 pb-12 group">
    <div className="absolute left-0 top-0 w-px h-full bg-gradient-to-b from-[#00FFFF] to-transparent group-last:h-0" />
    <div className="absolute left-0 top-0 w-6 h-6 -translate-x-1/2 rounded-full border-2 border-[#00FFFF] bg-[#0A0A0A] group-hover:bg-[#00FFFF] transition-colors duration-300" />
    <div className="text-[#00FFFF] font-semibold mb-2 text-lg">{year}</div>
    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#00FFFF] transition-colors duration-300">
      {title}
    </h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);

// Scroll Progress Component
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-[#1C3144]/30 z-50">
      <div
        className="h-full bg-[#00FFFF] transition-all duration-300"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};

const AboutUsPage = () => {
  const teamMembers = [
    {
      image: TeamMember,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      description:
        "With 15+ years in tech, Sarah leads our vision for innovative digital solutions.",
    },
    {
      image: TeamMember,
      name: "Michael Chen",
      role: "CTO",
      description:
        "Michael brings extensive experience in scalable architecture and emerging technologies.",
    },
    {
      image: TeamMember,
      name: "Emily Rodriguez",
      role: "Design Director",
      description:
        "Emily ensures our solutions provide exceptional user experiences through innovative design.",
    },
    {
      image:TeamMember,
      name: "David Kim",
      role: "Head of Development",
      description:
        "David leads our development teams in creating robust, scalable solutions.",
    },
  ];

  const values = [
    {
      icon: Target,
      title: "Innovation First",
      description:
        "We constantly push boundaries to deliver cutting-edge solutions that keep our clients ahead of the curve.",
    },
    {
      icon: Users,
      title: "Client Partnership",
      description:
        "We build lasting relationships, treating each client's business as our own for mutual success.",
    },
    {
      icon: Award,
      title: "Excellence",
      description:
        "We maintain the highest standards in every aspect of our work, from code quality to client service.",
    },
    {
      icon: TrendingUp,
      title: "Continuous Growth",
      description:
        "We invest in continuous learning and development to stay at the forefront of technology.",
    },
  ];

  const timeline = [
    {
      year: "2015",
      title: "Company Founded",
      description:
        "Started with a vision to transform businesses through innovative digital solutions.",
    },
    {
      year: "2017",
      title: "Global Expansion",
      description:
        "Opened offices in multiple countries and expanded our team to 50+ experts.",
    },
    {
      year: "2019",
      title: "Innovation Hub Launch",
      description:
        "Established our Innovation Hub for research and development in emerging technologies.",
    },
    {
      year: "2021",
      title: "Industry Recognition",
      description:
        "Received multiple awards for our innovative solutions and client success stories.",
    },
    {
      year: "2023",
      title: "Sustainability Initiative",
      description:
        "Launched our green technology initiative for sustainable digital solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <ScrollProgress />
      <Navbar />

      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#1C3144]/50 to-[#0A0A0A] opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
            Transforming Ideas into
            <span className="block mt-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00A6] text-transparent bg-clip-text">
              Digital Reality
            </span>
          </h1>
          <p className="text-gray-300 text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto mb-12">
            We're a team of passionate innovators, dedicated to creating
            exceptional digital experiences that drive business success.
          </p>
          <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00A6] text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity group">
            Learn More
            <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <ChevronDown className="w-8 h-8 text-[#00FFFF] animate-bounce" />
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-[#1C3144]/50 to-[#1C3144]/30 rounded-2xl p-8 border border-[#00FFFF]/20 group hover:border-[#00FFFF]/40 transition-all duration-500">
            <div className="p-4 bg-[#00FFFF]/10 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-[#00FFFF]/20 transition-all duration-500">
              <Star className="w-10 h-10 text-[#00FFFF]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              To empower businesses through innovative digital solutions that
              drive growth, efficiency, and competitive advantage in the modern
              digital landscape.
            </p>
          </div>
          <div className="bg-gradient-to-br from-[#1C3144]/50 to-[#1C3144]/30 rounded-2xl p-8 border border-[#00FFFF]/20 group hover:border-[#00FFFF]/40 transition-all duration-500">
            <div className="p-4 bg-[#00FFFF]/10 rounded-2xl w-20 h-20 flex items-center justify-center mb-6 group-hover:bg-[#00FFFF]/20 transition-all duration-500">
              <Zap className="w-10 h-10 text-[#00FFFF]" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
            <p className="text-gray-300 leading-relaxed text-lg">
              To be the global leader in digital transformation, known for our
              innovative solutions, exceptional talent, and lasting client
              partnerships.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our Core <span className="text-[#00FFFF]">Values</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The principles that guide our work and relationships with clients,
            partners, and team members.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <ValueCard key={index} {...value} />
          ))}
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Meet Our <span className="text-[#00FFFF]">Team</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            The talented individuals who make our vision a reality through
            innovation, dedication, and expertise.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>

      {/* Achievements Section */}
      <div className="bg-gradient-to-r from-[#0A0A0A] via-[#1C3144]/50 to-[#0A0A0A] py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold mb-6">
              Our <span className="text-[#00FFFF]">Achievements</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              Milestones that mark our journey of excellence and innovation.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <AchievementCard
              number={500}
              suffix="+"
              label="Projects Completed"
            />
            <AchievementCard
              number={95}
              suffix="%"
              label="Client Satisfaction"
            />
            <AchievementCard number={20} suffix="+" label="Industry Awards" />
            <AchievementCard number={12} label="Global Offices" />
          </div>
        </div>
      </div>

      {/* Journey Timeline Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl font-bold mb-6">
            Our <span className="text-[#00FFFF]">Journey</span>
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Key milestones that have shaped our growth and success.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          {timeline.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 py-20">
        <div className="relative bg-gradient-to-br from-[#1C3144]/50 to-[#1C3144]/30 rounded-2xl p-12 border border-[#00FFFF]/20 text-center group hover:border-[#00FFFF]/40 transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-b from-[#00FFFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          <div className="relative z-10">
            <h2 className="text-4xl font-bold mb-6">Join Our Journey</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
              We're always looking for talented individuals who share our
              passion for innovation and excellence.
            </p>
            <button className="inline-flex items-center gap-2 bg-gradient-to-r from-[#00FFFF] to-[#FF00A6] text-black px-8 py-4 rounded-full font-semibold hover:opacity-90 transition-opacity group">
              View Career Opportunities
              <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUsPage;

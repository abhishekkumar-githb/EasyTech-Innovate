// ModernTeamPage.jsx
import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Award,
  Target,
  Star,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Code,
  Palette,
  Lightbulb,
  Rocket,
  MessageSquare,
  Clock
} from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import Footer from "../../../components/Footer/Footer.jsx";
import { teamMembers, expertise, teamActivities, cultureValues } from "./teamConfiig.js";

const ModernTeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [currentFilter, setCurrentFilter] = useState('all');
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);

  // Map icon strings to Lucide components
  const getIcon = (iconName) => {
    const iconMap = {
      Code: <Code className="w-6 h-6" />,
      Palette: <Palette className="w-6 h-6" />,
      Lightbulb: <Lightbulb className="w-6 h-6" />,
      Rocket: <Rocket className="w-6 h-6" />,
      MessageSquare: <MessageSquare className="w-6 h-6" />,
      Clock: <Clock className="w-6 h-6" />
    };
    return iconMap[iconName] || null;
  };

  // Advanced hover animations
  const hoverAnimation = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };

  const scrollToFeatures = () => {
    featuresRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPricing = () => {
    pricingRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0A0A0A] to-[#1A1A1A]">
      <Navbar
        scrollToFeatures={scrollToFeatures}
        scrollToPricing={scrollToPricing}
      />
      
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('/api/placeholder/1920/1080')] bg-cover bg-center">
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-6xl md:text-7xl font-bold text-white mb-6">
            Meet Our{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00FFFF] to-[#FF00FF]">
              Exceptional
            </span>{" "}
            Team
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A collective of innovators, creators, and problem-solvers pushing the boundaries of what's possible
          </p>
        </motion.div>
      </div>

      {/* Expertise Showcase */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {expertise.map((item, index) => (
            <motion.div
              key={index}
              whileHover={hoverAnimation}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-6 border border-gray-800 hover:border-[#00FFFF]/50 transition-all duration-300"
            >
              <div className="w-12 h-12 bg-[#00FFFF]/10 rounded-lg flex items-center justify-center mb-4">
                <div className="text-[#00FFFF]">{getIcon(item.icon)}</div>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
              <p className="text-gray-400 mb-4">{item.description}</p>
              <div className="text-[#00FFFF] font-bold">{item.stats}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Team Members Showcase */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="flex justify-center gap-4 mb-12">
          {['all', 'engineering', 'design'].map((filter) => (
            <button
              key={filter}
              onClick={() => setCurrentFilter(filter)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                currentFilter === filter
                  ? 'bg-[#00FFFF] text-black'
                  : 'bg-gray-800 text-white hover:bg-gray-700'
              }`}
            >
              {filter.charAt(0).toUpperCase() + filter.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers
            .filter(member => currentFilter === 'all' || member.department.toLowerCase() === currentFilter.toLowerCase())
            .map((member) => (
            <motion.div
              key={member.id}
              whileHover={hoverAnimation}
              className="group relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden"
            >
              <div className="aspect-square">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-[#00FFFF] mb-4">{member.role}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {member.skills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  {Object.entries(member.social).map(([platform, url]) => (
                    <a
                      key={platform}
                      href={url}
                      className="text-gray-400 hover:text-[#00FFFF] transition-colors"
                    >
                      {platform === 'github' && <Github className="w-5 h-5" />}
                      {platform === 'linkedin' && <Linkedin className="w-5 h-5" />}
                      {platform === 'twitter' && <Twitter className="w-5 h-5" />}
                      {platform === 'website' && <Globe className="w-5 h-5" />}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Achievement Highlights */}
      <div className="bg-gradient-to-r from-[#1C3144] to-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Recognition of our commitment to excellence and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              whileHover={hoverAnimation}
              className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-gray-800"
            >
              <div className="w-12 h-12 bg-[#00FFFF]/10 rounded-lg flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-[#00FFFF]" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">20+</div>
              <p className="text-gray-400">Industry Awards</p>
            </motion.div>

            <motion.div
              whileHover={hoverAnimation}
              className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-gray-800"
            >
              <div className="w-12 h-12 bg-[#00FFFF]/10 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-[#00FFFF]" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">100+</div>
              <p className="text-gray-400">Successful Projects</p>
            </motion.div>

            <motion.div
              whileHover={hoverAnimation}
              className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-gray-800"
            >
              <div className="w-12 h-12 bg-[#00FFFF]/10 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-[#00FFFF]" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">50+</div>
              <p className="text-gray-400">Team Members</p>
            </motion.div>

            <motion.div
              whileHover={hoverAnimation}
              className="bg-black/40 backdrop-blur-lg rounded-xl p-6 border border-gray-800"
            >
              <div className="w-12 h-12 bg-[#00FFFF]/10 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-[#00FFFF]" />
              </div>
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <p className="text-gray-400">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Team Culture Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Culture</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            What makes our team unique and drives our success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cultureValues.map((value, index) => (
            <motion.div
              key={index}
              whileHover={hoverAnimation}
              className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 border border-gray-800 hover:border-[#00FFFF]/50"
            >
              <div className="w-12 h-12 bg-[#00FFFF]/10 rounded-lg flex items-center justify-center mb-4">
                {getIcon(value.icon)}
              </div>
              <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
              <p className="text-gray-400">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Team Activities Section */}
      <div className="bg-gradient-to-r from-[#1C3144] to-[#0A0A0A] py-24">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Team Activities</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Glimpses into our collaborative and vibrant work environment
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamActivities.map((activity) => (
              <motion.div
                key={activity.id}
                whileHover={hoverAnimation}
                className="group relative rounded-xl overflow-hidden aspect-video"
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <span className="text-[#00FFFF] text-sm mb-2 block">{activity.date}</span>
                  <h3 className="text-xl font-bold text-white mb-2">{activity.title}</h3>
                  <p className="text-gray-300">{activity.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="max-w-7xl mx-auto px-4 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-8 md:p-12 border border-gray-800"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Stay Updated with Our Journey
            </h2>
            <p className="text-gray-400 mb-8">
              Subscribe to our newsletter for the latest updates, tech insights, and team news
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 bg-black/40 rounded-lg border border-gray-800 text-white placeholder-gray-500 focus:outline-none focus:border-[#00FFFF]"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-[#00FFFF] to-[#FF00FF] rounded-lg text-white font-medium hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default ModernTeamPage;
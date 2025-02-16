/* eslint-disable react/no-unescaped-entities */
import  { useState } from 'react';
import { Calendar, Clock, Mail, User,  MessageSquare, ArrowRight, X, Phone, Globe, ChevronRight, ChevronLeft } from 'lucide-react';
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

const ContactScheduler = () => {
  const initialFormData = {
    name: '',
    email: '',
    phoneCountry: '+91', // Default to India
    phoneNumber: '',
    company: '',
    website: '',
    projectType: '',
    description: '',
    date: '',
    time: '',
    budget: ''
  };

  const [formData, setFormData] = useState({...initialFormData});

  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPopup(true);
    // Clear form data after successful submission
    setFormData({...initialFormData});
    // Reset to first step
    setCurrentStep(1);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const countryCodes = [
    { code: '+91', country: 'India' },
    { code: '+1', country: 'USA/Canada' },
    { code: '+44', country: 'UK' },
    { code: '+61', country: 'Australia' },
    { code: '+49', country: 'Germany' },
    { code: '+33', country: 'France' },
    { code: '+86', country: 'China' },
    { code: '+81', country: 'Japan' },
    { code: '+65', country: 'Singapore' },
    { code: '+971', country: 'UAE' },
  ];

  const projectTypes = [
    'Web Application',
    'Mobile App',
    'E-commerce Website',
    'Custom Software',
    'UI/UX Design',
    'Digital Marketing',
    'Other'
  ];

  const budgetRanges = [
    'Less than $500',
    '$500 - $1000',
    '$1000 - $1500',
    '$1500 - 2500',
    '$25000+'
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Hero Section - Improved padding for mobile */}
      <div className="relative overflow-hidden bg-slate-950 py-16 md:py-24 mt-1" >
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <Calendar className="w-12 h-12 md:w-16 md:h-16 text-cyan-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Schedule a <span className="text-cyan-400">Consultation</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2 sm:px-0">
              Take the first step towards transforming your digital presence. Let's discuss your project.
            </p>
          </div>
        </div>
      </div>

      {/* Main form section - Improved padding and spacing for mobile */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-6 md:py-8 mb-8">
        <div className="bg-slate-900/50 p-4 sm:p-6 md:p-8 rounded-2xl border border-cyan-400/20">
          {/* Progress Steps - Better mobile display */}
          <div className="flex justify-between mb-6 md:mb-8 relative px-2 sm:px-4">
            <div className="absolute top-1/2 h-0.5 w-full bg-slate-800 -z-10"></div>
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center z-10">
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center ${
                  currentStep >= step ? 'bg-cyan-400 text-slate-900' : 'bg-slate-800 text-gray-400'
                } font-bold mb-1 sm:mb-2 transition-colors duration-300 text-sm sm:text-base`}>
                  {step}
                </div>
                <span className="text-xs sm:text-sm text-gray-300 text-center">
                  {step === 1 ? 'Basic Info' : step === 2 ? 'Project Details' : 'Schedule'}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative">
                    <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Full Name</label>
                    <div className="relative">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-slate-800/30 border border-cyan-400/20 rounded-lg pl-10 sm:pl-12 pr-4 py-2 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Email Address</label>
                    <div className="relative">
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-slate-800/30 border border-cyan-400/20 rounded-lg pl-10 sm:pl-12 pr-4 py-2 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Phone Number</label>
                    <div className="flex">
                      <div className="relative">
                        <select
                          name="phoneCountry"
                          value={formData.phoneCountry}
                          onChange={handleChange}
                          className="bg-slate-800/30 border border-cyan-400/20 rounded-l-lg px-1 py-2 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors w-20 sm:w-24"
                        >
                          {countryCodes.map(country => (
                            <option key={country.code} value={country.code} className="bg-slate-800 text-sm">
                              {country.code}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="relative flex-1">
                        <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="w-full bg-slate-800/30 border border-cyan-400/20 border-l-0 rounded-r-lg pl-10 sm:pl-12 pr-4 py-2 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                          placeholder="Phone number"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Company Website</label>
                    <div className="relative">
                      <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full bg-slate-800/30 border border-cyan-400/20 rounded-lg pl-10 sm:pl-12 pr-4 py-2 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="https://"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Project Type</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className="w-full bg-slate-800/30 border border-cyan-400/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                      required
                    >
                      <option value="">Select Project Type</option>
                      {projectTypes.map(type => (
                        <option key={type} value={type} className="bg-slate-800 text-sm sm:text-base">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Budget Range</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full bg-slate-800/30 border border-cyan-400/20 rounded-lg px-3 sm:px-4 py-2 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                      required
                    >
                      <option value="">Select Budget Range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range} className="bg-slate-800 text-sm sm:text-base">
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Project Description</label>
                  <div className="relative">
                    <MessageSquare className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 absolute left-3 top-3" />
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4"
                      className="w-full bg-slate-800/30 border border-cyan-400/20 rounded-lg pl-10 sm:pl-12 pr-4 py-2 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                      required
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Schedule */}
            {currentStep === 3 && (
              <div className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                  <div>
                    <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Preferred Date</label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="w-full bg-slate-800/30 border border-cyan-400/20 rounded-lg pl-10 sm:pl-12 pr-4 py-2 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-300 text-xs sm:text-sm mb-1 sm:mb-2">Preferred Time</label>
                    <div className="relative">
                      <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className="w-full bg-slate-800/30 border border-cyan-400/20 rounded-lg pl-10 sm:pl-12 pr-4 py-2 sm:py-3 text-white text-sm sm:text-base focus:outline-none focus:border-cyan-400 transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Navigation Buttons - Improved for mobile */}
            <div className="flex justify-between pt-4 sm:pt-6">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep(current => current - 1)}
                  className="bg-slate-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300 text-sm sm:text-base flex items-center"
                >
                  <ChevronLeft className="mr-1 sm:mr-2 w-4 h-4 sm:w-5 sm:h-5" />
                  Previous
                </button>
              )}
              
              {currentStep < 3 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(current => current + 1)}
                  className={`${currentStep > 1 ? 'ml-auto' : 'w-full'} bg-cyan-400 text-slate-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-cyan-500 transition-colors duration-300 flex items-center justify-center font-medium text-sm sm:text-base`}
                >
                  Next
                  <ChevronRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="ml-auto group bg-cyan-400 text-slate-900 px-5 sm:px-8 py-2 sm:py-3 rounded-lg hover:bg-cyan-500 transition-all duration-300 flex items-center font-bold text-sm sm:text-base"
                >
                  Schedule Meeting
                  <ArrowRight className="ml-1 sm:ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Success Popup - Improved for mobile */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4 sm:px-0">
          <div className="bg-slate-900 p-5 sm:p-8 rounded-2xl border border-cyan-400/20 max-w-md w-full">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl sm:text-2xl font-bold text-white">Success!</h3>
              <button
                onClick={handleClosePopup}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>
            </div>
            <p className="text-gray-300 text-sm sm:text-base mb-5 sm:mb-6">
              Thank you for scheduling a meeting with us! You will receive an email shortly with the meeting link and confirmation details.
            </p>
            <button
              onClick={handleClosePopup}
              className="w-full bg-cyan-400 text-slate-900 px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-cyan-500 transition-colors duration-300 font-bold text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ContactScheduler;
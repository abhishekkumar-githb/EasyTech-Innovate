/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  Mail,
  User,
  MessageSquare,
  ArrowRight,
  X,
  Phone,
  Globe,
  ChevronRight,
  ChevronLeft,
  CheckCircle,
  Info,
} from "lucide-react";
import Navbar from "../../../components/Navbar/Navbar";
import Footer from "../../../components/Footer/Footer";

const ContactScheduler = () => {
  const initialFormData = {
    name: "",
    email: "",
    phoneCountry: "+91", // Default to India
    phoneNumber: "",
    company: "",
    website: "",
    projectType: "",
    description: "",
    date: "",
    time: "",
    budget: "",
  };

  const [formData, setFormData] = useState({ ...initialFormData });
  const [showPopup, setShowPopup] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [animateForm, setAnimateForm] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(null);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false); // Add this line

  useEffect(() => {
    setAnimateForm(true);
    const timer = setTimeout(() => setAnimateForm(false), 500);
    return () => clearTimeout(timer);
  }, [currentStep]);

  const validateStep = () => {
    const errors = {};

    if (currentStep === 1) {
      if (!formData.name) errors.name = "Name is required";
      if (!formData.email) errors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(formData.email))
        errors.email = "Email is invalid";
      if (!formData.phoneNumber)
        errors.phoneNumber = "Phone number is required";
    } else if (currentStep === 2) {
      if (!formData.projectType)
        errors.projectType = "Project type is required";
      if (!formData.budget) errors.budget = "Budget range is required";
      if (!formData.description)
        errors.description = "Project description is required";
    } else if (currentStep === 3) {
      if (!formData.date) errors.date = "Date is required";
      if (!formData.time) errors.time = "Time is required";

      // Validate date is in future
      if (formData.date) {
        const selectedDate = new Date(formData.date);
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
          errors.date = "Please select a future date";
        }
      }
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const sendToGoogleSheets = async (formData) => {
    try {
      const SCRIPT_URL =
        "https://script.google.com/macros/s/AKfycbxrPcvwMO8ATbP43aE5EvdnYwLfpzpTYUJ6cPVD2OqNgYPOC5iIKA8dPDAtERERVq9CVw/exec";

      const response = await fetch(SCRIPT_URL, {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "no-cors",
      });

      return true;
    } catch (error) {
      console.error("Error submitting form:", error);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      setIsSubmitting(true);

      const success = await sendToGoogleSheets(formData);

      if (success) {
        setShowPopup(true);
        // Clear form data after successful submission
        setFormData({ ...initialFormData });
        // Reset to first step
        setCurrentStep(1);
      } else {
        alert("There was an error submitting your form. Please try again.");
      }

      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Clear error when field is updated
    if (formErrors[name]) {
      setFormErrors({
        ...formErrors,
        [name]: null,
      });
    }
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep((current) => current + 1);
    }
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const countryCodes = [
    { code: "+91", country: "India" },
    { code: "+1", country: "USA/Canada" },
    { code: "+44", country: "UK" },
    { code: "+61", country: "Australia" },
    { code: "+49", country: "Germany" },
    { code: "+33", country: "France" },
    { code: "+86", country: "China" },
    { code: "+81", country: "Japan" },
    { code: "+65", country: "Singapore" },
    { code: "+971", country: "UAE" },
  ];

  const projectTypes = [
    "Web Application",
    "Mobile App",
    "E-commerce Website",
    "Custom Software",
    "UI/UX Design",
    "Digital Marketing",
    "Other",
  ];

  const budgetRanges = [
    "₹50,000 - ₹75,000 ",
    "₹75,000 - ₹1,00,000 ",
    "₹1,00,000 - ₹1,25,000 ",
    "₹1,25,000 - ₹1,50,000 ",
    "₹1,50,000 - ₹1,75,000 ",
    "₹1,75,000 - ₹2,00,000 ",
  ];
  

  const getMinDate = () => {
    const today = new Date();
    return today.toISOString().split("T")[0];
  };

  const renderTooltip = (field) => {
    const tooltips = {
      projectType: "Select the type that best matches your project goals",
      budget:
        "This helps us prepare the most suitable solutions for your needs",
      date: "We'll confirm availability for your selected date",
      description:
        "The more details you provide, the better we can prepare for our meeting",
    };

    if (tooltipVisible === field && tooltips[field]) {
      return (
        <div className="absolute z-10 w-48 p-2 mt-1 text-xs text-white bg-slate-800 rounded-md border border-cyan-400/30 shadow-lg">
          {tooltips[field]}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="min-h-screen bg-slate-950">
      <Navbar />

      {/* Parallax Hero Section */}
      <div className="relative overflow-hidden bg-slate-950 py-20 md:py-28 mt-1">
        <div className="absolute w-full h-full top-0 left-0 opacity-10">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-cyan-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-cyan-600 rounded-full filter blur-3xl"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex justify-center mb-6 animate-bounce">
              <Calendar className="w-12 h-12 md:w-16 md:h-16 text-cyan-400" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 leading-tight">
              Schedule a <span className="text-cyan-400">Consultation</span>
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-2 sm:px-0 md:leading-relaxed">
              Take the first step towards transforming your digital presence.
              Our experts are ready to discuss your vision and turn it into
              reality.
            </p>

            {/* Quick benefits section */}
            <div className="flex flex-wrap justify-center gap-4 mt-8">
              {[
                "Free 30-minute consultation",
                "No obligation quote",
                "Custom-tailored solutions",
              ].map((benefit, idx) => (
                <div
                  key={idx}
                  className="flex items-center bg-slate-900/50 px-4 py-2 rounded-full border border-cyan-400/20"
                >
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-sm text-white">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main form section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 md:py-10 mb-12">
        <div
          className={`bg-slate-900/50 p-5 sm:p-7 md:p-9 rounded-2xl border border-cyan-400/20 shadow-lg shadow-cyan-900/10 ${
            animateForm ? "animate-fadeIn" : ""
          }`}
        >
          {/* Progress Steps */}
          <div className="flex justify-between mb-8 md:mb-10 relative px-4 sm:px-8">
            <div className="absolute top-1/2 h-1 w-full bg-slate-800 -z-10 rounded-full"></div>
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex flex-col items-center z-10">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${
                    currentStep > step
                      ? "bg-green-500 text-slate-900"
                      : currentStep === step
                      ? "bg-cyan-400 text-slate-900"
                      : "bg-slate-800 text-gray-400"
                  } font-bold mb-2 transition-colors duration-500 text-sm sm:text-base`}
                >
                  {currentStep > step ? (
                    <CheckCircle className="w-5 h-5" />
                  ) : (
                    step
                  )}
                </div>
                <span className="text-xs sm:text-sm text-gray-300 text-center">
                  {step === 1
                    ? "Basic Info"
                    : step === 2
                    ? "Project Details"
                    : "Schedule"}
                </span>
              </div>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-7">
            {/* Step 1: Basic Information */}
            {currentStep === 1 && (
              <div className="space-y-5 sm:space-y-7">
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl text-white font-semibold mb-2">
                    Tell us about yourself
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base">
                    We'll use this information to get in touch with you
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
                  <div className="relative">
                    <label className="block text-gray-300 text-sm mb-2 font-medium">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <User className="w-5 h-5 text-cyan-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-slate-800/30 border ${
                          formErrors.name
                            ? "border-red-500"
                            : "border-cyan-400/20"
                        } rounded-lg pl-12 pr-4 py-3 text-white text-base focus:outline-none focus:border-cyan-400 transition-colors`}
                        required
                      />
                    </div>
                    {formErrors.name && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.name}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <label className="block text-gray-300 text-sm mb-2 font-medium">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Mail className="w-5 h-5 text-cyan-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-slate-800/30 border ${
                          formErrors.email
                            ? "border-red-500"
                            : "border-cyan-400/20"
                        } rounded-lg pl-12 pr-4 py-3 text-white text-base focus:outline-none focus:border-cyan-400 transition-colors`}
                        required
                      />
                    </div>
                    {formErrors.email && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <label className="block text-gray-300 text-sm mb-2 font-medium">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="flex">
                      <div className="relative">
                        <select
                          name="phoneCountry"
                          value={formData.phoneCountry}
                          onChange={handleChange}
                          className="bg-slate-800/30 border border-cyan-400/20 rounded-l-lg px-2 py-3 text-white text-base focus:outline-none focus:border-cyan-400 transition-colors w-24"
                        >
                          {countryCodes.map((country) => (
                            <option
                              key={country.code}
                              value={country.code}
                              className="bg-slate-800 text-base"
                            >
                              {country.code}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="relative flex-1">
                        <Phone className="w-5 h-5 text-cyan-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className={`w-full bg-slate-800/30 border ${
                            formErrors.phoneNumber
                              ? "border-red-500"
                              : "border-cyan-400/20"
                          } border-l-0 rounded-r-lg pl-12 pr-4 py-3 text-white text-base focus:outline-none focus:border-cyan-400 transition-colors`}
                          placeholder="Phone number"
                          required
                        />
                      </div>
                    </div>
                    {formErrors.phoneNumber && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.phoneNumber}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <label className="block text-gray-300 text-sm mb-2 font-medium">
                      Company Website
                    </label>
                    <div className="relative">
                      <Globe className="w-5 h-5 text-cyan-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="url"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className="w-full bg-slate-800/30 border border-cyan-400/20 rounded-lg pl-12 pr-4 py-3 text-white text-base focus:outline-none focus:border-cyan-400 transition-colors"
                        placeholder="https://"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Project Details */}
            {currentStep === 2 && (
              <div className="space-y-5 sm:space-y-7">
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl text-white font-semibold mb-2">
                    Project Details
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Help us understand your project needs
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
                  <div className="relative">
                    <div className="flex items-center mb-2">
                      <label className="text-gray-300 text-sm font-medium">
                        Project Type <span className="text-red-500">*</span>
                      </label>
                      <Info
                        className="w-4 h-4 text-cyan-400 ml-2 cursor-pointer"
                        onMouseEnter={() => setTooltipVisible("projectType")}
                        onMouseLeave={() => setTooltipVisible(null)}
                      />
                      {renderTooltip("projectType")}
                    </div>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      className={`w-full bg-slate-800/30 border ${
                        formErrors.projectType
                          ? "border-red-500"
                          : "border-cyan-400/20"
                      } rounded-lg px-4 py-3 text-white text-base focus:outline-none focus:border-cyan-400 transition-colors appearance-none`}
                      required
                    >
                      <option value="">Select Project Type</option>
                      {projectTypes.map((type) => (
                        <option
                          key={type}
                          value={type}
                          className="bg-slate-800 text-base"
                        >
                          {type}
                        </option>
                      ))}
                    </select>
                    {formErrors.projectType && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.projectType}
                      </p>
                    )}
                  </div>

                  <div className="relative">
                    <div className="flex items-center mb-2">
                      <label className="text-gray-300 text-sm font-medium">
                        Budget Range <span className="text-red-500">*</span>
                      </label>
                      <Info
                        className="w-4 h-4 text-cyan-400 ml-2 cursor-pointer"
                        onMouseEnter={() => setTooltipVisible("budget")}
                        onMouseLeave={() => setTooltipVisible(null)}
                      />
                      {renderTooltip("budget")}
                    </div>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className={`w-full bg-slate-800/30 border ${
                        formErrors.budget
                          ? "border-red-500"
                          : "border-cyan-400/20"
                      } rounded-lg px-4 py-3 text-white text-base focus:outline-none focus:border-cyan-400 transition-colors appearance-none`}
                      required
                    >
                      <option value="">Select Budget Range</option>
                      {budgetRanges.map((range) => (
                        <option
                          key={range}
                          value={range}
                          className="bg-slate-800 text-base"
                        >
                          {range}
                        </option>
                      ))}
                    </select>
                    {formErrors.budget && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.budget}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex items-center mb-2">
                    <label className="text-gray-300 text-sm font-medium">
                      Project Description{" "}
                      <span className="text-red-500">*</span>
                    </label>
                    <Info
                      className="w-4 h-4 text-cyan-400 ml-2 cursor-pointer"
                      onMouseEnter={() => setTooltipVisible("description")}
                      onMouseLeave={() => setTooltipVisible(null)}
                    />
                    {renderTooltip("description")}
                  </div>
                  <div className="relative">
                    <MessageSquare className="w-5 h-5 text-cyan-400 absolute left-3 top-3" />
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows="4"
                      className={`w-full bg-slate-800/30 border ${
                        formErrors.description
                          ? "border-red-500"
                          : "border-cyan-400/20"
                      } rounded-lg pl-12 pr-4 py-3 text-white text-base focus:outline-none focus:border-cyan-400 transition-colors resize-none`}
                      placeholder="Please describe your project, goals, and expectations..."
                      required
                    />
                  </div>
                  {formErrors.description && (
                    <p className="text-red-500 text-xs mt-1">
                      {formErrors.description}
                    </p>
                  )}
                  <p className="text-xs text-gray-400 mt-2">
                    The more details you provide, the better prepared we'll be
                    for our call
                  </p>
                </div>
              </div>
            )}

            {/* Step 3: Schedule */}
            {currentStep === 3 && (
              <div className="space-y-5 sm:space-y-7">
                <div className="mb-6">
                  <h2 className="text-xl sm:text-2xl text-white font-semibold mb-2">
                    Schedule Your Call
                  </h2>
                  <p className="text-gray-400 text-sm sm:text-base">
                    Select a convenient time for our consultation
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-7">
                  <div>
                    <div className="flex items-center mb-2">
                      <label className="text-gray-300 text-sm font-medium">
                        Preferred Date <span className="text-red-500">*</span>
                      </label>
                      <Info
                        className="w-4 h-4 text-cyan-400 ml-2 cursor-pointer"
                        onMouseEnter={() => setTooltipVisible("date")}
                        onMouseLeave={() => setTooltipVisible(null)}
                      />
                      {renderTooltip("date")}
                    </div>
                    <div className="relative">
                      <Calendar className="w-5 h-5 text-cyan-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="date"
                        name="date"
                        min={getMinDate()}
                        value={formData.date}
                        onChange={handleChange}
                        className={`w-full bg-slate-800/30 border ${
                          formErrors.date
                            ? "border-red-500"
                            : "border-cyan-400/20"
                        } rounded-lg pl-12 pr-4 py-3 text-white text-base focus:outline-none focus:border-cyan-400 transition-colors`}
                        required
                      />
                    </div>
                    {formErrors.date && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.date}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-gray-300 text-sm mb-2 font-medium">
                      Preferred Time <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Clock className="w-5 h-5 text-cyan-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                      <input
                        type="time"
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        className={`w-full bg-slate-800/30 border ${
                          formErrors.time
                            ? "border-red-500"
                            : "border-cyan-400/20"
                        } rounded-lg pl-12 pr-4 py-3 text-white text-base focus:outline-none focus:border-cyan-400 transition-colors`}
                        required
                      />
                    </div>
                    {formErrors.time && (
                      <p className="text-red-500 text-xs mt-1">
                        {formErrors.time}
                      </p>
                    )}
                  </div>
                </div>

                <div className="bg-slate-800/50 p-4 rounded-lg border border-cyan-400/10 mt-6">
                  <h3 className="text-white text-lg mb-2 flex items-center">
                    <Info className="w-5 h-5 text-cyan-400 mr-2" />
                    What to expect next
                  </h3>
                  <ol className="list-decimal text-gray-300 text-sm ml-5 space-y-1">
                    <li>
                      You'll receive a confirmation email with meeting details
                    </li>
                    <li>
                      Our team will prepare for the discussion based on your
                      inputs
                    </li>
                    <li>
                      We'll meet at your scheduled time via video conference
                    </li>
                    <li>
                      Within 24 hours after our call, we'll send a proposal
                      tailored to your needs
                    </li>
                  </ol>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between pt-6 border-t border-slate-800/50 mt-8">
              {currentStep > 1 && (
                <button
                  type="button"
                  onClick={() => setCurrentStep((current) => current - 1)}
                  className="bg-slate-800 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-slate-700 transition-colors duration-300 text-sm sm:text-base flex items-center font-medium"
                >
                  <ChevronLeft className="mr-2 w-5 h-5" />
                  Back
                </button>
              )}

              {currentStep < 3 ? (
                <button
                  type="button" // Change from "submit" to "button"
                  onClick={handleNext} // Add onClick handler to move to next step
                  className="ml-auto group bg-cyan-400 text-slate-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-cyan-500 transition-all duration-300 flex items-center font-bold text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              ) : (
                <button
                  type="submit" // Keep as "submit" for the final step
                  className="ml-auto group bg-cyan-400 text-slate-900 px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-cyan-500 transition-all duration-300 flex items-center font-bold text-sm sm:text-base"
                >
                  Schedule Meeting
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>
          </form>
        </div>
      </div>

      {/* Success Popup */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-50 px-4 sm:px-0 animate-fadeIn">
          <div className="bg-slate-900 p-6 sm:p-8 rounded-2xl border border-cyan-400/30 max-w-md w-full shadow-lg shadow-cyan-600/10">
            <div className="flex justify-between items-start mb-5">
              <div className="flex items-center">
                <CheckCircle className="w-6 h-6 text-green-500 mr-2" />
                <h3 className="text-2xl font-bold text-white">Success!</h3>
              </div>
              <button
                onClick={handleClosePopup}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <p className="text-gray-300 text-base mb-6">
              Thank you for scheduling a meeting with us! We're excited to
              discuss your project and explore how we can help you achieve your
              goals.
            </p>

            <div className="mb-6 bg-slate-800/70 p-4 rounded-lg border border-cyan-400/10">
              <h4 className="text-white font-medium mb-2">
                What happens next:
              </h4>
              <ul className="text-gray-300 text-sm space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 shrink-0" />
                  <span>Check your email for confirmation details</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 shrink-0" />
                  <span>
                    Add the meeting to your calendar using the invitation
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 shrink-0" />
                  <span>
                    Prepare any additional questions or materials you'd like to
                    discuss
                  </span>
                </li>
              </ul>
            </div>

            <button
              onClick={handleClosePopup}
              className="w-full bg-cyan-400 text-slate-900 px-6 py-3 rounded-lg hover:bg-cyan-500 transition-colors duration-300 font-bold text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Additional info section */}
      <div className="bg-slate-900/30 py-12 border-t border-cyan-900/20 mb-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Why Choose Our Consultation Service?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Our team of experts is ready to provide valuable insights and
              tailored solutions for your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <User className="w-8 h-8 text-cyan-400" />,
                title: "Expert Team",
                description:
                  "Our consultants bring years of industry experience to help solve your challenges.",
              },
              {
                icon: <Clock className="w-8 h-8 text-cyan-400" />,
                title: "Timely Delivery",
                description:
                  "We respect your timeline and deliver solutions that meet your deadlines.",
              },
              {
                icon: <CheckCircle className="w-8 h-8 text-cyan-400" />,
                title: "Guaranteed Results",
                description:
                  "We're committed to delivering solutions that exceed your expectations.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-slate-800/20 p-6 rounded-xl border border-cyan-400/10 hover:border-cyan-400/30 transition-colors group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-white mb-4">
              Not ready for a call? Reach out via email
            </p>
            <a
              href="mailto:contact@example.com"
              className="inline-flex items-center bg-transparent text-cyan-400 border border-cyan-400 px-6 py-2 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
            >
              <Mail className="w-4 h-4 mr-2" />
              contact@example.com
            </a>
          </div>
        </div>
      </div>

      {/* CSS for animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        }
        @keyframes bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce {
          animation: bounce 2s infinite;
        }
      `}</style>

      <Footer />
    </div>
  );
};

export default ContactScheduler;

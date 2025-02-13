import Testimonial1 from "../../../assets/testimonials.webp";

export const homeConfig = {
  hero: {
    title: {
      primary: "Transform Your",
      highlightFirst: "Ideas",
      secondary: "into Digital",
      highlightSecond: "Reality",
    },
    description:
      "At EasyTech Innovate, we specialize in turning your visionary ideas into powerful digital solutions.",
    highlights: [
      "Direct collaboration with our founders",
      "Personalized development approach",
      "Innovative technical solutions",
    ],
  },
  services: [
    {
      title: "Website Development",
      description: "Custom website solutions for businesses.",
      icon: "💻",
    },
    {
      title: "UI/UX Design",
      description: "User-friendly and aesthetic website designs.",
      icon: "🎨",
    },
    {
      title: "SEO & Performance Optimization",
      description: "Improving site rankings and performance.",
      icon: "📈",
    },
    {
      title: "Technical Support & Maintenance",
      description: "Ongoing support services for your digital infrastructure.",
      icon: "🛠️",
    },
  ],
  about: {
    highlights: [
      "Expert-led technology consulting",
      "End-to-end product development",
      "Agile and collaborative approach",
    ],
  },
  // pricing: [
  //   {
  //     name: "Starter",
  //     price: 499,
  //     features: [
  //       "Basic Website Development",
  //       "Responsive Design",
  //       "SEO Optimization",
  //       "1 Month Support",
  //     ],
  //     recommended: false,
  //   },
  //   {
  //     name: "Professional",
  //     price: 999,
  //     features: [
  //       "Custom Web Application",
  //       "Advanced UI/UX Design",
  //       "Performance Optimization",
  //       "3 Months Support",
  //       "Analytics Integration",
  //     ],
  //     recommended: true,
  //   },
  //   {
  //     name: "Enterprise",
  //     price: 1999,
  //     features: [
  //       "Full-Stack Development",
  //       "Custom CRM/ERP Solutions",
  //       "Advanced Security",
  //       "Dedicated Support",
  //       "Ongoing Consultation",
  //       "Cloud Infrastructure",
  //     ],
  //     recommended: false,
  //   },
  // ],
  testimonials: [
    {
      name: "Sarah Anderson",
      position: "CEO, TechVision Solutions",
      quote:
        "The level of creativity and technical expertise demonstrated by this team is outstanding. They transformed our vision into reality, delivering a product that exceeded our expectations in every way.",
      rating: 5,
      image: Testimonial1,
    },
    {
      name: "Michael Chen",
      position: "Marketing Director, GrowthLabs",
      quote:
        "Working with this team has been an incredible journey. Their dedication to excellence and customer satisfaction is unmatched. They've helped us achieve remarkable growth in just six months.",
      rating: 5,
      image: Testimonial1,
    },
    {
      name: "Emma Thompson",
      position: "Founder, InnovateX",
      quote:
        "The attention to detail and professional approach made all the difference. They didn't just meet our requirements - they anticipated needs we hadn't even considered. Truly exceptional service.",
      rating: 5,
      image: Testimonial1,
    },
  ],
  // Add this to your homeConfig object
  faq: {
    title: "Frequently Asked Questions",
    description:
      "Find answers to common questions about our services and solutions.",
    questions: [
      {
        question: "What services do you specialize in?",
        answer:
          "We specialize in website development, UI/UX design, SEO optimization, and technical support & maintenance. Our team offers comprehensive digital solutions tailored to your business needs.",
      },
      {
        question: "How long does a typical project take?",
        answer:
          "Project timelines vary based on complexity and scope. A basic website might take 2-4 weeks, while complex applications can take 3-6 months. We'll provide a detailed timeline during our consultation.",
      },
      {
        question: "Do you provide ongoing support after project completion?",
        answer:
          "Yes, we offer various support packages to ensure your digital solution continues to perform optimally. Our support includes regular maintenance, updates, and technical assistance.",
      },
      {
        question: "What is your development process?",
        answer:
          "We follow an agile development methodology with regular client communication. This includes requirements gathering, design, development, testing, and deployment phases with continuous feedback and iterations.",
      },
    ],
  },
};

export const colors = {
  primary: "[#56CCF2]",
  secondary: "[#2F80ED]",
  background: {
    from: "[#0F2027]",
    via: "[#203A43]",
    to: "[#2C5364]",
  },
};

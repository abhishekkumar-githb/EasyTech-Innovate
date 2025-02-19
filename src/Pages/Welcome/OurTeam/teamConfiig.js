// teamConfig.jsx
import img from "../../../assets/testimonials.webp";
import img2 from "../../../assets/img2.jpg";



export const teamMembers = [
  {
    id: 1,
    name: "Manish Das Sharma",
    role: "Founder & Developer",
    department: "engineering",
    image: img,
    skills: ["AI/ML", "System Architecture", "Team Leadership"],
    experience: "5+ years",
    projects: ["AI-Driven Analytics", "Cloud Migration"],
    achievements: ["5 Patents", "Tech Leader Award 2023"],
    bio: "Pioneering AI solutions with a focus on scalable architectures.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      twitter: "https://twitter.com",
    }
  },
  {
    id: 2,
    name: "Abhishek Kumar",
    role: "Full Stack Developer",
    department: "engineering",
    image: img,
    skills: ["React", "Node.js", "AWS", "GraphQL"],
    experience: "1+ years",
    projects: ["Enterprise Design System", "Mobile App Redesign"],
    achievements: ["UX Design Award", "Speaker at DesignCon"],
    bio: "Creating intuitive and beautiful experiences that users love.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      website: "https://personal.site",
    }
  },
  {
    id: 3,
    name: "Harsh",
    role: "Full Stack Developer",
    department: "engineering",
    image: img,
    skills: ["React", "Node.js", "AWS", "GraphQL"],
    experience: "6+ years",
    projects: ["E-commerce Platform", "Real-time Dashboard"],
    achievements: ["Open Source Contributor", "Tech Blog Author"],
    bio: "Building scalable applications with modern technologies.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      website: "https://personal.site",
    }
  },
  {
    id: 4,
    name: "Ayesha",
    role: "UX Design Director",
    department: "design",
    image: img2,
    skills: ["React", "Node.js", "AWS", "GraphQL"],
    experience: "6+ years",
    projects: ["E-commerce Platform", "Real-time Dashboard"],
    achievements: ["Open Source Contributor", "Tech Blog Author"],
    bio: "Building scalable applications with modern technologies.",
    social: {
      github: "https://github.com",
      linkedin: "https://linkedin.com",
      website: "https://personal.site",
    }
  }
];

export const expertise = [
  {
    icon: "Code",
    title: "Technical Excellence",
    description: "Cutting-edge development practices and technologies",
    stats: "100+ Projects Delivered"
  },
  {
    icon: "Palette",
    title: "Creative Design",
    description: "User-centered design thinking and innovation",
    stats: "50+ Design Awards"
  },
  {
    icon: "Lightbulb",
    title: "Innovation Culture",
    description: "Fostering creativity and continuous learning",
    stats: "15+ Patents Filed"
  },
  {
    icon: "Rocket",
    title: "Rapid Delivery",
    description: "Agile methodology with quick iterations",
    stats: "95% On-time Delivery"
  }
];

export const teamActivities = [
  {
    id: 1,
    title: "AI/ML Workshop",
    description: "Advanced machine learning techniques and practical applications",
    image: img,
    date: "March 15, 2024"
  },
  {
    id: 2,
    title: "Full Stack Development ",
    description: "Building scalable applications with modern tech stack",
    image: img,
    date: "March 20, 2024"
  },
  {
    id: 3,
    title: "UX Design Workshop",
    description: "Creating intuitive and engaging user experiences",
    image: img,
    date: "March 25, 2024"
  }
];

export const cultureValues = [
  {
    icon: "MessageSquare",
    title: "Open Communication",
    description: "We foster an environment of transparency and collaboration, where every voice matters and ideas flow freely."
  },
  {
    icon: "Clock",
    title: "Work-Life Balance",
    description: "We believe in sustainable growth and ensure our team members maintain a healthy balance between work and personal life."
  },
  {
    icon: "Rocket",
    title: "Growth Mindset",
    description: "Continuous learning and professional development are at the core of our culture, with regular workshops and mentorship programs."
  }
];

export const services = {
  webDevelopment: {
    title: "Web Application Development",
    description: "We build modern and scalable web applications using:",
    technologies: {
      backend: ["Node.js", "Django", "Flask"],
      frontend: ["React.js", "Next.js"]
    }
  },
  mobileDevelopment: {
    title: "Mobile Application Development",
    description: "We develop cross-platform mobile applications using:",
    technologies: ["Flutter (for both Android & iOS)"]
  },
  deployment: {
    title: "Deployment & Cloud Services",
    description: "We ensure smooth deployment and hosting with:",
    technologies: [
      "Docker",
      "Any VPS (Virtual Private Server)",
      "AWS (Amazon Web Services)"
    ]
  },
  appPublishing: {
    title: "App Publishing",
    description: "We assist in publishing applications on:",
    platforms: ["Google Play Store (Android)", "Apple App Store (iOS)"]
  },
  collegeProjects: {
    title: "College Projects (Web Applications)",
    description: "We help students develop high-quality web applications for their college projects."
  }
};
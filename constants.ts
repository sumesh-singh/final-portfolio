import { Experience, Project, Education } from './types';

export const SOCIALS = {
  email: "sumesh13055@gmail.com",
  linkedin: "https://linkedin.com/in/sumesh-singh-kotiwale", 
  github: "https://github.com",
  location: "Hyderabad, Telangana, India"
};

export const EXPERIENCE: Experience[] = [
  {
    id: "infosys",
    role: "Virtual Internship",
    company: "Infosys Springboard",
    period: "Nov 2025 – Jan 2026",
    description: [
      "Developing BankBot AI, an intelligent chatbot for banking FAQs using AI and natural language processing.",
      "Building interactive user interface with Streamlit framework for seamless customer query resolution.",
      "Implementing AI-driven conversational capabilities to enhance customer service automation.",
      "8-week intensive program focused on practical AI application development and deployment."
    ]
  },
  {
    id: "accenture",
    role: "Software Engineering Job Simulation",
    company: "Accenture Nordics",
    period: "June 2025",
    description: [
      "Completed software engineering job simulation focused on Agile methodologies and development practices.",
      "Gained hands-on experience in professional software development workflows and team collaboration.",
      "Developed understanding of enterprise-level software engineering standards and best practices."
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "truepulse",
    title: "TruePulse",
    date: "June 2025",
    description: [
      "AI-powered web tool for verifying news article credibility with sentiment analysis and trust scoring.",
      "Features one-click analysis of article text or URLs with summary generation and fake news detection.",
    ],
    tech: ["React", "Flask", "Python", "Tailwind CSS", "Machine Learning"]
  },
  {
    id: "lab-system",
    title: "Lab Attendance System",
    date: "Nov 2024 – Dec 2024",
    description: [
      "Desktop application for managing student attendance with real-time tracking and Excel export functionality.",
      "Implemented data validation, duplicate prevention, and modern dark/light theme UI.",
    ],
    tech: ["Python", "customtkinter", "pandas"]
  }
];

export const EDUCATION: Education[] = [
  {
    id: "mca",
    school: "Chaitanya Bharathi Institute of Technology",
    degree: "MCA - Computer Applications",
    year: "2024 – 2026",
    grade: "Semester II CGPA: 8.37/10"
  },
  {
    id: "bca",
    school: "University College of Science, Osmania University",
    degree: "B.C.A. - Computer Applications",
    year: "2021 – 2024",
    grade: "CGPA: 8.54/10"
  },
  {
    id: "12th",
    school: "Tapasya Junior College, Hyderabad",
    degree: "12th Standard",
    year: "2021",
    grade: "Percentage: 92.80/100"
  },
  {
    id: "10th",
    school: "ST. Joseph’s High School, Hyderabad",
    degree: "10th Standard",
    year: "2019",
    grade: "CGPA: 9/10"
  }
];

export const SKILLS = {
  languages: ["Python", "Java", "C++", "HTML", "CSS", "JavaScript", "Generative AI", "AI Agents"],
  frameworks: ["Pandas", "Streamlit", "React", "Flask", "SQL", "MongoDB"]
};

export const CERTIFICATIONS = [
  "Certificate of Achievement in Python Foundation course from Infosys",
  "Certificate of course completion of a 22-week course on GfG 160 - 160 Days of Problem Solving",
  "Certificate of Achievement in Pointers from Code Studio"
];

export const ACHIEVEMENTS = [
  "Led teams in Smart India Hackathon 2025, HackPrix Season 2, HackHazard’25, COSC-CBIT 2024 and 2025.",
  "Served as Class Representative for two consecutive years."
];
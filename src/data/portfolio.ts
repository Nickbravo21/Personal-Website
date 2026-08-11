export type ExperienceItem = {
  title: string;
  org: string;
  timeline: string;
  domain: string;
  bullets: string[];
  imageSrc?: string;
  imageAlt?: string;
};

export type ProjectItem = {
  name: string;
  tech: string[];
  description: string;
  link: string;
  label: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type GalleryItem = {
  title: string;
  caption: string;
  accent: string;
};

export const experience: ExperienceItem[] = [
  {
    title: "Software Engineer Intern (Technical Analyst)",
    org: "Scotiabank Velocity Software Intern - ISS & Innovation Pod",
    timeline: "May 2026 - April 2027",
    domain: "Investment Support Services / Wealth Management Tech / Velocity",
    bullets: [
      "Engineered custom reporting engines for the Charles River Development platform using complex Oracle SQL queries and MS Report Builder.",
      "Provided real-time front-office operational data assistance and ticket resolution for high-stakes trading platforms.",
      "The Innovation Pod work is part of the Velocity software internship, where I help automate operational bottlenecks and present technical solutions to executive leadership.",
    ],
  },
  {
    title: "Signal Operator",
    org: "Canadian Armed Forces Reserves",
    timeline: "Active",
    domain: "Communications Training & Field Signals",
    imageSrc: "/armynick.jpeg",
    imageAlt: "Vincent Nicholas Buzali in military attire",
    bullets: [
      "Completed the basic plan and am preparing for SIG OP DP1 in Summer 2027.",
      "Building a foundation in communications procedures, field signals, and disciplined execution during training.",
    ],
  },
  {
    title: "Software Lead",
    org: "University of Guelph Rocketry Club",
    timeline: "Ongoing",
    domain: "Avionics, Telemetry & Flight Systems",
    bullets: [
      "Architected the primary mission website and the UGRC Suite & Ground Terminal.",
      "Directing software for telemetry logging, live flight tracking, sensor fusion, and avionics hardware integration.",
    ],
  },
];

export const projects: ProjectItem[] = [
  {
    name: "UGRC Suite & Ground Terminal",
    tech: ["TypeScript", "Web Serial", "WebSockets", "React"],
    description:
      "Real-time ground control dashboard for rocketry telemetry, sensor data streaming, and post-flight analytical logging.",
    link: "https://ugrcsuite.vercel.app/",
    label: "Launch Interface",
  },
  {
    name: "GRYPHEYE",
    tech: ["JavaScript", "Grounding DINO", "SAM", "YOLO"],
    description:
      "AI-powered computer vision system capable of real-time object detection and segmentation via natural language prompts.",
    link: "https://github.com/Nickbravo21/GRYPHEYE",
    label: "Source Repo",
  },
  {
    name: "UofG Rocketry Club Web Platform",
    tech: ["JavaScript", "Modern Web Stack"],
    description:
      "Official web interface featuring dynamic asset showcases, flight schedules, and sponsor engagement tools.",
    link: "https://uofgrocketryclub.ca/",
    label: "Live Site",
  },
  {
    name: "AURIX",
    tech: ["Python"],
    description:
      "Automated data pipeline and AI-driven reporting engine designed to transform unstructured inputs into actionable telemetry.",
    link: "https://github.com/Nickbravo21/Aurix",
    label: "Source Repo",
  },
  {
    name: "TRACE-IQ",
    tech: ["Python"],
    description:
      "Autonomous software error tracking platform that monitors web apps, diagnoses root bugs, and suggests immediate fixes.",
    link: "https://github.com/Nickbravo21/TRACE-IQ",
    label: "Source Repo",
  },
  {
    name: "ALLOCENTRA",
    tech: ["Java"],
    description:
      "High-performance offline decision engine designed for optimal resource and budget allocation under harsh constraints.",
    link: "https://github.com/Nickbravo21/Allocentra",
    label: "Source Repo",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    title: "Programming Languages",
    items: ["C", "C++", "Python", "R", "Java", "JavaScript", "TypeScript", "SQL (Oracle SQL)"],
  },
  {
    title: "Enterprise Systems & Data",
    items: ["Charles River IMS", "Oracle SQL Developer", "MS Reporting Services", "MS Power BI", "Power Apps"],
  },
  {
    title: "Systems & Embedded",
    items: ["Linux Systems", "Avionics Hardware Integration", "Arduino", "Sensor Fusion (IMU, GPS, Baro)", "Tactical Communications"],
  },
  {
    title: "Core Engineering",
    items: ["Cybersecurity Fundamentals", "System Architecture", "Telemetry Infrastructure", "Data Engineering"],
  },
];

export const gallery: GalleryItem[] = [
  {
    title: "UGRC Ground Terminal",
    caption: "UGRC Ground Terminal Development & Telemetry Testing",
    accent: "radar",
  },
  {
    title: "Field Training",
    caption: "Signal Operations Field Training - CAF Reserves",
    accent: "amber",
  },
  {
    title: "Innovation Pod",
    caption: "Scotiabank Wealth Management Tech & Innovation Pod",
    accent: "cyan",
  },
];

export const quickLinks = [
  { label: "GitHub", href: "https://github.com/Nickbravo21" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/vincent-nb/" },
];
export interface PersonalInfo {
  name: string;
  phone: string;
  email: string;
  github: string;
  linkedin: string;
  bio: string;
}

export interface Education {
  institution: string;
  degree: string;
  date: string;
  location: string;
  cgpa: string;
  coursework: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Project {
  title: string;
  stack: string[];
  links: {
    github?: string;
    live?: string;
  };
  date: string;
  description: string[];
}

export interface Experience {
  company: string;
  role: string;
  date: string;
  location: string;
  description: string[];
}

export interface Extracurricular {
  organization: string;
  role: string;
  date: string;
  location: string;
  description: string[];
}

export interface Award {
  title: string;
  description: string;
}

export interface PortfolioData {
  personalInfo: PersonalInfo;
  education: Education[];
  skills: SkillCategory[];
  projects: Project[];
  experience: Experience[];
  leadership: Extracurricular[];
  awards: Award[];
}

export const portfolioData: PortfolioData = {
  personalInfo: {
    name: "Maharshi Karpatiya",
    phone: "+91 9313519540",
    email: "maharshi25052007@gmail.com",
    github: "https://github.com/MK-byte25",
    linkedin: "https://www.linkedin.com/in/maharshi-karpatiya-056889331",
    bio: "Computer Science undergraduate at Pandit Deendayal Energy University with a strong foundation in full-stack web development, data structures, and algorithms. Passionate about engineering scalable, user-centric applications and optimizing performance, as demonstrated by my hands-on project experience and active participation in competitive programming."
  },
  education: [
    {
      institution: "Pandit Deendayal Energy University",
      degree: "Bachelor of Technology in Computer Science",
      date: "Expected May 2028",
      location: "Gandhinagar, Gujarat",
      cgpa: "8.81 / 10.0",
      coursework: [
        "Data Structures & Algorithms",
        "Object-Oriented Programming",
        "Discrete Mathematics",
        "Algorithms Analysis",
        "Database Management Systems",
        "Web Development",
        "Computer Architecture",
        "Linear Algebra",
        "Probability & Statistics"
      ]
    }
  ],
  skills: [
    {
      category: "Languages",
      items: ["C", "C++", "JavaScript", "TypeScript", "Python", "HTML", "CSS"]
    },
    {
      category: "Frameworks & Libraries",
      items: ["React.js", "Next.js 14", "Node.js", "Express.js", "Tailwind CSS", "Framer Motion", "Flutter", "NumPy", "Pandas", "Matplotlib"]
    },
    {
      category: "Databases & ORM",
      items: ["MongoDB", "PostgreSQL", "Prisma ORM"]
    },
    {
      category: "Tools & Concepts",
      items: ["MERN Stack", "RESTful APIs", "Git", "Vercel", "Render", "Postman", "Firebase", "Clerk Auth", "Figma", "Draw.io", "Jupyter Notebook"]
    }
  ],
  projects: [
    {
      title: "PeerLink",
      stack: ["TypeScript", "Next.js 14", "React", "PostgreSQL", "Prisma", "Clerk"],
      links: {
        github: "https://github.com/MK-byte25/PeerLink"
      },
      date: "Feb 2026 – Apr 2026",
      description: [
        "Architected a full-stack Next.js platform using TypeScript and Clerk to implement Role-Based Access Control (RBAC) for distinct Mentor and Mentee dashboards.",
        "Engineered a secure data synchronization pipeline using Next.js Server Actions, connecting frontend authentication to a serverless PostgreSQL database via Prisma ORM.",
        "Designed a mentor matching and booking engine featuring dynamic search filtering and conflict-free session scheduling."
      ]
    },
    {
      title: "SubTrack",
      stack: ["React", "Node.js", "Express", "MongoDB", "Firebase", "Framer Motion"],
      links: {
        live: "https://sub-track-azure.vercel.app/"
      },
      date: "May 2026 – Jun 2026",
      description: [
        "Engineered a decoupled Single Page Application (SPA) utilizing a React frontend and a Node.js/Express RESTful API, deployed across Vercel and Render for high-availability cloud execution.",
        "Implemented asynchronous state management and physics-driven micro-animations using Framer Motion, optimizing the DOM rendering pipeline to maintain a 60 FPS interactive user experience.",
        "Developed a mobile-first, adaptive user interface using Tailwind CSS, while securing backend endpoints via Firebase Authentication and strict CORS policies."
      ]
    },
    {
      title: "Digital Blood Inventory & Emergency Network",
      stack: ["Python", "PostgreSQL", "REST API"],
      links: {},
      date: "Mar 2026 – Apr 2026",
      description: [
        "Engineered a centralized blood bank management system to track inventory, securely register donors, and streamline blood distribution for both standard and emergency requests.",
        "Developed an emergency routing algorithm to automatically identify and contact the nearest registered donors in real-time when required blood types are unavailable in the central inventory.",
        "Designed scalable backend architectures and schemas using Python and PostgreSQL, ensuring high availability and the secure handling of sensitive donor medical records and contact information."
      ]
    }
  ],
  experience: [
    {
      company: "Sadbhavna Group",
      role: "Summer Volunteer Intern",
      date: "May 2025 – Jun 2025",
      location: "Banaskantha, Gujarat",
      description: [
        "Coordinated daily meal distribution and operated a high-volume public hydration station, providing essential heat relief to hundreds of residents.",
        "Collaborated with cross-functional volunteer teams to manage crowds and deliver equitable community support during peak summer temperatures."
      ]
    }
  ],
  leadership: [
    {
      organization: "National Entrepreneurship Challenge (NEC)",
      role: "Event Management & Logistics Head",
      date: "Sep 2024 – Mar 2025",
      location: "IIT Bombay (Finals)",
      description: [
        "Directed logistics for a 6-month nationwide challenge, driving the team to an All-India Rank 7 and securing a spot at the IIT Bombay national finals.",
        "Spearheaded large-scale events like \"Innovision\" and \"Future Foundry,\" managing venue operations and hospitality for hundreds of attendees and guest entrepreneurs."
      ]
    },
    {
      organization: "Anirveda (The Techno-Economics Club)",
      role: "Head of Graphic Design Committee",
      date: "Sep 2025 – Present",
      location: "Gandhinagar, Gujarat",
      description: [
        "Orchestrated corporate sponsorships for \"Economania\" Gujarat's largest Fintech Hackathon successfully.",
        "Managed end-to-end hospitality and designed high-impact promotional assets, driving state-wide participant engagement and on-campus brand visibility."
      ]
    }
  ],
  awards: [
    {
      title: "Competitive Programming",
      description: "Actively solving algorithmic challenges on LeetCode and CodeChef; Peak Rating of 1169 (Newbie) on Codeforces."
    },
    {
      title: "JEE Main",
      description: "Achieved 96.03 Percentile (Top 4% out of 1.4M+ candidates), demonstrating highly proficient mathematical and analytical problem-solving fundamentals."
    }
  ]
};

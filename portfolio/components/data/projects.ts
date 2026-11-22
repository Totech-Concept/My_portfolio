export interface Project {
    id: number;
    title: string;
    description: string;
    category: string;
    image?: string;
    keyFeatures: string[];
    technologies: string[];
    liveUrl?: string;
    githubUrl?: string;
}

export const myProjects: Project[] = [
    {
        id: 1,
        title: "Visitor Management System",
        description: "A full-stack web application designed to streamline visitor check-ins, appointment booking, host notifications, and real-time activity tracking with robust database management.",
        category: "Full Stack",
        keyFeatures: [
           "User authentication and role-based access control",
            "Real-time visitor sign-in/sign-out logging",
            "Automated notifications and dashboard analytics",
            "Secure database storage and RESTful API integration" 
        ],
        technologies: ["React", "Tailwind CSS", "Node.js", "Express.js", "MySQL"],
        liveUrl: "#",
        githubUrl: "#"
    },
    {
    id: 2,
    title: "Personal Full Stack Developer Portfolio",
    description: "A modern, fully responsive developer portfolio built with Next.js 16 and Tailwind CSS v4, featuring dynamic Light/Dark mode persistence and clean component architecture.",
    category: "Frontend / Full Stack",
    keyFeatures: [
      "Global Light and Dark mode theme switching with localStorage persistence",
      "Fully responsive layout optimized for mobile, tablet, and desktop",
      "Modular component design using Next.js App Router and TypeScript",
      "Interactive contact form with loading states and validation"
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Express.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#"
  }
];
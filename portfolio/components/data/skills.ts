import type { IconType } from "react-icons";
import { 
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs
 } from 'react-icons/fa'
import { 
    SiJavascript,
    SiTypescript,
    SiExpress,
    SiMysql,
    SiMongodb,
    SiGit,
    SiGithub,
    SiPostman,
    SiVercel,
    SiRender,
    SiRailway,
 } from 'react-icons/si';

import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'



export interface Skill {
    id: number;
    name: string;
    description: string;
    icon: IconType;
    color: string;
    category: 'Frontend' | 'Backend' | 'Database' | 'Tools';
}


export const mySkills: Skill[] = [
    {
        id: 1,
        name: 'HTML5',
        description: 'Crafting semantic, accessible, and SEO-optimized structures that form the strong foundation of every web project.',
        icon: FaHtml5,
        color: 'text-orange-500',
        category: 'Frontend'
    },
    {
        id: 2,
        name: 'CSS3',
        description: 'Designing fluid, pixel-perfect layouts with a focus on modern responsive design, smooth transitions, and cross-browser compatibility.',
        icon: FaCss3Alt,
        color: 'text-blue-500',
        category: 'Frontend'
    },
    {
        id: 3,
        name: 'JavaScript',
        description: 'Implementing clean, modern (ES6+) logic to bring user interfaces to life with interactive features, dynamic data, and smooth functionality.',
        icon: SiJavascript,
        color: 'text-yellow-500',
        category: 'Frontend'
    },
    {
        id: 4,
        name: 'React',
        description: 'Building highly interactive, component-driven user interfaces with robust state management and reusable, scalable code.',
        icon: FaReact,
        color: 'text-cyan-400',
        category: 'Frontend'
    },
    {
        id: 5,
        name: 'NextJs',
        description: 'Developing production-ready, ultra-fast web applications optimized with server-side rendering, static generation, and superior SEO performance.',
        icon: RiNextjsFill,
        color: 'text-purple-950',
        category: 'Frontend'
    },
    {
        id: 6,
        name: 'TailwindCss',
        description: 'Engineering clean, highly maintainable user interfaces rapidly using a utility-first approach to ensure modern, lightweight styling.',
        icon: RiTailwindCssFill,
        color: 'text-sky-400',
        category: 'Frontend'
    },
    {
        id: 7,
        name: 'TypeScript',
        description: 'Writing more reliable JavaScript applications with static typing, interfaces, and improved code organization and maintainability.',
        icon: SiTypescript,
        color: 'text-blue-600',
        category: 'Frontend'
    },

    // Backend
    {
        id: 8,
        name: 'Node.js',
        description: 'Building server-side applications with JavaScript, handling asynchronous operations, processing requests, and connecting applications to databases and external services.',
        icon: FaNodeJs,
        color: 'text-green-500',
        category: 'Backend'
    },
    {
        id: 9,
        name: 'Express.js',
        description: 'Developing backend services and RESTful APIs with flexible routing, middleware, request handling, and structured server-side application logic.',
        icon: SiExpress,
        color: 'text-foreground]',
        category: 'Backend'
    },

    // DATABASE
    {
        id: 10,
        name: 'MySQL',
        description: 'Working with relational databases to structure information, manage relationships between tables, and retrieve or manipulate data using SQL queries.',
        icon: SiMysql,
        color: 'text-blue-500',
        category: 'Database'
    },
    {
        id: 11,
        name: 'MongoDB',
        description: 'Managing document-oriented data with flexible schemas, organizing application records, and performing database operations using collections and documents.',
        icon: SiMongodb,
        color: 'text-green-500',
        category: 'Database'
    },

    // TOOLS
    {
        id: 12,
        name: 'Git',
        description: 'Tracking code changes, managing branches, and maintaining a reliable development history throughout the software development process.',
        icon: SiGit,
        color: 'text-orange-500',
        category: 'Tools'
    },
    {
        id: 13,
        name: 'GitHub',
        description: 'Hosting repositories, managing project versions, collaborating with developers, and maintaining source code for software projects.',
        icon: SiGithub,
        color: 'text-foreground',
        category: 'Tools'
    },
    {
        id: 14,
        name: 'Postman',
        description: 'Testing and debugging APIs by sending HTTP requests, inspecting responses, and validating backend endpoints during development.',
        icon: SiPostman,
        color: 'text-orange-500',
        category: 'Frontend'
    },
    {
        id: 15,
        name: 'Vercel',
        description: 'Deploying and hosting frontend applications with automated builds, production deployments, and seamless integration with Git repositories.',
        icon: SiVercel,
        color: 'text-foreground',
        category: 'Tools',
    },
    {
        id: 16,
        name: 'Render',
        description: 'Deploying backend applications and web services, configuring environments, and hosting server-side projects.',
        icon: SiRender,
        color: 'text-foreground',
        category: 'Tools',
    },
    {
        id: 17,
        name: 'Railway',
        description: 'Deploying applications and managing cloud infrastructure, including application services and databases.',
        icon: SiRailway,
        color: 'text-foreground',
        category: 'Tools',
    },
];
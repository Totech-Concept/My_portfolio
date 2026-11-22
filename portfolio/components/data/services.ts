import { IconType } from "react-icons";
import { FaLaptop, FaRocket, FaDatabase, FaLayerGroup } from "react-icons/fa";

export interface Services {
    id: number,
    name: string,
    shortDescription: string,
    icon: IconType,
    color: string,
    fullDescription: string
}

export const myServices: Services[] = [
    {
        id: 1,
        name: "Frontend Development",
        shortDescription: "Building responsive, interactive and accessible user interfaces using modern technologies such as React, Next.js, TypeScript and Tailwind CSS.",
        icon: FaLaptop,
        color: "text-blue-500",
        fullDescription: "Great code isn't just about what the user sees—it's about building a foundation that scales. I focus on writing clean, modular, semantic frontend code that integrates seamlessly with backend systems. By creating reusable components, maintaining a well-structured architecture, and seperating concerns effectively, I ensure that your user interface remains easy to maintain, extend, and improve as your application evolves."
    },
    {
        id: 2,
        name: "Backend Development",
        shortDescription: "Developing server-side applications, RESTful APIs, authentication systems and application logic using Node.js and Express.js.",
        icon: FaRocket,
        color: "text-green-500",
        fullDescription: "A great application needs more than an attractive interface; it needs a reliable engine working behind the scenes. I focus on building structured, efficient, and maintainable backend systems that handle application logic, process requests, and connect different services seamlessly. By developing well-organized APIs, implementing secure authentication mechanisms, and maintaining clear separation of concerns, I ensure that your application's backend remains reliable, scalable, and easy to extend as your business grows."
    },
    {
        id: 3,
        name: "Database Management",
        shortDescription: "Designing and managing databases with MySQL and MongoDB to support efficient data storage, retrieval and application functionality.",
        icon: FaDatabase,
        color: "text-yellow-500",
        fullDescription: "Every reliable application depends on how effectively its data is structured, stored, and managed. I focus on designing well-organized database systems that ensure data consistency, efficient retrieval, and seamless communication with backend services. By creating structured schemas, establishing meaningful relationships, and optimizing database operations, I ensure that your application's data remains accessible, reliable, and manageable as your system evolves."
    },
    {
        id: 4,
        name: "Full Stack Application Development",
        shortDescription: "Building end-to-end web applications by connecting frontend interfaces, backend services, APIs and databases into functional digital solutions.",
        icon: FaLayerGroup,
        color: "text-purple-500",
        fullDescription: "Building a complete application requires more than developing individual components; it requires bringing every layer together into one cohesive system. I focus on developing end-to-end web applications that combine intuitive frontend experiences, reliable backend functionality, and well-structured database systems. By ensuring seamless communication between the user interface, server-side logic, APIs, and databases, I create maintainable digital solutions that work together efficiently and can adapt as your business requirements grow."
    },
]
import React from "react";
import { myProjects } from "../data/project";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectsSection() {
    return (
        <section id="projects" className="bg-background text-foreground py-20 transition-colors duration-300 border-t border-border/40">
            <div className="container mx-auto px-6 space-y-12">

                {/* Section Header */}
                <div className='flex flex-col items-center justify-center text-center space-y-3'>
                    <span className="inline-block rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-semibold tracking-wide text-primary shadow-xs uppercase">
                        Portfolio
                    </span>
                    <h2 className="font-extrabold text-3xl md:text-5xl tracking-tight">Featured Projects</h2>
                    <p className="text-muted text-base md:text-lg max-w-xl">
                        Explore real-world web applications. I've built, deployed, and tested.
                    </p>
                </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {myProjects.map((project) => (
                    <div
                        key={project.id}
                        className="bg-surface border border-border rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-sm transition-all duration-300 hover:border-primary/50 hover:shadow-md"
                    >
                        <div className="space-y-4">
                            {/* Category Badge */}
                            <div className="flex justify-between items-center">
                                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-background border border-border text-primary">
                                    {project.category}
                                </span>
                            </div>

                            {/* Title & Description */}
                            <h3 className="font-bold text-2xl text-foreground">{project.title}</h3>
                            <p className="text-muted text-base leading-relaxed">{project.description}</p>

                            {/* Key Functionalities / Features */}
                            <div className="space-y-2 pt-2">
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary">Key Functionalities</h4>
                                <ul className="list-disc list-inside text-muted text-sm space-y-1">
                                    {project.keyFeatures.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                    ))}
                                </ul>
                            </div>

                            {/* Technologies Used */}
                            <div className="pt-2">
                                <h4 className="text-xs font-semibold uppercase tracking-wider text-primary pb-2">Technologies Used</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className="text-xs bg-background/60 border border-border px-3 py-1 rounded-lg text-foreground font-medium">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                    {/* Links (Live Demo & GitHub) */}
                    <div className='flex items-center gap-4 pt-8 mt-6 border-t border-border/60'>
                        <a 
                            href={project.liveUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 bg-primary text-button-text px-4 py-2.5 rounded-xl text-sm font-medium transition-opacity hover:opacity-90 shadow-sm'
                        >
                            <FaExternalLinkAlt className='w-3.5 h-3.5' />
                            <span>Live Demo</span>
                        </a>
                        <a 
                            href={project.githubUrl} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className='flex items-center gap-2 bg-background border border-border text-foreground px-4 py-2.5 rounded-xl text-sm font-medium transition-colors hover:border-primary/50'
                        >
                            <FaGithub className='w-4 h-4' />
                            <span>Repository</span>
                        </a>
                    </div>

                    </div>
                ))}
                </div>

            </div>
        </section>
    )
}
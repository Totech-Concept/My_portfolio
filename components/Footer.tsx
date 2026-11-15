import React from "react";
import Link from 'next/link'
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa6";

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-surface border-t border-border py-12 transition-colors duration-300">
            <div className="container mx-auto px-6 space-y-8">

                <div className="flex flex-col md:flex-row items-center justify-between gap-6">

                {/* Brand & Bio */}
                <div className="text-center md:text-left space-y-2">
                    <Link href="#home" className="text-xl font-bold text-foreground tracking-tight">
                        Tobiloba<span className="text-primary">.</span>
                    </Link>
                    <p className="text-muted text-sm">
                        Full Stack Developer building modern, responsive, and functional web applications that solve real-world problems.
                    </p>
                </div>

                {/* Quick Navigation Links */}
                <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-muted">
                    <Link href="#home" className="hover:text-foreground transition-colors">
                        Home
                    </Link>
                    <Link href="#about" className="hover:text-foreground transition-colors">
                        About
                    </Link>
                    <Link href="#projects" className="hover:text-foreground transition-colors">
                        Projects
                    </Link>
                    <Link href="#contact" className="hover:text-foreground transition-colors">
                        Contact
                    </Link>
                </div>

                {/* Social Icons */}
                <div className="flex gap-3">
                    <a 
                        href="https://github.com"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="GitHub" 
                        className="p-2.5 bg-background/50 border border-border rounded-xl text-foreground hover:text-primary hover:border-primary/50 transition-all">
                        <FaGithub className="w-4 h-4" />
                    </a>
                    <a 
                        href="https://linkedin.com"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="LinkedIn" 
                        className="p-2.5 bg-background/50 border border-border rounded-xl text-foreground hover:text-primary hover:border-primary/50 transition-all">
                        <FaLinkedin className="w-4 h-4" />
                    </a>
                    <a 
                        href="https://twitter.com"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        aria-label="Twitter" 
                        className="p-2.5 bg-background/50 border border-border rounded-xl text-foreground hover:text-primary hover:border-primary/50 transition-all">
                        <FaTwitter className="w-4 h-4" />
                    </a>
                </div>
            </div>

            {/* Copyright Divider */}
            <div className="pt-8 border-t border-border/60 text-center text-xs text-muted">
                <p>&copy; {currentYear} Tobiloba. All rights reserved. Built with Next.js and Tailwind CSS.</p>
            </div>
        </div>
        </footer>
    );
}
'use client'
import React, { useState, useEffect } from 'react'
import Link from "next/link"
import { Sun, Moon, Menu, X } from 'lucide-react'

const navLinks = [
    {id: 1, label: 'Home', href: '#home'},
    {id: 2, label: 'About', href: '#about'},
    {id: 3, label: 'Projects', href: '#projects'},
    {id: 4, label: 'Contact', href: '#contact'},
];

export default function Navbar() {
    const [isLight, setIsLight] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;

        if (storedTheme === 'light' || (!storedTheme && prefersLight)) {
            setIsLight(true);
            document.documentElement.classList.add('light');
        } else {
            setIsLight(false);
            document.documentElement.classList.remove('light');
        }
    }, []);

    // Toggle theme function
    const toggleTheme = () => {
        if (isLight) {
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
            setIsLight(false);
        } else {
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
            setIsLight(true);
        }
    };
    return (
        <header className='sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-border transition-colors duration-300'>
            <div className='container mx-auto px-6 h-20 flex items-center justify-between'>

                {/* Logo / Brand */}
                <Link href="#home" className='text-xl font-bold text-foreground tracking-tight'>
                    Tobiloba<span className='text-primary'>.</span>
                </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1">
                {navLinks.map((item) => (
                <Link
                    key={item.id}
                    href={item.href}
                    className="text-muted hover:text-foreground hover:bg-background/50 px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                >
                    {item.label} 
                </Link>
                ))}
        </nav>

        {/* Right Side Actions: Theme Toggle & Mobile Hamburger */}
        <div className="flex items-center space-x-4">
            {/* Theme Toggle Button */}
            <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-background/50 transition-colors"
                aria-label="Toggle theme"
            >
                {isLight ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
            </button>

            {/* Mobile Menu Toggle Button */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-background/50 border border-border text-foreground transition-opacity hover:opacity-80"
                aria-label="Toggle Mobile Menu"
            >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
        </div>
    </div>

    {/* Mobile Navigation Menu */}
    {isMobileMenuOpen && (
        <div className='md:hidden absolute top-full left-0 w-full bg-surface border-b border-border p-6 shadow-lg transition-all duration-300 ease-in-out opacity-100 translate-y-0 visible'>
            <ul className='flex flex-col space-y-3'>
                {navLinks.map((item) => (
                    <li key={item.id}>
                        <Link
                            href={item.href}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className='block text-muted hover:text-foreground hover:bg-background/50 px-4 py-3 rounded-lg text-base font-medium transition-colors'
                            >
                                {item.label}
                        </Link> 
                    </li>
                ))}
            </ul>
        </div>
    )}
    </header>
    );
}

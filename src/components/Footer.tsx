"use client";

import * as React from "react";
import Link from "next/link";
import { Linkedin, Github } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-background border-t border-border/40 pb-8 pt-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <Link href="/" className="text-2xl font-bold tracking-tighter text-gradient mb-4 inline-block">
                            FT /&gt;
                        </Link>
                        <p className="text-muted-foreground max-w-xs mt-2 text-sm leading-relaxed">
                            Franck Lionel Tani - Business Analyst, IT Consultant, and Fintech Founder.
                            Driving innovation and strategic value in West Africa.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="#home" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link></li>
                            <li><Link href="#experience" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Experience</Link></li>
                            <li><Link href="#projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Projects</Link></li>
                            <li><Link href="#skills" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Skills</Link></li>
                        </ul>
                    </div>

                    {/* Socials */}
                    <div>
                        <h4 className="font-semibold mb-4">Connect</h4>
                        <div className="flex space-x-4">
                            <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="LinkedIn">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="h-10 w-10 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors" aria-label="GitHub">
                                <Github className="h-5 w-5" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
                    <p>© {currentYear} Franck Lionel Tani. All rights reserved.</p>
                    <p className="mt-2 md:mt-0">Designed & Built with Next.js & Tailwind</p>
                </div>
            </div>
        </footer>
    );
}

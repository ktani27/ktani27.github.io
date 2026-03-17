"use client";

import * as React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useLanguage } from "./LanguageContext";

export function Navbar() {
    const { setTheme, theme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const { language, setLanguage, t } = useLanguage();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "fr" : "en");
    };

    const navLinks = [
        { name: t.nav.home, href: "#home" },
        { name: t.nav.experience, href: "#experience" },
        { name: t.nav.projects, href: "#projects" },
        { name: t.nav.skills, href: "#skills" },
        { name: t.nav.contact, href: "#contact" },
    ];

    return (
        <header className="fixed top-0 w-full z-50 glass border-b border-border/40">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <Link
                            href="/"
                            className="text-xl font-bold tracking-tighter text-gradient"
                        >
                            FT /&gt;
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 justify-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Right side buttons */}
                    <div className="flex items-center space-x-2 sm:space-x-4">
                        <button
                            onClick={toggleLanguage}
                            className="px-2 py-1.5 text-xs font-semibold rounded-md hover:bg-muted transition-colors text-foreground flex items-center space-x-1 border border-border/50"
                            aria-label="Toggle language"
                        >
                            <span className={language === "en" ? "text-primary" : "text-muted-foreground"}>EN</span>
                            <span className="text-muted-foreground/50">|</span>
                            <span className={language === "fr" ? "text-primary" : "text-muted-foreground"}>FR</span>
                        </button>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full hover:bg-muted transition-colors text-foreground"
                            aria-label="Toggle theme"
                        >
                            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                            <Moon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        </button>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 rounded-md text-foreground hover:bg-muted focus:outline-none"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="md:hidden glass border-t border-border/40">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 text-center">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="block px-3 py-2 rounded-md text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}

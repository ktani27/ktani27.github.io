"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";

export function HeroSection() {
    const { t } = useLanguage();
    const titles = t.hero.titles;

    return (
        <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/20 blur-[100px] rounded-full -z-10" />

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    {/* Profile Picture Placeholder - using an empty div setup to look like one until an image is provided */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="flex justify-center mb-8"
                    >
                        <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-background shadow-[0_0_30px_rgba(79,70,229,0.3)] bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold">
                            FT
                        </div>
                    </motion.div>

                    {/* Titles Badges */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="flex flex-wrap justify-center gap-2 mb-6"
                    >
                        {titles.map((title: string) => (
                            <span
                                key={title}
                                className="px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary border border-primary/20"
                            >
                                {title}
                            </span>
                        ))}
                    </motion.div>

                    {/* Main Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight mb-6"
                    >
                        {t.hero.greeting}{" "}
                        <span className="text-gradient">{t.hero.name}</span>
                    </motion.h1>

                    {/* Value Proposition */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed"
                    >
                        {t.hero.description}
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-white bg-primary hover:bg-primary/90 rounded-full transition-all hover:shadow-lg hover:shadow-primary/25 w-full sm:w-auto"
                        >
                            {t.hero.viewWork}
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center px-8 py-3.5 text-base font-medium text-foreground bg-secondary hover:bg-secondary/80 rounded-full transition-all w-full sm:w-auto"
                        >
                            {t.hero.getInTouch}
                            <Mail className="ml-2 h-5 w-5" />
                        </Link>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

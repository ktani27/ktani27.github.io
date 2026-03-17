"use client";

import * as React from "react";
import { Briefcase, LineChart, Server, Globe } from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "./LanguageContext";

export function ExperienceSection() {
    const { t } = useLanguage();
    const experienceData = t.experience;

    const getIcon = (index: number) => {
        switch (index) {
            case 0: return <Briefcase className="h-6 w-6 text-primary" />;
            case 1: return <Server className="h-6 w-6 text-primary" />;
            case 2: return <LineChart className="h-6 w-6 text-primary" />;
            case 3: return <Globe className="h-6 w-6 text-primary" />;
            default: return <Briefcase className="h-6 w-6 text-primary" />;
        }
    };

    return (
        <section id="experience" className="py-20 relative bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        {experienceData.title} <span className="text-gradient">{experienceData.titleAccent}</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        {experienceData.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {experienceData.items.map((exp: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card glass border border-border/50 p-6 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1"
                        >
                            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                {getIcon(index)}
                            </div>
                            <h3 className="text-xl font-semibold mb-3">{exp.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

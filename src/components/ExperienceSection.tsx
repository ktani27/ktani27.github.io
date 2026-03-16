"use client";

import * as React from "react";
import { Briefcase, LineChart, Server, Globe } from "lucide-react";
import { motion } from "motion/react";

const experiences = [
    {
        icon: <Briefcase className="h-6 w-6 text-primary" />,
        title: "IT Consulting",
        description:
            "Advising organizations on technology strategies, digital transformation, and optimizing operational workflows.",
    },
    {
        icon: <Server className="h-6 w-6 text-primary" />,
        title: "Management Information Systems",
        description:
            "Designing and implementing robust MIS architectures to support data-driven decision making and business intelligence.",
    },
    {
        icon: <LineChart className="h-6 w-6 text-primary" />,
        title: "Business Analysis",
        description:
            "Bridging the gap between IT and the business to assess processes, determine requirements, and deliver data-driven recommendations.",
    },
    {
        icon: <Globe className="h-6 w-6 text-primary" />,
        title: "Fintech Innovation",
        description:
            "Pioneering digital financial solutions in West Africa, focusing on accessibility, security, and scalable infrastructure.",
    },
];

export function ExperienceSection() {
    return (
        <section id="experience" className="py-20 relative bg-muted/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Professional <span className="text-gradient">Experience</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        A track record of leveraging technology to solve complex business challenges.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-card glass border border-border/50 p-6 rounded-2xl hover:shadow-lg transition-all hover:-translate-y-1"
                        >
                            <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                                {exp.icon}
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

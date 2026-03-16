"use client";

import * as React from "react";
import { Database, Code, BarChart, PieChart, AppWindow } from "lucide-react";
import { motion } from "motion/react";

const skills = [
    { name: "SQL", icon: <Database className="w-5 h-5 mr-2" /> },
    { name: "Python", icon: <Code className="w-5 h-5 mr-2" /> },
    { name: "Power BI", icon: <BarChart className="w-5 h-5 mr-2" /> },
    { name: "Tableau", icon: <PieChart className="w-5 h-5 mr-2" /> },
    { name: "PySpark", icon: <AppWindow className="w-5 h-5 mr-2" /> },
];

export function SkillsSection() {
    return (
        <section id="skills" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Technical <span className="text-gradient">Proficiencies</span>
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto">
                        Leveraging industry-standard tools for data analysis, business intelligence, and scalable architecture.
                    </p>
                </div>

                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={{
                        hidden: { opacity: 0 },
                        visible: {
                            opacity: 1,
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto"
                >
                    {skills.map((skill) => (
                        <motion.div
                            key={skill.name}
                            variants={{
                                hidden: { opacity: 0, scale: 0.8 },
                                visible: { opacity: 1, scale: 1 },
                            }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="flex items-center px-6 py-3 rounded-full bg-secondary text-secondary-foreground font-medium border border-border/50 shadow-sm transition-all hover:bg-primary/10 hover:border-primary/30 cursor-default"
                        >
                            <span className="text-primary">{skill.icon}</span>
                            {skill.name}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

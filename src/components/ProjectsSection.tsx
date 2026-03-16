"use client";

import * as React from "react";
import { ProjectCardAfrifund } from "./ProjectCardAfrifund";
import { ProjectCardEthCI30 } from "./ProjectCardEthCI30";
import { ProjectCardPralines } from "./ProjectCardPralines";
import { motion } from "motion/react";

export function ProjectsSection() {
    return (
        <section id="projects" className="py-24 bg-muted/10 relative">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Featured <span className="text-gradient">Projects</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Highlighting core initiatives that drive innovation and deliver measurable business value.
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
                                staggerChildren: 0.2,
                            },
                        },
                    }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                        <ProjectCardAfrifund />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                        <ProjectCardEthCI30 />
                    </motion.div>
                    <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                        <ProjectCardPralines />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

"use client";

import * as React from "react";
import { Link2, Github, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export function ProjectCardPralines() {
    return (
        <div className="flex flex-col h-full bg-card rounded-2xl overflow-hidden border border-border/50 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl group">
            {/* Thumbnail area (Gradient placeholder) */}
            <div className="h-48 w-full bg-gradient-to-br from-rose-500 to-orange-500 relative overflow-hidden flex items-center justify-center">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                <span className="text-white text-2xl font-bold tracking-widest uppercase z-10 glass px-6 py-2 rounded-lg">Pralines</span>
            </div>

            <div className="flex flex-col flex-grow p-6">
                <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">Pralines</h3>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300">
                        E-Commerce
                    </span>
                </div>

                <p className="text-muted-foreground text-sm mb-6 flex-grow">
                    An intuitive online bakery business platform featuring custom order management, digital storefront, and integrated payment systems to scale artisanal baked goods delivery.
                </p>

                <div className="space-y-4">
                    <div className="flex flex-wrap gap-2">
                        {["Next.js", "Stripe", "PostgreSQL", "Tailwind"].map((tech) => (
                            <span key={tech} className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-md">
                                {tech}
                            </span>
                        ))}
                    </div>

                    <ul className="space-y-1 text-sm text-muted-foreground">
                        <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary mt-0.5 shrink-0" /> Conversion-optimized UI</li>
                        <li className="flex items-start"><CheckCircle2 className="w-4 h-4 mr-2 text-primary mt-0.5 shrink-0" /> End-to-end checkout flow</li>
                    </ul>

                    <div className="pt-4 border-t border-border/50 flex gap-3 mt-auto">
                        <Link href="#" className="flex-1 inline-flex justify-center items-center py-2 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors">
                            <Link2 className="w-4 h-4 mr-2" /> Visit Store
                        </Link>
                        <Link href="#" className="inline-flex justify-center items-center py-2 px-4 rounded-lg bg-secondary text-secondary-foreground text-sm font-medium hover:bg-secondary/80 transition-colors">
                            <Github className="w-4 h-4" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

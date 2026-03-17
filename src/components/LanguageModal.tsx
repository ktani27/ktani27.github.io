"use client";

import React, { useEffect, useState } from "react";
import { useLanguage } from "./LanguageContext";
import { motion, AnimatePresence } from "motion/react";
import { Globe } from "lucide-react";

export function LanguageModal() {
    const { setLanguage } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check local storage after mount
        const hasSelectedLanguage = localStorage.getItem("preferredLanguage");
        if (!hasSelectedLanguage) {
            setIsOpen(true);
        }
    }, []);

    const selectLanguage = (lang: "en" | "fr") => {
        setLanguage(lang);
        setIsOpen(false);
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="w-full max-w-sm bg-card border border-border overflow-hidden rounded-2xl shadow-xl flex flex-col items-center p-6 sm:p-8 text-center"
                    >
                        <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                            <Globe className="h-6 w-6" />
                        </div>
                        <h2 className="text-xl font-bold mb-2">Choose your preferred language</h2>
                        <h2 className="text-xl font-bold mb-8 text-muted-foreground">Choisissez votre langue préférée</h2>

                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <button
                                onClick={() => selectLanguage("en")}
                                className="flex-1 py-3 px-6 rounded-xl bg-secondary text-secondary-foreground font-medium hover:bg-secondary/80 transition-colors border border-border/50 shadow-sm"
                            >
                                English
                            </button>
                            <button
                                onClick={() => selectLanguage("fr")}
                                className="flex-1 py-3 px-6 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors shadow-sm"
                            >
                                Français
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
}

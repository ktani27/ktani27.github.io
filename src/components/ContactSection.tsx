"use client";

import * as React from "react";
import { Mail, MapPin, Send, Linkedin } from "lucide-react";

export function ContactSection() {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
                        Get In <span className="text-gradient">Touch</span>
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Ready to collaborate on driving fintech innovation and optimizing business operations?
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <div className="bg-card glass border border-border/50 p-8 rounded-2xl shadow-sm">
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Name</label>
                                <input
                                    id="name"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Email</label>
                                <input
                                    id="email"
                                    type="email"
                                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="your.email@example.com"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">Message</label>
                                <textarea
                                    id="message"
                                    className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                    placeholder="How can we work together?"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2"
                            >
                                Send Message
                                <Send className="ml-2 h-4 w-4" />
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col justify-center space-y-8 lg:px-8 border-l-0 lg:border-l border-border/50 h-full">
                        <div>
                            <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                            <p className="text-muted-foreground mb-8">
                                I'm currently available for consulting opportunities and long-term collaborations.
                                Whether you have a question or just want to say hi, I'll try my best to get back to you!
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-6 shrink-0">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Email</p>
                                    <a href="mailto:franck@example.com" className="text-lg font-medium hover:text-primary transition-colors">
                                        hello@francktani.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-6 shrink-0">
                                    <MapPin className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Location</p>
                                    <p className="text-lg font-medium">West Africa & Remote</p>
                                </div>
                            </div>

                            <div className="flex items-center">
                                <div className="h-12 w-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-6 shrink-0">
                                    <Linkedin className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium text-muted-foreground">Professional Network</p>
                                    <a href="#" className="text-lg font-medium hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                        LinkedIn Profile
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

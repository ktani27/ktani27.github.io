"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Language = "en" | "fr";

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: any;
}

const translations = {
    en: {
        nav: {
            home: "Home",
            experience: "Experience",
            projects: "Projects",
            skills: "Skills",
            contact: "Contact",
        },
        hero: {
            titles: ["Business Analyst", "IT Consultant", "Fintech Founder"],
            greeting: "Hi, I'm",
            name: "Franck Lionel Tani",
            description: "Driving fintech innovation in West Africa through strategic business analysis, cutting-edge management information systems, and entrepreneurial vision.",
            viewWork: "View My Work",
            getInTouch: "Get In Touch",
        },
        experience: {
            title: "Professional",
            titleAccent: "Experience",
            subtitle: "A track record of leveraging technology to solve complex business challenges.",
            items: [
                {
                    title: "IT Consulting",
                    description: "Advising organizations on technology strategies, digital transformation, and optimizing operational workflows.",
                },
                {
                    title: "Management Information Systems",
                    description: "Designing and implementing robust MIS architectures to support data-driven decision making and business intelligence.",
                },
                {
                    title: "Business Analysis",
                    description: "Bridging the gap between IT and the business to assess processes, determine requirements, and deliver data-driven recommendations.",
                },
                {
                    title: "Fintech Innovation",
                    description: "Pioneering digital financial solutions in West Africa, focusing on accessibility, security, and scalable infrastructure.",
                },
            ],
        },
        skills: {
            title: "Technical",
            titleAccent: "Proficiencies",
            subtitle: "Leveraging industry-standard tools for data analysis, business intelligence, and scalable architecture.",
        },
        projects: {
            title: "Featured",
            titleAccent: "Projects",
            subtitle: "Highlighting core initiatives that drive innovation and deliver measurable business value.",
            afrifund: {
                title: "Afrifund",
                badge: "Fintech",
                description: "A blockchain-based crowdfunding platform designed to democratize access to capital for entrepreneurs in West Africa. Features smart-contract milestone releases and transparent investment tracking.",
                points: ["Decentralized funding", "Transparent milestones"],
                btnLive: "Live Demo",
            },
            ethci30: {
                title: "Eth CI 30",
                badge: "Crypto Data",
                description: "A proprietary crypto index tracking the top 30 Ethereum ecosystem tokens based on dynamic market capitalization, tailored for quantitative finance analysis and institutional tracking.",
                points: ["Market capitalization weighting", "Automated rebalancing"],
                btnView: "View Index",
            },
            pralines: {
                title: "Pralines",
                badge: "E-Commerce",
                description: "An intuitive online bakery business platform featuring custom order management, digital storefront, and integrated payment systems to scale artisanal baked goods delivery.",
                points: ["Conversion-optimized UI", "End-to-end checkout flow"],
                btnVisit: "Visit Store",
            },
        },
        contact: {
            title: "Get In",
            titleAccent: "Touch",
            subtitle: "Ready to collaborate on driving fintech innovation and optimizing business operations?",
            formTitle: "Send a Message",
            nameLabel: "Name",
            namePlaceholder: "Your Name",
            emailLabel: "Email",
            emailPlaceholder: "your.email@example.com",
            messageLabel: "Message",
            messagePlaceholder: "How can we work together?",
            btnSend: "Send Message",
            infoTitle: "Contact Information",
            infoDesc: "I'm currently available for consulting opportunities and long-term collaborations. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
            locationLabel: "Location",
            locationValue: "West Africa & Remote",
            networkLabel: "Professional Network",
        },
        footer: {
            description: "Franck Lionel Tani - Business Analyst, IT Consultant, and Fintech Founder. Driving innovation and strategic value in West Africa.",
            quickLinks: "Quick Links",
            connect: "Connect",
            rights: "All rights reserved.",
            builtWith: "Designed & Built with Next.js & Tailwind",
        },
    },
    fr: {
        nav: {
            home: "Accueil",
            experience: "Expérience",
            projects: "Projets",
            skills: "Compétences",
            contact: "Contact",
        },
        hero: {
            titles: ["Consultant Transformation Digitale & Performance Operationnelle", "Expert en Fintech & Data Science"],
            greeting: "Bonjour, je suis",
            name: "Franck Lionel Tani",
            description: "Stimuler l'innovation fintech en Afrique de l'Ouest grâce à une analyse commerciale stratégique, des systèmes d'information de gestion de pointe et une vision entrepreneuriale.",
            viewWork: "Voir mon travail",
            getInTouch: "Me contacter",
        },
        experience: {
            title: "Expérience",
            titleAccent: "Professionnelle",
            subtitle: "Une expérience avérée dans l'utilisation de la technologie pour résoudre des défis commerciaux complexes.",
            items: [
                {
                    title: "Consulting IT",
                    description: "Conseiller les organisations sur les stratégies technologiques, la transformation numérique et l'optimisation des flux de travail opérationnels.",
                },
                {
                    title: "Systèmes d'Information de Gestion",
                    description: "Conception et mise en œuvre d'architectures SIG robustes pour soutenir la prise de décision basée sur les données et la Business Intelligence.",
                },
                {
                    title: "Analyse Commerciale",
                    description: "Faire le pont entre l'informatique et les opérations pour évaluer les processus, déterminer les besoins et fournir des recommandations basées sur les données.",
                },
                {
                    title: "Innovation Fintech",
                    description: "Pionnier des solutions financières numériques en Afrique de l'Ouest, avec un accent sur l'accessibilité, la sécurité et une infrastructure évolutive.",
                },
            ],
        },
        skills: {
            title: "Compétences",
            titleAccent: "Techniques",
            subtitle: "Exploitation d'outils standardisés de l'industrie pour l'analyse de données, l'informatique décisionnelle et l'architecture évolutive.",
        },
        projects: {
            title: "Projets",
            titleAccent: "Phare",
            subtitle: "Mise en évidence des initiatives clés qui stimulent l'innovation et apportent une valeur commerciale mesurable.",
            afrifund: {
                title: "Afrifund",
                badge: "Fintech",
                description: "Une plateforme de financement participatif basée sur la blockchain conçue pour démocratiser l'accès au capital pour les entrepreneurs en Afrique de l'Ouest. Fonctionnalités de déblocage d'étapes par smart contracts et suivi transparent des investissements.",
                points: ["Financement décentralisé", "Étapes transparentes"],
                btnLive: "Démo en direct",
            },
            ethci30: {
                title: "Eth CI 30",
                badge: "Données Crypto",
                description: "Un indice crypto propriétaire suivant les 30 principaux jetons de l'écosystème Ethereum en fonction de la capitalisation boursière dynamique, adapté à l'analyse financière quantitative et au suivi institutionnel.",
                points: ["Pondération de la capitalisation boursière", "Rééquilibrage automatisé"],
                btnView: "Voir l'indice",
            },
            pralines: {
                title: "Pralines",
                badge: "E-Commerce",
                description: "Une plateforme de gestion en ligne intuitive pour la boulangerie, proposant la gestion des commandes personnalisées, une vitrine numérique et des systèmes de paiement intégrés pour intensifier la livraison de pâtisseries artisanales.",
                points: ["Interface utilisateur optimisée", "Flux de paiement de bout en bout"],
                btnVisit: "Visiter la boutique",
            },
        },
        contact: {
            title: "Me",
            titleAccent: "Contacter",
            subtitle: "Prêt à collaborer pour stimuler l'innovation fintech et optimiser les opérations commerciales ?",
            formTitle: "Envoyer un message",
            nameLabel: "Nom",
            namePlaceholder: "Votre Nom",
            emailLabel: "E-mail",
            emailPlaceholder: "votre.email@exemple.com",
            messageLabel: "Message",
            messagePlaceholder: "Comment pouvons-nous collaborer ?",
            btnSend: "Envoyer le message",
            infoTitle: "Coordonnées",
            infoDesc: "Je suis actuellement disponible pour des opportunités de conseil et des collaborations à long terme. Que vous ayez une question ou que vous souhaitiez simplement dire bonjour, je ferai de mon mieux pour vous répondre !",
            locationLabel: "Localisation",
            locationValue: "Afrique de l'Ouest & À distance",
            networkLabel: "Réseau Professionnel",
        },
        footer: {
            description: "Franck Lionel Tani - Consultant en transformation digitale & performance opérationnelle. Expert en Fintech & Data Science.",
            quickLinks: "Liens Rapides",
            connect: "Réseaux",
            rights: "Tous droits réservés.",
            builtWith: "Conçu et développé avec Next.js & Tailwind",
        },
    },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [language, setLanguage] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const storedLang = localStorage.getItem("preferredLanguage") as Language;
        if (storedLang) {
            setLanguage(storedLang);
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("preferredLanguage", lang);
    };

    // Return empty state or default while not mounted to avoid hydration mismatch
    const t = mounted ? translations[language] : translations.en;

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

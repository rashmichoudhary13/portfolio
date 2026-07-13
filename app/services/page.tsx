"use client";

import Link from "next/link";
import { motion } from "motion/react";

// Inline custom SVG icons to avoid bundler or version issues with lucide-react
const MonitorIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <rect width="20" height="14" x="2" y="3" rx="2" />
        <line x1="8" x2="16" y1="21" y2="21" />
        <line x1="12" x2="12" y1="17" y2="21" />
    </svg>
);

const UserIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
    </svg>
);

const RocketIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
);

const LayersIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m12 3-10 5L12 13 22 8Z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
    </svg>
);

const BrainIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z" />
        <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z" />
        <path d="M12 5v14" />
        <path d="M12 12h6" />
        <path d="M12 12H6" />
    </svg>
);

const ShoppingCartIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
    </svg>
);

const BrushIcon = ({ className }: { className?: string }) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={className}
    >
        <path d="m12 22 1-1c1.4-1.4 2.4-3.2 3-5.2L18 9l-3-3-7 2.1C6 8.7 4.2 9.7 2.8 11.1L2 12h7.8c.9 0 1.7.3 2.4.9l.4.4c.6.6.9 1.4.9 2.4Z" />
        <path d="m14 6 6 6" />
        <path d="M18 9h4" />
        <path d="M15 6h4" />
        <path d="M18 3h4" />
    </svg>
);

const services = [
    {
        title: "Business Websites",
        description: "Modern, responsive websites that help businesses establish a strong online presence.",
        icon: MonitorIcon,
        span: "lg:col-span-3"
    },
    {
        title: "Portfolio Websites",
        description: "Personal portfolio websites to showcase your work, skills, and experience.",
        icon: UserIcon,
        span: "lg:col-span-3"
    },
    {
        title: "Landing Pages",
        description: "High-converting landing pages designed to capture leads and drive results.",
        icon: RocketIcon,
        span: "lg:col-span-3"
    },
    {
        title: "MERN Web Applications",
        description: "Custom full-stack web applications with secure auth, APIs, and databases.",
        icon: LayersIcon,
        span: "lg:col-span-3"
    },
    {
        title: "AI Integration",
        description: "Integrate AI features like chatbots, Gemini API, OpenAI, and intelligent workflows.",
        icon: BrainIcon,
        span: "lg:col-span-4"
    },
    {
        title: "E-commerce Solutions",
        description: "Complete e-commerce websites with product management and payments.",
        icon: ShoppingCartIcon,
        span: "lg:col-span-4"
    },
    {
        title: "Website Redesign",
        description: "Redesign existing websites to improve UI/UX, speed, and overall performance.",
        icon: BrushIcon,
        span: "lg:col-span-4"
    }
];

const technologies = [
    {
        category: "Frontend",
        items: [
            { name: "React", slug: "react", color: "61DAFB" },
            { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
            { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" }
        ]
    },
    {
        category: "Backend",
        items: [
            { name: "Node.js", slug: "nodedotjs", color: "339933" },
            { name: "Express.js", slug: "express", color: "FFFFFF" }
        ]
    },
    {
        category: "Database",
        items: [
            { name: "MongoDB", slug: "mongodb", color: "47A248" },
            { name: "Firebase", slug: "firebase", color: "FFCA28" },
            { name: "MySQL", slug: "mysql", color: "4479A1" }
        ]
    },
    {
        category: "AI",
        items: [
            { name: "Gemini API", slug: "googlegemini", color: "8E75C8" },
            { name: "OpenAI", slug: "openai", color: "FFFFFF" }
        ]
    },
    {
        category: "Animation & Design",
        items: [
            { name: "Figma", slug: "figma", color: "F24E1E" },
            { name: "GSAP", slug: "greensock", color: "88CE02" }
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const,
        },
    },
};

export default function Services() {
    return (
        <section className="relative w-full min-h-screen text-white py-32 px-6 md:px-10 overflow-hidden flex flex-col items-center">
            {/* Ambient background glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl w-full flex flex-col items-center relative z-10">

                {/* Header */}
                <div className="flex flex-col items-center gap-4 text-center mb-20">
                    <div className="border border-teal-500/20 bg-teal-500/10 text-teal-400 font-mono tracking-wider text-xs uppercase px-4 py-1.5 rounded-full mb-2">
                        ✦ WHAT I CAN HELP YOU BUILD
                    </div>
                    <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        My <span className="text-teal-400">Services</span>
                    </h1>
                    <p className="text-zinc-400 text-sm md:text-base max-w-2xl leading-relaxed">
                        I build fast, modern, and scalable web solutions that help businesses grow and succeed online.
                    </p>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.05 }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 w-full mb-24"
                >
                    {services.map((service, idx) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                className={`bg-zinc-900/60 backdrop-blur-md border border-zinc-800/80 hover:border-teal-500/30 rounded-3xl p-8 flex flex-col gap-6 shadow-[0_0_30px_rgba(20,184,166,0.01)] hover:shadow-[0_0_40px_rgba(20,184,166,0.03)] hover:scale-[1.01] transition-all duration-300 group ${service.span}`}
                            >
                                {/* Icon Container */}
                                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 group-hover:text-teal-300 transition-colors duration-300">
                                    <Icon className="w-6 h-6" />
                                </div>

                                {/* Text Content */}
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-zinc-400 text-sm leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Technologies Header */}
                <div className="flex flex-col items-center gap-4 text-center mb-16">
                    <h2 className="text-3xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        Technologies I <span className="text-teal-400">Work With</span>
                    </h2>
                </div>

                {/* Technologies Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 w-full mb-28">
                    {technologies.map((tech, idx) => (
                        <div
                            key={idx}
                            className="bg-zinc-900/30 backdrop-blur-md border border-zinc-800/80 hover:border-teal-500/20 rounded-3xl p-6 flex flex-col items-center gap-5 transition-colors duration-300"
                        >
                            <span className="text-zinc-500 font-mono text-xs uppercase tracking-wider border-b border-zinc-800/80 pb-3 w-full text-center">
                                {tech.category}
                            </span>
                            <div className="flex flex-wrap gap-4 justify-center pt-2">
                                {tech.items.map((item, iIdx) => (
                                    <div key={iIdx} className="flex flex-col items-center gap-1.5 group">
                                        <div className="w-12 h-12 rounded-xl bg-zinc-950/80 border border-zinc-800/80 flex items-center justify-center group-hover:border-teal-500/35 transition-all duration-300 shadow-md">
                                            <img
                                                src={`https://cdn.simpleicons.org/${item.slug}/${item.color}`}
                                                alt={item.name}
                                                className="w-5 h-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                                loading="lazy"
                                                onError={(e) => {
                                                    e.currentTarget.style.display = "none";
                                                }}
                                            />
                                        </div>
                                        <span className="text-[10px] text-zinc-400 group-hover:text-white transition-colors duration-300">
                                            {item.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Dual Call-to-Actions (CTAs) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
                    {/* View Projects CTA */}
                    <div className="bg-gradient-to-r from-zinc-950/80 to-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-[0_0_30px_rgba(20,184,166,0.01)] hover:shadow-[0_0_45px_rgba(20,184,166,0.04)] hover:border-teal-500/20 transition-all duration-500 group">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                                Wanna see my work?
                            </h3>
                            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
                                Check out my recent projects and see how I bring ideas to life with clean, scalable code.
                            </p>
                        </div>
                        <Link
                            href="/#projects"
                            className="px-6 py-3 rounded-full text-xs font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:shadow-[0_0_20px_rgba(20,184,166,0.25)] transition-all duration-300 hover:scale-[1.02] shrink-0 text-center"
                        >
                            View My Projects
                        </Link>
                    </div>

                    {/* Let's Work Together CTA */}
                    <div className="bg-gradient-to-r from-zinc-950/80 to-zinc-900/40 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-6 shadow-[0_0_30px_rgba(20,184,166,0.01)] hover:shadow-[0_0_45px_rgba(20,184,166,0.04)] hover:border-teal-500/20 transition-all duration-500 group">
                        <div className="flex flex-col gap-2">
                            <h3 className="text-2xl font-bold text-white group-hover:text-teal-400 transition-colors duration-300">
                                Ready to build something?
                            </h3>
                            <p className="text-zinc-400 text-sm max-w-sm leading-relaxed">
                                Let's bring your ideas to life with modern, performant, and responsive web solutions.
                            </p>
                        </div>
                        <Link
                            href="/#contact"
                            className="px-6 py-3 rounded-full text-xs font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-[0_0_15px_rgba(20,184,166,0.15)] hover:shadow-[0_0_20px_rgba(20,184,166,0.25)] transition-all duration-300 hover:scale-[1.02] shrink-0 text-center"
                        >
                            Let's Work Together
                        </Link>
                    </div>
                </div>

            </div>
        </section>
    );
}
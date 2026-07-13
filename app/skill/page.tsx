"use client";

import { motion } from "motion/react";
import { Terminal, Layout, Database, Cpu } from "lucide-react";

// Brand-colored skill icons from Simple Icons CDN
const skillCategories = [
    {
        title: "Languages",
        icon: Terminal,
        skills: [
            { name: "Java", slug: "openjdk", color: "ED8B00" },
            { name: "Python", slug: "python", color: "3776AB" },
            { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
            { name: "SQL", slug: "sqlite", color: "003B57" },
            { name: "CSS", slug: "css", color: "1572B6" },
        ]
    },
    {
        title: "Full-Stack Development",
        icon: Layout,
        skills: [
            { name: "HTML", slug: "html5", color: "E34F26" },
            { name: "CSS", slug: "css", color: "1572B6" },
            { name: "JavaScript", slug: "javascript", color: "F7DF1E" },
            { name: "React.js", slug: "react", color: "61DAFB" },
            { name: "Next.js", slug: "nextdotjs", color: "FFFFFF" },
            { name: "Node.js", slug: "nodedotjs", color: "339933" },
            { name: "Express.js", slug: "express", color: "FFFFFF" },
            { name: "Tailwind CSS", slug: "tailwindcss", color: "06B6D4" },
            { name: "Bootstrap", slug: "bootstrap", color: "7952B3" },
        ]
    },
    {
        title: "Databases",
        icon: Database,
        skills: [
            { name: "MongoDB", slug: "mongodb", color: "47A248" },
            { name: "MySQL", slug: "mysql", color: "4479A1" },
            { name: "Firebase", slug: "firebase", color: "FFCA28" },
        ]
    },
    {
        title: "Tools & Platforms",
        icon: Cpu,
        skills: [
            { name: "Git", slug: "git", color: "F05032" },
            { name: "GitHub", slug: "github", color: "FFFFFF" },
            { name: "Postman", slug: "postman", color: "FF6C37" },
            { name: "Figma", slug: "figma", color: "F24E1E" },
            { name: "VS Code", slug: "visualstudiocode", color: "007ACC" },
            { name: "Cursor", slug: "cursor", color: "FFFFFF" },
        ]
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
        },
    },
};

export default function Skill() {
    return (
        <section id="skills" className="relative w-full min-h-screen bg-black text-white py-20 px-6 md:px-10 overflow-hidden flex flex-col items-center justify-center">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-4xl w-full flex flex-col items-center relative z-10">
                {/* Header */}
                <div className="flex flex-col items-center gap-4 text-center mb-16">
                    <h1 className="text-4xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                        My <span className="text-teal-400 text-5xl">Skills</span>
                    </h1>
                    <p className="text-zinc-400 text-sm md:text-base max-w-xl leading-relaxed">
                        My skills are those I've learned and developed over the years. By studying, focusing, and being consistent in what I love most.
                    </p>
                </div>

                {/* Staggered Vertical Stack of Skill Cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="w-full flex flex-col gap-6"
                >
                    {skillCategories.map((category, idx) => {
                        const IconComponent = category.icon;
                        return (
                            <motion.div
                                key={idx}
                                variants={cardVariants}
                                className="w-full bg-gradient-to-r from-zinc-950/90  via-teal-500/35 to-zinc-950/90 backdrop-blur-md border border-zinc-800/80 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center shadow-[0_0_30px_rgba(20,184,166,0.01)] hover:shadow-[0_0_40px_rgba(20,184,166,0.04)] hover:border-teal-500/25 hover:from-zinc-950/80 hover:via-teal-500/20 hover:to-zinc-950/80 transition-all duration-500 group"
                            >
                                {/* Left Side: Category Title and Icon */}
                                <div className="flex items-center gap-4 w-full md:w-[35%] md:border-r border-zinc-800 md:pr-6">
                                    <div className="w-12 h-12 rounded-2xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 group-hover:text-teal-300 transition-colors duration-300">
                                        <IconComponent className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-teal-400 transition-colors duration-300">
                                        {category.title}
                                    </h3>
                                </div>

                                {/* Right Side: Flowing Skills Badges */}
                                <div className="w-full md:w-[65%] flex flex-wrap gap-3 items-center justify-start md:pl-4">
                                    {category.skills.map((skill, sIdx) => (
                                        <div
                                            key={sIdx}
                                            className="flex items-center gap-2.5 px-4 py-2 rounded-xl bg-zinc-800/30 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/60 hover:scale-[1.03] transition-all duration-300 cursor-default group/badge"
                                        >
                                            <img
                                                src={`https://cdn.simpleicons.org/${skill.slug}/${skill.color}`}
                                                alt={`${skill.name} logo`}
                                                width={16}
                                                height={16}
                                                className="w-4 h-4 object-contain opacity-80 group-hover/badge:opacity-100 transition-opacity duration-300 filter"
                                                loading="lazy"
                                                onError={(e) => {
                                                    // Hide image if CDN fails, keeping text badge
                                                    e.currentTarget.style.display = 'none';
                                                }}
                                            />
                                            <span className="text-sm font-medium text-zinc-300 group-hover/badge:text-white transition-colors duration-300">
                                                {skill.name}
                                            </span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
"use client";

import { IconCloudDemo } from "@/components/magicui/icon-cloud-demp";
import { motion } from "motion/react";
import { MessageScrollerDemo } from "../_components/AnimatedChat";

const sentences = [
    <>I am a <span className="text-teal-400 italic font-medium">Full-Stack Web Developer</span> who enjoys building modern, scalable web applications. I love transforming ideas into responsive, user-friendly products with clean interfaces and efficient backend systems.</>,
    <>I <span className="text-teal-400 italic font-medium">continuously explore new technologies</span>, especially in AI and full-stack development, to create solutions that solve real-world problems. Whether I'm developing a web application or learning something new, I focus on writing clean, maintainable code and delivering meaningful user experiences.</>
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.4,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
        },
    },
};

export default function About() {
    return (
        <section id="about" className="relative w-full min-h-screen bg-[#111827] text-white px-6 pb-10 lg:pb-0 md:px-10 overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] lg:gap-4 items-start relative">

                {/* Left Column: Biography Text */}
                <div className="flex flex-col gap-12 py-10 md:py-18">
                    <div className="flex flex-col gap-4">
                        <span className="text-teal-400 font-mono tracking-wider text-sm uppercase">About Me</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">Who I Am</h2>
                    </div>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.2 }}
                        className="flex flex-col gap-5"
                    >
                        {sentences.map((sentence, index) => (
                            <motion.p
                                key={index}
                                variants={itemVariants}
                                className="text-lg md:text-xl lg:text-2xl font-normal leading-relaxed text-zinc-300 hover:text-white transition-colors duration-300"
                            >
                                {sentence}
                            </motion.p>
                        ))}
                    </motion.div>
                </div>

                {/* Right Column: Sticky Icon Cloud */}
                <div className="lg:sticky lg:top-30 flex items-center justify-center h-auto lg:py-8 lg:py-0 lg:h-[65vh] w-full">
                    <MessageScrollerDemo />
                </div>

            </div>
        </section>
    );
}
"use client";

import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { motion } from "motion/react";
import { Mail, MapPin, Briefcase, ExternalLink } from "lucide-react";
import ContactForm from "../_components/ContactForm";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1] as const, // easeOutExpo
    },
  },
};

export default function Contact() {
  return (
    <section id="contact" className="relative w-full min-h-screen bg-black text-white py-20 px-6 md:px-10 overflow-hidden flex items-center justify-center">

      <ShootingStars />
      <StarsBackground />

      {/* Ambient background glows */}
      <div className="absolute top-1/3 right-1/4 w-[450px] h-[450px] bg-teal-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-20 items-start relative z-10">

        {/* Left Column: Contact details & Call-to-action */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex flex-col gap-10"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4">
            <span className="text-teal-400 font-mono tracking-wider text-sm uppercase">
              Get in Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
              Let's build something <span className="text-teal-400">extraordinary</span> together
            </h2>
            <p className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">
              I'm always open to new opportunities, collaborations, or just having a chat about interesting technology. Drop me a line!
            </p>
          </motion.div>

          {/* Contact Details Stack */}
          <motion.div variants={itemVariants} className="flex flex-col gap-5">
            {/* Email Card */}
            <a
              href="mailto:rashmi.choudhary.dev@gmail.com"
              className="flex items-center gap-5 p-5 bg-zinc-900/30 border border-zinc-800/80 rounded-2xl hover:border-teal-500/30 hover:bg-zinc-900/50 hover:scale-[1.01] transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 group-hover:text-teal-300 transition-colors duration-300 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">Email Me</span>
                <span className="text-zinc-200 font-medium text-sm md:text-base block truncate group-hover:text-teal-400 transition-colors duration-300">
                  rashmichoudhary019@gmail.com
                </span>
              </div>
              <ExternalLink className="w-4 h-4 text-zinc-600 group-hover:text-teal-400 transition-colors shrink-0" />
            </a>

            {/* Location Card */}
            <div className="flex items-center gap-5 p-5 bg-zinc-900/30 border border-zinc-800/80 rounded-2xl hover:border-teal-500/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">Location</span>
                <span className="text-zinc-200 font-medium text-sm md:text-base block">
                  Mumbai, Maharashtra, India
                </span>
              </div>
            </div>

            {/* Availability Card */}
            <div className="flex items-center gap-5 p-5 bg-zinc-900/30 border border-zinc-800/80 rounded-2xl hover:border-teal-500/10 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 flex items-center justify-center text-teal-400 shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider block">Current Status</span>
                <span className="text-teal-400 font-medium text-sm md:text-base flex items-center gap-2">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-teal-400 animate-pulse" />
                  Available for freelance projects & roles
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex flex-col gap-3">
            <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wider pl-1">Follow & Connect</span>
            <div className="flex gap-4">
              <a
                href="https://github.com/rashmichoudhary13"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-teal-500/40 hover:bg-teal-500/10 hover:text-teal-300 flex items-center justify-center text-zinc-400 transition-all duration-300 hover:scale-105"
                title="GitHub"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/rashmi-kumari-choudhary/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-teal-500/40 hover:bg-teal-500/10 hover:text-teal-300 flex items-center justify-center text-zinc-400 transition-all duration-300 hover:scale-105"
                title="LinkedIn"
              >
                <svg
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                  <rect x="2" y="9" width="4" height="12" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
              </a>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex justify-center lg:justify-start w-full"
        >
          <ContactForm />
        </motion.div>

      </div>
    </section>
  );
}
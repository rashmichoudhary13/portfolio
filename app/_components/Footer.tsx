"use client";

import Link from "next/link";
import localFont from "next/font/local";

const germaniaOne = localFont({
  src: "../fonts/GermaniaOne-Regular.ttf",
});

// Custom SVGs to avoid package tree-shaking issues
const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" rx="1" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="w-full bg-[#111827] border-t border-zinc-800/80 text-zinc-400 py-12 px-6 md:px-10 relative z-10">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        
        {/* Main Content Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
          
          {/* Logo & Description Column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className={`${germaniaOne.className} text-xl text-white hover:text-teal-400 transition-colors duration-300`}>
              Rashmi Choudhary <span className="uppercase text-xs text-teal-400 block sm:inline sm:ml-2">web developer</span>
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-zinc-400">
              Designing and developing modern, responsive, and user-centric web solutions with clean layouts and robust backends.
            </p>
          </div>

          {/* Quick Links Column */}
          <div className="flex flex-col gap-4 font-sans">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              <Link href="/#about" className="hover:text-teal-400 transition-colors duration-300">About</Link>
              <Link href="/#skills" className="hover:text-teal-400 transition-colors duration-300">Skills</Link>
              <Link href="/#projects" className="hover:text-teal-400 transition-colors duration-300">Projects</Link>
              <Link href="/services" className="hover:text-teal-400 transition-colors duration-300">Services</Link>
              <Link href="/#contact" className="hover:text-teal-400 transition-colors duration-300">Contact</Link>
            </div>
          </div>

          {/* Connect Column */}
          <div className="flex flex-col gap-4 font-sans">
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider">Follow & Connect</h4>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-xs">
              Let's create something awesome together. Connect with me on social platforms!
            </p>
            <div className="flex gap-4">
              <a
                href="https://github.com/rashmichoudhary13"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-teal-500/40 hover:bg-teal-500/10 hover:text-teal-300 flex items-center justify-center text-zinc-400 transition-all duration-300 hover:scale-105"
                aria-label="GitHub Profile"
              >
                <GithubIcon className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/rashmi-kumari-choudhary/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-zinc-900/50 border border-zinc-800/80 hover:border-teal-500/40 hover:bg-teal-500/10 hover:text-teal-300 flex items-center justify-center text-zinc-400 transition-all duration-300 hover:scale-105"
                aria-label="LinkedIn Profile"
              >
                <LinkedinIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className="w-full h-px bg-zinc-800/80" />

        {/* Bottom Details */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-sans">
          <div>
            &copy; {new Date().getFullYear()} Rashmi Choudhary. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            Built with <span className="text-teal-400">Next.js</span>, <span className="text-teal-400">Tailwind CSS</span> &amp; <span className="text-teal-400">Framer Motion</span>
          </div>
        </div>

      </div>
    </footer>
  );
}

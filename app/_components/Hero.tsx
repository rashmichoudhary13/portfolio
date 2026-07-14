"use client";

import Link from "next/link";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";

export default function Hero() {
    return (
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center relative">
            <div className="flex flex-col items-start text-left">
                {/* Available badge */}
                <div className="uppercase text-xs font-medium mb-2 lg:pl-1 text-zinc-300 tracking-wide">
                    <span>Mumbai, India
                        <span className="mx-2">•</span>
                        Available for work</span>
                </div>

                <h2 className="text-teal-400 mb-3 text-3xl md:text-5xl lg:text-6xl font-semibold tracking-wide">Hello, I'm </h2>
                <h2 className="text-white lg:pl-1 text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 min-h-[1.2em]">
                    <FlipWords
                        words={["Rashmi Choudhary", "Full-Stack Developer"]}
                        className="text-white px-0"
                        duration={3000}
                    />
                </h2>

                <p className="text-zinc-400 lg:pl-2 text-base md:text-lg leading-relaxed max-w-xl mb-8">
                    I design and develop web applications that are built for both users and businesses, combining clean design, seamless user experiences, and scalable technology.
                </p>

                <div className="flex flex-wrap gap-4 items-center lg:pl-2">
                    <Link href="#projects" className="px-8 py-3.5 rounded-full text-sm font-semibold bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-[0_0_20px_rgba(20,184,166,0.3)] transition-all duration-300 hover:scale-[1.02]">
                        View My Work
                    </Link>
                    <Link href="https://drive.google.com/file/d/1SQpUVH5Zteeobe4QOjSgPb6BZXgx6wAx/view?usp=drive_link" className="px-8 py-3.5 rounded-full text-sm font-semibold border-2 border-white text-white transition-all duration-300 hover:scale-[1.02]">
                        Download my resume
                    </Link>
                </div>
            </div>

            <div className="flex justify-center">
                <div className="relative hover:scale-[1.02] transition-transform duration-500 ease-out max-w-[320px] sm:max-w-[450px] lg:max-w-none w-full">
                    <Image
                        src="/HeroImage.png"
                        alt="heroImage"
                        width={700}
                        height={700}
                        priority
                        className="w-full h-auto object-contain"
                    />
                </div>
            </div>
        </div>
    );
}



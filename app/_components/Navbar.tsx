"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { ArrowRight, Menu, X } from "lucide-react";

const germaniaOne = localFont({
    src: "../fonts/GermaniaOne-Regular.ttf",
});

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Call it initially in case the page is loaded scrolled down
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 text-white border-b-2 ${
            isScrolled ? "bg-black/90 backdrop-blur-md border-[#4E4C4A]" : "bg-transparent border-transparent"
        }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-8 py-5 flex justify-between items-center w-full">
                {/* logo */}
                <div>
                    <Link href="/" className={`${germaniaOne.className} text-xl md:text-2xl`}>
                        Rashmi Choudhary <span className="uppercase text-[10px] md:text-xs text-teal-400 block sm:inline sm:ml-2"> web developer </span>
                    </Link>
                </div>

                {/* desktop links */}
                <div className="hidden lg:flex gap-8 items-center">
                    <Link href="/#about" className="hover:text-teal-400 transition-colors"> About </Link>
                    <Link href="/#skills" className="hover:text-teal-400 transition-colors"> Skills </Link>
                    <Link href="/#projects" className="hover:text-teal-400 transition-colors"> Projects </Link>
                    <Link href="/services" className="hover:text-teal-400 transition-colors"> Services </Link>
                    <Link href="/#contact" className="hover:text-teal-400 transition-colors"> Contact </Link>
                </div>

                {/* desktop button */}
                <div className="hidden lg:flex">
                    <Link href="https://drive.google.com/file/d/1SQpUVH5Zteeobe4QOjSgPb6BZXgx6wAx/view?usp=drive_link" className="border-[#4E4C4A] border-2 px-3 py-2 rounded flex items-center gap-2 hover:bg-white hover:text-black hover:border-white transition-all">
                        My Resume <ArrowRight /> 
                    </Link>
                </div>

                {/* Mobile Hamburger Button */}
                <button 
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex lg:hidden p-2 text-zinc-300 hover:text-white transition-colors"
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
            </div>

            {/* Mobile menu overlay */}
            {isOpen && (
                <div className="absolute top-full left-0 w-full bg-black/95 border-b border-[#4E4C4A] flex flex-col items-center gap-6 py-8 lg:hidden animate-in fade-in slide-in-from-top-5 duration-200">
                    <Link href="/#about" onClick={() => setIsOpen(false)} className="hover:text-teal-400 transition-colors text-lg"> About </Link>
                    <Link href="/#skills" onClick={() => setIsOpen(false)} className="hover:text-teal-400 transition-colors text-lg"> Skills </Link>
                    <Link href="/#projects" onClick={() => setIsOpen(false)} className="hover:text-teal-400 transition-colors text-lg"> Projects </Link>
                    <Link href="/services" onClick={() => setIsOpen(false)} className="hover:text-teal-400 transition-colors text-lg"> Services </Link>
                    <Link href="/#contact" onClick={() => setIsOpen(false)} className="hover:text-teal-400 transition-colors text-lg"> Contact </Link>
                    <Link 
                        href="https://drive.google.com/file/d/1SQpUVH5Zteeobe4QOjSgPb6BZXgx6wAx/view?usp=drive_link" 
                        onClick={() => setIsOpen(false)}
                        className="border-[#4E4C4A] border-2 px-5 py-2.5 rounded flex gap-2 hover:bg-white hover:text-black hover:border-white transition-all text-sm font-semibold"
                    >
                        My Resume <ArrowRight className="w-5 h-5" />
                    </Link>
                </div>
            )}
        </nav>
    );
}

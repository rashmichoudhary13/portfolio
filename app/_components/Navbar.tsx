"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import localFont from "next/font/local";
import { ArrowRight } from "lucide-react";

const germaniaOne = localFont({
    src: "../fonts/GermaniaOne-Regular.ttf",
});

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

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
        <nav className={`flex text-white justify-around items-center p-5 fixed w-full top-0 left-0 z-50  transition-all duration-300 ${isScrolled ? "bg-black border-[#4E4C4A] border-b-2" : "bg-transparent border-b-2 border-transparent"
            }`}>
            {/* logo */}
            <div>
                <Link href="/" className={`${germaniaOne.className} text-xl`}>
                    Rashmi Choudhary <span className="uppercase text-xs text-teal-400"> web developer </span>
                </Link>
            </div>

            {/* links */}
            <div className="flex gap-8">
                <Link href="/#about"> About </Link>
                <Link href="/#skills"> Skills </Link>
                <Link href="/#projects"> Projects </Link>
                <Link href="/services"> Services </Link>
                <Link href="/#contact"> Contact </Link>
            </div>

            {/* button */}
            <Link href="https://drive.google.com/file/d/1SQpUVH5Zteeobe4QOjSgPb6BZXgx6wAx/view?usp=drive_link" className="border-[#4E4C4A] border-2 px-3 py-2 rounded flex gap-2">
                My Resume <ArrowRight /> </Link>
        </nav>
    );
}

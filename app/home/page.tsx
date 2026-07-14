"use client";

import DarkVeil from "@/components/DarkVeil";
import Hero from "../_components/Hero";

export default function Home() {
    return (
        <div className="relative w-full min-h-screen lg:h-screen flex items-center overflow-x-hidden py-24 lg:py-0">
            <div className="absolute -z-10 inset-0 ">
                <DarkVeil />
            </div>

            <div className="w-full flex items-center justify-center p-0 md:p-7 lg:p-0">
                <Hero />
            </div>
        </div>
    )
}
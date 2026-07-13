"use client";

import DarkVeil from "@/components/DarkVeil";
import Hero from "../_components/Hero";

export default function Home() {
    return (
        <div className="relative w-full h-screen overflow-x-hidden">
            <div className="absolute -z-10 inset-0 ">
                <DarkVeil />
            </div>

            <div className=" pt-10">
                <Hero />
            </div>
        </div>
    )
}
"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export default function AboutResumeSection() {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    if (!isFlipped) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F87171", "#FBBF24", "#60A5FA"],
      });
    }
    setIsFlipped(!isFlipped);
  };

  return (
    <section className="w-full py-16 md:py-24 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center">
        
        {/* LEFT CONTENT */}
        <div className="space-y-6 md:space-y-8 text-left">
          <h2 className="hidden lg:block font-jaro text-[48px] md:text-[60px] leading-tight text-black">
            Creative by instinct. <br />
            Curious by habit.
          </h2>
          
          <h2 className="block lg:hidden font-jaro text-[36px] md:text-[48px] leading-tight text-black">
            Let's build something meaningful together
          </h2>

          <p className="text-[18px] md:text-[20px] text-black/70 max-w-md leading-relaxed">
            I design, build, and constantly experiment to understand how things work and how they can work better.
          </p>

          {/* <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-full border border-blue-500 px-6 py-2 text-blue-500 text-sm font-medium hover:bg-blue-50 transition"
          >
            Explore my resume <span>→</span>
          </Link> */}
        </div>

        {/* RIGHT CARD (3D FLIP CONTAINER) */}
        {/* Reduced height from 400px to 320px for desktop */}
        <div className="relative w-full h-[300px] md:h-[320px] [perspective:1000px]">
          <motion.div 
            className="relative w-full h-full [transform-style:preserve-3d] cursor-pointer"
            animate={{ rotateY: isFlipped ? 180 : 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            onClick={handleFlip}
          >
            
            {/* --- FRONT SIDE --- */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden]">
              <div className="h-full rounded-2xl bg-white shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-gray-100 p-6 md:p-8 relative overflow-hidden flex flex-col justify-between">
                {/* Horizontal Accents (Front) */}
                <div className="absolute top-0 left-0 flex h-1.5 w-full">
                   <div className="w-6 h-full bg-[#F87171]" />
                   <div className="w-6 h-full bg-[#FBBF24] mx-1" />
                   <div className="w-6 h-full bg-[#60A5FA]" />
                </div>

                <div className="flex justify-between items-start mt-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-black/50 mb-1">UI UX & Frontend</p>
                    <h1 className="font-jaro text-[28px] md:text-[34px] text-[#171717]">Shreya Golatkar</h1>
                  </div>
                  <Image src="/images/about/Qr.svg" alt="QR" width={45} height={45} className="opacity-80" />
                </div>

                <div className="flex items-center gap-6 mb-2">
                  <div className="w-20 h-20 md:w-40 md:h-40 relative">
                    <Image src="/images/about/Card Photo.svg" alt="Me" fill className="object-contain" />
                  </div>
                  <div className="space-y-1.5 text-xs md:text-sm text-black/70 font-jaldi">
                    <p>📧 golatkarshreyax@gmail.com</p>
                    <p>🌐 ssgolatkar.nl</p>
                  </div>
                </div>
                <p className="text-[9px] text-blue-400 font-bold uppercase tracking-tighter text-right">Click to flip</p>
              </div>
            </div>

            {/* --- BACK SIDE --- */}
            <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <div className="h-full rounded-2xl bg-[#FCFCFA] border border-gray-100 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center text-center p-8">
                
                {/* Vertical Accents (Back - Height-wise) */}
                <div className="absolute top-0 left-0 flex flex-col h-full w-2">
                   <div className="h-full w-full bg-[#F87171]" />
                   <div className="h-full w-full bg-[#FBBF24]" />
                   <div className="h-full w-full bg-[#60A5FA]" />
                </div>

                <div className="space-y-4">
                  <span className="text-3xl">✨</span>
                  <h3 className="font-jaro text-[28px] md:text-[34px] text-[#171717] leading-tight">
                    Let's Create Magic!
                  </h3>
                  <p className="text-black/60 font-jaldi text-base max-w-[240px]">
                    Always open to discussing new projects, creative ideas, or being part of your visions.
                  </p>
                </div>

                <div className="mt-6 px-5 py-1.5 border border-blue-500 text-blue-500 rounded-full text-[10px] font-bold tracking-widest uppercase">
                   Contact Me
                </div>
              </div>
            </div>

          </motion.div>
        </div>

      </div>
    </section>
  );
}
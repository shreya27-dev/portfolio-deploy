"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { TargetAndTransition } from "framer-motion";

export default function AboutHero() {
  // Config for a smooth, weightless float
  const smoothFloat = (delay: number = 0): TargetAndTransition => ({
    y: ["-2%", "2%"], // Using percentages for smoother scaling
    transition: {
      duration: 4,
      repeat: Infinity,
      repeatType: "reverse" as const,
      ease: "easeInOut", // Slows down at the top and bottom
      delay: delay,
    },
  });

  return (
    <section className="w-full pt-28 md:pt-50 pb-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          
          {/* 1. TEXT CONTENT — Top on mobile, Left on desktop */}
          <div className="space-y-6 text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-jaro text-[16px] md:text-[20px] text-[#276ef1] tracking-widest mb-2 uppercase">
                About Me
              </h2>
              <h1 className="text-[32px] md:text-[52px] font-jaldi font-bold leading-tight text-[#171717]">
                I’m Shreya, a designer & developer who builds 
                <span className="text-[#405658]"> things that feel human.</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="text-[18px] md:text-[22px] font-jaldi text-[#6D6D6D] leading-relaxed"
            >
              I usually spend my time watching cat videos, gaming, and 
              obsessing over strange ideas. I broke the golden rule by 
              blending love with my career—and it’s been a blast.
            </motion.p>
          </div>

          {/* 2. COLLAGE CONTENT — Hidden on Mobile, Flex on Desktop */}
          <div className="hidden lg:flex relative justify-center items-center">
            {/* Main Wrapper */}
            <div className="relative w-full max-w-[420px] aspect-[4/5] mt-12">
              
              {/* Base Portrait (Static) */}
              <div className="relative z-10 w-full h-full rounded-[40px] overflow-hidden  border-white">
                <Image 
                  src="/images/about/aboutHero.svg" 
                  alt="Shreya Portrait" 
                  fill 
                  className="object-cover" 
                  priority
                />
              </div>

              {/* FUN 02 (Green Polaroid) — Smooth Float */}
              <motion.div 
                animate={smoothFloat(0)}
                className="absolute top-10 -left-20 z-30 w-48 h-60 bg-[#E2FFC6] p-3 shadow-lg rounded-sm"
              >
                <div className="w-full aspect-square bg-white overflow-hidden rounded-sm mb-2">
                  <Image 
    src="/images/fun1.jpeg" // Path to your image in the public folder
    alt="Descriptive text" 
    fill 
    className="object-cover rounded-md"
    priority // Optional: Use this if the image is at the top of the page
  />
                </div>
                <p className="text-center font-jaro text-[18px] text-[#4D6335]">FUN 02</p>
              </motion.div>

              {/* FUN 01 (Pink Polaroid) — Smooth Float (Offset delay for natural feel) */}
              <motion.div 
                animate={smoothFloat(0.5)}
                className="absolute bottom-10 -right-16 z-30 w-48 h-60 bg-[#FFC6E2] p-3 shadow-xl rounded-sm"
              >
                <div className="w-full aspect-square bg-white rounded-md overflow-hidden mb-2">
                  <Image 
    src="/images/fun2.jpeg" // Path to your image in the public folder
    alt="Descriptive text" 
    fill 
    className="object-cover rounded-md"
    priority // Optional: Use this if the image is at the top of the page
  />
                </div>
                <p className="text-center font-jaro text-[18px] text-[#7A3E5B]">FUN 01</p>
              </motion.div>

              {/* Stickers */}
              <div className="absolute top-[10%] right-[5%] w-32 h-32 z-20">
                <Image src="/images/about/moon.svg" alt="Moon" fill className="object-contain" />
              </div>

              <div className="absolute bottom-[5%] left-[-8%] w-40 h-40 z-40 pointer-events-none">
                <Image src="/images/about/eyes.svg" alt="Eyes" fill className="object-contain" />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
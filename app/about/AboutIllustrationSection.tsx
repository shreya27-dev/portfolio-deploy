"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function DigitalArtArcGallery() {
  const [index, setIndex] = useState(2); // Centers the 3rd image (index 2)

  const illustrations = [
    { id: 1, src: "/images/art/DigitalArt.jpg", title: "Digital Exploration" },
    { id: 2, src: "/images/art/DIYlogo.jpg", title: "Brand Identity" },
    { id: 3, src: "/images/art/MyFriend.jpg", title: "Portrait Study" },
    { id: 4, src: "/images/art/Self Portrait.jpg", title: "Anatomy Sketch" },
    { id: 5, src: "/images/art/StarbucksLogo.jpg", title: "Visual Logic" },
  ];

  return (
    <section className="w-full py-24 bg-transparent overflow-hidden flex flex-col items-center">
      {/* TEXT HEADER */}
      <div className="max-w-2xl mb-16 text-center px-6">
        <h2 className="font-jaro text-[32px] md:text-[48px] font-bold mb-4 leading-tight text-black uppercase tracking-tight">
          Digital Art
        </h2>
        <p className="font-jaldi text-[18px] md:text-[20px] text-zinc-600 leading-relaxed max-w-lg mx-auto">
          Beyond wireframes and logic, I find peace in digital painting. 
          It’s where I experiment with light and texture to bring raw ideas to life.
        </p>
      </div>

      {/* THE ARC STACK (THE "SMILE" EFFECT) */}
      <div className="relative w-full max-w-[1100px] h-[350px] md:h-[450px] flex items-center justify-center">
        {illustrations.map((item, i) => {
          const distance = i - index;
          const isActive = i === index;

          return (
            <motion.div
              key={item.id}
              style={{
                zIndex: isActive ? 50 : 30 - Math.abs(distance),
              }}
              initial={false}
              animate={{
                // 1. Horizontal Spread
                x: distance * 150, 
                // 2. The Vertical Curve (Pushes side cards down)
                y: Math.abs(distance) * 45, 
                // 3. The "Fan" Rotation
                rotateZ: distance * 12, 
                // 4. Perspective Tilt
                rotateY: distance * -15, 
                scale: isActive ? 1.15 : 0.85,
              }}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
              className="absolute w-[220px] md:w-[280px] aspect-square rounded-[32px] overflow-hidden cursor-pointer shadow-xl border border-zinc-200"
              onClick={() => setIndex(i)}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className={`object-cover transition-all duration-700 ${
                  !isActive ? "brightness-75 saturate-[0.7] blur-[1px]" : "brightness-100 saturate-100 blur-0"
                }`}
              />
              
              {/* Subtle Overlay for inactive cards */}
              {!isActive && (
                <div className="absolute inset-0 bg-white/20 pointer-events-none" />
              )}
            </motion.div>
          );
        })}

        {/* Soft Shadow Floor */}
        <div className="absolute bottom-[-20px] w-[350px] h-[40px] bg-zinc-900/5 blur-[40px] rounded-full" />
      </div>

      {/* DYNAMIC SUBTITLE */}
      <div className="mt-12 h-10">
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            className="text-zinc-400 font-jaro text-xl uppercase tracking-widest"
          >
            {illustrations[index].title}
          </motion.p>
        </AnimatePresence>
      </div>
    </section>
  );
}
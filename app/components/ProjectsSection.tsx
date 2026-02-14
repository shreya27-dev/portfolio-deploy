"use client";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";
import Link from "next/link";

export default function ProjectsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Updates the pagination dots based on scroll position
  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      setActiveIndex(index);
    }
  };

  return (
    <section id="projects" className="w-full py-16 md:py-24 overflow-hidden">
      <header className="text-center px-6 mb-12">
        <h2 className="text-[40px] md:text-[60px] font-jaro mb-2">Projects</h2>
        <p className="text-[18px] md:text-[24px] font-jaldi text-gray-600 max-w-2xl mx-auto">
          A few things I’ve designed and developed recently.
        </p>
      </header>

      {/* CAROUSEL CONTAINER */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="
          flex flex-nowrap overflow-x-auto
          snap-x snap-mandatory scrollbar-hide
          w-full px-0
          
          /* Desktop Reset */
          md:grid md:grid-cols-3 md:gap-10 md:max-w-7xl md:mx-auto md:px-6 md:overflow-visible
        "
      >
        {projects.map((p, i) => (
          <motion.div 
            key={p.slug} 
            initial={ { opacity: 0.6, scale: 0.9 } }
            whileInView={ { opacity: 1, scale: 1 } }
            viewport={ { margin: "0px -50px 0px -50px" } }
            transition={ { duration: 0.4 } }
            className="
              /* Mobile: Exactly 100% width, one per screen */
              min-w-full snap-center px-6
              
              /* Desktop: Normal column behavior */
              md:min-w-0 md:px-0 md:opacity-100 md:scale-100
            "
          >
            
            <ProjectCard
              slug={p.slug}
              title={p.title}
              short={p.short}
              thumb={p.thumb}
            />
          
          </motion.div>
        ))}
      </div>

      {/* Pagination Dots - Dynamic & Mobile Only */}
      <div className="flex justify-center items-center gap-3 mt-10 md:hidden">
        {projects.map((_, i) => (
          <div 
            key={i} 
            className={`transition-all duration-300 rounded-full ${
              i === activeIndex 
                ? "w-8 h-2.5 bg-[#1E1E1E]" // Active "pill" shape
                : "w-2.5 h-2.5 bg-gray-300"
            }`} 
          />
        ))}
      </div>
    </section>
  );
}
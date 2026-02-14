"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function ProjectVideoSpotlight() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // This creates a subtle "zoom-in" effect as the user scrolls to the video
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section ref={containerRef} className="py-32 bg-[#F9FAFB] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div style={{ scale, opacity }} className="relative">
          
          {/* Decorative "Glowing" Background behind the video */}
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl opacity-30 rounded-[40px]" />

          {/* Browser Mockup */}
          <div className="relative bg-white rounded-[24px] md:rounded-[40px] shadow-[0_22px_70px_4px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden">
            
            {/* Top Bar: Interaction Mimicry */}
            <div className="flex items-center justify-between px-6 py-4 bg-gray-50/50 border-b border-gray-100">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
              </div>
              <div className="px-4 py-1 bg-white rounded-full border border-gray-200 text-[10px] text-gray-400 font-medium">
                app.loqo.design/dashboard
              </div>
              <div className="w-10" /> {/* Spacer */}
            </div>

            {/* The Video */}
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full aspect-video object-cover"
            >
              <source src="/videos/Project Management.mp4" type="video/mp4" />
            </video>

            {/* Floating Overlays to grab attention */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 right-8 bg-black/80 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-xl hidden md:block"
            >
              <p className="text-xs font-bold uppercase tracking-widest text-blue-400 mb-1">Live Interaction</p>
              <p className="text-sm font-medium">Dynamic Widget Management System</p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
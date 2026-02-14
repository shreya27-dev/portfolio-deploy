"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const skills = [
  { src: "/images/skills/react.svg", alt: "React", pos: "top-0 left-1/2 -translate-x-1/2" },
  { src: "/images/skills/figma.svg", alt: "Figma", pos: "top-[15%] left-[10%]" },
  { src: "/images/skills/javascript.svg", alt: "javascript", pos: "top-[15%] right-[10%]" },
  { src: "/images/skills/tailwind.svg", alt: "Tailwind", pos: "top-1/2 right-0 -translate-y-1/2" },
  { src: "/images/skills/sql.svg", alt: "MySQL", pos: "bottom-[15%] right-[10%]" },
  { src: "/images/skills/next_js.svg", alt: "Next.js", pos: "bottom-0 left-1/2 -translate-x-1/2" },
  { src: "/images/skills/python.svg", alt: "Python", pos: "bottom-[15%] left-[10%]" },
  { src: "/images/skills/html.svg", alt: "HTML", pos: "top-1/2 left-0 -translate-y-1/2" },
];

export default function SkillsSection() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto text-center">
      <h2 className="text-[40px] md:text-[60px] font-jaro mb-16 uppercase tracking-tight">
        My Creative Tool Box
      </h2>

      {/* The Orbit Container */}
      <div className="relative w-full max-w-[350px] md:max-w-[600px] aspect-square mx-auto flex items-center justify-center">
        
        {/* Central Illustration */}
        <div className="relative z-10 w-[95%] md:w-[90%]">
          <Image
            src="/images/skills/Skills_Main.svg"
            alt="Illustration"
            width={800}
            height={500}
            className="w-full h-auto"
          />
        </div>

        {/* Orbiting Icons */}
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: index * 0.1 }}
            className={`absolute z-20 w-12 h-12 md:w-20 md:h-20 flex items-center justify-center p-2 ${skill.pos}`}
          >
            <Image
              src={skill.src}
              alt={skill.alt}
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
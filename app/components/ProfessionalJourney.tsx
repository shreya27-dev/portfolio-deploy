"use client";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ShieldAlert, X } from "lucide-react";

const PROJECTS = [
  {
    id: 1,
    slug: "hosting",
    title: "Skiff: Hosting Platform",
    role: "UI UX Designer",
    impact: "30% Step Reduction",
    desc: "Streamlining complex server deployment into a few clicks.",
    image: "/images/overview.svg",
    color: "#F3F4F6",
  },
  {
    id: 2,
    slug: "Ticketing-Tool",
    title: "Ticketing Tool",
    role: "UI UX Designer",
    impact: "Enhanced UX",
    desc: "Visualizing high-volume support tickets for maximum agent efficiency.",
    image: "/images/AgentDashboardView.svg",
    color: "#FEF3C7",
  },
  {
    id: 3,
    slug: "redesign",
    title: "Mahity: Website Redesign",
    role: "SaaS Platform • 2024",
    impact: "",
    desc: "Transitioning a consulting identity into a product-led software ecosystem.",
    image: "/images/Mahity.svg", 
    color: "#DBEAFE",
  },
  {
    id: 4,
    slug: "project-management",
    title: "Project Management Tool",
    role: "UI UX Designer",
    impact: "",
    desc: "A unified communication hub for intelligent customer management.",
    image: "/images/Hi-Fi Dashboard.png",
    color: "#D1FAE5",
  }
];

export default function ProfessionalJourney() {
  const [showToast, setShowToast] = useState(false);
  const sectionRef = useRef(null);

  // Trigger toast when user enters the section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowToast(true);
          // Optional: Hides toast automatically after 8 seconds
          const timer = setTimeout(() => setShowToast(false), 8000);
          return () => clearTimeout(timer);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" ref={sectionRef} className="relative w-full py-12 md:py-24">
      
      {/* NDA TOAST NOTIFICATION */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: "-50%" }}
            animate={{ opacity: 1, y: 0, x: "-50%" }}
            exit={{ opacity: 0, y: 20, x: "-50%" }}
            className="fixed bottom-10 left-1/2 z-[100] w-[90%] max-w-[420px]"
          >
            <div className="bg-black/90 backdrop-blur-md text-white p-4 rounded-3xl shadow-2xl border border-white/10 flex items-center gap-4">
              <div className="bg-orange-500/20 p-2 rounded-2xl">
                <ShieldAlert size={24} className="text-orange-500" />
              </div>
              <div className="flex-1">
                <p className="font-jaro text-xs uppercase tracking-[0.2em] text-orange-500 mb-0.5">Privacy Protocol</p>
                <p className="font-jaldi text-sm text-zinc-300 leading-snug">
                  I take my NDA commitments seriously. While I can't show the full internal architecture here, I've curated the most impactful parts of the journey to showcase my process.
                </p>
              </div>
              <button 
                onClick={() => setShowToast(false)}
                className="p-2 hover:bg-white/10 rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-5xl mx-auto px-6">
        <h2 className="font-jaro text-[40px] md:text-[60px] mb-12 text-black uppercase tracking-tight">
          Professional Journey..
        </h2>

        <div className="relative flex flex-col gap-0">
          {PROJECTS.map((project, i) => (
            <TicketCard key={project.id} project={project} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TicketCard({ project, i }: { project: any; i: number }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div 
      ref={container} 
      className="h-[500px] md:h-[600px] flex items-start justify-center sticky top-24 md:top-32"
    >
      <Link href={`/work/${project.slug}`} className="w-full">
        <motion.div
          style={{ 
            scale, 
            backgroundColor: project.color,
            marginTop: `${i * 12}px` 
          }}
          className="relative w-full h-[400px] md:h-[480px] rounded-[30px] md:rounded-[50px] shadow-2xl border border-black/5 flex flex-col md:flex-row overflow-hidden p-6 md:p-12 cursor-pointer group"
        >
          {/* LEFT SIDE: Info */}
          <div className="flex-1 flex flex-col justify-between h-full z-10">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <span className="font-jaro text-[10px] md:text-xs text-black/40 uppercase tracking-widest">{project.role}</span>
                <div className="h-px flex-1 bg-black/10" />
              </div>
              <h3 className="font-jaro text-[32px] md:text-[52px] leading-[0.9] text-black mb-4 uppercase">
                {project.title}
              </h3>
              <p className="font-jaldi text-[16px] md:text-[20px] text-black/60 italic leading-tight max-w-sm">
                "{project.desc}"
              </p>
            </div>

            <div className="flex items-end justify-between">
              <div className="flex flex-col">
                <span className="font-jaro text-[10px] text-black/40 uppercase tracking-widest">Key Result</span>
                <span className="font-jaro text-2xl md:text-3xl text-orange-600">{project.impact}</span>
              </div>
              {/* Animated Arrow */}
              <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="7" y1="17" x2="17" y2="7"></line>
                    <polyline points="7 7 17 7 17 17"></polyline>
                </svg>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Image */}
          <div className="flex-1 relative h-40 md:h-full mt-6 md:mt-0 md:ml-10 rounded-[20px] md:rounded-[30px] overflow-hidden border border-black/5">
            <Image 
              src={project.image} 
              alt={project.title} 
              fill 
              className="object-cover grayscale blur-[10px] group-hover:blur-0 group-hover:grayscale-0 transition-all duration-1000 opacity-40 group-hover:opacity-100 scale-110 group-hover:scale-100" 
            />
            <div className="absolute top-6 left-6 bg-white/80 backdrop-blur-md text-black px-4 py-1.5 rounded-full text-[10px] font-jaro tracking-widest uppercase">
              Confidential
            </div>
          </div>

          {/* Ticket Punch Detail */}
          <div className="hidden md:block w-10 h-10 rounded-full bg-white absolute -right-5 top-1/2 -translate-y-1/2 shadow-inner" />
        </motion.div>
      </Link>
    </div>
  );
}
"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, X, Send, CheckCircle2, Loader2 } from "lucide-react"; // Added Loader2

const REACTION_OPTIONS = [
  { emoji: "🧱", label: "Needs Polish", color: "#94a3b8" },
  { emoji: "🧐", label: "Interesting", color: "#fbbf24" },
  { emoji: "🥤", label: "Super Clean", color: "#10b981" },
  { emoji: "🌿", label: "Love the vibe", color: "#6366f1" },
];

export default function FloatingFeedback() {
  const [isOpen, setIsOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [selectedRating, setSelectedRating] = useState(2); 
  const [name, setName] = useState("");
  const [feedbackText, setFeedbackText] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // --- NEW STATE FOR API CALL ---
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    if (isSubmitted) {
      const timer = setTimeout(() => {
        setIsSubmitted(false);
        setIsOpen(false);
        setFeedbackText("");
        setName("");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  // --- NEW HANDLER FUNCTION ---
  const handleSubmit = async () => {
    // Prevent empty submissions or double clicks
    if (!feedbackText.trim() && !name.trim()) return;
    if (isSending) return;

    setIsSending(true);

    try {
      const response = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name || "Anonymous",
          rating: REACTION_OPTIONS[selectedRating].label,
          feedback: feedbackText,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        throw new Error("Failed to send feedback");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again later!");
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/* TRIGGER BUTTON (No changes needed here) */}
      <motion.button
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-[100] bg-white text-black pl-4 pr-6 py-4 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.12)] flex items-center gap-3 border border-zinc-100 group transition-all duration-300"
      >
        <div className="bg-[#10b981] p-2 rounded-full text-white">
          <MessageSquare size={18} />
        </div>
        <div className="relative overflow-hidden h-6 flex flex-col justify-center">
          <AnimatePresence mode="wait">
            {!isHovered ? (
              <motion.span key="feedback" className="font-jaldi font-bold text-xl tracking-tight block">
                 
              </motion.span>
            ) : (
              <motion.span key="portfolio" className="font-jaldi font-bold text-xl tracking-tight block text-[#10b981]">
                Portfolio Feedback
              </motion.span>
            )}
          </AnimatePresence>
        </div>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[110] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => !isSending && setIsOpen(false)} // Prevent closing while sending
              className="absolute inset-0 bg-zinc-900/30 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 40 }}
              className="relative w-full max-w-[440px] bg-white rounded-[48px] p-10 md:p-12 shadow-2xl overflow-hidden"
            >
              {!isSubmitted ? (
                <>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-10 right-10 text-zinc-300 hover:text-zinc-900 transition-colors"
                  >
                    <X size={24} />
                  </button>

                  <div className="mb-10 text-center md:text-left">
                    <h3 className="font-jaro text-4xl text-zinc-900 uppercase leading-none mb-3">
                      Your thoughts?
                    </h3>
                    <p className="font-jaldi text-zinc-500 text-lg">
                      I'm always looking to improve. How was your experience?
                    </p>
                  </div>

                  {/* REACTION SELECTOR */}
                  <div className="flex justify-between items-end mb-16 relative h-24 px-2">
                    {REACTION_OPTIONS.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedRating(idx)}
                        disabled={isSending}
                        className="relative z-10 flex flex-col items-center disabled:cursor-not-allowed"
                      >
                        <motion.span
                          animate={{ 
                            scale: selectedRating === idx ? 1.5 : 1,
                            y: selectedRating === idx ? -10 : 0,
                            filter: selectedRating === idx ? "grayscale(0%)" : "grayscale(100%) opacity(0.4)"
                          }}
                          className="text-4xl mb-4 transition-all duration-300 cursor-pointer"
                        >
                          {option.emoji}
                        </motion.span>
                        <motion.span 
                          animate={{ opacity: selectedRating === idx ? 1 : 0, y: selectedRating === idx ? 0 : 5 }}
                          className="absolute -bottom-8 text-[11px] font-black uppercase tracking-[0.2em] text-zinc-400 whitespace-nowrap"
                        >
                          {option.label}
                        </motion.span>
                      </button>
                    ))}
                    <motion.div
                      animate={{ x: (selectedRating * 95) - 25 }}
                      className="absolute left-6 bottom-10 w-24 h-24 rounded-full blur-[40px] opacity-20 pointer-events-none transition-all duration-500"
                      style={{ backgroundColor: REACTION_OPTIONS[selectedRating].color }}
                    />
                  </div>

                  <div className="space-y-4">
                    <input
                      type="text"
                      value={name}
                      disabled={isSending}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Name (Optional)"
                      className="w-full p-5 rounded-3xl bg-zinc-50 border border-zinc-100 focus:border-[#10b981] outline-none font-jaldi text-lg transition-all disabled:opacity-50"
                    />

                    <textarea
                      value={feedbackText}
                      disabled={isSending}
                      onChange={(e) => setFeedbackText(e.target.value)}
                      placeholder="Anything you'd like to share?"
                      className="w-full h-32 p-6 rounded-[32px] bg-zinc-50 border border-zinc-100 focus:border-[#10b981] focus:ring-1 focus:ring-[#10b981] outline-none transition-all font-jaldi text-lg resize-none disabled:opacity-50"
                    />

                    {/* --- UPDATED BUTTON WITH LOADING STATE --- */}
                    <motion.button
                      whileHover={!isSending ? { scale: 1.02 } : {}}
                      whileTap={!isSending ? { scale: 0.98 } : {}}
                      onClick={handleSubmit}
                      disabled={isSending}
                      className={`w-full py-5 rounded-[24px] font-jaro text-2xl uppercase tracking-[0.1em] shadow-xl mt-2 flex items-center justify-center gap-3 transition-all ${
                        isSending 
                          ? "bg-zinc-200 text-zinc-500 cursor-not-allowed shadow-none" 
                          : "bg-gradient-to-r from-[#10b981] to-[#34d399] text-white shadow-green-100"
                      }`}
                    >
                      {isSending ? (
                        <>Sending... <Loader2 className="animate-spin" size={20} /></>
                      ) : (
                        <>Send it over <Send size={20} /></>
                      )}
                    </motion.button>
                  </div>
                </>
              ) : (
                <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="py-16 text-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1, rotate: 360 }} transition={{ type: "spring", damping: 12 }} className="w-24 h-24 bg-green-50 text-[#10b981] rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle2 size={56} />
                  </motion.div>
                  <h3 className="font-jaro text-4xl text-zinc-900 uppercase mb-3 tracking-tight">Got it!</h3>
                  <p className="font-jaldi text-zinc-500 text-xl">Thanks for taking the time.</p>
                </motion.div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
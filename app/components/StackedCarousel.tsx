"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import type { PanInfo } from "framer-motion";
import Image from "next/image";

interface Card {
  id: number;
  src: string;
  title: string;
}

const cardsData: Card[] = [
  { id: 1, src: "/images/card-1.svg", title: "My Digital Art 1" },
  { id: 2, src: "/images/card-1.svg", title: "My Digital Art 2" },
  { id: 3, src: "/images/card-1.svg", title: "My Digital Art 3" },
  { id: 4, src: "/images/card-1.svg", title: "My Digital Art 4" },
  { id: 5, src: "/images/card-1.svg", title: "My Digital Art 5" },
];

export default function StackedDragCarousel() {
  const [cards, setCards] = useState(cardsData);
  const [canSwipe, setCanSwipe] = useState(true);

  const safeSwipe = (action: () => void) => {
    if (!canSwipe) return;
    setCanSwipe(false);
    action();
    setTimeout(() => setCanSwipe(true), 300);
  };

  const swipeRight = () => setCards((prev) => [...prev.slice(1), prev[0]]);
  const swipeLeft = () => setCards((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);

  const onDragEnd = (_: any, info: PanInfo) => {
    const offsetX = info.offset.x;
    if (offsetX > 100) safeSwipe(swipeRight);
    else if (offsetX < -100) safeSwipe(swipeLeft);
  };

  return (
    // Changed fixed width to responsive container
    <div className="relative h-[350px] w-[280px] sm:w-[340px] md:h-[460px] mx-auto select-none">
      {cards.map((card, index) => {
        const pos = index;
        const isFront = pos === 0;

        // Hide cards deep in the stack for mobile performance
        if (pos > 3) return null;

        return (
          <motion.div
            key={card.id}
            drag={isFront ? "x" : false}
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={onDragEnd}
            // Removed fixed w-[382px], used w-full
            className="absolute top-0 left-0 w-full aspect-square md:h-[382px] rounded-3xl overflow-hidden shadow-2xl cursor-grab active:cursor-grabbing"
            animate={{
              x: -pos * (typeof window !== 'undefined' && window.innerWidth < 768 ? 15 : 40),
              y: pos * 8,
              scale: 1 - pos * 0.05,
              opacity: 1 - pos * 0.2,
              filter: isFront ? "blur(0px)" : "blur(2px)",
              zIndex: cards.length - pos,
            }}
          >
            <Image
              src={card.src}
              alt={card.title}
              fill
              className="object-cover"
            />

            {isFront && (
              <div className="absolute bottom-0 w-full p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent">
                <h2 className="text-white text-xl md:text-2xl font-jaro">
                  {card.title}
                </h2>
                <p className="text-white/70 text-sm font-jaldi md:hidden">Swipe to explore →</p>
              </div>
            )}
          </motion.div>
        );
      })}

      {/* Navigation Buttons - Hidden on mobile for cleaner look */}
      <div className="hidden md:block">
        <button onClick={() => safeSwipe(swipeLeft)} className="absolute -left-16 top-1/2 bg-white/10 backdrop-blur-md p-4 rounded-full text-white">◀</button>
        <button onClick={() => safeSwipe(swipeRight)} className="absolute -right-16 top-1/2 bg-white/10 backdrop-blur-md p-4 rounded-full text-white">▶</button>
      </div>
    </div>
  );
}
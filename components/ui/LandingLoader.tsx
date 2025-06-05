'use client';

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const stickers = new Array(20).fill(null).map((_, i) => i);

export default function AwwwardsLoader() {
  const [loaded, setLoaded] = useState(false);
  const [timer, setTimer] = useState(0);
  const [hovered, setHovered] = useState(false);
  const [visibleStickers, setVisibleStickers] = useState<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => {
        const next = prev + 1;
        if (next >= 100) {
          clearInterval(interval);
          setLoaded(true);
          return 100;
        }
        return next;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (hovered && visibleStickers.length < stickers.length) {
      const timeout = setTimeout(() => {
        setVisibleStickers((prev) => [...prev, prev.length]);
      }, 200);
      return () => clearTimeout(timeout);
    }
  }, [hovered, visibleStickers]);

  if (loaded) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="fixed inset-0 z-[9999] bg-[#192227] text-white flex flex-col justify-center items-center"
      onMouseEnter={() => setHovered(true)}
    >
      <div className="text-8xl font-bold mb-10">
        {timer} <span className="text-[#F9A600]">%</span>
      </div>

      <div className="flex gap-2 flex-wrap justify-center items-center">
        {visibleStickers.map((id) => (
          <motion.div
            key={id}
            initial={{ y: 50, opacity: 0, rotate: -20 }}
            animate={{ y: 0, opacity: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            className={`w-20 h-20 rounded-full ${
              id % 2 === 0 ? "bg-white" : "bg-[#F9A600]"
            } flex items-center justify-center shadow-xl`}
          />
        ))}
      </div>
    </motion.div>
  );
}

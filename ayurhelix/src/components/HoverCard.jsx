import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FlipCard = ({ frontContent, backContent, width = "w-64", height = "h-40", color }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    flipped: { rotateY: 180 },
    unflipped: { rotateY: 0 },
  };

  return (
    // Parent div providing 3D perspective and interaction
    <div
      className={`relative ${width} ${height} cursor-pointer`}
      style={{ perspective: '1000px' }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
      onFocus={() => setIsFlipped(true)}
      onBlur={() => setIsFlipped(false)}
      tabIndex={0} // Enables keyboard focus for accessibility
      role="button"
      aria-pressed={isFlipped}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }}
        variants={cardVariants}
        animate={isFlipped ? "flipped" : "unflipped"}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
      >
        {/* Front of the card */}
        <div
          className={`absolute inset-0 rounded-4xl shadow-lg hover:shadow-2xl ring-1 ring-transparent hover:ring-indigo-400 transition-shadow transition-colors duration-300 ease-in-out ${color} text-white flex flex-col items-center justify-center p-6 text-2xl sm:text-3xl font-semibold tracking-wide`}
          style={{ backfaceVisibility: 'hidden' }}
        >
          {frontContent}
        </div>

        {/* Back of the card */}
        <div
          className="absolute inset-0 rounded-4xl shadow-lg bg-gradient-to-br from-gray-100 to-gray-300 text-gray-700 flex flex-col items-center justify-center p-6 text-lg sm:text-xl leading-relaxed"
          style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;

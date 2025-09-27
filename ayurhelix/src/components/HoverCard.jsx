import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FlipCard = ({ frontContent, backContent, width = "w-64", height = "h-40" }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const cardVariants = {
    flipped: { rotateY: 180 },
    unflipped: { rotateY: 0 },
  };

  return (
    // This parent div provides the 3D perspective
    <div
      className={`relative ${width} ${height}`}
      style={{ perspective: '1000px' }} // Apply perspective for 3D depth
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="relative w-full h-full"
        style={{ transformStyle: 'preserve-3d' }} // CRITICAL: This enables 3D space
        variants={cardVariants}
        animate={isFlipped ? "flipped" : "unflipped"}
        transition={{ duration: 0.6, type: "spring", stiffness: 100, damping: 15 }}
      >
        {/* Front of the card */}
        <div
          className="absolute inset-0 rounded-3xl shadow-xl bg-[#5ba51f] text-white flex flex-col items-center justify-center p-4 text-3xl"
          style={{ backfaceVisibility: 'hidden' }} // CRITICAL: Hides the back when facing away
        >
          {frontContent}
        </div>

        {/* Back of the card */}
        <div
          className="absolute inset-0 rounded-3xl shadow-xl bg-gradient-to-br from-gray-200 to-gray-400 text-gray-800 flex flex-col items-center justify-center p-4 text-xl"
          style={{
            backfaceVisibility: 'hidden',    // CRITICAL: Hides the back when facing away
            transform: 'rotateY(180deg)', // Initially rotated
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
};

export default FlipCard;
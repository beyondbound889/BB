import { motion } from "framer-motion";
import { useState } from "react";

// Card overlay variants for bottom-to-top reveal
const overlayVariants = {
  rest: {
    opacity: 0,
    y: "100%",
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeInOut" },
  },
};

export default function AnimatedCard({ item, index }) {
  const [isClicked, setIsClicked] = useState(false);

  // Determine animation state: hover while hovered OR clicked toggle
  const animationState = isClicked ? "hover" : "rest";

  return (
    <motion.div
      className="relative w-72 h-24 md:h-48 min-w-[10rem] rounded-xl overflow-hidden shadow-lg cursor-pointer group flex-1"
      whileHover="hover"
      initial="rest"
      animate={animationState}
      onClick={() => setIsClicked(!isClicked)}
      key={index}
    >
      <img
        src={item.img}
        alt="Card visual"
        className="absolute inset-0 w-full h-full object-cover object-center z-0"
      />
      {/* Name Text - styled for visibility */}
      <span className="absolute bottom-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-md bg-black/40 text-white text-lg font-semibold z-10 shadow-md backdrop-blur">
        {item.name}
      </span>
      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 flex items-end"
        style={{ zIndex: 20 }}
        variants={overlayVariants}
      >
        <div className="w-full bg-[#dec493] bg-opacity-95 p-6 rounded-b-xl flex items-center justify-center min-h-[40%]">
          <span className="text-[#216041] text-md md:text-xl font-semibold text-center drop-shadow">
            {item.benefit}
          </span>
        </div>
      </motion.div>
    </motion.div>
  );
}

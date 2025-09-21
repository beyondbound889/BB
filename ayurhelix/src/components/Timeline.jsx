import React from "react";
import { motion } from "framer-motion";

// --- Timeline Data ---
const timelineData = [
  {
    step: "Step 1",
    title: "Research & Formulation",
    subtitle: "Ayurvedic Lab",
    image: "/images/research.jpg",
    points: [
      "Combining ancient Ayurvedic wisdom with modern science.",
      "Ensuring a synergistic formula for Glycomics.",
    ],
  },
  {
    step: "Step 2",
    title: "IPR & Patenting",
    subtitle: "Legal Team",
    image: "/images/patent.jpg",
    points: [
      "Filed patents to protect intellectual property.",
      "Ensured product differentiation and trust.",
    ],
  },
  {
    step: "Step 3",
    title: "Manufacturing & QC",
    subtitle: "Certified Facility",
    image: "/images/manufacturing.jpg",
    points: [
      "Partnered with GMP-certified manufacturers.",
      "Implemented strict quality control protocols.",
    ],
  },
  {
    step: "Step 4",
    title: "Distribution",
    subtitle: "Pharma Network",
    image: "/images/distribution.jpg",
    points: [
      "Built a network of doctors and pharmacies.",
      "Ensured wide patient access across regions.",
    ],
  },
  {
    step: "Step 5",
    title: "Clinical Validation",
    subtitle: "Medical Trials",
    image: "/images/clinical.jpg",
    points: [
      "Conducted Phase III trials for efficacy.",
      "Committed to rigorous clinical testing.",
    ],
  },
];

// --- Animation Variant ---
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Timeline = () => {
  return (
    <section className="bg-[#dec493] py-16 px-6 relative">
      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-white">Our Journey of Innovation.</h2>
      </motion.div>

      {/* Vertical Line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 top-32 bottom-16 w-1 bg-white z-0"></div>

      {/* Timeline Items */}
      <div className="flex flex-col gap-24 relative z-10 max-w-5xl mx-auto">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.step}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            {/* Content Card */}
            <div
              className={`absolute w-[calc(50%-80px)] ${
                index % 2 === 0 ? "left-0 pr-6" : "right-0 pl-6"
              }`}
            >
              <div className="bg-gradient-to-br from-[#fff7e2] to-[#f0eac0] rounded-xl p-6 shadow-lg border border-[#e0d8b0] transition-transform hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#3A5A40] flex items-center justify-center text-white font-bold text-sm shadow-md">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-[#3A5A40] font-['Source_Serif_4']">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#588157] text-sm font-semibold mb-2">
                  {item.subtitle}
                </p>
                <ul className="list-disc ml-5 text-[#1E2F23] text-sm space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Circle Marker on Line */}
            <div className="relative z-10">
              <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Opposite Side Step Label */}
            <div
              className={`absolute w-[calc(50%-80px)] top-1 ${
                index % 2 === 0 ? "right-0 text-left pl-6" : "left-0 text-right pr-6"
              }`}
            >
              <div className="text-white text-sm font-bold bg-[#3A5A40] px-3 py-1 rounded shadow inline-block">
                {item.step}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Timeline;
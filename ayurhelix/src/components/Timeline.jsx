import React from "react";
import { motion } from "framer-motion";

const timelineData = [
  {
    step: "Nov 2023 - Dec 2023",
    title: "Firm Formation",
    subtitle: "Beyond Bound",
    image: "/assets/FF.jpeg",
    points: [
      "Beyond Bound officially registered",
      "Vision to revolutionize diabetes care with Ayurveda & modern science",
    ],
  },
  {
    step: "Dec 2023 - May 2024",
    title: "R&D Kickoff",
    subtitle: "Heal the nature",
    image: "/assets/rnd.png",
    points: [
      "Anti-diabetic medicine research initiated",
      "Glycomics & herbal R&D activities started",
    ],
  },
  {
    step: "June 2024 - Sept 2024",
    title: "Formulation Development",
    subtitle: "Something Brewing",
    image: "/assets/ct.jpeg",
    points: [
      "3–4 Ayurvedic formulations prepared",
      "Pre-clinical validation and refinement underway",
      "Beyond Bound Trademark Granted received"
    ],
  },
  {
    step: "Oct 2024 – April  2025",
    title: "Final Formulation Stage",
    subtitle: "Medical Trials",
    image: "/assets/fs.png",
    points: [
      "Advanced R&D and optimization completed",
      "Final formulation selected after trials and expert review",
      "Patent applied for formualtuon"
    ],
  },
  {
    step: "May 2025 - June 2025",
    title: "Strategic Partnership",
    subtitle: "Pharma Network",
    image: "/assets/partner.jpeg",
    points: [
      "Collaboration with Riidl Incubation Center for scaling and innovation support",
    ],
  },
  {
    step: "June 2025 - Aug 2025",
    title: "Product Ready with Certification",
    subtitle: "Market Ready",
    image: "/assets/Branding.png",
    points: [
      "Final product in hand",
      "Required certifications achieved (AYUSH, FSSAI, ISO 9001:2015, GMP, HACCP, etc.)",
      "Ready for market launch",
    ],
  },
  {
    step: "Aug 2025",
    title: "Official Incorporation",
    subtitle: "Registration",
    image: "/assets/logo.png",
    points: [
      "Registered as Ayurhelix Pvt Ltd",
      "Expanding towards commercialization and growth",
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
        <h2 className="text-4xl font-bold text-[#216041]">Our Journey of Innovation.</h2>
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
              <div className="bg-white rounded-xl p-6 shadow-lg border border-[#e0d8b0] transition-transform hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-4">
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
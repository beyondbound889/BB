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
    subtitle: "Journey Begins",
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
    image: "/assets/riddl.png",
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
    image: "https://res.cloudinary.com/dmvolzsaz/image/upload/v1758644988/12_dw3qfa.png",
    points: [
      "Registered as Ayurhelix Pvt Ltd",
      "Expanding towards commercialization and growth",
    ],
  },
];

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
    <section className="bg-[#dec493] py-10 px-3 sm:py-16 sm:px-6 relative overflow-x-hidden">
      {/* Title */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
        className="text-center mb-10 sm:mb-16"
      >
        <h2 className="text-2xl sm:text-4xl font-bold text-[#216041]">
          Our Journey of Innovation.
        </h2>
      </motion.div>

      {/* Vertical Line (desktop only) */}
      <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 top-32 bottom-16 w-1 bg-white z-0"></div>

      {/* Timeline Items */}
      <div className="flex flex-col gap-10 sm:gap-24 relative z-10 max-w-2xl sm:max-w-5xl mx-auto">
        {timelineData.map((item, index) => (
          <motion.div
            key={item.step}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex flex-col sm:flex-row items-center justify-center"
          >
            {/* Content Card */}
            <div
              className={`w-full sm:absolute sm:w-[calc(50%-80px)] ${
                index % 2 === 0
                  ? "sm:left-0 sm:pr-6"
                  : "sm:right-0 sm:pl-6"
              } mb-6 sm:mb-0`}
            >
              <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-[#e0d8b0] transition-transform hover:scale-[1.02]">
                <div className="flex items-center gap-3 mb-2 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-[#3A5A40] font-['Source_Serif_4']">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[#588157] text-xs sm:text-sm font-semibold mb-1 sm:mb-2">
                  {item.subtitle}
                </p>
                <ul className="list-disc ml-5 text-[#1E2F23] text-xs sm:text-sm space-y-1">
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Circle Marker on Line */}
            <div className="relative z-10 mx-auto sm:mx-0 mb-2 sm:mb-0">
              <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white flex items-center justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Step Label */}
            <div
              className={`w-full sm:absolute sm:w-[calc(50%-80px)] top-1 ${
                index % 2 === 0
                  ? "sm:right-0 sm:text-left sm:pl-6"
                  : "sm:left-0 sm:text-right sm:pr-6"
              }`}
            >
              <div className="text-white text-xs sm:text-sm font-bold bg-[#3A5A40] px-2 py-1 rounded shadow inline-block">
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
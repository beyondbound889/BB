import React, { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

// Brand values and colors
const values = [
  {
    title: "Hybrid Outcomes",
    description: "Blending ancient Ayurveda with modern science for real, measurable results.",
    color: "#216041",
    icon: "🌿",
  },
  {
    title: "Patients Safety Obsession",
    description: "Unwavering commitment to safety, purity, and clinical validation in every product.",
    color: "#dec493",
    icon: "🛡️",
  },
  {
    title: "Innovation with Execution",
    description: "Turning bold ideas into tangible solutions that transform lives.",
    color: "#588157",
    icon: "💡",
  },
  {
    title: "Employee & Partner Well-being",
    description: "Fostering a culture of care, growth, and respect for every team member and collaborator.",
    color: "#cfc099ff",
    icon: "🤝",
  },
  {
    title: "Trust & Reliability",
    description: "Building lasting relationships through transparency, quality, and consistent results.",
    color: "#A3B18A",
    icon: "🔒",
  },
];

// Pie chart math
const PIE_SIZE = 400;
const RADIUS = PIE_SIZE / 2 - 20;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

function getPieSegments(values) {
  const total = values.length;
  return values.map((v, i) => {
    const startAngle = (i / total) * 360;
    const endAngle = ((i + 1) / total) * 360;
    return { ...v, startAngle, endAngle };
  });
}

const BrandValues = () => {
  const segments = getPieSegments(values);
  const controls = useAnimation();

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  return (
    <section className="bg-[#fff7e2] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-[#216041] mb-4 font-['Source_Serif_4']">
          Our Brand Values
        </h2>
        <p className="text-lg text-[#216041] max-w-2xl mx-auto">
          The pillars that guide every step of our journey at Beyond Bound
        </p>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-around gap-12">
        {/* Pie Chart */}
        <svg width={PIE_SIZE} height={PIE_SIZE} viewBox={`0 0 ${PIE_SIZE} ${PIE_SIZE}`}>
          <g transform={`translate(${PIE_SIZE / 2},${PIE_SIZE / 2})`}>
            {segments.map((seg, idx) => {
              const startRad = (seg.startAngle - 90) * (Math.PI / 180);
              const endRad = (seg.endAngle - 90) * (Math.PI / 180);
              const x1 = Math.cos(startRad) * RADIUS;
              const y1 = Math.sin(startRad) * RADIUS;
              const x2 = Math.cos(endRad) * RADIUS;
              const y2 = Math.sin(endRad) * RADIUS;
              const largeArc = seg.endAngle - seg.startAngle > 180 ? 1 : 0;
              const pathData = `
                M 0 0
                L ${x1} ${y1}
                A ${RADIUS} ${RADIUS} 0 ${largeArc} 1 ${x2} ${y2}
                Z
              `;
              return (
                <motion.path
                  key={seg.title}
                  d={pathData}
                  fill={seg.color}
                  initial={{ scale: 0 }}
                  animate={controls}
                  transition={{ delay: idx * 0.2, duration: 0.7, type: "spring" }}
                  variants={{
                    visible: { scale: 1 },
                  }}
                  style={{ originX: 0, originY: 0 }}
                />
              );
            })}
            {/* Center circle for effect */}
            <circle r={RADIUS * 0.45} fill="#fff7e2" />
            <text
              textAnchor="middle"
              alignmentBaseline="middle"
              fontSize="1.2rem"
              fontWeight="bold"
              fill="#216041"
              y={6}
            >
              Brand Values
            </text>
          </g>
        </svg>
        {/* Legend */}
        <div className="flex flex-col gap-6">
          {segments.map((seg, idx) => (
            <motion.div
              key={seg.title}
              className="flex items-center gap-4 bg-[#dec493] rounded-xl shadow p-4"
              initial={{ opacity: 0, x: 40 }}
              animate={controls}
              transition={{ delay: 0.5 + idx * 0.15, duration: 0.6 }}
              variants={{ visible: { opacity: 1, x: 0 } }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold"
                style={{ background: seg.color }}
              >
                {seg.icon}
              </span>
              <div>
                <div className="text-lg font-bold text-[#216041]">{seg.title}</div>
                <div className="text-[#216041] text-sm">{seg.description}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandValues;
import React from "react";
import { motion } from "framer-motion";
import AnimatedCard from "../components/AnimatedCard";
import Marquee from "react-fast-marquee";
import Blogs from "../components/Blogs";
import { Helmet } from '@dr.pogodin/react-helmet';
// Animation variants (add these!)
const validation = [
  {
    img: "/assets/16.png",
  },
  {
    img: "/assets/17.png",
  },
  {
    img: "/assets/18.png",
  },
  {
    img: "/assets/19.png",
  },
  {
    img: "/assets/21.png",
  },
  {
    img: "/assets/22.png",
  },
  {
    img: "/assets/23.png",
  },
];
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};
const fadeInFromBottom = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
const scaleIn = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// ...existing code...

const ingredients = [
  {
    name: "Karela",
    benefit: "Mimics natural insulin action ",
    img: "/assets/Karela.jpeg",
  },
  {
    name: "Vijaysar",
    benefit: "Provides metabolic protection",
    img: "/assets/vijaysar.jpeg",
  },
  {
    name: "Jambu Seed",
    benefit: "Supports pancreatic health & β-cell function",
    img: "/assets/Jamun.jpeg",
  },
  {
    name: "Turmeric & Amla",
    benefit: "Boost berberine bioavailability",
    img: "/assets/tna.jpeg",
  },
  {
    name: "Gudmar",
    benefit: "Regulates sugar cravings 🍫",
    img: "/assets/gurmar.jpeg",
  },
];

const Innovation = () => {
  return (
    <section className="bg-[#dec493] text-gray-800 py-16">
      <Helmet>
        <title>Know our Innovations</title>
        <meta name="description" content="Killing Diabeties Safely" />
      </Helmet>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-[#3b3b3b]">
          Innovation Without Compromise
        </h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          “Diabetes care comes with a bitter choice: Fast but risky allopathy,
          or safe but slow Ayurveda. Why should healing come with harm or
          compromise?”
        </p>
      </motion.div>
      <motion.section
        className="py-12 md:py-20 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInFromBottom} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-['Source_Serif_4'] text-[#216041]">
              The Unaddressed Challenge in Diabetes Care
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <motion.div
              variants={scaleIn}
              className="bg-[#dec493] p-8 rounded-lg shadow-md border-l-4 border-[#588157]"
            >
              <h3 className="text-xl font-bold text-[#3A5A40] font-['Source_Serif_4'] mb-2">
                Allopathy's Dilemma
              </h3>
              <p>Effective, but with severe long-term side effects.</p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-[#dec493] p-8 rounded-lg shadow-md border-l-4 border-[#A3B18A]"
            >
              <h3 className="text-xl font-bold text-[#3A5A40] font-['Source_Serif_4'] mb-2">
                Ayurveda's Limitation
              </h3>
              <p>
                Safe, but traditionally slow-acting and lacks clinical
                validation.
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
      {/* Glycomics Solution */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex flex-col lg:flex-row justify-between items-center bg-white/80 backdrop-blur-md shadow-xl p-10 rounded-2xl border border-gray-200/40 max-w-6xl mx-auto mb-20 overflow-hidden my-10"
      >
        {/* Left Content */}
        <div className="mx-10 max-w-md">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-[#216041] mb-6"
          >
            Introducing Glycomics
          </motion.h3>

          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.15 },
              },
            }}
            className="list-disc list-inside text-gray-700 space-y-3 text-lg"
          >
            {[
              "As effective and fast as allopathy",
              "As safe and natural as Ayurveda",
              "Doctor-formulated, evidence-backed",
              "No known side effects",
            ].map((item, i) => (
              <motion.li
                key={i}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <p className="mt-6 text-sm text-gray-500 italic">
            Dosage:{" "}
            <span className="font-semibold text-gray-700">
              Twice a day before meals
            </span>
          </p>
        </div>

        {/* Right Content - Product Image */}
        <div className="relative">
          {/* Glowing Background */}
          <div className="absolute -inset-10 bg-gradient-to-tr from-emerald-300/30 to-blue-400/20 rounded-full blur-3xl animate-pulse" />

          <motion.img
            src="/assets/Branding.png"
            alt="Glycomics Product"
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative z-10 mx-auto h-100 drop-shadow-2xl"
          />
        </div>
      </motion.div>
      <div className="text-center bg-white p-6">
        <h3 className="text-3xl font-bold text-[#216041] my-10">
          What makes it Different
        </h3>
        <div className="flex flex-col lg:flex-row gap-6">
          <motion.div
            variants={scaleIn}
            className="flex w-full lg:w-1/2 bg-[#dec493] p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-[#588157] items-center gap-4"
          >
            <img
              src="/assets/Berberine.jpeg"
              alt="Berberine"
              className="w-1/4 sm:w-1/5 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#3A5A40] font-['Source_Serif_4'] mb-2">
                Berberine (HCL)
              </h3>
              <p className="text-sm sm:text-base mb-2">
                Clinically proven efficacy, comparable to Metformin
              </p>
              <a
                href="https://pmc.ncbi.nlm.nih.gov/articles/PMC2410097/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 text-base hover:text-lg transition-all"
              >
                Refer Here →
              </a>
            </div>
          </motion.div>
          <motion.div
            variants={scaleIn}
            className="flex w-full lg:w-1/2 bg-[#dec493] p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-[#A3B18A] items-center gap-4"
          >
            <img
              src="/assets/ayurveda.png"
              alt="Ayurveda"
              className="w-1/4 sm:w-1/5 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#3A5A40] font-['Source_Serif_4'] mb-2">
                Ayurvedic Synergy
              </h3>
              <p className="text-sm sm:text-base">
                Supportive herbs contribute unique functions, making Glycomics
                the most effective berberine-based anti-diabetic formulation
              </p>
            </div>
          </motion.div>
        </div>

        <div>
          <h1 className="text-3xl mx-8 text-[#216041] text-start mt-12 font-bold">
            Herbal Contributions
          </h1>
          <div className="flex flex-wrap gap-8 mx-auto p-10 bg-white">
            {ingredients.map((item, index) => (
              <AnimatedCard item={item} index={index} key={index} />
            ))}
          </div>
        </div>
      </div>
      {/* Ingredient Highlights */}

      {/* Differentiators */}
      <div className="bg-white p-6">
        <h1 className="mx-8 mb-6 text-3xl text-[#216041] text-start font-bold">
          Product Certifications
        </h1>
        <Marquee gradient={false} speed={80} className="text-white py-4">
          {validation.map((item, index) => (
            <img
              src={item.img}
              alt="Validation logos"
              className="h-40 mx-10"
              key={index}
            />
          ))}
        </Marquee>
      </div>
      <Blogs />
    </section>
  );
};

export default Innovation;

import React, {useEffect} from "react";
import { motion } from "framer-motion";
import AnimatedCard from "../components/util/AnimatedCard";
import Blogs from "../components/Blogs";
import { Helmet } from "@dr.pogodin/react-helmet";
import CircularCarousel from "../components/CircularCarasoul";
import DiabetesStats from "../components/stats";
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
    name: "Gudmar",
    benefit: "Regulates sugar cravings 🍫",
    img: "/assets/gurmar.jpeg",
  },
  {
    name: "Turmeric & Amla",
    benefit: "Boost berberine bioavailability",
    img: "/assets/tna.jpeg",
  },
  {
    name: "Jambu Seed",
    benefit: "Supports pancreatic health & β-cell function",
    img: "/assets/Jamun.jpeg",
  },
];

const Innovation = () => {
  useEffect(() => {
  window.scrollTo(0, 0); // Scrolls to the top of the page
}, []);
  return (
    <section className="bg-white text-gray-800 pb-16">
      <Helmet>
        <title>Know our Innovations</title>
        <meta name="description" content="Killing Diabeties Safely" />
        <meta name="keywords" content="Diabeties, Glycomics, Berberine, Karela, Jamun, Amla"></meta>
      </Helmet>
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center bg-[#dec493] py-8 px-4 sm:px-6 md:px-12"
      >
        <h2 className="text-3xl sm:text-4xl font-bold text-[#395c37] max-w-4xl mx-auto">
          Innovation Without Compromise
        </h2>
        <p className="mt-4 text-base sm:text-2xl font-bold text-black/80 max-w-3xl mx-auto">
          Suffering with Diabetes?
        </p>
        <DiabetesStats/>
        <h1 className="mt-1 text-3xl text-black/80 max-w-3xl mx-auto font-bold">
          You've got three choices
        </h1>

        <div className="mt-6 flex flex-col sm:flex-row sm:justify-center sm:space-x-4 space-y-4 sm:space-y-0 mx-auto px-2">
          <p className="text-lg bg-white/80 p-6 rounded-3xl sm:text-xl font-semibold text-[#395c37]">
            Allopathy: Fast but Risky
          </p>
          <p className="text-lg bg-white/80 p-6 rounded-3xl sm:text-xl font-semibold text-[#395c37]">
            Traditional Ayurveda: Safe but slow
          </p>
          <p className="text-lg bg-white/80 p-6 rounded-3xl sm:text-xl font-semibold text-[#395c37]">
            GLYCOMICS: SAFE AND FAST
          </p>
        </div>
      </motion.div>
      {/* Glycomics Solution */}
      <div className="bg-white w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#dec493] relative flex flex-col lg:flex-row justify-between items-center bg-white/80 backdrop-blur-md shadow-xl p-5 md:p-5 rounded-2xl border border-gray-200/40 max-w-6xl mx-auto mb-20 overflow-hidden my-1"
        >
          {/* Left Content */}
          <div className="mx-5 w-full md:w-2/3">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-[#216041] mb-6"
            >
              Why Glycomics
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
              className="list-disc list-inside text-gray-700 space-y-3 text-lg list-none"
            >
              {[
                "Rapid diabetes control, as effective as allopathy",
                "Safe Ayurvedic ways for blood sugar management",
                "Doctor-formulated, clinically proven herbal remedy",
                "No known side effects, natural, safe diabetes care",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                 <span className="text-[#216041]">➤</span> {item}
                </motion.li>
              ))}
            </motion.ul>

            <p className="hidden md:block mt-6 text-sm text-gray-500 italic">
              Dosage:{" "}
              <span className="font-semibold text-gray-700">
                Twice a day before the meals
              </span>
            </p>
          </div>
          {/* Right Content - Product Image */}
          <div className="relative">
            {/* Glowing Background */}
            <div className="absolute -inset-10 bg-gradient-to-tr from-emerald-300/30 to-blue-400/20 rounded-full blur-3xl animate-pulse" />

            <motion.img
              src="/assets/Product.png"
              alt="Glycomics Product"
              whileHover={{ scale: 1.08, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="relative z-10 mx-auto h-100 drop-shadow-2xl"
            />
          </div>
          <p className="md:hidden mt-6 text-sm text-gray-500 italic">
              Dosage:{" "}
              <span className="font-semibold text-gray-700">
                Twice a day before the meals
              </span>
            </p>
        </motion.div>
      </div>
      <div className="text-center bg-white p-3 mt-10">
        <h3 className="text-3xl font-bold text-[#216041] mb-10">
          What makes it Different
        </h3>
        <div className="flex flex-col md:flex-row gap-2">
          <div className="md:w-2/3">
            <CircularCarousel/>
          </div>
          <div className="w-full md:w-2/3 gap-6 mt-10">
            <motion.div
            variants={scaleIn}
            className="flex w-full bg-[#dec493] p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-[#588157] items-center gap-4"
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
            className="flex w-full bg-[#dec493] p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-[#A3B18A] items-center gap-4 mt-5"
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
          <motion.div
            variants={scaleIn}
            className="flex w-full bg-[#dec493] p-6 sm:p-8 rounded-lg shadow-md border-l-4 border-[#A3B18A] items-center gap-4 mt-5"
          >
            <img
              src="/assets/Product.png"
              alt="Ayurveda"
              className="w-5 h-25 sm:w-1/5 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-[#3A5A40] font-['Source_Serif_4'] mb-2">
                All in one solution for diabetes
              </h3>
              <p className="text-sm sm:text-base">
                Our ayurvedic diabetes medicine is a complete treatment that helps regulate blood sugar levels and support the body’s healthy glucose management
              </p>
            </div>
          </motion.div>
          </div>
        </div>
        <div className="hidden">
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
      <Blogs />
    </section>
  );
};

export default Innovation;
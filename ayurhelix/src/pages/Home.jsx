import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Timeline from "../components/Timeline";

// Animation variants
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

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"; // Replace with your own image

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <motion.section
        className="relative bg-[#fff7e2] text-white overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={{ minHeight: "60vh" }}
      >
        {/* Hero Image */}
        <img
          src={HERO_IMAGE}
          alt="Ayurvedic herbs and science"
          className="absolute inset-0 w-full h-full object-cover object-center opacity-70"
          style={{ zIndex: 0 }}
        />
        {/* Overlay for contrast */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#588157cc] via-[#fff7e2cc] to-[#fff7e2ee] mix-blend-multiply"
          style={{ zIndex: 1 }}
        />
        <div
          className="relative container mx-auto px-6 py-16 md:py-20 text-center flex flex-col items-center justify-center"
          style={{ zIndex: 2 }}
        >
          <motion.h1
            variants={fadeInFromBottom}
            className="text-4xl md:text-5xl font-bold font-['Source_Serif_4'] leading-tight text-[#1E2F23] drop-shadow-lg"
          >
            To transform lives naturally through the power of Ayurveda
          </motion.h1>
          <motion.p
            variants={fadeInFromBottom}
            className="mt-4 text-lg md:text-xl text-[#3A5A40] max-w-3xl mx-auto font-medium"
          >
            Combining the timeless wisdom of Ayurveda with trusted quality and
            modern science to help people live healthier every day
          </motion.p>
          <motion.div variants={fadeInFromBottom}>
            <Link
              to="/innovation"
              className="mt-8 inline-block bg-[#588157] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-[#3A5A40] transition-transform transform hover:scale-105"
            >
              Discover the Science
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Problem Section */}
      <motion.section
        className="py-12 md:py-20 bg-white overflow-hidden"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <motion.div variants={fadeInFromBottom} className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-['Source_Serif_4'] text-[#1E2F23]">
              The Unaddressed Challenge in Diabetes Care
            </h2>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-8 text-center">
            <motion.div
              variants={scaleIn}
              className="bg-[#F4F1DE] p-8 rounded-lg shadow-md border-l-4 border-[#588157]"
            >
              <h3 className="text-xl font-bold text-[#3A5A40] font-['Source_Serif_4'] mb-2">
                Allopathy's Dilemma
              </h3>
              <p>Effective, but with severe long-term side effects.</p>
            </motion.div>
            <motion.div
              variants={scaleIn}
              className="bg-[#F4F1DE] p-8 rounded-lg shadow-md border-l-4 border-[#A3B18A]"
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

      {/* Timeline Section */}
      <Timeline />

      {/* Call-to-Action Section */}
      <motion.section
        className="py-12 md:py-20 text-black text-center bg-white"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="container mx-auto px-6">
          <motion.h2
            variants={fadeInFromBottom}
            className="text-2xl md:text-3xl font-bold mb-4 font-['Source_Serif_4']"
          >
            Ready to Experience the Future of Herbal Diabetes Care?
          </motion.h2>
          <motion.p
            variants={fadeInFromBottom}
            className="mb-8 text-lg max-w-2xl mx-auto"
          >
            Join our community or speak to our experts to learn how AyurHelix
            can transform your approach to diabetes management.
          </motion.p>
          <motion.div variants={fadeInFromBottom}>
            <Link
              to="/contact"
              className="inline-block bg-white text-[#588157] font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-[#F4F1DE] hover:text-[#3A5A40] transition-transform transform hover:scale-105"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default Home;

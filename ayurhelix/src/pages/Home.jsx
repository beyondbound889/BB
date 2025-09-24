import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Timeline from "../components/Timeline";
import Risks from "../components/Risks";
import { Helmet } from '@dr.pogodin/react-helmet';
// Animation variants
const drug = {
  name: "DrugA",
  description: "Used for treating condition X.",
  sideEffects: ["Nausea", "Dizziness", "Headache"],
};

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
      <Helmet>
        <title>Welcome to Beyond Bound</title>
        <meta name="description" content="Ayurvedic solutions for diabetes" />
      </Helmet>
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
          className="relative container mx-auto px-6 py-16 my-20 md:py-20 text-center flex flex-col items-center justify-center"
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
            className="mt-4 text-xl font-bold md:text-xl text-[#3A5A40] max-w-3xl mx-auto font-medium"
          >
            Combining the timeless wisdom of Ayurveda with trusted quality and
            modern science to help people live healthier every day
          </motion.p>
        </div>
      </motion.section>
      {/* Problem Section */}
      <motion.section
        className="py-12 md:py-20 bg-white overflow-hidden px-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <h1 className="text-[#216041] text-xl">Focus</h1>
        <div className="flex justify-between">
          <div className="w-3/5">
            <h1 className="text-4xl">Advancing holistic diabetic care by seamlessly integrating ancient Ayurvedic wisdom with cutting-edge clinical science, creating fast, safe, and natural solutions</h1>
            <h1 className="text-base opacity-70 mt-4">
              We develop and deliver innovative, clinically backed Ayurvedic solutions that effectively manage diabetes while promoting holistic well-being. By combining timeless natural wisdom with rigorous scientific validation, we create safer, faster-acting alternatives that empower patients on their journey to better health and vitality
            </h1>
          </div>
          <div className="flex hover:underline text-[#588157] font-bold items-center text-2xl">
            <Link to="/innovation">Explore our Innovations</Link>
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <Timeline />
      <Risks/>
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
              to="https://www.linkedin.com/in/priyanshu-chauhan-963981212/"
              className="inline-block bg-[#dec493] text-[#216041] font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-[#F4F1DE] hover:text-[#3A5A40] transition-transform transform hover:scale-105"
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

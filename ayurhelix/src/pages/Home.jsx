import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Timeline from "../components/Timeline";
import Risks from "../components/Risks";
import Marquee from "react-fast-marquee";
import MythFacts from "../components/MythFacts";
import { Helmet } from "@dr.pogodin/react-helmet";
// Animation variants
const validation = [
  {
    img: "/assets/Ayush.svg",
  },
  {
    img: "/assets/gmo.png",
  },
  {
    img: "/assets/Haccp.svg",
  },
  {
    img: "/assets/ISO.svg",
  },
  {
    img: "/assets/nap.svg",
  },
  {
    img: "/assets/WHO.svg",
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

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80"; // Replace with your own image

const Home = () => {
  const [num, setNum] = useState(100015120.0);
  useEffect(() => {
    const interval = setInterval(() => {
      setNum((prev) => prev + 0.2);
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <div className="bg-white">
      <Helmet>
        <title>Welcome to Beyond Bound</title>
        <meta name="description" content="Ayurvedic solutions for diabetes" />
        <meta name="keywords" content="Allopathy, Alloathy Side-Effects, Slow Ayurveda"></meta>
      </Helmet>
      {/* Hero Section */}
      <motion.section
        className="relative bg-[#fff7e2] overflow-hidden min-h-[60vh]"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Hero background video */}
        <video
          src="/assets/test.mp4"
          autoPlay
          muted
          loop
          controls
          className="absolute inset-0 w-full h-full object-cover z-0"
        >
          Your browser does not support the video tag.
        </video>

        {/* Overlay content container */}
        <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6 md:p-12 max-w-screen-xl mx-auto">
          {/* Left Info Box */}
          <div className="bg-white/20 backdrop-blur-sm p-6 rounded-xl shadow-md md:w-1/3 w-1/2 text-black">
            <h1 className="font-bold text-sm md:text-3xl">
              Say goodbye to harmful side effects from diabetes medications
            </h1>
          </div>

          {/* Right Info Box */}
          <div className="bg-white/20 backdrop-blur-sm p-4 rounded-xl shadow-md md:w-1/5 w-1/2 text-black self-end md:self-center mt-40 md:mt-0">
            <h2 className="text-sm md:text-lg font-semibold">INDIA</h2>
            <h1 className="font-bold text-sm md:text-xl">
              Diabetes Patients 
            </h1>
            <h1 className="text-sm md:text-xl text-red-800 text-bold">
              {num.toFixed(2)}
            </h1>
          </div>
        </div>
      </motion.section>

      {/* Differentiators */}
      <div className="bg-white pt-2 md:my-6">
        <Marquee gradient={false} speed={80} className="text-white py-4">
          {validation.map((item, index) => (
            <img
              src={item.img}
              alt="Validation logos"
              className="h-20 md:h-30 lg:mx-20 mx-10"
              key={index}
            />
          ))}
        </Marquee>
      </div>
      {/* Problem Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative flex justify-around items-center p-1 md:px-10 max-w-full "
      >
        {/* Left Content */}

        <div className="relative gap-6">
          {/* Glowing Background */}
          <motion.img
            src="/assets/Product.png"
            alt="Glycomics Product"
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative z-10 mx-auto w-full w-[40vw] md:w-[20vw] drop-shadow-2xl"
          />
        </div>
        {/* Right Content - Product Image */}
        <div className="w-2/3 ml-5">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-500 to-green-600 bg-clip-text text-[#216041] mt-6 md:mb-6"
          >
            Introducing Glycomics
          </motion.h3>
          <p className="text-md md:text-2xl text-gray-500 italic">
            Experience the fast-acting power of science with the safety of Ayurveda. Glycomics is your clinically-proven, herbal solution to manage sugar levels without compromise. Heal with nature, backed by science
          </p>
          <motion.div className="text-center" variants={fadeInFromBottom}>
            <Link
              to="/innovation"
              className="w-3/4 md:w-full lg:w-auto inline-block bg-[#395c37] text-white font-bold py-0.5 md:py-3 px-3 md:px-8 rounded-full text-sm md:text-lg shadow-lg hover:bg-[#F4F1DE] hover:text-[#3A5A40] transition-transform transform hover:scale-105 my-2 md:my-10 item-center"
            >
              Know More
            </Link>
          </motion.div>
        </div>
      </motion.div>
      <MythFacts />
      {/* Timeline Section */}
      <Timeline />
      <Risks />
    </div>
  );
};

export default Home;

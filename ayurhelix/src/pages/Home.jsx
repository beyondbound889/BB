import {useState, useEffect} from 'react'
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
  const [num, setNum]=useState(100015120.0)
  useEffect(()=>{
    const interval=setInterval(()=>{
      setNum((prev)=>prev+0.2);
    },1000)
    return ()=>clearInterval(interval);
  })
  return (
    <div className="bg-white">
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
        style={{ minHeight: "50vh" }}
      >
        {/* Hero Image */}
        <video src="/assets/test.mp4" style={{zIndex:0}} controls autoplay muted loop className="absolute h-100 w-full">
          Your browser does not support the video tag.
        </video>
        <div className='flex justify-between'>
          <div className="z-2 relative bg-white/20 p-4 shadow-md rounded-xl md:w-1/5 w-full mx-4 justify-center mt-20">
          <h1 className="text-xl md:text-3xl text-black font-bold">Say goodbye to harmful side effects from diabetes medications</h1>
        </div>
        <div className="z-4 relative bg-white/20 p-4 shadow-md rounded-xl md:w-1/5 w-full mx-4 justify-center right-0 mt-40">
          <h1 className='mt-2 text-black'>INDIA</h1>
          <h1 className="mb-4 text-xl md:text-3xl text-black font-bold">Diabeties Paitients {num.toFixed(2)}</h1>
        </div>
        </div>
      </motion.section>
      {/* Differentiators */}
      <div className="bg-white p-6">
        <Marquee gradient={false} speed={80} className="text-white py-4">
          {validation.map((item, index) => (
            <img
              src={item.img}
              alt="Validation logos"
              className="h-20 md:h-40 lg:mx-20 mx-10"
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
        className="relative flex flex-col lg:flex-row justify-around items-center bg-white/80 backdrop-blur-md p-10 max-w-full overflow-hidden"
      >
        {/* Left Content */}

        <div className="relative">
          {/* Glowing Background */}
          <div className="absolute bg-white" />
          <motion.img
            src="/assets/Product.png"
            alt="Glycomics Product"
            whileHover={{ scale: 1.08, rotate: 2 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="relative z-10 mx-auto w-full w-[60vw] drop-shadow-2xl"
          />
        </div>
        {/* Right Content - Product Image */}
        <div className="max-w-md">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-yellow-500 to-green-600 bg-clip-text text-[#216041] my-6"
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
          <motion.div className="text-center" variants={fadeInFromBottom}>
            <Link
              to="/innovation"
              className="w-full lg:w-auto inline-block bg-[#395c37] text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg hover:bg-[#F4F1DE] hover:text-[#3A5A40] transition-transform transform hover:scale-105 my-6 item-center"
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

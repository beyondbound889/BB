import React from "react";
import { motion } from "framer-motion";
const About = () => {
  const cardVariants = {
    offscreen: {
      opacity: 0,
      scale: 0.8,
      y: 50,
    },
    onscreen: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 0.8,
      },
    },
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-white py-20 px-6 mx-auto text-center space-y-8">
        <img
          src="/assets/12.png"
          alt="logo"
          className="h-40 w-40 rounded-full shadow-lg shadow-[#dec493] object-cover"
        />
        <div>
          <h1 className="text-4xl font-extrabold text-[#216041] mb-4">
            Heal with Nature
          </h1>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Mission:{" "}
            <span className="font-normal">
              To transform lives naturally through the power of Ayurveda
            </span>
          </h2>
          <h2 className="text-lg font-semibold text-gray-700">
            Vision:{" "}
            <span className="font-normal">
              Combining the timeless wisdom of Ayurveda with trusted quality and
              modern science to help people live healthier every day
            </span>
          </h2>
        </div>
      </section>

      <section className="bg-[#dec493] py-20">
        <h1 className="flex justify-center text-5xl font-bold text-[#216041]">
          Team
        </h1>
        <div className="container mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-12 px-6 justify-around">
          <motion.div
            className="flex flex-col items-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <img
              src="/assets/PC.png"
              alt="CEO"
              className="h-96 w-72 object-cover rounded-lg shadow-lg"
            />
            <h3 className="mt-4 text-2xl font-bold text-center">CEO</h3>
            <p className="mt-2 text-center max-w-xs">
              Visionary leader driving innovation and growth.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-col items-center"
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8 }}
            variants={cardVariants}
          >
            <img
              src="/assets/PC.png"
              alt="Co-Founder"
              className="h-96 w-72 object-cover rounded-lg shadow-lg"
            />
            <h3 className="mt-4 text-2xl font-bold text-center">Co-Founder</h3>
            <p className="mt-2 text-center max-w-xs">
              Passionate about creating impactful solutions.
            </p>
          </motion.div>
        </div>
      </section>
      <section className="bg-white py-20 px-6">
         <h1 className="flex justify-center text-5xl font-bold text-[#216041]">
          About Ayurhelix
        </h1>
        <p className="mt-8 max-w-5xl mx-auto text-gray-700 text-lg leading-relaxed">
          Ayurhelix, operated by Beyond Bound, is committed to transforming lives naturally through Ayurveda. Our flagship product, Glycomics, is a patented formula born from blending ancient Ayurvedic wisdom with modern science.

We aim to offer safe, effective alternatives that address the side effects caused by allopathic medicines. By combining the fast action of allopathy with the gentle safety of Ayurveda, we create products designed for today’s health challenges without compromise.

Our mission is to harness the healing power of nature to promote wellness and improve quality of life. At Ayurhelix, we believe in holistic health that restores balance naturally and sustainably.

Our vision is to unite time-tested Ayurvedic principles with scientific rigor, helping people live healthier every day.

Ayurhelix stands as a bridge between traditional healing and modern innovation, offering wellness solutions that are both quick and safe. Join us on a journey of natural healing and renewed vitality.
        </p>
      </section>
    </>
  );
};

export default About;

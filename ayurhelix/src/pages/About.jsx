import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "@dr.pogodin/react-helmet";
import BrandValues from "../components/BrandValues";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top of the page
  }, []);
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
      <Helmet>
        <title>About Beyond Bound</title>
        <meta name="description" content="Beyond Bound Info" />
        <meta name="keywords" content="Ayurveda, Beyond Bound, Team"></meta>
      </Helmet>
      <section className="flex flex-col items-center justify-center py-20 px-6 mx-auto text-center space-y-8">
        <img
          src="https://res.cloudinary.com/dmvolzsaz/image/upload/v1758644988/12_dw3qfa.png"
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
      <section className="bg-white py-20 px-6">
        <h1 className="flex justify-center text-5xl font-bold text-[#216041]">
          About Beyond Bound
        </h1>
        <p className="mt-8 max-w-5xl mx-auto text-gray-700 text-lg leading-relaxed">
          Beyond Bound, officially registered as Ayurhelix Pvt Ltd, began its
          journey in November 2023 with a single, heartfelt dream to bring true
          innovation to Ayurveda. This vision was not born in a boardroom, but
          in the quiet moments of witnessing a loved one’s struggle. Inspired by
          the pain and resilience of his grandmother, Founder Priyanshu Chauhan
          set out to bridge the gap between ancient wisdom and modern science,
          determined to create solutions that could offer real hope and
          healing.In August 2025, the venture was formally incorporated as
          Ayurhelix Pvt Ltd, strengthening the foundation of Beyond Bound.
          Today, the company is committed to developing clinically validated,
          safe, and effective Ayurvedic formulations that have the potential to
          transform healthcare. Led by two directors, Ayurhelix stands united by
          a shared passion for impact, innovation, and well-being.
        </p>
      </section>
      <BrandValues/>
      <section className="bg-white py-20">
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
              src="/assets/Priyanshu.png"
              alt="CEO"
              className="h-96 w-100 object-cover rounded-lg shadow-lg bg-[#dec493]"
              style={{ borderRadius: "50%" }}
            />
            <h1 className="mt-6 text-3xl font-bold text-center text-[#216041]">
              Priyanshu Chauhan
            </h1>
            <h3 className="text-2xl text-center text-[#216041]">
              Director & Founder
            </h3>
            <p className="mt-2 text-center max-w-xs text-[#216041]">
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
              src="/assets/Ramani.png"
              alt="Co-Founder"
              className="h-96 w-100 object-cover shadow-lg bg-[#dec493]"
              style={{ borderRadius: "50%" }}
            />
            <h3 className="mt-6 text-3xl font-bold text-center text-[#216041]">
              Dr. Meet Ramani
            </h3>
            <h3 className="text-2xl text-center text-[#216041]">R&D Head</h3>
            <p className="mt-2 text-center max-w-xs text-[#216041]">
              Passionate about creating impactful solutions.
            </p>
          </motion.div>
        </div>

      </section>
    </>
  );
};

export default About;
// 🏢 Official Company Details

// 	•	Date of Origin: November 2023 (as Beyond Bound), Incorporated August 2025
// 	•	Registered Office:
// Moh. Natha Singh, Maharana Pratap Colony,
// Jaspur, Udham Singh Nagar, Uttarakhand – 244712
// 	•	Communication Office:
// BioRiidl, Somaiya Vidya Vihar,
// Ghatkopar, Mumbai – 400077

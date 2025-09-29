import React from "react";
import { motion } from "framer-motion";
import { Helmet } from '@dr.pogodin/react-helmet';
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
      <Helmet>
        <title>About Beyond Bound</title>
        <meta name="description" content="Beyond Bound Info" />
        <meta name="keywords" content="Ayurveda, Beyond Bound, Team"></meta>
      </Helmet>
      <section className="bg-[#dec493] flex flex-col items-center justify-center py-20 px-6 mx-auto text-center space-y-8">
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
          About Ayurhelix
        </h1>
        <p className="mt-8 max-w-5xl mx-auto text-gray-700 text-lg leading-relaxed">
          Ayurhelix Pvt Ltd, officially registered in August 2025, began its
          journey as Beyond Bound in November 2023 with a single dream to
          bring innovation into Ayurveda. This vision was deeply personal.
          Inspired by the pain and struggles faced by his grandmother, Founder
          Priyanshu Chauhan established the venture in 2023 to create solutions
          that blend the ancient wisdom of Ayurveda with modern scientific
          innovation. Today, Ayurhelix Pvt Ltd is committed to developing
          clinically validated, safe, and effective Ayurvedic formulations that
          can transform healthcare. The company is led by two directors, united
          by a shared passion for impact, innovation, and well-being
        </p>
      </section>
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
              style={{borderRadius:"50%"}}
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
              style={{borderRadius:"50%"}}
            />
             <h3 className="mt-6 text-3xl font-bold text-center text-[#216041]">
              Dr. Meet Ramani
            </h3>
            <h3 className="text-2xl text-center text-[#216041]">
              R&D Head
            </h3>
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

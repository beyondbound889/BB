import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="bg-[#fdfdfc] text-gray-800 py-20 px-6 sm:px-12">
      {/* Brand Story */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h2 className="text-4xl font-bold text-[#3b3b3b] mb-6">Our Story</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          “It began with a chair in the corner, where my grandmother sat—strong, but challenged by diabetes.
          Modern medicines relieved her sugar but cost her strength. When healing led to harm, a deeper purpose ignited:
          Why can’t medicine feel like care instead of control?”
        </p>
      </motion.div>

      {/* Vision & Mission */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto mb-20"
      >
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-black mb-2">Vision</h3>
          <p className="text-gray-700 text-sm">
            Transform lives naturally through the power of Ayurveda.
          </p>
        </div>
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-black mb-2">Mission</h3>
          <p className="text-gray-700 text-sm">
            Combining timeless Ayurvedic wisdom with trusted quality and modern science, to help people live healthier every day.
          </p>
        </div>
      </motion.div>

      {/* Team Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto mb-20"
      >
        <h3 className="text-2xl font-bold text-[#2f2f2f] mb-6 text-center">Meet the Team</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
            <h4 className="text-lg font-semibold text-gray-800">Priyanshu Chauhan</h4>
            <p className="text-sm text-gray-600">Founder & CEO</p>
          </div>
          <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm text-center">
            <h4 className="text-lg font-semibold text-gray-800">Dr. Meet Ramani</h4>
            <p className="text-sm text-gray-600">R&D Advisor</p>
          </div>
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-[#fefefe] border border-[#dec493] rounded-xl p-8 shadow-md max-w-3xl mx-auto text-center"
      >
        <h3 className="text-xl font-bold text-black mb-4">Why Choose Us</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
          <li>Trusted, evidence-based innovation</li>
          <li>Ethical, patient-focused approach</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default About;
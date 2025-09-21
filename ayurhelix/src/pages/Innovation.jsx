import React from 'react';
import { motion } from 'framer-motion';

const ingredients = [
  { name: 'Berberine', benefit: 'Reduces plasma glucose, improves lipid control, supports diabetic complications.' },
  { name: 'Gudmar', benefit: 'Enhances insulin production, effective for both Type 1 & Type 2 diabetes.' },
  { name: 'Karela', benefit: 'Contains charantin and momordicin, acts as a hypoglycemic agent.' },
  { name: 'Vijaysar', benefit: 'Protects pancreatic cells, promotes insulin secretion via antioxidants.' },
  { name: 'Jambu Seed', benefit: 'Improves insulin sensitivity, reduces sugar absorption.' },
  { name: 'Turmeric', benefit: 'Curcumin lowers blood sugar and inflammation, supports chronic care.' },
  { name: 'Amalaki', benefit: 'Prevents glucose spikes, boosts metabolism, protects heart health.' },
];

const Innovation = () => {
  return (
    <section className="bg-[#dec493] text-gray-800 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl font-bold text-[#3b3b3b]">Innovation Without Compromise</h2>
        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
          “Diabetes care comes with a bitter choice: Fast but risky allopathy, or safe but slow Ayurveda.
          Why should healing come with harm or compromise?”
        </p>
      </motion.div>

      {/* Glycomics Solution */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
        className="bg-white shadow-md p-8 max-w-full mb-16"
      >
        <h3 className="text-2xl font-semibold text-[#2f2f2f] mb-4">Introducing Glycomics</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>As effective and fast as allopathy</li>
          <li>As safe and natural as Ayurveda</li>
          <li>Doctor-formulated, evidence-backed</li>
          <li>No known side effects</li>
          <li>Proprietary formulation under Patent Application No-202511061644</li>
        </ul>
        <p className="mt-4 text-sm text-gray-500">Dosage: Twice a day before meals</p>
      </motion.div>

      {/* Ingredient Highlights */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
        {ingredients.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm"
          >
            <h4 className="text-lg font-bold text-[#4b4b4b] mb-2">{item.name}</h4>
            <p className="text-gray-600 text-sm">{item.benefit}</p>
          </motion.div>
        ))}
      </div>

      {/* Differentiators */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <h3 className="text-2xl font-semibold text-[#2f2f2f] mb-4">How We’re Different</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2 text-left">
          <li>No tradeoff between safety and speed</li>
          <li>Backed by traditional wisdom and clinical science</li>
          <li>No compromise on taste, portability, or user experience</li>
        </ul>
      </motion.div>

      {/* Did You Know Section */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
        className="bg-[#fefefe] border border-pink-100 rounded-xl p-8 shadow-md max-w-3xl mx-auto"
      >
        <h3 className="text-xl font-bold text-black mb-4">Did You Know?</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>Berberine activates AMPK — the same pathway targeted by metformin, but naturally.</li>
          <li>Gudmar’s gymnemic acids can reduce sugar cravings by blocking sweet receptors on the tongue.</li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Innovation;
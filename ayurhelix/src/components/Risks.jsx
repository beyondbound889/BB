import React from 'react';
import { motion } from 'framer-motion';

// --- Data for the medication cards ---
const drugClasses = [
    {
      class: "Biguanides",
      examples: ["Metformin"],
      pancreatitisRisk: "Low Risk",
      kidneyImpact: "High Risk",
      heartRisk: "Safe",
      reference: "https://pubmed.ncbi.nlm.nih.gov/26880410/"
    },
    {
      class: "DPP-4 Inhibitors",
      examples: ["Sitagliptin", "Linagliptin", "Saxagliptin"],
      pancreatitisRisk: "High Risk",
      kidneyImpact: "Safer for kidneys",
      heartRisk: "High Risk",
      reference: "https://www.nejm.org/doi/full/10.1056/NEJMoa1307684"
    },
    {
      class: "SGLT2 Inhibitors",
      examples: ["Canagliflozin", "Dapagliflozin", "Empagliflozin"],
      pancreatitisRisk: "High Risk",
      kidneyImpact: "Kidney protective",
      heartRisk: "Heart protective",
      reference: "https://www.nejm.org/doi/full/10.1056/NEJMoa1811744"
    },
    {
      class: "Sulfonylureas",
      examples: ["Glimepiride", "Glibenclamide", "Gliclazide"],
      pancreatitisRisk: "No Risk",
      kidneyImpact: "No Direct Impact",
      heartRisk: "High Risk",
      reference: "https://care.diabetesjournals.org/content/40/5/706"
    },
    {
      class: "Thiazolidinediones (TZD)",
      examples: ["Pioglitazone", "Rosiglitazone"],
      pancreatitisRisk: "No Risk",
      kidneyImpact: "Moderate Risk",
      heartRisk: "High Heart Failure Risk",
      reference: "https://www.sciencedirect.com/science/article/abs/pii/S0168822718302086"
    },
    {
      class: "GLP-1 Receptor Agonists",
      examples: ["Liraglutide", "Dulaglutide", "Semaglutide"],
      pancreatitisRisk: "High Risk",
      kidneyImpact: "Kidney Protective",
      heartRisk: "Heart Protective",
      reference: "https://onlinelibrary.wiley.com/doi/full/10.1002/dmrr.2835"
    },
];

// --- Helper function to determine color based on risk level ---
const getRiskColor = (risk) => {
    const riskLevel = risk.toLowerCase();
    if (riskLevel.includes('high') || riskLevel.includes('attack')) return 'text-red-600 bg-red-100';
    if (riskLevel.includes('moderate') || riskLevel.includes('ckd risk')) return 'text-yellow-600 bg-yellow-100';
    if (riskLevel.includes('low')) return 'text-blue-600 bg-blue-100';
    if (riskLevel.includes('safe') || riskLevel.includes('protective') || riskLevel.includes('no risk') || riskLevel.includes('no direct impact')) return 'text-green-600 bg-green-100';
    return 'text-gray-600 bg-gray-100';
};

// --- A single, reusable Medication Card Component ---
const MedicationCard = ({ med }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full border border-gray-200"
    >
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800">{med.class}</h3>
        <p className="text-sm text-gray-500 mt-1">Examples: {med.examples.join(', ')}</p>
      </div>

      <div className="px-6 pb-6 space-y-4 flex-grow">
        <div className="flex items-center">
          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getRiskColor(med.pancreatitisRisk)}`}>
            Pancreas: {med.pancreatitisRisk}
          </span>
        </div>
        <div className="flex items-center">
          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getRiskColor(med.kidneyImpact)}`}>
            Kidney: {med.kidneyImpact}
          </span>
        </div>
        <div className="flex items-center">
          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${getRiskColor(med.heartRisk)}`}>
            Heart: {med.heartRisk}
          </span>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 mt-auto">
        <a
          href={med.reference}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 text-sm font-semibold hover:underline flex items-center justify-center"
        >
          View Supporting Article
          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
        </a>
      </div>
    </motion.div>
  );
};


// --- The Main Component that renders all the cards ---
export default function Risks() {
  return (
    <div className="px-4 py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                Diabetes Medication & Side Effects
            </h2>
            <p className="mt-4 text-lg text-gray-600">
                An interactive overview of common drug classes and their impact.
            </p>
        </div>

        {/* --- THIS IS THE KEY TO RESPONSIVENESS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {drugClasses.map((med) => (
            <MedicationCard key={med.class} med={med} />
          ))}
        </div>
      </div>
    </div>
  );
}
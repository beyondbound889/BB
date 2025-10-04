import React from "react";
import HoverCard from "./util/HoverCard";
import { 
  FaMortarPestle, 
  FaLeaf, 
  FaCapsules, 
  FaDna, 
  FaHeartbeat, 
  FaAtom // Corrected Icon
} from 'react-icons/fa';
import { FiArrowRight } from "react-icons/fi";
// --- Data for the myths and facts ---
const mythFactData = [
  {
    myth: "Ayurvedic medicines are slow and cannot replace allopathy",
    fact: "Glycomics: fast, proven, safe alternative to Metformin 500 mg",
    mythIcon: <FaMortarPestle size={28} color="#395c37"/>,
    factIcon: <FaAtom size={32} color="#dec493"/>, // <-- REPLACED ICON HERE
    mythColor: "bg-[#dec493]",
    factColor: "bg-[#395c37]",
  },
  {
    myth: "Ayurveda lacks scientific validation.",
    fact: "Clinically proven & IPR-protected, uniting Ayurveda with modern science",
    mythIcon: <FaLeaf size={28} color="#395c37"/>,
    factIcon: <FaDna size={28} color="#dec493"/>,
    mythColor: "bg-[#dec493]",
    factColor: "bg-[#395c37]",
  },
  {
    myth: "Ayurvedic products are just supplements.",
    fact: "Beyond Bound creates therapeutic medicines to meet real diabetic needs",
    mythIcon: <FaCapsules size={28} color="#395c37"/>,
    factIcon: <FaHeartbeat size={30} color="#dec493"/>,
    mythColor: "bg-[#dec493]",
    factColor: "bg-[#395c37]",
  }
];
const MythFactCard = ({ item }) => {
  return (
    <div className="relative flex items-stretch w-full max-w-lg mx-auto h-40 shadow-lg rounded-xl">
      {/* Myth Block */}
      <div
        className={`w-3/7 ${item.mythColor} p-4 rounded-l-xl flex items-center`}
        style={{
          clipPath: "polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%)",
        }}
      >
        <div className="flex items-center space-x-3 text-white">
          <div className="flex-shrink-0">{item.mythIcon}</div>
          <p className="font-bold text-[#395c37] text-sm font-medium">{item.myth}</p>
        </div>
      </div>

      {/* Arrow in the Center */}
      <div className="absolute z-10 top-1/2 left-3/7 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white rounded-full p-2 shadow-md">
          <FiArrowRight className="text-gray-800" size={20} />
        </div>
      </div>

      {/* Fact Block */}
      <div
        className={`w-4/7 ${item.factColor} p-4 rounded-r-xl flex items-center justify-end text-right`}
        style={{
          clipPath: "polygon(10% 0%, 100% 0%, 100% 100%, 10% 100%, 0% 50%)",
        }}
      >
        <div className="flex items-center space-x-3 text-white pl-6">
          <p className="font-bold text-[#dec493] text-sm font-medium">{item.fact}</p>
          <div className="flex-shrink-0">{item.factIcon}</div>
        </div>
      </div>
    </div>
  );
};

// --- The Main Component ---
export default function MythsFacts() {
  return (
    <section className="bg-white md:py-16 px-4 sm:px-6 lg:px-8 mt-10 md:mt-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[#395c37] sm:text-4xl">
            <span className="text-[#dec493]">Myths v</span>/s Facts
          </h2>
          <p className="mt-1 text-md md:text-lg text-slate-600">
           Bursting misconceptions and revealing the truth about our innovative Ayurvedic solutions
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {mythFactData.map((item, index) => (
            <div key={index} className="md:flex space-y-6">
              {/* Myth Card */}
              <div className="flex items-start mx-2">
                <HoverCard
                  frontContent={"Myth"}
                  backContent={item.myth}
                  color="bg-[#dec493]"
                />
              </div>
            </div>
          ))}
          {mythFactData.map((item, index) => (
            <div key={index} className="md:flex space-y-6">
              {/* Fact Card */}
              <div className="flex items-start space-x-4">
                <HoverCard
                  frontContent={"Fact"}
                  backContent={item.fact}
                  color="bg-[#395c37]"
                />
              </div>
            </div>
          ))}
        </div>
        <div className="md:hidden grid grid-cols-1 md:grid-cols-3 gap-8">
          {mythFactData.map((item, index) => (
                <MythFactCard key={index} item={item} />
              ))}
        </div>
      </div>
    </section>
  );
}

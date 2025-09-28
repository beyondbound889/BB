import React from 'react';
import HoverCard from '../components/HoverCard'
// --- Data for the myths and facts ---
const mythFactData = [
  {
    myth: "Ayurvedic medicines are slow and cannot replace allopathy",
    fact: "Glycomics: fast, proven, safe alternative to Metformin 500 mg"
  },
  {
    myth: "Ayurveda lacks scientific validation.",
    fact: "Clinically proven & IPR-protected, uniting Ayurveda with modern science"
  },
  {
    myth: "Ayurvedic products are just supplements.",
    fact: "Beyond Bound creates therapeutic medicines to meet real diabetic needs"
  }
];


// --- The Main Component ---
export default function MythsFacts() {
  return (
    <section className="bg-white md:py-16 px-4 sm:px-6 lg:px-8 mt-10 md:mt-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-md md:text-3xl font-bold text-[#395c37] sm:text-4xl">
            Myths vs Facts
          </h2>
          <p className="mt-4 text-xs md:text-lg text-slate-600">
            Separating misconceptions from the truth about our innovative Ayurvedic solutions.
          </p>
        </div>

        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {mythFactData.map((item, index) => (
            <div key={index} className="md:flex space-y-6">
              {/* Myth Card */}
                <div className="flex items-start mx-2">
                  <HoverCard frontContent={"Myth"} backContent={item.myth} color="bg-[#dec493]"/>
                </div>
            </div>
          ))}
          {mythFactData.map((item, index) => (
            <div key={index} className="md:flex space-y-6">
              {/* Fact Card */}
                <div className="flex items-start space-x-4">
                  <HoverCard frontContent={"Fact"} backContent={item.fact} color="bg-[#395c37]"/>
                </div>
            </div>
          ))}
        </div>
        <div className="md:hidden grid grid-cols-1 md:grid-cols-3 gap-8">
          {mythFactData.map((item, index) => (
            <div key={index} className="flex justify-around mx-2">
              {/* Myth Card */}
                <div className="w-1/2 md:w-full flex items-start space-x-4">
                  <HoverCard height={"h-30"} frontContent={"Myth"} backContent={item.myth} color="bg-[#dec493]"/>
                </div>
              {/* Fact Card */}
                <div className="w-1/2 md:w-full flex items-start space-x-4 ml-2">
                  <HoverCard height={"h-30"} frontContent={"Fact"} backContent={item.fact} color="bg-[#395c37]"/>
                </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
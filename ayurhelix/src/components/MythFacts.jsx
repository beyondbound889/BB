import React from 'react';

// --- Data for the myths and facts ---
const mythFactData = [
  {
    myth: "Ayurvedic medicines are always slow to act.",
    fact: "With Glycomics innovation, our formulations deliver fast, clinically validated results, comparable to allopathy—without harmful side effects."
  },
  {
    myth: "Ayurveda lacks scientific validation.",
    fact: "Our solution is clinically proven and IPR-protected, combining the wisdom of Ayurveda with modern science."
  },
  {
    myth: "Natural medicines can’t replace allopathic drugs.",
    fact: "Our formulation shows allopathy-level efficacy and potential to replace Metformin 500 mg safely."
  },
  {
    myth: "Ayurvedic products are just supplements.",
    fact: "Beyond Bound is building therapeutic medicines, not just supplements—designed to address the real medical needs of diabetics."
  }
];

// --- Icon Components for visual flair ---
const MythIcon = () => (
  <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
  </svg>
);

const FactIcon = () => (
  <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);


// --- The Main Component ---
export default function MythsFacts() {
  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#395c37] sm:text-4xl">
            Myths vs. Facts
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Separating misconceptions from the truth about our innovative Ayurvedic solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {mythFactData.map((item, index) => (
            <div key={index} className="md:flex space-y-6">
              {/* Myth Card */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-red-400 transform hover:-translate-y-1 transition-transform duration-300 md:w-1/2">
                <div className="flex items-start space-x-4">
                  <MythIcon />
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">Myth</h3>
                    <p className="mt-1 text-slate-600">{item.myth}</p>
                  </div>
                </div>
              </div>

              {/* Fact Card */}
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-green-500 transform hover:-translate-y-1 transition-transform duration-300 md:w-1/2 ml-5">
                <div className="flex items-start space-x-4">
                  <FactIcon />
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">Fact</h3>
                    <p className="mt-1 text-slate-600">{item.fact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
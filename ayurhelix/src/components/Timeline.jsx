import React, { useState, useRef, useLayoutEffect } from 'react';

// --- Data for the roadmap (images removed for a compact card design) ---
const roadmapData = [
  { step: "Nov 2023 - Dec 2023", title: "Firm Formation", subtitle: "Beyond Bound" },
  { step: "Dec 2023 - May 2024", title: "R&D Kickoff", subtitle: "Journey Begins" },
  { step: "June 2024 - Sept 2024", title: "Formulation Development", subtitle: "Something Brewing" },
  { step: "Oct 2024 – April 2025", title: "Final Formulation Stage", subtitle: "Medical Trials" },
  { step: "May 2025 - June 2025", title: "Strategic Partnership", subtitle: "Pharma Network" },
  { step: "June 2025 - Aug 2025", title: "Product Certification", subtitle: "Market Ready" },
  { step: "Aug 2025", title: "Official Incorporation", subtitle: "Registration" },
  // Add more milestones if needed
];

// --- Desktop Component with the 3D scroll effect ---
const DesktopRoadmap = () => {
  const scrollContainerRef = useRef(null);
  const cardRefs = useRef([]);
  const [cardStyles, setCardStyles] = useState([]);

  // This function calculates the style for each card based on scroll position
  const calculateStyles = () => {
    if (!scrollContainerRef.current) return;

    const container = scrollContainerRef.current;
    const viewportCenter = container.scrollLeft + container.clientWidth / 2;

    const newStyles = cardRefs.current.map((card) => {
      if (!card) return {};
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(viewportCenter - cardCenter);
      
      // The further the card, the smaller and more transparent it gets
      const scale = Math.max(0.7, 1 - distance / container.clientWidth);
      const opacity = Math.max(0.3, 1 - distance / (container.clientWidth / 1.5));
      // A subtle 3D rotation effect
      const rotation = (cardCenter - viewportCenter) / (container.clientWidth / 2) * -10;

      return {
        transform: `perspective(1000px) rotateY(${rotation}deg) scale(${scale})`,
        opacity,
      };
    });
    setCardStyles(newStyles);
  };

  // Calculate initial styles and add scroll event listener
  useLayoutEffect(() => {
    cardRefs.current = cardRefs.current.slice(0, roadmapData.length);
    calculateStyles();
    
    const container = scrollContainerRef.current;
    container.addEventListener('scroll', calculateStyles);
    return () => container.removeEventListener('scroll', calculateStyles);
  }, []);

  return (
    <div className="relative w-full h-80" style={{ perspective: '1000px' }}>
      <div 
        ref={scrollContainerRef}
        className="w-full h-full overflow-x-auto overflow-y-hidden flex items-center snap-x snap-mandatory scrollbar-hide"
      >
        {/* Horizontal Path */}
        <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-200" style={{ transform: 'translateY(-50%)' }} />

        {/* Padding elements to center the first and last cards */}
        <div className="flex-shrink-0 w-1/2"></div>
        
        <div className="flex items-center justify-start space-x-24 px-12">
          {roadmapData.map((milestone, index) => (
            <div
              key={index}
              ref={el => cardRefs.current[index] = el}
              className={`flex-shrink-0 w-52 h-36 relative transition-transform duration-200 ease-out snap-center
                          ${index % 2 === 0 ? 'mb-24' : 'mt-24'}`} // Alternating position
              style={cardStyles[index]}
            >
              {/* Stem connecting card to the path */}
              <div className={`absolute left-1/2 w-0.5 bg-slate-300
                                ${index % 2 === 0 ? 'h-12 top-full' : 'h-12 bottom-full'}`}
              />
              <div className="bg-white rounded-lg shadow-xl h-full p-4 flex flex-col justify-center border-t-4 border-sky-500">
                <p className="text-xs font-semibold text-slate-500">{milestone.step}</p>
                <h3 className="text-base font-bold text-slate-800">{milestone.title}</h3>
                <p className="text-sm italic text-slate-600">{milestone.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="flex-shrink-0 w-1/2"></div>
      </div>
    </div>
  );
};


// --- Mobile Component (Simple Vertical Timeline) ---
const MobileRoadmap = () => (
  <div className="space-y-8 relative">
    <div className="absolute top-2 left-4 w-0.5 h-full bg-slate-200"></div>
    {roadmapData.map((milestone, index) => (
      <div key={index} className="relative flex items-start pl-12">
        <div className="absolute top-2 left-0 w-8 h-8 rounded-full flex items-center justify-center bg-sky-500">
          <div className="w-3 h-3 bg-white rounded-full"></div>
        </div>
        <div className="p-4 bg-white rounded-lg shadow-lg w-full text-left">
          <p className="text-sm font-semibold text-slate-500">{milestone.step}</p>
          <h3 className="text-lg font-bold text-slate-800">{milestone.title}</h3>
          <p className="text-base italic text-slate-600">{milestone.subtitle}</p>
        </div>
      </div>
    ))}
  </div>
);


// --- Main Exported Component ---
export default function Timeline() {
  return (
    <div className="font-sans w-full mx-auto my-10">
      <div className="text-center mb-12 px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4">Our Roadmap</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">Our journey from an idea to a market-ready product, presented in an interactive timeline.</p>
      </div>

      <div className="hidden md:block">
        <DesktopRoadmap />
      </div>
      <div className="md:hidden px-4">
        <MobileRoadmap />
      </div>
    </div>
  );
}
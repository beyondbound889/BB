import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'; // Using react-icons for arrows

// --- DUMMY DATA ---
// Replace this with your actual image and description data.
const items = [
    {
    title: "Karela",
    description: "Mimics natural insulin action ",
    image: "/assets/Karela.jpeg",
  },
  {
    title: "Vijaysar",
    description: "Provides metabolic protection",
    image: "/assets/vijaysar.jpeg",
  },
  {
    title: "Jambu Seed",
    description: "Supports pancreatic health & β-cell function",
    image: "/assets/Jamun.jpeg",
  },
  {
    title: "Turmeric & Amla",
    description: "Boost berberine bioavailability",
    image: "/assets/tna.jpeg",
  },
  {
    title: "Gudmar",
    description: "Regulates sugar cravings 🍫",
    image: "/assets/gurmar.jpeg",
  },
];


const CircularCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const itemCount = items.length;
  const angle = 360 / itemCount; // Angle between each item

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + itemCount) % itemCount);
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % itemCount);
  };

  // The main rotation of the entire carousel
  const carouselRotation = -activeIndex * angle;

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-[60vh] md:h-screen  text-white overflow-hidden my-5">

      {/* --- CIRCLE CONTAINER --- */}
      {/* This container holds the rotating items */}
      <div
        className="relative w-full h-[300px] md:w-[50vw] md:h-[50vh] transition-transform duration-500 ease-in-out"
        style={{ transform: `rotate(${carouselRotation}deg)` }}
      >
        {/* Map over items to position them in a circle */}
        {items.map((item, index) => {
          // Calculate the rotation for each individual item
          const itemAngle = index * angle;
          return (
            <div
              key={index}
              className="absolute top-0 left-0 w-full h-full flex items-center justify-center"
              style={{
                transform: `rotate(${itemAngle}deg) translateY(-180px) rotate(${-itemAngle}deg)`, // Pushes item out and keeps it upright
                // Adjust translateY value for a larger or smaller circle radius
              }}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`w-24 h-24 md:w-32 md:h-32 rounded-full object-cover shadow-lg transition-all duration-500 ease-in-out bg-black
                  ${activeIndex === index
                    ? 'scale-200 shadow-2xl shadow-cyan-400/50' // Active item is larger and glows
                    : 'scale-75 opacity-50' // Inactive items are smaller and faded
                  }
                `}
                style={{ transform: `rotate(${-carouselRotation}deg)` }} // Counter-rotates the image to keep it upright
              />
            </div>
          );
        })}
      </div>

      {/* --- DESCRIPTION & CONTROLS --- */}
      <div className="absolute bottom-40 md:bottom-50 text-center flex flex-col items-center">
        {/* Description */}
        <div className="w-64 md:w-96 h-24 flex flex-col justify-center items-center">
          <h2 className="text-2xl text-[#216041] md:text-3xl font-bold transition-opacity duration-300">
            {items[activeIndex].title}
          </h2>
          <p className="text-black mt-2 transition-opacity duration-300">
            {items[activeIndex].description}
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="p-3 bg-gray-800/50 rounded-full hover:bg-cyan-500/50 transition-colors"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={handleNext}
            className="p-3 bg-gray-800/50 rounded-full hover:bg-cyan-500/50 transition-colors"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CircularCarousel;
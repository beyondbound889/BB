import React, { useEffect, useState } from 'react';

const useCountUp = (end, duration = 1200) => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const step = () => {
      start += increment;
      if (start < end) {
        setValue(Math.floor(start));
        requestAnimationFrame(step);
      } else {
        setValue(end);
      }
    };
    step();
  }, [end, duration]);

  return value;
};

const StatItem = ({ label, target, suffix = '', fraction = false }) => {
  const displayValue = useCountUp(target, 1400);

  return (
    <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/5 p-3">
      <div className="text-3xl md:text-6xl font-semibold tabular-nums text-[#395c37]">
        {fraction
          ? `${displayValue}`
          : displayValue.toLocaleString()}
        {suffix}
      </div>
      <div className="mt-2 text-sm md:text-base text-center text-[#395c37]">{label}</div>
    </div>
  );
};

const DiabetesStats = () => (
  <div className="bg-[#dec493] py-8 px-2 md:px-10 flex flex-wrap justify-center items-center gap-y-4">
    <StatItem label="Adults at High Risk" target={1} suffix=" in 8" fraction />
    <StatItem label="Annual Diabetes Deaths" target={3.4} suffix='M'/>
    <StatItem label="Type 2 Diabetes Share" target={90} suffix="%" />
    <StatItem label="Higher Heart Failure Risk" target={84} suffix="%" />
    <StatItem label="Projected by 2050" target={853} suffix='M' />
  </div>
);

export default DiabetesStats;

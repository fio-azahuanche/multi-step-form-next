import React, { useState } from 'react';

export const ToggleSwitch = () => {
  const [isMonthly, setIsMonthly] = useState(true);

  const togglePlan = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <div className="flex items-center justify-center p-4 bg-gray-100 rounded-lg max-w-xl w-full">
      <span
        className={`mr-4 ${isMonthly ? 'text-customMarineBlue font-semibold' : 'text-gray-400'}`}
      >
        Monthly
      </span>
      <div
        className={`w-12 h-6 flex items-center bg-customMarineBlue rounded-full p-1 cursor-pointer`}
        onClick={togglePlan}
      >
        <div
          className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${
            isMonthly ? '' : 'translate-x-6'
          }`}
        ></div>
      </div>
      <span
        className={`ml-4 ${!isMonthly ? 'text-customMarineBlue font-semibold' : 'text-gray-400'}`}
      >
        Yearly
      </span>
    </div>
  );
};

import React from 'react';

const ButtonGroup = ({ buttonList }) => {
  return (
    <div className="bg-blue-50 border border-red-300 p-4 rounded-lg shadow-md pb-12">
      {/* Heading */}
      <h2 className="text-lg font-bold pb-2 text-center mt-5 mb-5">Most Preferred Location for Teaching & Education</h2>

      {/* Button Rows */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {buttonList.map((buttonText, index) => (
          <button
            key={index}
            className="rounded-full px-1 py-2 border border-gray-300 bg-white"
          >
            {buttonText}
          </button>
        ))}
      </div>
    </div>
  );
};

export default ButtonGroup;

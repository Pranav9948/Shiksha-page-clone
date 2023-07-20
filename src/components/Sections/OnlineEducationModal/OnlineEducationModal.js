import React, { useState } from 'react';
import ContentModal from './ContentModal';

const OnlineEducationIndia = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const handleReadMoreClick = () => {
    setModalOpen(true);
  };

  return (
    <div className="bg-white mt-8 md:mt-14 mx-4 md:mx-10 mb-4 md:mb-8 md:pb-8 md:rounded-lg md:shadow-md">
      <div className="max-w-3xl mx-auto md:max-w-full text-center md:text-left bg-white px-4 md:px-8 py-8">
        <h3 className="text-xl md:text-2xl font-semibold mb-4 font-arial">Online Teaching & Education Courses and Colleges in India</h3>

        <p className="text-base md:text-m mb-4 font-arial text-gray-800">In India, Teaching & Education is offered by 18 colleges. Out of all these colleges providing Teaching & Education, the split of colleges by ownership is private: 8 & public/government: 4.</p>

        <h5 className="text-lg md:text-m font-semibold   text-gray-400 mb-2">Location wise</h5>
        {/* Add location-wise content here */}
      </div>
      <div className="text-center mt-4 md:mt-0">
        <button className="text-gray-500" onClick={handleReadMoreClick}>
          Read More
        </button>
      </div>
      {modalOpen && <ContentModal onClose={() => setModalOpen(false)} />}
    </div>
  );
};

export default OnlineEducationIndia;

import React from 'react';
import { LuMapPin,LuSave } from "react-icons/lu";

const CardHeader = ({ collegeName, location }) => {
    return (
      <div className="flex items-center justify-between mb-4">
        {/* Left part: College Logo, Name, and Location */}
        <div className="flex items-center space-x-4">
          {/* College Logo (replace 'logoUrl' with the actual URL of the logo image) */}
          <img src="/images/sewa.jpeg" alt="College Logo" className="w-12 h-12 rounded" />
  
          <div>
            {/* College Name */}
            <h2 className="text-lg font-bold font-arial pb-1">{collegeName}</h2>
            {/* College Location */}
            <p className="text-gray-600 flex items-center">
              <span className="pe-1">
                <LuMapPin />
              </span>
              {location}
            </p>
          </div>
        </div>
  
        {/* Right part: Save Button */}
        <button className="px-4 py-2 bg-white text-dark rounded">
          <LuSave />
        </button>
      </div>
    );
  };

export default CardHeader;

import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';

const Sidebar = ({ title, content }) => {
  const showSearchBar = title === "Location" || title === "Specialization";

  return (
    <div className="ps-3 pb-3 pe-3 ms-3">
      {/* Sidebar Heading */}
      <h3 className="text-lg font-semibold mb-4 ">{title}</h3>

      {/* Search Bar (shown for Location and Specialization only) */}
      {showSearchBar && (
        <div className="relative w-full">
          <input
            type="text"
            className="border border-gray-300 rounded-full px-4 py-2 w-full bg-gray-100"
            
          />
          <div className="absolute inset-y-0  left-0 flex items-center pl-3 pointer-events-none">
           <span className='pt-1 font-semibold'> <AiOutlineSearch/></span> 
            <span className="ml-2 text-gray-500">{title}</span>
          </div>
        </div>
      )}

      {/* Locations, Specialization, and Course with light vertical scrollbar */}

      <ul className="mt-5 space-y-3 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-blue-100">
        {content.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <input
              type="checkbox"
              id={`location${index + 1}`}
              className="form-checkbox h-5 w-5 text-blue-500 rounded"
            />
            <label htmlFor={`location${index + 1}`} className="text-gray-700">
              {item}
            </label>
          </li>
        ))}
      </ul>

      {/* Border */}
      <div className="border-b border-gray-300 mb-10 pt-10"></div>
    </div>
  );
};

export default Sidebar;

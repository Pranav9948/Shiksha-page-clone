import React from 'react';
import { BsFilterRight} from "react-icons/bs";

const SmallNavbar = () => {
  return (
    <div className="bg-white py-3 md:block hidden">
      <div className="container mx-auto flex justify-between items-center">


      <button className="rounded-full px-4 py-2 border border-gray-300">
      <BsFilterRight className='font-black'/>
        </button>

        <button className="rounded-full px-4 py-2 border border-gray-300  text-gray-800">
          Location &#x25BE;
        </button>
        <button className="rounded-full px-4 py-2 border border-gray-300 bg-white text-gray-800">
          Course &#x25BE;
        </button>
        <button className="rounded-full px-4 py-2 border border-gray-300 bg-white text-gray-800">
          Total Fees &#x25BE;
        </button>
        <button className="rounded-full px-4 py-2 border border-gray-300 bg-white text-gray-800">
          Specialization &#x25BE;
        </button>
        <button className="rounded-full px-4 py-2 border border-gray-300 bg-white text-gray-800">
          Mode of Study &#x25BE;
        </button>
        
      </div>
    </div>
  );
};

export default SmallNavbar;

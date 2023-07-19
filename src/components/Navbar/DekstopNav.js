import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { MdArrowDropDown } from "react-icons/md";

const DekstopNav = () => {
  return (
    <nav className="bg-navBackgrndColor p-4">
      <div className=" mx-auto flex justify-between items-center">
        {/* Your Logo */}
        <div className="flex items-center space-x-4">
          <img src="/images/logos.png" className=' pt-3 ps-3 w-10' />
           <h4 className="font-bold text-3xl font-arial text-white">shiksha</h4>
        </div>
        
        {/* Search Bar */}
        <div className='flex items-center ms-20'>
          <div className="flex items-center  space-x-2">
            <input
              type="text"
              className="rounded-l-lg py-2 px-4 max-w-full bg-white focus:outline-none  w-[500px]" 
              placeholder="Search colleges, courses, exams, QnA, & Articles"
            />
            <button className="bg-orange-500 py-2 px-10 rounded-r-lg text-white" style={{marginLeft:'-30px'}}>Search</button>
          </div>
        </div>

        {/* Right-Side Query */}
        <div className="text-white flex items-center ps-5 ms-20">
          <AiOutlineWhatsApp className="mr-2 ps-10" />
          Ask a query on <span className='font-bold ps-3'>8826978461</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto ms-56 mt-4 flex justify-between items-center space-x-0">
 <div>
  <a href="#" className="text-white font-bold text-sm flex items-center ms-10">
    MBA <span className='pl-1 text-xl'><MdArrowDropDown /></span>
  </a>
  </div>
  <div>
  <a href="#" className="text-white font-bold text-sm flex items-center -ms-28">
    ENGINEERING <span className='pl-1 text-xl'><MdArrowDropDown /></span>
  </a>

  </div>
  <div>
  <a href="#" className="text-white font-bold text-sm flex items-center -ms-24">
    SCIENCE <span className='pl-1 text-xl'><MdArrowDropDown /></span>
  </a>
  </div>
  <div>
  <a href="#" className="text-white font-bold text-sm flex items-center -ms-24">
    ARTS <span className='pl-1 text-xl'><MdArrowDropDown /></span>
  </a>
  </div>
  <div>
  <a href="#" className="text-white font-bold text-sm flex items-center -ms-32">
    LAW <span className='pl-1 text-xl'><MdArrowDropDown /></span>
  </a>
  </div>
  <div>
  <a href="#" className="text-white font-bold text-sm flex items-center -ms-44">
    BUISNESS <span className='pl-1 text-xl'><MdArrowDropDown /></span>
  </a>
  </div>
 


        <div className='flex items-end ps-5'>
          <a href="#" className="text-white font-bold text-sm ps-10">Login</a>
          <a href="#" className="text-white font-bold text-sm ps-5">Signup</a>
        </div>
      </div>
    </nav>
  );
};

export default DekstopNav;

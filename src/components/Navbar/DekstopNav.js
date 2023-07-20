import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { MdArrowDropDown } from "react-icons/md";

const DekstopNav = () => {
  return (
    <nav className="bg-navBackgrndColor p-4">
      <div className=" mx-auto flex justify-between items-center">
        {/* Your Logo */}
        <div className="flex items-end space-x-4">
  <div className="flex items-center space-x-4">
    <img src="/images/logos.png" className='w-10 h-10' />
    <h4 className="font-bold text-3xl font-arial text-white">shiksha</h4>
  </div>
</div>

        
        
        {/* Search Bar */}
        <div className='flex items-center lg:ms-20 md:ms-0'>
          <div className="flex items-center  space-x-2">
            <input
              type="text"
              className="rounded-l-lg py-2 px-4 max-w-full bg-white focus:outline-none md:w-[400px] lg:w-[450px]" 
              placeholder="Search colleges, courses, exams, QnA, & Articles"
            />
            <button className="bg-orange-500 py-2 px-10 rounded-r-lg text-white" style={{marginLeft:'-30px'}}>Search</button>
          </div>
        </div>

        {/* Right-Side Query */}
        <div className=" lg:block flex items-center text-white hidden ps-5 ms-12 ">
        
          <span className='ps-2 flex'>    Ask a query on </span>  <span className='font-bold ps-3'>8826978461</span>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto lg:ms-56 mt-4 flex justify-between items-center space-x-0 md:ms-40">
 <div>
  <a href="#" className="text-white font-bold text-sm flex items-center lg:ms-10">
    MBA <span className='pl-1 text-xl'><MdArrowDropDown /></span>
  </a>
  </div>
  <div>
  <a href="#" className="text-white font-bold text-sm flex items-center lg:-ms-28 md:-ms-18">
    ENGINEERING <span className='pl-1 text-xl'><MdArrowDropDown /></span>
  </a>

  </div>
  <div>
  <a href="#" className="text-white font-bold text-sm flex items-center lg:-ms-24 md:-ms-18">
    SCIENCE <span className='pl-1 text-xl'><MdArrowDropDown /></span>
  </a>
  </div>
  <div>
  <a href="#" className="text-white font-bold text-sm flex items-center lg:-ms-24 md:-ms-18">
    ARTS <span className='pl-1 text-xl'><MdArrowDropDown /></span>
  </a>
  </div>
  <div>
  <a href="#" className="text-white font-bold text-sm flex items-center lg:-ms-32 md:-ms-18">
    LAW <span className='pl-1 text-xl'><MdArrowDropDown /></span>
  </a>
  </div>
  <div>
  <a href="#" className="text-white font-bold text-sm flex items-center lg:-ms-44 md:-ms-18">
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

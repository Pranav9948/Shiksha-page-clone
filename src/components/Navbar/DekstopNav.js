import React from 'react';
import { AiOutlineWhatsApp } from 'react-icons/ai';
import { MdArrowDropDown } from "react-icons/md";

const DekstopNav = () => {
  return (
    <nav className="bg-navBackgrndColor p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Your Logo */}
        <div className="flex items-center space-x-4">
          {/* <img src="/images/logos.png" className=' pt-3 ps-3 w-10' /> */}
          
          {/* <h4 className="font-bold text-3xl font-arial text-white">shiksha</h4> */}
          </div>
        

        {/* Search Bar */}
        <div className='flex items-center pe-32'>
        <div className="flex items-center justify-center w-full">
          <input
            type="text"
            className="rounded-l-lg py-3 px-60 max-w-full bg-white focus:outline-none"
            placeholder="Search colleges,courses,exams,QnA,& Articles"
          />
          <button className="bg-orange-500 py-3 px-10 rounded-r-lg text-white">Search</button>
        </div>

        {/* Right-Side Query */}
        <div className="text-white flex items-center "><AiOutlineWhatsApp/>Ask a query on<span className='font-bold ps-5'>8826978461</span> </div>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="container mx-auto mt-4 flex justify-center space-x-6">
        <a href="#" className="text-white font-bold text-sm ps-2 flex items-center">MBA  <span className='ps-1 font-bold text-xl'><MdArrowDropDown/></span></a>
        <a href="#" className="text-white font-bold text-sm ps-2 flex items-center">ENGINEERING <span className='ps-1 font-bold text-xl'><MdArrowDropDown/></span></a>
        <a href="#" className="text-white font-bold text-sm ps-2 flex items-center">SCIENCE <span className='ps-1 font-bold text-xl'><MdArrowDropDown/></span></a>
        <a href="#" className="text-white font-bold text-sm ps-2 flex items-center">ARTS <span className='ps-1 font-bold text-xl'><MdArrowDropDown/></span></a>
        <a href="#" className="text-white font-bold text-sm ps-2 flex items-center">LAW <span className='ps-1 font-bold text-xl'><MdArrowDropDown/></span></a>
        <a href="#" className="text-white font-bold text-sm ps-2 flex items-center">MEDICAL <span className='ps-1 font-bold text-xl'><MdArrowDropDown/></span></a>
        
        <div className='flex items-end '>
        <a href="#" className="text-white font-bold text-sm ps-5">Login  </a>
        <a href="#" className="text-white font-bold text-sm ps-5">Signup </a>
        </div>
      </div> 


    
     

     



    </nav>
  );
};

export default DekstopNav;

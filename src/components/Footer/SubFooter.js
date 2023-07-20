import React from 'react';
import { AiFillFacebook, AiFillTwitterSquare, AiOutlineWhatsApp } from 'react-icons/ai';
import { IconName, TfiWrite } from "react-icons/tfi";

const SubFooter = () => {
  return (
    <footer className="bg-subFooter text-white py-8">
      <div className="container mx-auto px-4">
        {/* First Row */}
        <div className="grid grid-cols-5 gap-20 mb-8">
          {/* About Shiksha Column */}
          <div className="col-span-1 flex flex-col">
            <h3 className="font-semibold mb-2">About Shiksha</h3>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="text-sm">About Us</li>
              <li className="text-sm">Management Team</li>
              <li className="text-sm">Careers</li>
              <li className="text-sm">Shiksha Authors</li>
              <li className="text-sm">FAQs</li>
              <li className="text-sm">Contact Us</li>
            </ul>
          </div>
          {/* Our Group Column */}
          <div className="col-span-1 flex flex-col">
            <h3 className="font-semibold mb-2">Our Group</h3>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="text-sm">Infoedge.in</li>
              <li className="text-sm">Naukri.com</li>
              <li className="text-sm">Firstnaukri.com</li>
              <li className="text-sm">Naukrigulf.com</li>
              <li className="text-sm">99acres.com</li>
              <li className="text-sm">Jeevansathi.com</li>
              <li className="text-sm">AmbitionBox.com</li>
              <li className="text-sm">Shiksha Online</li>
              <li className="text-sm">Job Hai</li>
            </ul>
          </div>
          {/* Enterprise Column */}
          <div className="col-span-1 flex flex-col">
            <h3 className="font-semibold mb-2">Enterprise</h3>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="text-sm">Client Login</li>
              <li className="text-sm">Advertising</li>
              <li className="text-sm">Add Colleges</li>
            </ul>
          </div>
          {/* Empty Columns */}
          <div className="col-span-1"></div>
          <div className="col-span-1"></div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-5 gap-4">
          {/* Logo Column */}
          <div className="col-span-1 flex items-center">
            <img src='/images/logos.png' className='w-10 h-10'/> 
            <h3 className='font-bold ps-2 text-3xl'>shiksha</h3>

          </div>
          {/* Get in Touch Column */}
          <div className="col-span-1 flex flex-col items-center">
            <h3 className="font-semibold mb-2">Get in Touch</h3>
            <button className="rounded-full px-4 py-2 bg-gray-500 flex items-center text-white"><AiOutlineWhatsApp/><span className='ps-1'>882678903</span></button>
          </div>
          {/* Contribute Column */}
          <div className="col-span-1 flex flex-col items-center">
            <h3 className="font-semibold mb-2">Contribute</h3>
            <button className="rounded-full px-4 py-2 bg-gray-500 flex items-center text-white"><TfiWrite/><span className='ps-1'>write Review</span></button>
          </div>
          {/* Follow us Column */}
          <div className="col-span-1 flex flex-col items-center">
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
            <AiFillFacebook size={30}/>
            <AiFillTwitterSquare size={30}/>
            </div>
          </div>
          {/* Text Column */}
          <div className="col-span-1 flex">
            <p className="text-sm text-gray-300"> Group of companies</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default SubFooter;

import React from 'react';
import { LuGitCompare } from 'react-icons/lu';
import { AiOutlineDownload } from 'react-icons/ai';

const CardBody = ({ coursesOffered, examsAccepted, totalFeesRange, averagePackage }) => {
    return (
      <div className="mt-3">
        {/* First Row */}
        <div className="flex justify-between items-center mb-4">
          {/* Courses Offered */}
          <div>
            <h4 className="text-sm font-normal font-arial text-gray-500 mb-2">Courses Offered</h4>
            {/* List of courses */}
            <ul className="list-disc pl-4 text-sm">
              <li className="text-blue-600">{coursesOffered}</li>
              {/* Add more courses as needed */}
            </ul>
          </div>
  
          {/* Exam Accepted */}
          <div>
            <h4 className="text-sm font-normal font-arial text-gray-500 mb-2">Exam Accepted</h4>
            {/* List of exams */}
            <ul className="list-disc pl-4 text-sm">
              <li>{examsAccepted}</li>
              {/* Add more exams as needed */}
            </ul>
          </div>
  
          {/* Compare Button */}
          <button className="px-4 py-2 flex items-center border border-gray-600 text-gray-800 rounded-full mt-2">
            <span className="pe-2">
              <LuGitCompare />
            </span>
            Compare
          </button>
        </div>
  
        {/* Second Row */}
        <div className="flex justify-between items-center">
          {/* Total Fees Range */}
          <div>
            <h4 className="text-sm font-normal font-arial text-gray-500 mb-2">Total Fees Range</h4>
            <p className="text-sm">{totalFeesRange}</p>
          </div>
  
          {/* Average Package */}
          <div>
            <h4 className="text-sm font-normal font-arial text-gray-500 mb-2">Average Package</h4>
            <p className="text-sm">{averagePackage}</p>
          </div>
  
          {/* Brochure Button */}
          <button className="px-4 py-2 flex items-center bg-green-600 text-white rounded-full mt-2">
            <span className="pe-2">
              <AiOutlineDownload />
            </span>
            Brochure
          </button>
        </div>
      </div>
    );
  };
  

export default CardBody;

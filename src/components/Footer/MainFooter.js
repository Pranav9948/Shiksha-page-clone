import React from "react";

const MainFooter = () => {
  return (
    <footer className="bg-mainFooter text-white py-8">
      <div className=" mx-auto container">
        {/* First Row */}
        <div className="grid grid-cols-5 gap-8 mb-8">
          {/* MBA Column */}
          <div className="col-span-1 flex flex-col">
            <h3 className="font-semibold mb-2">MBA</h3>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="text-sm">MBA</li>
              <li className="text-sm">Top MBA Colleges</li>
              <li className="text-sm">MBA Colleges</li>
              <li className="text-sm">Executive MBA Colleges</li>
              <li className="text-sm">MBA Exams</li>
              <li className="text-sm">CAT</li>
              <li className="text-sm">MAT</li>
              <li className="text-sm">Online MBA</li>
              <li className="text-sm">MBA College Predictors</li>
            </ul>
          </div>
          {/* ENGINEERING Column */}
          <div className="col-span-1 flex flex-col">
            <h3 className="font-bold mb-2">Engineering</h3>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="text-sm">Engineering</li>
              <li className="text-sm">Top Engineering Colleges</li>
              <li className="text-sm">Engineering Colleges</li>
              <li className="text-sm">Engineering Exams</li>
              <li className="text-sm">JEE Main</li>
              <li className="text-sm">JEE Advanced</li>
              <li className="text-sm">
                Engineering College Predictors
              </li>
            </ul>
          </div>
          {/* MEDICINE Column */}
          <div className="col-span-1 flex flex-col">
            <h3 className="font-bold mb-2">Medicine</h3>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="text-sm">NEET UG</li>
              <li className="text-sm">NEET PG</li>
              <li className="text-sm">NEET SS</li>
              <li className="text-sm">NEET MDS</li>
              <li className="text-sm">INI CET</li>
              <li className="text-sm">FMGE</li>
              <li className="text-sm">AIAPGET</li>
              <li className="text-sm">Top Medical Colleges</li>
              <li className="text-sm">Medical Colleges</li>
              <li className="text-sm">Medical Exams</li>
            </ul>
          </div>
          {/* OTHER COURSES Column */}
          <div className="col-span-1 flex flex-col">
            <h3 className="font-bold mb-2">Other Courses</h3>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="text-sm">Animation</li>
              <li className="text-sm">B.Com</li>
              <li className="text-sm">B.Sc</li>
              <li className="text-sm">BBA</li>
              <li className="text-sm">CA</li>
              <li className="text-sm">Fashion Designing</li>
              <li className="text-sm">Hotel Management</li>
              <li className="text-sm">Law</li>
             
              <li className="text-sm">MBBS</li>
            </ul>
          </div>
          {/* SARKARI EXAMS Column */}
          <div className="col-span-1 flex flex-col">
            <h3 className="font-bold mb-2">Sarkari Exams</h3>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="text-sm">RRB Group D</li>
              <li className="text-sm">RRB NTPC</li>
              <li className="text-sm">CTET</li>
              <li className="text-sm">UPTET</li>
              <li className="text-sm">UGC NET</li>
              <li className="text-sm">DSSSB</li>
              <li className="text-sm">SSC CGL</li>
              <li className="text-sm">SSC CHSL</li>
              <li className="text-sm">SSC GD</li>
              <li className="text-sm">NDA</li>
            </ul>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-5 gap-4">
          {/* Resources Column */}
          <div className="col-span-1 flex flex-col">
            <h3 className="font-bold mb-2">Resources</h3>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="text-sm">Careers After 12th</li>
              <li className="text-sm">Courses After 12th</li>
              <li className="text-sm">Education Boards</li>
              <li className="text-sm">Ask a Question</li>
              <li className="text-sm">Discussions</li>
              <li className="text-sm">Write a College Review</li>
              <li className="text-sm">Articles</li>
            </ul>
          </div>
          {/* Important Updates Column */}
          <div className="col-span-1 flex flex-col">
            <h3 className="font-bold mb-2">Important Updates</h3>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="text-sm">SSC CHSL 2023 Admit Card</li>
              <li className="text-sm">CUET UG 2023</li>
              <li className="text-sm">CUET Result 2023</li>
              <li className="text-sm">CUET PG 2023</li>
              <li className="text-sm">CAT 2023</li>
              <li className="text-sm">JEE Main 2024</li>
            </ul>
          </div>

{/* Important Updates Column */}
<div className="col-span-1 flex flex-col">
            <h3 className="font-bold mb-2">Study Abroad</h3>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="text-sm"> B-Tech abroad</li>
              <li className="text-sm"> M-Tech abroad</li>
              <li className="text-sm"> MBA abroad</li>
              <li className="text-sm"> MS abroad</li>
              <li className="text-sm"> GRE </li>
              <li className="text-sm">IELTS</li>
            </ul>
          </div>


          {/* Shiksha Online Column */}

          <div className="col-span-1 flex flex-col">
            <h3 className="font-bold mb-2">Shiksha Online</h3>
            <ul className="list-none text-gray-300 space-y-2">
              <li className="text-sm">Free Online Courses</li>
              <li className="text-sm">Data Science Courses</li>
              <li className="text-sm">Artificial Intelligence Courses</li>
              <li className="text-sm">Machine Learning Courses</li>
              <li className="text-sm">AwS Certification</li>
              <li className="text-sm">Phyton Certifications</li>
            </ul>
          </div>





         
          {/* Get App Column */}
          <div className="col-span-1 flex flex-col ms-4 ">
            <h3 className="font-bold  mb-5 mt-7">Get App, Its better</h3>
            <div className="flex flex-col space-y-4">
            <button className="rounded-full px-4 py-2 border border-gray-300 font-bold text-white">
          Get on Play Store
        </button>
        <button className="rounded-full px-4 py-2 border border-gray-300  font-bold text-white">
          Get on App Store
        </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;

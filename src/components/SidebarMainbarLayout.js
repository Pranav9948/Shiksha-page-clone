import React from "react";
import Sidebar from "./Sidebar";
import Card from "./Card";
import ButtonGroup from "./ButtonGroup";
import PromoCard from "./PromoCard";

const SidebarMainbarLayout = () => {
  const locations = [
    "Banglore",
    "Mumbai",
    "Delhi",
    "Pune",
    "Chennai",
    "Kolkata",
  ];
  const courses = ["Certificate", "B.Ed", "D.Ed", "M.A.Ed", "PG Diploma"];
  const fees = ["<1 Lakh", "1-2 Lakh", "3-5 Lakh"];
  const specialization = [
    "Languages",
    "History",
    "Physical Education",
    "Preprimary",
    "Sociology",
    "Vocational Education",
  ];
  const modeOfStudy = ["Online", "Full Time", "Distance", "Part Time", "Blend"];

  const datas = [
    {
      collegeName: "Sewa Community College",
      location: "Mumbai",
      coursesOffered: "4 courses",
      examsAccepted: "CBSE, ICSE",
      totalFeesRange: "₹ 35k - 52k",
      averagePackage: "5LPA",
    },
    {
      collegeName: "Guru Gobind Singh Indraprastha University",
      location: "New Delhi",
      coursesOffered: "6 courses",
      examsAccepted: "SAT, ACT",
      totalFeesRange: "₹ 50k - 75k",
      averagePackage: "6LPA",
    },
    {
      collegeName: "Jadavpur University",
      location: "Kolkata",
      coursesOffered: "7 courses",
      examsAccepted: "CBSE, ICSE",
      totalFeesRange: "₹ 60k - 85k",
      averagePackage: "7LPA",
    },
    {
      collegeName: "Indian Institute of Technology, Bombay",
      location: "Mumbai",
      coursesOffered: "10 courses",
      examsAccepted: "JEE Main",
      totalFeesRange: "₹ 80k - 1 lakh",
      averagePackage: "10LPA",
    },
    {
      collegeName: "Indian Institute of Technology, Delhi",
      location: "New Delhi",
      coursesOffered: "11 courses",
      examsAccepted: " JEE Advanced",
      totalFeesRange: "₹ 90k - 1.1 lakh",
      averagePackage: "11LPA",
    },
    {
      collegeName: "Indian Institute of Science, Bangalore",
      location: "Bangalore",
      coursesOffered: "12 courses",
      examsAccepted: "CBSE, ICSE",
      totalFeesRange: "₹ 1 lakh - 1.2 lakh",
      averagePackage: "12LPA",
    },
  ];

  const buttonList1 = ["Bangalore", "Mumbai", "Delhi", "Pune","Button A", "Chennai", "kolkata", "Hyderabad","Maharastra", "Karnataka", "Uttar pradesh", "Punjab"];
  const heading1='Most Preferred Location for Teaching & Education';
  const colorz="blue-50"


  const buttonList2 = ["certificate", "B.Ed", "D.Ed", "M.Ed","pg Diploma", "B.A", "kolkata", "B.Voc","M.P.E.D", "UG DIPLOMA", "DIPLOMA", "BTECH"];
  const heading2='Most Preferred Courses for Teaching & Education';
  const colorz2='lime-100'


  return (
    <div className="flex"  >
      {/* Sidebar (20% width) */}
      <div className="w-1/5 min-w-min">
        <Sidebar title="Location" content={locations} />
        <Sidebar title="Courses" content={courses} />
        <Sidebar title="Total Fees" content={fees} />
        <Sidebar title="Specialization" content={specialization} />
        <Sidebar title="Mode of Study" content={modeOfStudy} />
      </div>

      {/* Mainbar (50% width) */}
      <div className="w-1/2 min-w-min mt-32 ms-10 mb-32">
        <div className="flex flex-wrap justify-evenly gap-4">
          {datas.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>

          <ButtonGroup buttonList={buttonList1} heading={heading1} colorz={colorz}/>

          <div className="flex flex-wrap justify-evenly gap-4 mt-16">
          {datas.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>


        <ButtonGroup buttonList={buttonList2} heading={heading2} colorz={colorz2}/>

        <div className="flex flex-wrap justify-evenly gap-4 mt-16">
          {datas.map((data, index) => (
            <Card key={index} data={data} />
          ))}
        </div>

      </div>

 {/* PromoCard  */}

 
 <div className="w-1/5  mt-80 ms-10  hidden mb-32 lg:block">

   <PromoCard/>



 </div>

 




    </div>
  );
};

export default SidebarMainbarLayout;

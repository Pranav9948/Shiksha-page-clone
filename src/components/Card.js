import React from 'react';
import CardHeader from './CardHeader';
import CardBody from './CardBody';

const Card = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md max-w-5xl w-full mx-auto mb-10">
    <CardHeader collegeName={data.collegeName} location={data.location} />
    <CardBody
      coursesOffered={data.coursesOffered}
      examsAccepted={data.examsAccepted}
      totalFeesRange={data.totalFeesRange}
      averagePackage={data.averagePackage}
    />
  </div>
  );
};

export default Card;

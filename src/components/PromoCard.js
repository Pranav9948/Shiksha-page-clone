import React from 'react'
import manImg from './man__img.svg'
import { AiOutlineArrowRight } from 'react-icons/ai'

const PromoCard = () => {
  return (
   

<div className="bg-violet-50 rounded-lg shadow-md p-4">
      <img
        src={manImg}
        alt="Card Image"
        className="w-full h-auto mb-4 rounded-lg"
      />
      <h2 className="text-m font-semibold mb-2">Get personalized college recommendations</h2>
      <p className="text-gray-700 text-sm mb-4">Registering gives you the benefit to browse variety of colleges based on your preferences</p>
      <button
        className="rounded-full flex items-center px-4 py-2 border border-gray-300 bg-white text-gray-800 hover:bg-blue-600 font-semibold"
      >
        Register  <span className='ps-2'> <AiOutlineArrowRight/> </span> 
      </button>
    </div>
      
    
  )
}

export default PromoCard

import React from 'react'

const MiniFooter = () => {
  return (
   

    <footer className="bg-subFooter text-white py-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between">
          <div className="w-full">
            <h3 className="text-xl font-semibold mb-4 w-full">Get our expertz to answer your questions within 24 Hrs</h3>
            <div className="relative">
              <input
                type="text"
                className="w-full py-7 pl-4 pr-12 rounded-lg bg-white text-gray-800 "
                placeholder="write your questions here"
              />
              <button className="absolute right-2 top-1/2 transform -translate-y-1/2 px-5 me-3 py-2 bg-orange-500 text-white rounded-md">
                Ask Question
              </button>
            </div>
          </div>
          <div className="w-full md:w-1/2 mt-4 md:mt-0 flex justify-end">
            {/* Your other content */}
          </div>
        </div>
      </div>
    </footer>
  
    
  )
}

export default MiniFooter

// import React, { useState } from "react";
import Navbar from "./Navbar";


const ViewDesigns = () => {

  return (
<div className="min-h-screen bg-cover bg-center">
    
      <Navbar />
      <title>View Designs</title>
      <div className="flex flex-col md:flex-row items-center justify-center p-10 gap-8">
        {/* Left Section*/}
        <div className={`md:w-3/4 border-3 p-16 flex flex-col items-center justify-center text-gray-600 cursor-pointer bg-white rounded-lg h-96 transition-all `}>
            {/* image grid */}
        </div>

        {/* Right Section - Text, Color Pickers, Dropdown, and Buttons */}
        <div className="md:w-1/4 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900">Your new designs</h2>
          <p className="text-gray-900 mt-4">
            Here are your generated batik designs. If you want different results, click on New Designs and choose another generator. 
          </p>
          
          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button 
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
            //   onClick={}
            >
              New Design
            </button>
            <button 
              className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-violet-950 transition"
            //   onClick={}
            >
              Download
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewDesigns
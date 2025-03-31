import React, { useState } from "react";
import Navbar from "./Navbar";

const UploadPage = () => {
  const [file, setFile] = useState(null);
  const [primaryColor, setPrimaryColor] = useState("#8163EE");
  const [secondaryColor, setSecondaryColor] = useState("#1F2EA3");

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleReset = () => {
    setFile(null);
    setPrimaryColor("#8163EE");
    setSecondaryColor("#1F2EA3");
  };

  return (
    <div className="min-h-screen bg-cover bg-center">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center p-10 gap-8">
        {/* Left Section - Drag and Drop */}
        <div 
          className="md:w-1/2 border-2 border-dashed border-gray-400 p-16 flex items-center justify-center text-gray-600 cursor-pointer bg-white rounded-lg h-96"
          onDrop={handleDrop}
          onDragOver={(e) => e.preventDefault()}
          onClick={() => document.getElementById("fileInput").click()}
        >
          {file ? (
            <p className="text-green-600">File Uploaded: {file.name}</p>
          ) : (
            <p>Drop your designs here</p>
          )}
          <input 
            type="file" 
            id="fileInput" 
            className="hidden" 
            onChange={handleFileSelect} 
          />
        </div>

        {/* Right Section - Text, Color Pickers, and Buttons */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl font-bold text-gray-900">Upload Your Sketch</h2>
          <p className="text-gray-900 mt-4">
            Once you have uploaded your sketch, VasthraAI will generate a few patterns that you can choose from. This gives you insights on what your design would look like, and inspire you with limitless possibilities to create.
          </p>
          
          {/* Color Pickers */}
          <div className="mt-6 flex gap-8 items-center">
            <div className="flex items-center gap-4">
              <label className="text-gray-900 font-semibold">Primary Color:</label>
              <input 
                type="color" 
                value={primaryColor} 
                onChange={(e) => setPrimaryColor(e.target.value)} 
                className="w-12 h-12 cursor-pointer border border-gray-300 rounded-full"
              />
            </div>
            <div className="flex items-center gap-4">
              <label className="text-gray-900 font-semibold">Secondary Color:</label>
              <input 
                type="color" 
                value={secondaryColor} 
                onChange={(e) => setSecondaryColor(e.target.value)} 
                className="w-12 h-12 cursor-pointer border border-gray-300 rounded-full"
              />
            </div>
          </div>
          
          {/* Buttons */}
          <div className="mt-6 flex gap-4">
            <button 
              className="bg-gray-500 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition"
              onClick={handleReset}
            >
              Reset
            </button>
            <button 
              className="bg-blue-800 text-white px-6 py-2 rounded-lg hover:bg-violet-950 transition"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadPage;

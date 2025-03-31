import React, { useState } from "react";
import Navbar from "./Navbar";

const UploadPage = () => {
  const [file, setFile] = useState(null);

  const handleDrop = (event) => {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files[0];
    setFile(droppedFile);
  };

  const handleFileSelect = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="flex flex-col md:flex-row items-center justify-center p-10 gap-8">
        {/* Left Section - Drag and Drop */}
        <div 
          className="md:w-1/2 border-2 border-dashed border-gray-400 p-10 flex items-center justify-center text-gray-600 cursor-pointer bg-white rounded-lg"
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
        


        
      </div>
    </div>
  );
};

export default UploadPage;

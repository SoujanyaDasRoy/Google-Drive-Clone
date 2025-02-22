import React from 'react';
import Image from 'next/image';

const SidePanel = () => {
  return (
    <div className="bg-[#f8fafd] flex flex-col w-10"> {/* Added w-16 class */}
      {/* Top icons section */}
      <div className="flex flex-col items-center space-y-4 mb-auto">
        {/* First icon (colorful square) */}
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer">
          <div className="w-8 h-8 rounded-sm bg-gray-200">
            {/* Placeholder for your first SVG */}
          </div>
        </div>
        
        {/* Second icon (yellow box with person) */}
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer">
          <div className="w-6 h-6 rounded-sm bg-gray-200">
            {/* Placeholder for your second SVG */}
          </div>
        </div>
        
        {/* Third icon (blue checkmark circle) */}
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer">
          <div className="w-6 h-6 rounded-full bg-gray-200">
            {/* Placeholder for your third SVG */}
          </div>
        </div>
        
        {/* Fourth icon (blue person) */}
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer">
          <div className="w-6 h-6 rounded-sm bg-gray-200">
            {/* Placeholder for your fourth SVG */}
          </div>
        </div>
      </div>
      
      {/* Bottom section with plus button */}
      <div className="mb-auto flex flex-col items-center">
        <button className="w-8 h-8 rounded-full flex items-center justify-center text-gray-500 hover:bg-gray-100">
          <span className="text-xl">+</span>
        </button>
      </div>
      
      {/* Collapse/Expand arrow at bottom */}
      <div className="mt-auto flex items-center justify-center w-full h-8 cursor-pointer hover:bg-gray-100">
        <div className="w-5 h-5 flex items-center justify-center text-gray-400">
          <span>&gt;</span>
        </div>
      </div>
    </div>
  );
};

export default SidePanel;
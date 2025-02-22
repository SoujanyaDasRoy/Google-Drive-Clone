import React from 'react';
import Image from 'next/image';

const SidePanel = () => {
  return (
    <div className="flex flex-col w-8 py-2 items-center justify-center">
      {/* Top icons section with original spacing */}
      <div className="flex flex-col items-center space-y-4">
        {/* Calendar icon */}
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full">
          <div className="w-5 h-5 relative">
            <Image
              src="https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png"
              alt="Calendar"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Keep icon */}
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full">
          <div className="w-5 h-5 relative">
            <Image
              src="https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png"
              alt="Keep"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Tasks icon */}
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full">
          <div className="w-5 h-5 relative">
            <Image
              src="https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png"
              alt="Tasks"
              fill
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Contacts icon */}
        <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full">
          <div className="w-5 h-5 relative">
            <Image
              src="https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png"
              alt="Contacts"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Border line with its own spacing */}
      <div className="w-4 border-b border-gray-200 mt-6 mb-4"></div>
      
      {/* Bottom section with plus button */}
      <div className="flex flex-col items-center">
        <button className="w-10 h-10 rounded-full flex items-center justify-center text-gray-600 hover:bg-gray-100">
          <Image 
            src="/plus.svg"
            alt="Add On"
            width={20}
            height={20}
          />
        </button>
      </div>
    </div>
  );
};

export default SidePanel;
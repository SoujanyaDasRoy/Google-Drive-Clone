"use client"

import { useState } from 'react';
import Image from 'next/image';

const SidePanel = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  
  const icons = [
    {
      src: "https://www.gstatic.com/companion/icon_assets/calendar_2020q4_2x.png",
      alt: "Calendar"
    },
    {
      src: "https://www.gstatic.com/companion/icon_assets/keep_2020q4v3_2x.png",
      alt: "Keep"
    },
    {
      src: "https://www.gstatic.com/companion/icon_assets/tasks_2021_2x.png",
      alt: "Tasks"
    },
    {
      src: "https://www.gstatic.com/companion/icon_assets/contacts_2022_2x.png",
      alt: "Contacts"
    }
  ];

  return (
    <>
      {/* Main panel */}
      <div className={`fixed top-16 right-0 h-[calc(100%-64px)] transition-transform duration-300 ease-in-out ${
        isCollapsed ? 'translate-x-[64px]' : 'translate-x-0'
      }`}>
        <div className="flex h-full">
          <div className="flex flex-col w-16 py-2 items-center">
            {/* Top icons section */}
            <div className="flex flex-col items-center space-y-2">
              {icons.map((icon, index) => (
                <div key={index} className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full">
                  <div className="w-5 h-5 relative">
                    <Image
                      src={icon.src}
                      alt={icon.alt}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Border */}
            <div className="w-8 border-b border-gray-200 my-2 mx-auto"></div>

            {/* Bottom section with plus button */}
            <div className="flex flex-col items-center space-y-2">
              {/* Plus button */}
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
        </div>
      </div>

      {/* Fixed toggle button - positioned even lower */}
      <div className="fixed bottom-8 right-0">
        <div className="bg-white shadow-md rounded-l-lg p-2">
          <button 
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="w-8 h-8 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center"
          >
            <Image 
              src="/side-panel-icon.svg"
              alt="Toggle Panel"
              width={16}
              height={16}
              className={`transform transition-transform duration-300 ${isCollapsed ? 'rotate-180' : ''}`}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default SidePanel;
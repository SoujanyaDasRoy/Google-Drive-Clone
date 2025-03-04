"use client";

import React, { useState } from "react";
import LayoutButtons from "@/components/LayoutButtons";
import MyDrive from "@/components/MyDrive";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SidePanel from "@/components/SidePanel";
import Image from "next/image";
import FilterBar from "@/components/FilterBar";
import Content from "@/components/Content";

const Home = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLayout, setActiveLayout] = useState("horizontal"); // List view by default

  return (
    <div className="flex flex-row h-screen">
      {/* Sidebar */}
      <div className="w-64 h-full">
        <Sidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Navbar with Search */}
        <Navbar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        {/* Main Layout */}
        <div className="flex-1 p-4 bg-gray-50">
          <div className="flex gap-4 h-full">
            <div className="flex-1 bg-white rounded-xl p-4">
              {/* Header: MyDrive + Layout Buttons */}
              <div className="flex justify-between items-center mb-4">
                <MyDrive />
                <div className="flex flex-row gap-2 mx-4">
                  <LayoutButtons setActiveLayout={setActiveLayout} />
                  <Image
                    src="/view-details.svg"
                    alt="View Details"
                    width={20}
                    height={20}
                  />
                </div>
              </div>

              {/* Filter Bar */}
              <FilterBar />

              {/* Content (Files/Folders) */}
              <Content searchQuery={searchQuery} activeLayout={activeLayout} />
            </div>

            {/* Side Panel */}
            <div className="w-8">
              <SidePanel />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

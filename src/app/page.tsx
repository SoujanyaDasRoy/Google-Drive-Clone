import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SidePanel from "@/components/SidePanel";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-64 h-full">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-4 bg-gray-50 flex flex-row gap-4">
          <div className="flex-1 bg-white rounded-xl p-4">
            Content
          </div>
          <div className="w-8">
            <SidePanel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
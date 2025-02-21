import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import React from "react";

const Home = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="w-64 h-full">
        <Sidebar />
      </div>
      <div className="flex-1 flex flex-col">
        <Navbar />
        <div className="flex-1 p-4 bg-[#f8fafd] w-[82vw]">
          <div className="bg-[#ffffff] rounded-xl p-4">
            Content
          </div>
        </div>
      </div>
    </div>
  )
};

export default Home;
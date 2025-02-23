"use client";

import { useState } from "react";
import Image from "next/image";

const LayoutButtons = ({ setActiveLayout }: { setActiveLayout: (layout: string) => void }) => {
  const [activeLayout, setLocalActiveLayout] = useState("horizontal");

  const handleLayoutChange = (layout: string) => {
    setLocalActiveLayout(layout);
    setActiveLayout(layout);
  };

  return (
    <div className="inline-flex rounded-full border border-gray-200 bg-white">
      <button
        onClick={() => handleLayoutChange("horizontal")}
        className={`py-1 px-6 flex items-center justify-center transition-colors ${
          activeLayout === "horizontal" ? "bg-blue-100" : "hover:bg-gray-50"
        } rounded-l-full`}
      >
        <Image src="/horizontal-layout.svg" alt="Horizontal Layout" width={16} height={16} />
      </button>
      <div className="w-[1px] h-8 bg-gray-200 my-auto"></div>
      <button
        onClick={() => handleLayoutChange("grid")}
        className={`py-1 px-6 flex items-center justify-center transition-colors ${
          activeLayout === "grid" ? "bg-blue-100" : "hover:bg-gray-50"
        } rounded-r-full`}
      >
        <Image src="/grid-layout.svg" alt="Grid Layout" width={16} height={16} />
      </button>
    </div>
  );
};

export default LayoutButtons;

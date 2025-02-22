"use client"

import { useState, useEffect } from "react";
import DriveItem from "./DriveItem";

type DriveItemType = {
  name: string;
  type: "folder" | "file";
  size?: string;
  lastModified?: string;
};

const Content = () => {
  const [driveItems, setDriveItems] = useState<DriveItemType[]>([]);

  useEffect(() => {
    // Simulating fetching data
    fetch("/data.json") // Make sure to store your JSON file in the public directory
      .then((res) => res.json())
      .then((data) => setDriveItems(data.files));
  }, []);

  return (
    <div className="p-4">
      <div className="grid grid-cols-3 gap-4 border-b pb-2 font-semibold text-gray-600">
        <span>Name</span>
        <span>Last Modified</span>
        <span>Size</span>
      </div>
      {driveItems.map((item, index) => (
        <DriveItem
          key={index}
          name={item.name}
          type={item.type}
          size={item.size || "-"}
          lastModified={item.lastModified || "-"}
        />
      ))}
    </div>
  );
};

export default Content;

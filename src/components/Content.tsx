"use client";

import { useState, useEffect } from "react";
import DriveItem from "./DriveItem";
import { Folder, FileText, User } from "lucide-react";

type DriveItemType = {
  name: string;
  type: "folder" | "file";
  size?: string;
  lastModified?: string;
};

const Content = ({ searchQuery }: { searchQuery: string }) => {
  const [driveItems, setDriveItems] = useState<DriveItemType[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setDriveItems(data.files));
  }, []);

  const filteredItems = driveItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="mt-4 p-2">
      <div className="flex items-center justify-between border-b pb-3 text-gray-700 text-md font-medium">
        <span className="w-1/3">Name</span>
        <span className="w-1/6">Owner</span>
        <span className="w-1/6">Last Modified</span>
        <span className="w-1/6">Size</span>
      </div>
      <div className="divide-y divide-gray-200">
        {filteredItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between py-2 px-4 hover:rounded-full hover:bg-gray-100 cursor-pointer"
          >
            <div className="w-1/3 flex items-center gap-2">
              {item.type === "folder" ? <Folder size={20} /> : <FileText size={20} />}
              <span>{item.name}</span>
            </div>
            <div className="w-1/6 flex items-center gap-2">
              <User size={24} className="rounded-full" />
              <span>Me</span>
            </div>
            <span className="w-1/6">{item.lastModified || "-"}</span>
            <span className="w-1/6">{item.size || "-"}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;

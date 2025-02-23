"use client";

import { useState, useEffect } from "react";
// import DriveItem from "./DriveItem";
import { Folder, FileText, User } from "lucide-react";

type DriveItemType = {
  name: string;
  type: "folder" | "file";
  size?: string;
  lastModified?: string;
};

const Content = ({ searchQuery, activeLayout }: { searchQuery: string; activeLayout: string }) => {
  const [driveItems, setDriveItems] = useState<DriveItemType[]>([]);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setDriveItems(data.files));
  }, []);

  const filteredItems = driveItems.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const folders = filteredItems.filter((item) => item.type === "folder");
  const files = filteredItems.filter((item) => item.type === "file");

  return (
    <div className="mt-4 p-2">
      {activeLayout === "horizontal" ? (
        // List View
        <>
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
        </>
      ) : (
        // Grid View with headings
        <div>
          {folders.length > 0 && (
            <>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Folders</h2>
              <div className="grid grid-cols-4 gap-4 mb-6">
                {folders.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 p-3 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <Folder size={24} />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{item.lastModified || "-"}</div>
                    <div className="text-xs text-gray-500">{item.size || "-"}</div>
                  </div>
                ))}
              </div>
            </>
          )}

          {files.length > 0 && (
            <>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">Files</h2>
              <div className="grid grid-cols-4 gap-4">
                {files.map((item, index) => (
                  <div
                    key={index}
                    className="border border-gray-200 p-3 rounded-lg shadow-sm hover:shadow-md transition cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <FileText size={24} />
                      <span className="font-medium">{item.name}</span>
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{item.lastModified || "-"}</div>
                    <div className="text-xs text-gray-500">{item.size || "-"}</div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Content;

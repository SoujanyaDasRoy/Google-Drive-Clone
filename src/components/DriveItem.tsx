// components/DriveItem.tsx
import { Folder, FileText } from "lucide-react";

type DriveItemProps = {
  name: string;
  type: "folder" | "file";
  size?: string;
  lastModified?: string;
};

export default function DriveItem({ name, type, size, lastModified }: DriveItemProps) {
  return (
    <div className="flex justify-between p-2 border-b cursor-pointer hover:bg-gray-100">
      <div className="flex items-center gap-2">
        {type === "folder" ? <Folder size={20} /> : <FileText size={20} />}
        <span>{name}</span>
      </div>
      {type === "file" && (
        <div className="text-gray-500 text-sm">
          {size} | {lastModified}
        </div>
      )}
    </div>
  );
}

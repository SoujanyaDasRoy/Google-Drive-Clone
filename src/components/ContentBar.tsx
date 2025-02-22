"use client"

import { useState } from 'react';
import { ChevronDown, ChevronUp, MoreVertical } from 'lucide-react';

interface ContentBarProps {
  onSort?: (column: string) => void;
  onLastModifiedClick?: () => void;
}

const ContentBar: React.FC<ContentBarProps> = ({ onSort, onLastModifiedClick }) => {
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  const handleNameSort = () => {
    setSortDirection(prev => prev === 'asc' ? 'desc' : 'asc');
    onSort?.('name');
  };

  return (
    <div className="w-full h-12 flex items-center px-4 mt-4 border-b border-gray-200 bg-white text-sm text-gray-600">
      <div className="flex items-center flex-1 min-w-0">
        <button
          onClick={handleNameSort}
          className="flex items-center space-x-1 hover:text-gray-900"
        >
          <span className="text-[#1f1f1f]">Name</span>
          {sortDirection === 'asc' ? (
            <ChevronUp className="w-4 h-4" />
          ) : (
            <ChevronDown className="w-4 h-4" />
          )}
        </button>
      </div>
      
      <div className="flex-1 min-w-0">
        <span className="text-[#1f1f1f]">Owner</span>
      </div>
      
      <div className="flex-1 min-w-0">
        <button
          onClick={onLastModifiedClick}
          className="flex items-center space-x-1 hover:text-gray-900"
        >
          <span className="text-[#1f1f1f]">Last modified</span>
          {/* <ChevronDown className="w-4 h-4" /> */}
        </button>
      </div>
      
      <div className="flex-1 min-w-0">
        <span className="text-[#1f1f1f]">File size</span>
      </div>
      
      <button className="ml-4 p-1 rounded-full hover:bg-gray-100">
        <MoreVertical className="w-5 h-5 text-gray-600" />
      </button>
    </div>
  );
};

export default ContentBar;
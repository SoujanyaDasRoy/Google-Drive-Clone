"use client"

import React, { useState } from 'react';
import Image from 'next/image';

const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState('my-drive');
    const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
        'my-drive': false,  
        'computers': false
    });
    
    const usedStorage = 4.15;
    const totalStorage = 15;
    const storagePercentage = (usedStorage / totalStorage) * 100;

    const toggleExpand = (itemId: string, e: React.MouseEvent) => {
        e.stopPropagation();
        setExpandedItems(prev => ({
            ...prev,
            [itemId]: !prev[itemId]
        }));
    };

    return (
        <div className="w-64 flex flex-col h-screen sidebar">
            {/* Drive Logo and Title */}
            <div className="p-4 flex flex-row gap-2">
                <Image
                    src="/google-drive-logo.png"
                    alt="Google Drive Logo"
                    height={40}
                    width={40}
                />
                <span className="text-2xl mt-1">Drive</span>
            </div>

            {/* New Button */}
            <div className="p-4 mt-[-12] items-center">
                <button className="bg-white hover:bg-[#edf1fa] w-24 rounded-2xl shadow-md items-center flex gap-2 px-4 py-3">
                    <Image
                        src="/plus.svg"
                        alt="Plus"
                        height={28}
                        width={28}
                        className=""
                    />
                    <span className="text-sm">New</span>
                </button>
            </div>

            {/* Original Sidebar Content */}
            <div className="mx-2 my-2">
                <div className="flex flex-col space-y-1 mt-4 mb-6">
                    <SidebarItem 
                        id="home"
                        label="Home"
                        icon="/home-dark.svg"
                        activeIcon="/home-active.svg"
                        selected={selectedItem === 'home'}
                        onClick={() => setSelectedItem('home')}
                        expandable={false}
                    />
                    
                    <ExpandableSidebarItem 
                        id="my-drive"
                        label="My Drive"
                        icon="/my-drive-dark.svg"
                        activeIcon="/my-drive-active.svg"
                        selected={selectedItem === 'my-drive'}
                        expanded={expandedItems['my-drive']}
                        onClick={() => setSelectedItem('my-drive')}
                        onToggleExpand={(e) => toggleExpand('my-drive', e)}
                    />
                    
                    <ExpandableSidebarItem 
                        id="computers"
                        label="Computers"
                        icon="/computers-dark.svg"
                        activeIcon="/computers-active.svg"
                        selected={selectedItem === 'computers'}
                        expanded={expandedItems['computers']}
                        onClick={() => setSelectedItem('computers')}
                        onToggleExpand={(e) => toggleExpand('computers', e)}
                    />
                </div>
                
                <div className="flex flex-col space-y-1 mb-6">
                    <SidebarItem 
                        id="shared-with-me"
                        label="Shared with me"
                        icon="/shared-with-me-dark.svg"
                        activeIcon="/shared-with-me-active.svg"
                        selected={selectedItem === 'shared-with-me'}
                        onClick={() => setSelectedItem('shared-with-me')}
                        expandable={false}
                    />
                    
                    <SidebarItem 
                        id="recent"
                        label="Recent"
                        icon="/recent-dark.svg"
                        activeIcon="/recent-active.svg"
                        selected={selectedItem === 'recent'}
                        onClick={() => setSelectedItem('recent')}
                        expandable={false}
                    />
                    
                    <SidebarItem 
                        id="starred"
                        label="Starred"
                        icon="/starred-dark.svg"
                        activeIcon="/starred-active.svg"
                        selected={selectedItem === 'starred'}
                        onClick={() => setSelectedItem('starred')}
                        expandable={false}
                    />
                </div>
                
                <div className="flex flex-col space-y-1 mb-6">
                    <SidebarItem 
                        id="spam"
                        label="Spam"
                        icon="/spam-dark.svg"
                        activeIcon="/spam-active.svg"
                        selected={selectedItem === 'spam'}
                        onClick={() => setSelectedItem('spam')}
                        expandable={false}
                    />
                    
                    <SidebarItem 
                        id="trash"
                        label="Trash"
                        icon="/trash-dark.svg"
                        activeIcon="/trash-active.svg"
                        selected={selectedItem === 'trash'}
                        onClick={() => setSelectedItem('trash')}
                        expandable={false}
                    />
                    
                    <SidebarItem 
                        id="storage"
                        label="Storage"
                        icon="/storage-dark.svg"
                        activeIcon="/storage-active.svg"
                        selected={selectedItem === 'storage'}
                        onClick={() => setSelectedItem('storage')}
                        expandable={false}
                    />
                </div>
                
                {/* Storage progress bar */}
                <div className="px-6 mt-2">
                    <div className="h-1 w-full bg-gray-200 rounded-full">
                        <div 
                            className="h-1 bg-blue-600 rounded-full" 
                            style={{ width: `${storagePercentage}%` }}
                        ></div>
                    </div>
                    <p className="text-sm text-gray-700 mt-1">{usedStorage} GB of {totalStorage} GB used</p>
                    
                    <button className="mt-4 w-full text-sm rounded-full py-2 px-4 text-blue-600 border border-gray-300 hover:bg-blue-50 transition-colors">
                        Get more storage
                    </button>
                </div>
            </div>
        </div>
    );
};

const SidebarItem = ({ id, label, icon, activeIcon, selected, onClick, expandable }: { 
    id: string, 
    label: string, 
    icon: string, 
    activeIcon: string, 
    selected: boolean, 
    onClick: () => void, 
    expandable: boolean 
}) => {
    return (
        <button
            onClick={onClick}
            className={`w-full rounded-full sidebar-item ${selected ? 'active' : ''}`}
        >
            <div className="flex items-center gap-2 py-1 px-6">
                <Image
                    src={selected ? activeIcon : icon}
                    alt={label}
                    height={20}
                    width={20}
                />
                
                <span className={`text-sm mt-1 ${selected ? "font-medium" : "font-normal"}`}>
                    {label}
                </span>
            </div>
        </button>
    );
};

const ExpandableSidebarItem = ({ 
    id, 
    label, 
    icon, 
    activeIcon, 
    selected, 
    expanded,
    onClick, 
    onToggleExpand 
}: { 
    id: string, 
    label: string, 
    icon: string, 
    activeIcon: string, 
    selected: boolean,
    expanded: boolean,
    onClick: () => void,
    onToggleExpand: (e: React.MouseEvent) => void
}) => {
    return (
        <div className="relative">
            <button
                onClick={onClick}
                className={`w-full rounded-full sidebar-item ${selected ? 'active' : ''}`}
            >
                <div className="flex items-center gap-2 py-1 px-6">
                    <div 
                        className="absolute left-2 flex items-center justify-center w-4 h-4 cursor-pointer"
                        onClick={onToggleExpand}
                    >
                        <span className={`transition-transform duration-200 ${expanded ? 'transform rotate-90' : ''}`}>
                            <Image src="/arrow-collapsed.svg" alt="Arrow" height={20} width={20} />
                        </span>
                    </div>
                    
                    <Image
                        src={selected ? activeIcon : icon}
                        alt={label}
                        height={20}
                        width={20}
                    />
                    
                    <span className={`text-sm mt-1 ${selected ? "font-medium" : "font-normal"}`}>
                        {label}
                    </span>
                </div>
            </button>
            
            {expanded && (
                <div className="pl-10 mt-1">
                    <div className="text-sm text-gray-500 py-1">No items</div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;
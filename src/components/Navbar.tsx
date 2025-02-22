import React from 'react'
import SearchBar from './SearchBar'
import Image from "next/image"

const Navbar = () => {
    return (
        <div className='bg-[#f8fafd] py-1 w-full flex justify-between items-center px-4'>
            <SearchBar />
            <div className='flex items-center gap-1'>
                <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full">
                    <Image 
                        src="/ready-for-offline.svg"
                        alt="Ready for offline"
                        width={24}
                        height={24}
                    />
                </div>
                <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full">
                    <Image 
                        src="/support.svg"
                        alt="Support"
                        width={24}
                        height={24}
                    />
                </div>
                <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full">
                    <Image 
                        src="/settings.svg"
                        alt="Settings"
                        width={24}
                        height={24}
                    />
                </div>
                <div className="w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 rounded-full">
                    <Image 
                        src="/menu.svg"
                        alt="Apps menu"
                        width={24}
                        height={24}
                    />
                </div>
                {/* Profile Picture Placeholder */}
                <div className="w-10 h-10 rounded-full bg-gray-200 cursor-pointer overflow-hidden">
                    {/* This will be replaced with actual user profile image */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                        {/* Placeholder for profile image */}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar
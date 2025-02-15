import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GoogleDriveLogo from "../../../public/google-drive-logo.png"
import MyDriveLogo from "../../../public/my-drive.svg"

import { Plus, House } from 'lucide-react';


const Sidebar = () => {
    return (
        <div className="w-64 border-r flex flex-col h-screen sidebar">
            <div className="p-4 flex flex-row gap-2">
                <Image
                    src={GoogleDriveLogo}
                    alt="Google Drive Logo"
                    height={40}
                    width={40}
                    className=""
                />
                <span className="text-2xl mt-1">Drive</span>
            </div>

            <div className="p-4 bg-white hover:bg-[#edf1fa] w-24 rounded-xl shadow-md ml-4 flex items-center gap-2">
                <Plus size={20} />
                <button className="text-sm">New</button>
            </div>

            <div className="flex">
                <div className="flex flex-row gap-2">
                    <Link href="/">
                        {/*<Image*/}
                        {/*    src={Home}*/}
                        {/*    alt="Home"*/}
                        {/*    height={24}*/}
                        {/*    width={24}*/}
                        {/*/>*/}
                        <House />
                        <span>Home</span>
                    </Link>
                    <Link href="/">
                        <Image
                            src={MyDriveLogo}
                            alt="MyDrive Logo"
                            height={40}
                            width={40}
                        />
                        <span>My Drive</span>
                    </Link>
                    <Link href="/">
                        <span>Computers</span>
                    </Link>
                </div>

            </div>
        </div>
    )
}

export default Sidebar;

"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import StorageProgress from "@/components/StorageProgress";


const Sidebar = () => {
    const [selectedItem, setSelectedItem] = useState('home'); // Track which item is selected
    const [expandedItem, setExpandedItem] = useState({
        'my-drive': false,
        'computers': false
    });

    return (
        <div className="w-64 border-r flex flex-col h-screen sidebar">
            <div className="p-4 flex flex-row gap-2">
                <Image
                    src="/google-drive-logo.png"
                    alt="Google Drive Logo"
                    height={40}
                    width={40}
                />
                <span className="text-2xl mt-1">Drive</span>
            </div>

            <div className="p-4 mt-[-12] items-center">
                <button className="bg-white hover:bg-[#edf1fa] w-24 rounded-2xl shadow-md items-center flex gap-2 px-4 py-4">
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

            <div className="flex flex-col px-4 py-1">
                <button
                    onClick={() => setSelectedItem('home')}
                    className={`w-full rounded-full ${selectedItem === 'home' ? 'bg-[#c2e7ff]' : 'hover:bg-[#e7e8eb]'}`}
                >
                    <div className="flex gap-2 py-1 px-6">
                        <Image
                            src={selectedItem === 'home' ? "/home-active.svg" : "/home-dark.svg"}
                            alt="Home"
                            height={20}
                            width={20}
                        />
                        <span className="text-sm mt-1">Home</span>
                    </div>
                </button>

                <button
                    onClick={() => setSelectedItem('my-drive')}
                    className={`w-full rounded-full ${selectedItem === 'my-drive' ? 'bg-[#c2e7ff]' : 'hover:bg-[#e7e8eb]'}`}
                >
                    <div className="flex gap-2 py-1 px-6">
                        {/*<button onClick={() => setExpandedItem()}>*/}
                        {/*    <Image*/}
                        {/*        src={expandedItem ? '/arrow-expanded.svg' : '/arrow-collapsed.svg'}*/}
                        {/*        alt="Arrow"*/}
                        {/*        width={20}*/}
                        {/*        height={20}*/}
                        {/*    />*/}
                        {/*</button>*/}
                        <Image
                            src={selectedItem === 'my-drive' ? "/my-drive-active.svg" : "/my-drive-dark.svg"}
                            alt="My Drive"
                            height={20}
                            width={20}
                        />
                        <span className="text-sm mt-1">My Drive</span>
                    </div>
                </button>

                <button
                    onClick={() => setSelectedItem('computers')}
                    className={`w-full rounded-full ${selectedItem === 'computers' ? 'bg-[#c2e7ff]' : 'hover:bg-[#e7e8eb]'}`}
                >
                    <div className="flex gap-2 py-1 px-6">
                        {/*<button onClick={() => setExpandedItem(!expandedItem)}>*/}
                        {/*    <Image*/}
                        {/*        src={expandedItem ? '/arrow-expanded.svg' : '/arrow-collapsed.svg'}*/}
                        {/*        alt="Arrow"*/}
                        {/*        width={20}*/}
                        {/*        height={20}*/}
                        {/*    />*/}
                        {/*</button>*/}
                        <Image
                            src={selectedItem === 'computers' ? "/computers-active.svg" : "/computers-dark.svg"}
                            alt="Computers"
                            height={20}
                            width={20}
                        />
                        <span className="text-sm mt-1">Computers</span>
                    </div>
                </button>
            </div>

            <br />

            <div className="flex flex-col px-4 py-1">
                <button
                    onClick={() => setSelectedItem('shared-with-me')}
                    className={`w-full rounded-full ${selectedItem === 'shared-with-me' ? 'bg-[#c2e7ff]' : 'hover:bg-[#e7e8eb]'}`}
                >
                    <div className="flex gap-2 py-1 px-6">
                        <Image
                            src={selectedItem === 'shared-with-me' ? "/shared-with-me-active.svg" : "/shared-with-me-dark.svg"}
                            alt="Shared with Me"
                            height={20}
                            width={20}
                        />
                        <span className="text-sm mt-1">Shared with me</span>
                    </div>
                </button>

                <button
                    onClick={() => setSelectedItem('recent')}
                    className={`w-full rounded-full ${selectedItem === 'recent' ? 'bg-[#c2e7ff]' : 'hover:bg-[#e7e8eb]'}`}
                >
                    <div className="flex gap-2 py-1 px-6">
                        {/*<button onClick={() => setExpandedItem()}>*/}
                        {/*    <Image*/}
                        {/*        src={expandedItem ? '/arrow-expanded.svg' : '/arrow-collapsed.svg'}*/}
                        {/*        alt="Arrow"*/}
                        {/*        width={20}*/}
                        {/*        height={20}*/}
                        {/*    />*/}
                        {/*</button>*/}
                        <Image
                            src={selectedItem === 'recent' ? "/recent-active.svg" : "/recent-dark.svg"}
                            alt="My Drive"
                            height={20}
                            width={20}
                        />
                        <span className="text-sm mt-1">Recent</span>
                    </div>
                </button>

                <button
                    onClick={() => setSelectedItem('starred')}
                    className={`w-full rounded-full ${selectedItem === 'starred' ? 'bg-[#c2e7ff]' : 'hover:bg-[#e7e8eb]'}`}
                >
                    <div className="flex gap-2 py-1 px-6">
                        {/*<button onClick={() => setExpandedItem(!expandedItem)}>*/}
                        {/*    <Image*/}
                        {/*        src={expandedItem ? '/arrow-expanded.svg' : '/arrow-collapsed.svg'}*/}
                        {/*        alt="Arrow"*/}
                        {/*        width={20}*/}
                        {/*        height={20}*/}
                        {/*    />*/}
                        {/*</button>*/}
                        <Image
                            src={selectedItem === 'starred' ? "/starred-active.svg" : "/starred-dark.svg"}
                            alt="Computers"
                            height={20}
                            width={20}
                        />
                        <span className="text-sm mt-1">Starred</span>
                    </div>
                </button>
            </div>

            <br />

            <div className="flex flex-col px-4 py-1">
                <button
                    onClick={() => setSelectedItem('spam')}
                    className={`w-full rounded-full ${selectedItem === 'spam' ? 'bg-[#c2e7ff]' : 'hover:bg-[#e7e8eb]'}`}
                >
                    <div className="flex gap-2 py-1 px-6">
                        <Image
                            src={selectedItem === 'spam' ? "/spam-active.svg" : "/spam-dark.svg"}
                            alt="Home"
                            height={20}
                            width={20}
                        />
                        <span className="text-sm mt-1">Spam</span>
                    </div>
                </button>

                <button
                    onClick={() => setSelectedItem('trash')}
                    className={`w-full rounded-full ${selectedItem === 'trash' ? 'bg-[#c2e7ff]' : 'hover:bg-[#e7e8eb]'}`}
                >
                    <div className="flex gap-2 py-1 px-6">
                        {/*<button onClick={() => setExpandedItem()}>*/}
                        {/*    <Image*/}
                        {/*        src={expandedItem ? '/arrow-expanded.svg' : '/arrow-collapsed.svg'}*/}
                        {/*        alt="Arrow"*/}
                        {/*        width={20}*/}
                        {/*        height={20}*/}
                        {/*    />*/}
                        {/*</button>*/}
                        <Image
                            src={selectedItem === 'trash' ? "/trash-active.svg" : "/trash-dark.svg"}
                            alt="Trash"
                            height={20}
                            width={20}
                        />
                        <span className="text-sm mt-1">Trash</span>
                    </div>
                </button>

                <button
                    onClick={() => setSelectedItem('storage')}
                    className={`w-full rounded-full ${selectedItem === 'storage' ? 'bg-[#c2e7ff]' : 'hover:bg-[#e7e8eb]'}`}
                >
                    <div className="flex gap-2 py-1 px-6">
                        <Image
                            src={selectedItem === 'storage' ? "/storage-active.svg" : "/storage-dark.svg"}
                            alt="Storage"
                            height={20}
                            width={20}
                        />
                        <span className="text-sm mt-1">Storage</span>
                    </div>
                </button>
            </div>

            {/*<StorageProgress />*/}
            <div className="">
                <button className="text-sm rounded-full p-2 ml-10 mt-4 border-2 border-[#8e9190] text-[#0b57d0] hover:bg-[#e6edfa] px-8 py-2">Get more storage</button>
            </div>
        </div>
    )
}

export default Sidebar;

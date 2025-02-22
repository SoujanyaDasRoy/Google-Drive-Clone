"use client"

import { useState } from 'react'
import Image from "next/image"

const MyDrive = () => {
    const [isOpen, setIsOpen] = useState(false)

    const handleClickMyDrive = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="">
            <button 
                onClick={handleClickMyDrive}  
                className="bg-transparent rounded-full hover:bg-[#ededed] px-4 py-1 flex flex-row"
            >
                <span className="text-2xl">My Drive</span>
                <Image
                    src="/arrow-expanded.svg"
                    alt="My Drive Arrow"
                    width={22}
                    height={22}
                />
            </button>
        </div>
    )
}

export default MyDrive

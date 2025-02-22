import React from 'react'
import Image from "next/image"

const FilterBar = () => {
    return (
        <div className="flex gap-4">
            <button className="flex flex-row gap-1 px-4 py-1 border border-[#747775] rounded-lg hover:bg-[#f0f1f1]">
                <span className="text-sm"> Type </span>
                <Image
                    src="/arrow-expanded.svg"
                    alt="My Drive Arrow"
                    width={22}
                    height={22}
                />
            </button>
            <button className="flex flex-row gap-1 px-4 py-1 border border-[#747775] rounded-lg hover:bg-[#f0f1f1]">
                <span className="text-sm"> People </span>
                <Image
                    src="/arrow-expanded.svg"
                    alt="My Drive Arrow"
                    width={22}
                    height={22}
                />
            </button>
            <button className="flex flex-row gap-1 px-4 py-1 border border-[#747775] rounded-lg hover:bg-[#f0f1f1]">
                <span className="text-sm"> Modified </span>
                <Image
                    src="/arrow-expanded.svg"
                    alt="My Drive Arrow"
                    width={22}
                    height={22}
                />
            </button>
            <button className="flex flex-row gap-1 px-4 py-1 border border-[#747775] rounded-lg hover:bg-[#f0f1f1]">
                <span className="text-sm"> Source </span>
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

export default FilterBar
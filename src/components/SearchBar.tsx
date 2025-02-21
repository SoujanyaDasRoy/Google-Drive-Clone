import Image from "next/image";

const SearchBar = () => {
  return (
    <div className="relative flex items-center w-[48vw] my-1">
      <div className="absolute left-3 group cursor-pointer flex items-center justify-center">
        <div className="absolute w-8 h-8 rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Image 
          src="/search-icon.svg"
          alt="Search"
          width={20}
          height={20}
          className="relative z-10"
        />
      </div>
      <input
        type="text"
        placeholder="Search in Drive"
        className="w-[90vw] h-[6vh] pl-10 pr-12 py-2 rounded-full bg-[#e9eef6] focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#1f1f1f]"
      />
      <div className="absolute right-3 cursor-pointer group flex items-center justify-center">
        <div className="absolute w-8 h-8 rounded-full bg-gray-200 opacity-0 group-hover:opacity-100 transition-opacity"></div>
        <Image 
          src="/filter-icon.svg" 
          alt="Filter search" 
          width={24} 
          height={24}
          className="relative z-10"
        />
      </div>
    </div>
  );
};

export default SearchBar;
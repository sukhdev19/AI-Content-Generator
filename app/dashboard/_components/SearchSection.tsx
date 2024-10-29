"use client";

import { Search } from "lucide-react";
import React from "react";

const SearchSection = ({ onSearchInput }: any) => {
  return (
    <div className="p-4 bg-gradient-to-br from-purple-950 via-slate-950 to-black flex flex-col justify-center items-center text-white relative">
      <div className="w-full flex items-center justify-center mb-5 relative">
        <h2 className="text-3xl font-bold">Browse All Templates</h2>
        
        <button className="absolute right-0 bg-purple-600 hover:bg-purple-700 text-xs px-4 py-2 rounded-full text-white font-semibold">
          Join for $9.99/month
        </button>
      </div>
      
      <p className="mb-5">What will you build today?</p>

      <div className="flex gap-2 items-center w-full max-w-md">
        <Search className="text-white" />
        <input
          type="text"
          placeholder="Search"
          onChange={(event) => onSearchInput(event.target.value)}
          className="bg-transparent border-none flex-grow p-2 rounded-md text-white placeholder:text-gray-400 focus:outline-none"
        />
      </div>
    </div>
  );
};

export default SearchSection;

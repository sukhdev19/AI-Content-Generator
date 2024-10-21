import { Search } from 'lucide-react';
import React from 'react';

const SearchSection = ({onSearchInput}:any) => {
  return (
    <div className='p-4 bg-gradient-to-br from-purple-950 via-slate-950 to-black flex flex-col justify-center items-center text-white rounded-lg'>
      <h2 className='text-3xl font-bold mb-2'>Browse All Templates</h2>
      <p className='mb-5'>What will you build today?</p>
      <div className='flex gap-2 items-center w-full max-w-md'>
        <Search className='text-white' />
        <input 
          type="text" 
          placeholder='Search' 
          onChange={(event)=>onSearchInput(event.target.value)}
          className='bg-transparent border-none flex-grow p-2 rounded-md text-white placeholder:text-gray-400 focus:outline-none' 
        />
      </div>
    </div>
  );
}

export default SearchSection;

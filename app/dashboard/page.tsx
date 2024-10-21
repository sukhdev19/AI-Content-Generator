'use client';
import React, { useState } from 'react';
import SearchSection from './_components/SearchSection';
import TemplateListSection from './_components/TemplateListSection';

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>();
  
  return (
    <div>
      {/* Search section */}
      <SearchSection onSearchInput={(value: string) => setUserSearchInput(value)} />
      
      {/* Add padding here for spacing */}
      <div className='py-5'> {/* Adjust the padding value as needed */}
        {/* Template list section */}
        <TemplateListSection userSearchInput={userSearchInput} />
      </div>
    </div>
  );
}

export default Dashboard;

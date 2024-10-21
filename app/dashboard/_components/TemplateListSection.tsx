import Templates from '@/app/(data)/Templates';
import React, { useEffect, useState } from 'react';
import TemplateCard from './TemplateCard';

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

const TemplateListSection = ({ userSearchInput }: any) => {
  const [TemplateList, setTemplateList] = useState<TEMPLATE[]>(Templates); // Set initial state to Templates

  useEffect(() => {
    if (userSearchInput) {
      const filterData = Templates.filter(item =>
        item.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplateList(filterData);
    } else {
      setTemplateList(Templates); // Reset to original templates when search input is empty
    }
  }, [userSearchInput]);

  return (
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
      {TemplateList.map((item: TEMPLATE, index: number) => ( // Use TemplateList here
        <TemplateCard key={index} {...item} />
      ))}
    </div>
  );
}

export default TemplateListSection;

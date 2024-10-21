import React from 'react';
import { TEMPLATE } from './TemplateListSection';
import Link from 'next/link'; // Import for Link

function TemplateCard(item: TEMPLATE) { // Destructure slug correctly
  return (
    <Link href={'/dashboard/content/'+item?.slug}> 
      <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer transition-all hover:bg-gray-100 hover:text-black'>
        <img src={item.icon} alt='icon' width={50} height={50} />
        <h2 className='font-semibold text-xl text-gray-800'>{item.name}</h2> {/* Enhanced name style */}
        <p className='text-gray-700 line-clamp-3 text-sm'>{item.desc}</p> {/* Enhanced desc style */}
      </div>
    </Link>
  );
}

export default TemplateCard;

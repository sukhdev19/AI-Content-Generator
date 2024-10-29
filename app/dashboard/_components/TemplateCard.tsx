import React from 'react';
import { TEMPLATE } from './TemplateListSection';
import Link from 'next/link';

function TemplateCard(item: TEMPLATE) {
  return (
    <Link href={'/dashboard/content/' + item?.slug}>
      <div className="p-5 pb-3 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer transition-all hover:bg-gray-100 hover:text-black min-h-[200px] w-full md:w-[300px]">
        <img src={item.icon} alt="icon" width={50} height={50} />
        <h2 className="font-semibold text-xl text-gray-800">{item.name}</h2>
        <p className="text-gray-700 line-clamp-3 text-sm flex-grow">{item.desc}</p>
      </div>
    </Link>
  );
}

export default TemplateCard;

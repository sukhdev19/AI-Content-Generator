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

// import React from 'react';
// import { TEMPLATE } from './TemplateListSection';
// import Link from 'next/link'; // Import for Link

// function TemplateCard(item: TEMPLATE) { // Destructure slug correctly
//   return (
//     <Link href={'/dashboard/content/' + item?.slug}> 
//       <div className='p-5 shadow-md rounded-md border bg-white flex flex-col gap-3 cursor-pointer transition-all hover:bg-gray-100 hover:text-black min-w-[250px] min-h-[300px]'>
//         <img src={item.icon} alt='icon' width={50} height={50} className="mx-auto"/>
//         <h2 className='font-semibold text-xl text-gray-800 text-center'>{item.name}</h2> {/* Centered name */}
//         <p className='text-gray-700 text-sm text-center'>{item.desc}</p> {/* Centered desc */}
//       </div>
//     </Link>
//   );
// }

// export default TemplateCard;




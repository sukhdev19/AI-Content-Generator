"use client"
import { TEMPLATE } from '@/app/dashboard/_components/TemplateListSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Image from 'next/image';
import React, { useState } from 'react';

interface PROPS {
  selectedTemplate?: TEMPLATE; // Mark selectedTemplate as optional
}

function FormSection({ selectedTemplate }: PROPS) {
    const [formData,setFormdata]=useState<any>();

    const handleInputChange=(event:any)=>{
            const{name,value}=event.target;
            setFormdata({...formData,[name]:value})
    }
    const onSubmit=(e:any)=>{
            e.preventDefault();
    }

  return (
    <div className='p-5 shadow-md border rounded-lg bg-white'>
      {/* Use Next.js Image component with width, height, and alt attributes */}
      {selectedTemplate?.icon && (
        <Image 
          src={selectedTemplate.icon} 
          width={50} 
          height={50} 
          alt={selectedTemplate.name || 'Template icon'} 
        />
      )}
      <h2 className='font-bold text-2xl mb-2 text-purple-950'>{selectedTemplate?.name}</h2>
      <p className='text-gray-900 text-sm'>{selectedTemplate?.desc}</p>
      <form className='mt-6' onSubmit={onSubmit}>
            {selectedTemplate?.form?.map((item,index)=>(
                <div className='my-2 flex flex-col gap-2 mb-7 ' >
                    <label className='fold-bold'>{item.label}</label>
                    {item.field=='input'?
                        <Input name={item.name} required={item?.required} 
                        onChange={handleInputChange}
                        />
                        :item.field=='textarea'?
                        <Textarea
                        name={item.name} required={item?.required} 
                        onChange={handleInputChange}
                        />:null
                    }
                </div>
            ))}
            <Button type="submit" className='w-full py-6'>Generate Content</Button>
      </form>
    </div>
  );
}

export default FormSection;

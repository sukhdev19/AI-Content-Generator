"use client";
import { TEMPLATE } from '@/app/dashboard/_components/TemplateListSection';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Loader2Icon } from 'lucide-react';
import Image from 'next/image';
import React, { useState, ChangeEvent, FormEvent } from 'react';

interface PROPS {
  selectedTemplate?: TEMPLATE; // Mark selectedTemplate as optional
  userFormInput: (data: any) => void; // Add correct typing for function prop
  loading: boolean;
}

function FormSection({ selectedTemplate, userFormInput, loading }: PROPS) {
  const [formData, setFormData] = useState<{ [key: string]: any }>({}); // Initialize as an object

  // Handle input change
  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    userFormInput(formData);
  };

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
        {selectedTemplate?.form?.map((item, index) => (
          <div className='my-2 flex flex-col gap-2 mb-7' key={index}>
            <label className='font-bold'>{item.label}</label>
            {item.field === 'input' ? (
              <Input
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : item.field === 'textarea' ? (
              <Textarea
                name={item.name}
                required={item?.required}
                onChange={handleInputChange}
              />
            ) : null}
          </div>
        ))}
        <Button type="submit" className='w-full py-6' disabled={loading}>
          {loading && <Loader2Icon className='animate-spin' />}
          Generate Content
        </Button>
      </form>
    </div>
  );
}

export default FormSection;

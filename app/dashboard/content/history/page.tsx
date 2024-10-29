'use client';

import React, { useEffect, useState } from 'react';
import { db } from '@/utils/db';
import { useUser } from '@clerk/nextjs';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { AIOutput } from '@/utils/schema';

export interface HISTORY {
  id: number | "";
  formData: string | "";
  aiResponse: string | "";
  templateSlug: string | "";
  createdBy: string | "";
  createdAt: string | "";
}

function History() {
  const [historyData, setHistoryData] = useState<HISTORY[]>([]);
  const { user } = useUser();
  const router = useRouter();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  useEffect(() => {
    const fetchHistory = async () => {
      if (user) {
        const data = await db.select().from(AIOutput);
        setHistoryData(data.slice(-20).reverse() as HISTORY[]); // Show only the latest 20 entries, in recent-first order
      }
    };
    fetchHistory();
  }, [user]);

  const formatFormData = (formData: string) => {
    try {
      const parsedData = JSON.parse(formData);
      return Object.entries(parsedData)
        .map(([key, value]) => `${key.toUpperCase()}: ${value}`)
        .join('   ');
    } catch {
      return formData;
    }
  };

  const toggleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className='max-w-full mx-auto p-4'>
      <div className='bg-gradient-to-r from-purple-900 via-black to-black text-white text-center p-8 rounded-lg shadow-lg mb-6 w-full' style={{ height: '150px' }}>
  <h1 className='text-5xl font-bold leading-tight'>History</h1>
</div>

      <div className='space-y-4'>
        {historyData.map((item, index) => (
          <div
            key={item.id}
            className='bg-gray-100 border border-gray-300 shadow-lg rounded-lg hover:shadow-xl transition-shadow w-full p-6'
          >
            <div className='flex justify-between items-start mb-4'>
              <Button
                // variant='link'
                className='text-xl font-semibold bg-white text-black px-4 py-2 rounded-md hover:bg-black hover:text-white transition'
                onClick={() => router.push(`/dashboard/content/${item.templateSlug}`)}
              >
                {item.templateSlug.replace(/-/g, ' ')}
              </Button>
              <p className='text-lg font-bold text-black'>Created On: {item.createdAt}</p>
            </div>
            <div className='text-center text-gray-900 font-bold text-lg mb-4'>
              {formatFormData(item.formData)}
            </div>
            <div>
              <p
                className={`text-black font-bold mb-2 cursor-pointer hover:text-purple-600 transition-colors ${expandedIndex === index ? 'whitespace-pre-wrap' : ''}`}
                onClick={() => toggleExpand(index)}
              >
                Output:
              </p>
              <div
                className={`${
                  expandedIndex === index ? 'block' : 'line-clamp-3'
                } overflow-hidden text-md font-bold font-mono bg-gray-200 rounded-lg p-4 border border-gray-300 whitespace-pre-wrap leading-relaxed`}
                style={{ fontSize: expandedIndex === index ? '1rem' : '0.875rem', lineHeight: '1.5' }}
              >
                {expandedIndex === index ? item.aiResponse : `${item.aiResponse.slice(0, 100)}...`}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default History;

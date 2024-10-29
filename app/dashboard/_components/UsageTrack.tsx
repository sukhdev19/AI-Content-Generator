'use client';

import { Button } from '@/components/ui/button';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';
import React, { useEffect, useState } from 'react';

interface HISTORY {
  id: number;
  formData: string;
  aiResponse: string | null;
  templateSlug: string | null;
  createdBy: string;
  createdAt: string | null;
}

function UsageTrack() {
  const { user } = useUser();
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const maxCredits = 100000;

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      GetData();
    }
  }, [user]);

  const GetData = async () => {
    try {
      const email = user.primaryEmailAddress?.emailAddress;
      if (email) {
        const result = await db
          .select()
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, email));

        GetTotalUsage(result as HISTORY[]);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const GetTotalUsage = (result: HISTORY[]) => {
    let total = 0;
    result.forEach((element) => {
      total += element.aiResponse?.length || 0;
    });
    setTotalUsage(total);
  };

  const usagePercentage = Math.min((totalUsage / maxCredits) * 100, 100);

  return (
    <div className='m-5'>
      <div className='bg-black text-white p-3 rounded-lg'>
        <h2 className='font-medium'>Credits</h2>
        <div className='h-2 bg-slate-300 w-full rounded mt-3'>
          <div
            className="h-2 bg-gradient-to-r from-violet-900 via-violet-700 to-violet-600 rounded-full"
            style={{
              width: `${usagePercentage}%`,
            }}
          ></div>
        </div>
        <h2 className='text-sm my-2'>
          {totalUsage}/{maxCredits} credits used
        </h2>
      </div>
      <div>
        <Button
          variant={'secondary'}
          className='w-full my-3 bg-violet-900 text-white text-md hover:bg-black hover:text-white transition-colors duration-200'
        >
          Upgrade
        </Button>
      </div>
    </div>
  );
}

export default UsageTrack;

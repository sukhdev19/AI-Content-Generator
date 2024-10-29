// TotalUsageContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { db } from '@/utils/db';
import { AIOutput } from '@/utils/schema';
import { useUser } from '@clerk/nextjs';
import { eq } from 'drizzle-orm';

interface TotalUsageContextProps {
  totalUsage: number;
  maxCredits: number;
}

const TotalUsageContext = createContext<TotalUsageContextProps | undefined>(undefined);

export const TotalUsageProvider = ({ children }: { children: ReactNode }) => {
  const { user } = useUser();
  const [totalUsage, setTotalUsage] = useState<number>(0);
  const maxCredits = 100000;

  useEffect(() => {
    if (user?.primaryEmailAddress?.emailAddress) {
      fetchTotalUsage();
    }
  }, [user]);

  const fetchTotalUsage = async () => {
    try {
      const email = user?.primaryEmailAddress?.emailAddress;
      if (email) {
        // Fetch all aiResponse entries for the user
        const result = await db
          .select({
            aiResponse: AIOutput.aiResponse,
          })
          .from(AIOutput)
          .where(eq(AIOutput.createdBy, email))
          .execute();

        // Calculate the total length of aiResponse strings in JavaScript
        const usage = result.reduce((total, item) => total + (item.aiResponse?.length || 0), 0);
        setTotalUsage(usage);
      }
    } catch (error) {
      console.error('Error fetching total usage:', error);
    }
  };

  return (
    <TotalUsageContext.Provider value={{ totalUsage, maxCredits }}>
      {children}
    </TotalUsageContext.Provider>
  );
};

export const useTotalUsage = () => {
  const context = useContext(TotalUsageContext);
  if (!context) {
    throw new Error('useTotalUsage must be used within a TotalUsageProvider');
  }
  return context;
};

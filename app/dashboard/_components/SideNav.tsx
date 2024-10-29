"use client";

import { FileClock, Home, Settings, WalletCards } from 'lucide-react';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import UsageTrack from './UsageTrack';

const SideNav = () => {
    const router = useRouter(); // Router for navigation
    const path = usePathname();

    const MenuList = [
        {
            name: 'Home',
            icon: Home,
            path: '/dashboard'
        },
        {
            name: 'History',
            icon: FileClock,
            path: '/dashboard/content/history'
        },
        {
            name: 'Billing',
            icon: WalletCards,
            path: '/dashboard/billing'
        },
        {
            name: 'Settings',
            icon: Settings,
            path: '/dashboard/setting'
        },
    ];

    useEffect(() => {
        console.log(path);
    }, [path]);

    return (
        <div className='h-screen relative p-5 shadow-sm border bg-white'>
            <div className='flex justify-center'>
                <Image src={'/logo.svg'} alt='logo' width={40} height={40} />
            </div>
            <hr className='my-6 border' />
            <div className='mt-3'>
                {MenuList.map((menu, index) => (
                    <div
                        key={index}
                        onClick={() => router.push(menu.path)} // Navigate to the path on click
                        className={`flex gap-2 mb-2 p-3 
                            hover:bg-black hover:text-white rounded-lg cursor-pointer items-center
                            ${path === menu.path && 'bg-black text-white'}
                        `}
                    >
                        <menu.icon className='h-7 w-6' />
                        <h2 className='text-lg'>{menu.name}</h2>
                    </div>
                ))}
            </div>
            <div className='absolute bottom-10 left-0 w-full'>
                <UsageTrack />
            </div>
        </div>
    );
};

export default SideNav;

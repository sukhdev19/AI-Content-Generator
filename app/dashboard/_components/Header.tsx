import { Search } from 'lucide-react'
import React from 'react'

const Header = () => {
  return (
    <div className='p-5 shadow-sm border-b-2 flex justify-between'>
        <div className='flex gap-2 items-center p-2 border rounded-md max-w-lg'>
          <Search/>
          <input type='text' placeholder='Search' className='outline-none'/>
        </div>
        <div className='bg-gray-950 rounded-full text-xs text-white px-2 flex items-center'>
          <h2 className='text-lg'>Join Membership for just $9.99/month</h2>
        </div>
    </div>
  )
}

export default Header
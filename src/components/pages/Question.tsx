import { Copy, Trash2 } from 'lucide-react'
import React from 'react'

function Question() {
  return (
    <div className='w-full max-h-[23vh] lg:max-h-[140px] lg:min-h-[140px] py-1 flex gap-1 lg:py-3'>
        <div className='text-gray-700 flex flex-col gap-2 items-center justify-end '>
        <Copy size={16}/>
        <Trash2 size={16}/>
        </div>
        <div className='w-[150px] bg-gray-200 h-full rounded-lg cursor-pointer border-4 border-gray-200 hover:border-gray-300 '>
          <div className='flex flex-col gap-2 items-center relative'>
            <h3>title</h3>
              <div className='absolute top-[50%] -translate-y-[50%] left-2 border-2 border-gray-300 h-6 w-6  flex items-center justify-center rounded-[50%] text-xs'>20</div>
              <div className='bg-yellow-100 w-[60px] h-10'></div>
          
            <div className='flex flex-wrap items-center justify-center mt-1 gap-1'>
              <div className='w-[65px] h-2 border border-black '></div>
              <div className='w-[65px] h-2 border border-black '></div>
              <div className='w-[65px] h-2 border border-black '></div>
              <div className='w-[65px] h-2 border border-black '></div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Question
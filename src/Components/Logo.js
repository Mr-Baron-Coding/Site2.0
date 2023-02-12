import React from 'react'

export default function Logo() {
  return (
    <div className='col-start-2 flex justify-around align-bottom flex-col'>
        <div className='h-55px w-55px flex justify-center'>
            <div className='w-42px h-2px rounded-l-sm bg-white absolute -rotate-45 -translate-x-3 translate-y-4'></div>
            <div className='w-42px h-2px rounded-sm bg-white absolute -rotate-45 translate-x-3 translate-y-10'></div>
            <div className='w-34px h-2px rounded-sm bg-white absolute rotate-90 translate-x-1 translate-y-4'></div>
            <div className='w-34px h-2px rounded-sm bg-white absolute translate-x-3 translate-y-6'></div>
            <div className='w-77px h-2px rounded-sm bg-white absolute rotate-45 translate-y-26px'></div>
            {/* <div className='w-2 h-2 rounded-t-full border-t-2 border-white border-solid absolute rotate-15 translate-x-3'></div>
            <div className='w-2 h-2 rounded-t-full border-t-2 border-white border-solid absolute'></div> */}
        </div>
    </div>
  )
}

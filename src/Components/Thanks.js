import React from 'react';
import { Link } from 'react-router-dom';

export default function Thanks() {
  return (
    <div className='bg-blueGrey-100 text-blueGrey-500
    dark:bg-blueGrey-700 dark:text-blueGrey-100 h-full flex items-center justify-center'>
      <div>
        <div className='text-4xl font-black m-10'>Thank you!</div>
        <Link to='/'><div className='text-2xl m-10'>Let's go BACK</div></Link>
      </div>
      
    </div>
  )
}

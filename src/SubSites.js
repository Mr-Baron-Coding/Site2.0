import React from 'react';
import { Link } from 'react-router-dom';
import FormInput from './FamTree/FormInput';
import Preview from './FamTree/Preview';

export default function SubSites() {
  return (
    <div className='grid grid-cols-[5vw,_1fr,_5vw] grid-rows-[10vh,_1fr,_10vh] border min-h-screen'>
        <div className='col-start-2'>Let's refresh</div>
        <div className='col-start-2 row-start-2 grid grid-cols-2 border border-purple-300'>
          <FormInput />
          <Preview />
        </div>
        <div className='cols-start-1 col-span-3 row-start-3 text-2xl'><Link to='/'>Back</Link></div>
    </div>
  )
}

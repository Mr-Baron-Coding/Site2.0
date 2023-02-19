import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { closeForm } from './FamTree/Features/dataSlice';
import FormInput from './FamTree/FormInput';
import Preview from './FamTree/Preview';

export default function SubSites() {
  const dispatch = useDispatch();
  const isFormOpen = useSelector((state) => state.famData.inputFormOpen);
  const scrollbar = window.scrollbars;

  useEffect(() => {
    const bar = window.document.scrollingElement;
    console.log(bar);
  },[scrollbar])
  return (
    <div className='grid grid-cols-[5vw,_1fr,_5vw] md:grid-cols-[5vw,_1fr] grid-rows-[10vh,_1fr,_10vh] min-h-screen min-w-[360px] md:min-w-[800px] bg-fam-background text-fam-color font-fam'>
        <div className='col-start-1 col-span-3 border-b-2 row-start-1 grid grid-cols-4'><div className='col-start-1 col-span-2 flex items-center'>Let's refresh</div><div className='col-start-4 flex justify-center items-end md:invisible' onClick={ () => dispatch(closeForm()) }>+</div></div>
        <div className='md:col-start-1 md:row-start-2 md:row-span-2 md:border-r-2 hidden md:flex md:justify-center md:items-center' onClick={ () => dispatch(closeForm()) }>+</div>
        <div className={`col-start-2 row-start-2 grid  min-h-[550px] ${isFormOpen ? 'grid-rows-[40%,_60%] md:grid-rows-none md:grid-cols-[50%,_50%] lg:grid-cols-[40%,_60%]' : 'grid-rows-1 md:grid-rows-none md:grid-cols-1 lg:grid-cols-1'}`}>
          { isFormOpen && <FormInput /> }
          <Preview />
        </div>
        <div className='col-start-1 col-span-3 row-start-3 text-2xl'><Link to='/'>Back</Link></div>
    </div>
  )
}

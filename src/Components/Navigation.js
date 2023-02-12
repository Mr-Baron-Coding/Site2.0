import React from 'react';
import Logo from './Logo';

import { useDispatch, useSelector } from 'react-redux';

import { DarkMode, LightMode } from '@mui/icons-material';
import { changeTheme } from '../Features/styleSlice';

export default function Navigation() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.style.isDark);

  const themeChange = (x) => {
    dispatch(changeTheme(x))
    document.documentElement.classList.contains('dark') ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
  };
  return (
    <div className='
      md:col-start-1 
      md:col-span-3 
      md:row-start-1 
      md:row-span-1 
      md:text-center 
      font-black
      border-b-2 
      hidden 
      md:grid 
      justify-evenly 
      align-center
      md:grid-cols-5 
      text-blueGrey-100
      bg-blueGrey-500/90
    dark:bg-blueGrey-900/50'
    >
      <Logo />
      <div className='col-start-4 col-span-2 grid grid-flow-col items-end'>
        <a href='#skills' className='h-1/2 hover:text-blueGrey-500 scroll-smooth' ><div>Skills</div></a>
        <a href='#projects' className='h-1/2 hover:text-blueGrey-500 scroll-smooth' ><div>Projects</div></a>
        <a href='#contact' className='h-1/2 hover:text-blueGrey-500 scroll-smooth' >Contact</a>
        <div className='h-1/2'>
          {!isDark ? <DarkMode className='hover:fill-blueGrey-500' onClick={ () => themeChange(false) } /> : <LightMode className='hover:fill-blueGrey-500' onClick={ () => themeChange(true) } />}
        </div>
      </div>
        
    </div>
  )
};
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DarkMode, LightMode } from '@mui/icons-material';
import { changeTheme } from '../Features/styleSlice';

export default function MobileNav() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.style.isDark);

  const themeChange = (x) => {
    dispatch(changeTheme(x))
    document.documentElement.classList.contains('dark') ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
  };
  return (
    <div className='col-start-1 col-span-4 md:hidden grid 
    justify-evenly 
    align-center
    grid-cols-4 
    text-blueGrey-100
    bg-blueGrey-500/90
  dark:bg-blueGrey-900/50'>
      <div className='col-start-1 col-span-4 grid grid-flow-col items-center md:items-end'>
        <a href='#skills' className='h-1/2 scroll-smooth' ><div>Skills</div></a>
        <a href='#projects' className='h-1/2 scroll-smooth' ><div>Projects</div></a>
        <a href='#contact' className='h-1/2 scroll-smooth' >Contact</a>
        <div className='h-1/2'>
          {!isDark ? <DarkMode  onClick={ () => themeChange(false) } /> : <LightMode onClick={ () => themeChange(true) } />}
        </div>
      </div>
    </div>
  )
}

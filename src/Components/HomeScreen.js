import React, { useEffect, useState, useLayoutEffect } from 'react';

import Header from './Homescreen Comp/Header';
import About from './Homescreen Comp/About';
import Intro from './Homescreen Comp/Intro';
import MobileNav from './MobileNav';

export default function HomeScreen() {
    const [screenWidth, setWidth] = useState(0);
    const [screenHeight, setHeight] = useState(0);

    const [hCols, setCols] = useState(0);
    const [hRows, setRows] = useState(0);
    
    let size = 0;
    let cols = 0;
    let rows = 0;
  return (
    <div 
      className='
          text-center snap-end
          col-start-2 
          col-span-1 
          row-start-2 
          md:row-start-2
          grid
          grid-cols-4
          grid-rows-homeScreenMobileRows
          md:grid-rows-homeScreenRows
          md:gap-4'>
      <Header />
      <MobileNav />
      <Intro />
      <About />
    </div>
  )
};
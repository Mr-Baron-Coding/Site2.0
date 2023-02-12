import React from 'react';

import Header from './Homescreen Comp/Header';
import About from './Homescreen Comp/About';
import Intro from './Homescreen Comp/Intro';
import MobileNav from './MobileNav';

export default function HomeScreen() {
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
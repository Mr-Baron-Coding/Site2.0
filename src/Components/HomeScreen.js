import React from 'react';

import Header from './Homescreen Comp/Header';
import About from './Homescreen Comp/About';
import Intro from './Homescreen Comp/Intro';
import MobileNav from './MobileNav';

export default function HomeScreen() {
  return (
    <div 
      className='
          text-center 
          col-start-2 
          col-span-1 
          row-start-2 
          md:row-start-2
          md:grid
          md:grid-cols-4
          flex flex-col gap-6 md:pt-0
          md:grid-rows-homeScreenRows
          md:gap-4'>
      <Header />
      <MobileNav />
      <Intro />
      <About />
    </div>
  )
};
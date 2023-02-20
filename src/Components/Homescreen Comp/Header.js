import React, { useState, useLayoutEffect, useEffect, createElement} from "react";
import './Style.css';
import anime from 'animejs/lib/anime.es.js';
import ThreePlayGround from "../../ThreePlayGround";

export default function Header() {
    const styles = { linearGradient: 'to right, rgb(123, 31, 162) rgb(103, 58, 183) rgb(244, 143, 177)'}

  return (
    <div 
        id='header' 
        className="relative bg-clip-border
            grid-cols-6
            grid-rows-3
            col-span-4 
            mb-5 md:mb-0
            md:col-start-2 
            md:col-span-2 overflow-hidden 
            md:grid">
                <ThreePlayGround /> 
        <div className="text-4xl lg:text-4xl col-start-1 col-span-4 md:col-span-6 flex items-center justify-center md:justify-start md:items-end">
            Hi! I'm<span className="font-header ml-3 text inline-block relative">
                <span style={{ background: 'linear-gradient(to right, #778DA9, #E0E1DD, #778DA9)', backgroundSize: '200%', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', whiteSpace:'nowrap' }} className='animate-magicText'>Mike Baron</span>
                </span>
        </div>
        <div className="text-2xl lg:text-3xl col-start-1 col-span-6 md:row-start-2 md:flex md:items-center">
            <span className='text-xl'>{`<>`}</span> 
                Fullstack developer 
            <span className='text-xl'>{`</>`}</span>
        </div>   
            <div className='text-right col-start-3 col-span-2 text-lg lg:text-mdn lg:col-start-3 lg:text-left animate-slideElement'>&& Detective</div>
    </div>
  );
}

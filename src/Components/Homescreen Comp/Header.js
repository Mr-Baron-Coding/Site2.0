import React from "react";

export default function Header() {
  return (
    <div 
        id='header' 
        className="
            grid-cols-6
            grid-rows-3
            col-span-4 
            mb-5 md:mb-0
            md:col-start-2 
            md:col-span-2 overflow-hidden 
            md:grid">
        <div className="text-4xl lg:text-4xl col-start-1 col-span-4 md:col-span-6 flex items-center justify-center md:justify-start md:items-end">
            Hi! I'm<span className="font-header ml-3 text">Mike Baron</span>
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

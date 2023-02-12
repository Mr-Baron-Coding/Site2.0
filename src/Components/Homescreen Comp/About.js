import React from 'react';

export default function About() {
  return (
    <div 
      className=" col-span-4 
                  lg:col-start-2 
                  md:col-start-1
                  lg:col-span-2 
                  md:col-span-4 
                  row-start-4 
                  md:row-start-3 
                  text-center 
                  md:text-left 
                  flex 
                  flex-col justify-evenly
                  gap-4 
                  shadow-xl rounded-xl
                  bg-blueGrey-500/10 p-3">
        <div className='text-left md:text-2xl border-b'>about Me:</div>
        <div className='text-lg md:text-xl'>
            A Fullstack developer from Israel.
        </div>
        <div className='md:text-xl'>       
            Completed frontend programing bootcamp with SVCollage, since then I began learning on my own as coding and developing web and mobile applications became my passion.    
        </div>
        <div className='md:text-xl'>
            Self learner that not afraid to tackle complex problem, team player and guitar enthusiast.
        </div>
    </div>
  )
}

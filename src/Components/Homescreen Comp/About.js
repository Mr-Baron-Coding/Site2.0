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
                  flex justify-between items-center
                  min-h-min grow">
        <div className='bg-blueGrey-500/10 w-full flex flex-col gap-4 shadow-xl rounded-xl p-3'>
          <div className='text-left text-xl md:text-3xl lg:text-4xl border-b'>about Me:</div>
          <div className='text-lg md:text-xl xl:text-2xl flex flex-col gap-4 p-4'>
            <div>I am a Fullstack developer based in Israel.</div>
          
            <div>
              I completed a frontend programming bootcamp with SVCollage and have since continued to pursue my passion for coding and developing web and mobile applications through self-directed learning. 
              I enjoy taking on complex problems and consider myself a lifelong learner.
              <br/> As a team player, I believe in the power of collaboration to achieve great results.
            </div> 
            <div>When I'm not coding, you can find me playing the guitar or exploring new technologies.</div>
          </div>
        </div>
    </div>
  )
}

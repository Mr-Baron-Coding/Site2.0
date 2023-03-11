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
                  flex-col justify-around
                  gap-4 
                  shadow-xl rounded-xl
                  bg-blueGrey-500/10 p-3">
        <div className='text-left md:text-2xl border-b'>about Me:</div>
        <div>
        I am a Fullstack developer based in Israel.
        <br/>
        I completed a frontend programming bootcamp with SVCollage and have since continued to pursue my passion for coding and developing web and mobile applications through self-directed learning. 
        I enjoy taking on complex problems and consider myself a lifelong learner. As a team player, I believe in the power of collaboration to achieve great results.
        <br/> 
        When I'm not coding, you can find me playing the guitar or exploring new technologies.
        </div>
        {/* <div className='text-lg md:text-xl'>
            A Fullstack developer from Israel.
        </div>
        <div className='md:text-xl'>       
            Completed frontend programing bootcamp with SVCollage, since then I began learning on my own as coding and developing web and mobile applications became my passion.    
        </div>
        <div className='md:text-xl'>
            Self learner that not afraid to tackle complex problem, team player and guitar enthusiast.
        </div> */}
    </div>
  )
}

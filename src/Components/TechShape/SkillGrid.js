import React from 'react';
import { GrReactjs } from 'react-icons/gr';
import { DiCss3, DiMongodb } from 'react-icons/di';
import { TbBrandReactNative } from 'react-icons/tb';
import { FaHtml5, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiPython, SiMysql, SiPostgresql, SiFlutter } from 'react-icons/si';
// SiGraphql
export default function HaxagonGrid() {
    const skillz = [
        { name: 'Javascript', start: 2, icon: <SiJavascript size={26} /> },
        { name: 'HTML', start: 3, icon: <FaHtml5 size={26} /> },
        { name: 'CSS', start: 4, icon: <DiCss3 size={26} /> },
        { name: 'Python', start: 2, icon: <SiPython size={26} /> },
        { name: 'ReactJS', start: 3, icon: <GrReactjs size={26} /> },
        { name: 'React Native', start: 1, icon: <TbBrandReactNative size={26} /> },
        { name: 'NodeJS', start: 3, icon: <FaNodeJs size={26} /> },
        { name: 'Express', start: 5, icon: 'express' },
        { name: 'AWS', start: 2, icon: <FaAws size={26} /> },
        { name: 'Tailwind', start: 4, icon: <SiTailwindcss size={26} /> },
        { name: 'Flutter', start: 4, icon: <SiFlutter size={26} /> },
        { name: 'MongoDB', start: 1, icon: <DiMongodb size={26} /> },
        { name: 'MySQL', start: 2, icon: <SiMysql size={26} /> },
        { name: 'PostgreSQL', start: 1, icon: <SiPostgresql size={26} /> },
    ];
    
  return (
    <div className='md:col-start-2 col-span-2 group p-3 flex flex-col justify-around items-center h-full w-full bg-blueGrey-500/10 shadow-xl rounded-xl'>
        <div className='flex w-full h-full justify-evenly items-center group/line'>
            { skillz.map((e,i) => {
                    return (
                        i < 4 &&<div className='flex w-full h-full justify-center items-center' key={i}>
                                    <div className='flex justify-center items-center transition-all duration-700 ease-linear hex bg-blueGrey-300 md:group-hover/line:fieldBox'>
                                        { e.icon }
                                    </div>
                                </div>                            
                )
            })}
        </div>
        <div className='w-full h-full flex justify-center items-center group/line'>
        <div className='flex w-3/4 h-full justify-evenly items-center group/line'>
            { skillz.map((e,i) => {
                    return (
                        (i >= 4 && i < 7) &&<div className='flex w-full h-full justify-center items-center' key={i}>
                                                <div className='flex justify-center items-center transition-all duration-700 ease-linear hex bg-blueGrey-300 md:group-hover/line:fieldBox'>
                                                    { e.icon }
                                                </div>
                                            </div>                            
                )
            })}
        </div>
        </div>
        <div className='flex w-full h-full justify-evenly items-center group/line'>
            { skillz.map((e,i) => {
                    return (
                        (i >= 7 && i < 11) &&<div className='flex w-full h-full justify-center items-center' key={i}>
                                                <div className='flex justify-center items-center transition-all duration-700 ease-linear hex bg-blueGrey-300 md:group-hover/line:fieldBox'>
                                                    { e.icon }
                                                </div>
                                            </div>                            
                )
            })}
        </div>
        <div className='w-full h-full flex justify-center items-center group/line'>
        <div className='flex w-3/4 h-full justify-evenly items-center'>
            { skillz.map((e,i) => {
                    return (
                        (i >= 11 ) &&<div className='flex w-full h-full justify-center items-center' key={i}>
                                        <div className='flex justify-center items-center transition-all duration-700 ease-linear hex bg-blueGrey-300 md:group-hover/line:fieldBox'>
                                            { e.icon }
                                        </div>
                                    </div>                            
                )
            })}
        </div>
        </div>
    </div>
  )
};
// <div alt='hi' key={i}
                    //     className={`
                            
                    //         mx-auto
                    //         md:scale-110
                    //         lg:scale-150
                    //         md:hover:bg-grey md:hover:text-blueGrey-700 md:hover:z-20 hex
                    //         transition-all duration-700 ease-linear
                    //         md:group-hover:fieldBox
                    //         bg-blueGrey-300
                    //         flex justify-center items-center`}
                    // >
                    //     { e.icon }
                    // </div>
    //                  [&>div:nth-child(n+5):nth-child(-n+7)]:row-start-2 
    //                  [&>div:nth-child(n+5):nth-child(-n+7)]:translate-x-[174%]
    //                  [&>div:nth-child(n+8):nth-child(-n+12)]:row-start-3 
    //                  [&>div:nth-child(n+12):nth-child(-n+15)]:row-start-4 
    //                  md:[&>div:nth-child(n+12):nth-child(-n+15)]:translate-x-[85px]
    //                  [&>div:nth-child(n+12):nth-child(-n+15)]:translate-x-[33px]
import React, { useState, useRef } from 'react';
import useIntersectionObserver from '../useIntersectionObserver';
import { GrReactjs } from 'react-icons/gr';
import { DiCss3, DiMongodb } from 'react-icons/di';
import { TbBrandReactNative } from 'react-icons/tb';
import { FaHtml5, FaNodeJs, FaAws } from 'react-icons/fa';
import { SiJavascript, SiTailwindcss, SiPython, SiMysql, SiPostgresql, SiFlutter } from 'react-icons/si';
// SiGraphql
export default function HaxagonGrid({isIntersecting}) {
    // const ref = useRef();
    // const isIntersecting = useIntersectionObserver(ref, { threshold: 1 });

    const [line, setLine] = useState(0);
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
        { name: 'TailwindCSS', start: 4, icon: <SiTailwindcss size={26} /> },
        { name: 'Flutter', start: 4, icon: <SiFlutter size={26} /> },
        { name: 'MongoDB', start: 1, icon: <DiMongodb size={26} /> },
        { name: 'MySQL', start: 2, icon: <SiMysql size={26} /> },
        { name: 'PostgreSQL', start: 1, icon: <SiPostgresql size={26} /> },
    ];

    const hoverHandler = (line) => {
        setLine(prev => line)
    };

    const unHoverHandler = () => {
        setLine(prev => 0 )
    };
    
  return (
    <div className='md:col-start-1 md:col-span-4 lg:col-start-2 lg:col-span-2 group p-4 flex flex-col justify-around items-center h-full w-full bg-blueGrey-500/10 shadow-xl rounded-xl'>
        <div className='flex w-full h-full justify-evenly items-center group/line overflow-hidden' onMouseEnter={() => hoverHandler(1)} onMouseLeave={() => unHoverHandler()}>
            { skillz.map((e,i) => {
                    return (
                        i < 4 &&<div className={`flex w-full h-full justify-center items-center ${isIntersecting ? 'translate-x-0 transition-all duration-500 ease-linear delay-100' : '-translate-y-[200%]'}`} key={i}>
                                    <div className={`flex justify-center items-center transition-all duration-700 ease-linear hex bg-blueGrey-300 overflow-hidden md:group-hover/line:fieldBox`}>
                                        <div className={`absolute transition-all duration-700 delay-300 ease-linear ${line === 1 ? '-translate-y-[200%] blur-sm' : 'translate-y-0'}`}>{ e.icon }</div>
                                        <div className={`absolute transition-all duration-700 delay-300 ease-linear ${line === 1 ? 'translate-y-0' : 'translate-y-[200%] blur-sm'}`}>{ e.name }</div>
                                    </div>
                                </div>                            
                )
            })}
        </div>
        <div className='w-full h-full flex justify-center items-center group/line' onMouseEnter={() => hoverHandler(2)} onMouseLeave={() => unHoverHandler()}>
        <div className='flex w-3/4 h-full justify-evenly items-center group/line overflow-hidden'>
            { skillz.map((e,i) => {
                    return (
                        (i >= 4 && i < 7) &&<div className={`flex w-full h-full justify-center items-center ${isIntersecting ? 'translate-x-0 transition-all duration-500 ease-linear delay-700' : '-translate-x-[300%]'}`} key={i}>
                                                <div className='flex justify-center items-center transition-all duration-700 ease-linear hex bg-blueGrey-300 overflow-hidden md:group-hover/line:fieldBox'>
                                                    <div className={`absolute transition-all duration-700 delay-300 ease-linear ${line === 2 ? '-translate-y-[200%] blur-sm' : 'translate-y-0'}`}>{ e.icon }</div>
                                                    <div className={`absolute transition-all duration-700 delay-300 ease-linear ${line === 2 ? 'translate-y-0' : 'translate-y-[200%]'}`}>{ e.name }</div>
                                                </div>
                                            </div>                            
                )
            })}
        </div>
        </div>
        <div className='flex w-full h-full justify-evenly items-center group/line overflow-hidden' onMouseEnter={() => hoverHandler(3)} onMouseLeave={() => unHoverHandler()}>
            { skillz.map((e,i) => {
                    return (
                        (i >= 7 && i < 11) &&<div className={`flex w-full h-full justify-center items-center ${isIntersecting ? 'translate-x-0 transition-all duration-500 ease-linear delay-500' : 'translate-y-[200%]'}`} key={i}>
                                                <div className='flex justify-center items-center transition-all duration-700 ease-linear hex bg-blueGrey-300 overflow-hidden md:group-hover/line:fieldBox'>
                                                    <div className={`absolute transition-all duration-700 delay-300 ease-linear ${line === 3 ? '-translate-y-[200%] blur-sm' : 'translate-y-0'}`}>{ e.icon }</div>
                                                    <div className={`absolute transition-all duration-700 delay-300 ease-linear ${line === 3 ? 'translate-y-0' : 'translate-y-[200%]'}`}>{ e.name }</div>
                                                </div>
                                            </div>                            
                )
            })}
        </div>
        <div className='w-full h-full flex justify-center items-center group/line' onMouseEnter={() => hoverHandler(4)} onMouseLeave={() => unHoverHandler()}>
        <div className='flex w-3/4 h-full justify-evenly items-center overflow-hidden'>
            { skillz.map((e,i) => {
                    return (
                        (i >= 11 ) &&<div className={`flex w-full h-full justify-center items-center ${isIntersecting ? 'translate-x-0 transition-all duration-500 ease-linear delay-300' : 'translate-x-[300%]'}`} key={i}>
                                        <div className='flex justify-center items-center transition-all duration-700 ease-linear hex bg-blueGrey-300 overflow-hidden md:group-hover/line:fieldBox'>
                                            <div className={`absolute transition-all duration-700 delay-300 ease-linear ${line === 4 ? '-translate-y-[200%] blur-sm' : 'translate-y-0'}`}>{ e.icon }</div>
                                            <div className={`absolute transition-all duration-700 delay-300 ease-linear ${line === 4 ? 'translate-y-0' : 'translate-y-[200%]'}`}>{ e.name }</div>
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
                    //         lg:scale-200
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
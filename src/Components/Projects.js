import React, { useState, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { openClose } from '../Features/mobileSlice';
import { Link } from 'react-router-dom';
import useIntersectionObserver from './useIntersectionObserver';

import Calc from '../Projects/Calcu/CalcScreen';
import Su from '../Projects/Sudoko/GameDisplay';
import XO from '../Projects/XO/GameTable';

import { TbBrandGithub } from "react-icons/tb";

export default function Projects() {
  const ref = useRef();
  const dispatch = useDispatch();
  const [screens, setScreens] = useState([
    { screen: <Su />, name: 'Suduko', show: false, visit: 'Github', style: 'h-SudHieght w-SudWidth' },
    // { screen: 'Here', name: 'Suduko', show: false, visit: 'Github', style: 'h-SudHieght w-SudWidth' },
    { screen: <XO />, name: 'XO', show: false, visit: 'https://github.com/Mr-Baron-Coding/XO', style: 'h-XOHeight w-XOWidth' },
    { screen: <Calc />, name: 'Calculator', show: false, visit: 'https://github.com/Mr-Baron-Coding/Calculator', style: 'h-calcHeight w-calcWidth' },
  ]);
  const [window, setWindow] = useState(false);
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.8 });

  const handleClick = (screen) => {
    setScreens(screens.map((e,i) => {
      if ( screen === i ) { 
        if ( !screens[screen].show ) {
          setWindow(true)
          dispatch(openClose(true))
        } else { 
            setWindow(false) 
            dispatch(openClose(false))
          }
        return { ...e, show: !screens[screen].show }
      } else { 
        return { ...e, show: false }}
    }))
  };

  return (
    <>
    <div id={`${!window&&'projects'}`} className={`p-3 md:p-0 row-start-6 md:row-start-4 col-start-2 w-full h-full bg-blueGrey-500/10 grid grid-rows-[20%,_80%] rounded-lg md:grid-rows-none md:grid-cols-[25%,_20%,_30%,_25%] justify-items-center items-center shadow-xl`} ref={ref}>
      <div className='md:col-start-1 md:col-span-2 md:flex md:items-center md:justify-center lg:justify-start lg:col-start-2 lg:col-span-1 flex w-full h-full lg:text-left items-center border-b md:border-none lg:text-xl xl:text-2xl'>some of my Projects:</div>
      <div className={`md:col-start-3 xl:col-start-3 md:row-start-1 border-b md:border-none grid grid-cols-2 grid-rows-2 w-full h-full md:flex md:justify-center md:items-center md:gap-0 md:relative`}>
        { screens.map((e,i) => {
          return (
            <div 
              key={i} 
              className={
                          `border-blueGrey-300 md:m-0 border-2 h-full w-3/4 md:scale-[0.7] xl:scale-90 md:absolute md:mdCard transition-all duration-500 ease-linear md:hover:bg-blueGrey-500/50  md:hover:shadow-inner md:hover:shadow-blueGrey-300 md:hover:text-blueGrey-900 md:hover:z-50  md:hover:dark:bg-blueGrey-500/90 md:hover:dark:text-blueGrey-100
                            ${ !window ? i === 0 && (isIntersecting ? 'md:origin-bottom-left md:-translate-x-[80px] md:-rotate-12 z-10 bg-blueGrey-300/60' : 'md:origin-bottom-left md:translate-y-0')  : i === 0 && 'md:bg-blueGrey-500/50 md:-translate-x-[100px] xl:-translate-x-[145px]' } 
                            ${ !window ? i === 1 && (isIntersecting ? 'md:origin-bottom md:rotate-0 md:text-center md:z-30 bg-blueGrey-300/80' : 'md:origin-bottom') : i === 1 && 'md:bg-blueGrey-300/50 group-hover:-translate-y-10' } 
                            ${ !window ? i === 2 && (isIntersecting ? 'md:origin-bottom-right md:translate-x-[80px] md:rotate-12 md:text-end z-10 bg-blueGrey-300/60' : 'md:origin-bottom-right md:translate-y-0') : i === 2 && 'md:bg-blueGrey-300/50 md:translate-x-[100px] xl:translate-x-[145px]' } 
                            rounded-lg transition ease-in-out duration-500 rotate-0 bg-none grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 
                            ${ e.show && 'transition ease-linear duration-500 rotate-6 bg-blueGrey-700 md:bg-blueGrey-700 border-blueGrey-100' }
                          `} 
              onClick={ !e.show?(() => handleClick(i)) : undefined }
            >
              <div className={`transition-all md:text-lg text-center align-middle ${e.show&& 'flex items-center justify-center md:text-2xl'}`} onClick={() => handleClick(i)}>{e.name}</div>
              {e.show&&
              <a href={`${e.visit}`} rel="noreferrer" target="_blank">
                <div className='-rotate-6 flex items-center justify-center group'>
                  <TbBrandGithub className='group-hover:fill-blueGrey-300 group-hover:stroke-2 group-hover:stroke-blueGrey-500 animate-bounce' size={ 28 } />
                </div>
              </a>}      
            </div>
          )
        })}
      </div>
    </div>
    {/* Display component for projects */}
    {window&&<div id={`${window&&'projects'}`} className={`row-start-7 col-start-2 md:col-start-2 md:row-start-5 w-full h-full flex justify-center md:justify-center md:items-center rounded-xl`}>
        { screens.map((e,i) => {
          return (
            e.show ? 
            <div key={i+3} className={`h-full max-w-md w-full flex justify-center md:h-proHeight md:w-proWidth shadow-xl dark:animate-projectAnimation rounded-xl`}>
              {i===3 ? <Link to='/future' onClick={ () => handleClick(i) }>{e.screen}</Link> : e.screen}
            </div> 
            : null
          )
      })}
      </div>  
      }
    </>
  )
}

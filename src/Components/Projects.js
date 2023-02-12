import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { openClose } from '../Features/mobileSlice';
import { Link } from 'react-router-dom';

import Calc from '../Projects/Calcu/CalcScreen';
// import Su from '../Projects/Sudoko/GameDisplay';
import XO from '../Projects/XO/GameTable';

import { TbBrandGithub } from "react-icons/tb";

export default function Projects() {
  const dispatch = useDispatch();
  const [screens, setScreens] = useState([
    // { screen: <Su />, name: 'Suduko', show: false, visit: 'Github', style: 'h-SudHieght w-SudWidth' },
    // { screen: 'Here', name: 'Suduko', show: false, visit: 'Github', style: 'h-SudHieght w-SudWidth' },
    { screen: <XO />, name: 'XO', show: false, visit: 'Github', style: 'h-XOHeight w-XOWidth' },
    { screen: <Calc />, name: 'Calculator', show: false, visit: 'Github', style: 'h-calcHeight w-calcWidth' },
  ]);
  const [window, setWindow] = useState(false);

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
    <div id={`${!window&&'projects'}`} className={`p-3 md:p-0 row-start-6 md:row-start-4 col-start-2 w-full h-full grid grid-rows-[20%,_80%] rounded-lg md:grid-rows-none md:grid-cols-[25%,_20%,_30%,_25%] justify-items-center items-center animate-projectAnimation md:animate-none`}>
      <div className='md:col-start-2 flex w-full h-full text-left items-center border-b lg:text-xl xl:text-2xl'>some of my Projects:</div>
      <div className='md:col-start-3 xl:col-start-3 md:row-start-1 border-b md:border-b grid grid-cols-2 grid-rows-2 w-full h-full md:flex md:justify-center md:items-center md:gap-0 md:relative'>
        { screens.map((e,i) => {
          return (
            <div 
              key={i} 
              className={
                          `border-blueGrey-300 md:m-0 border-2 h-full w-3/4 md:scale-[0.7] xl:scale-90 md:absolute md:mdCard transition-all
                            ${ !window ? i === 0 && 'md:origin-bottom-right md:rotate-[30deg]' : i === 0 && 'md:bg-blueGrey-500/50 md:-translate-x-[100px] xl:-translate-x-[145px]' } 
                            ${ !window ? i === 1 && 'md:origin-bottom-right md:rotate-[20deg]' : i === 1 && 'md:bg-blueGrey-300/50' } 
                            ${ !window ? i === 2 && 'md:origin-bottom-right md:rotate-[10deg]' : i === 2 && 'md:bg-blueGrey-300/50 md:translate-x-[100px] xl:translate-x-[145px]' } 
                            rounded-lg transition ease-in-out duration-500 rotate-0 bg-none grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 
                            ${ e.show && 'transition ease-linear duration-500 rotate-6 bg-blueGrey-700 md:bg-blueGrey-700 border-blueGrey-100 z-10' }
                          `} 
              onClick={ !e.show?(() => handleClick(i)) : undefined }
            >
              <div className={`transition-all md:text-lg ${e.show&& 'flex items-center justify-center md:text-2xl'}`} onClick={() => handleClick(i)}>{e.name}</div>
              {e.show&&
                <div className='-rotate-6 flex items-center justify-center group'>
                  <TbBrandGithub className='group-hover:fill-blueGrey-300 group-hover:stroke-2 group-hover:stroke-blueGrey-500' size={ 28 } />
                </div>}
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
            <div key={i+3} className={`h-full max-w-md w-full flex justify-center md:h-proHeight md:w-proWidth animate-projectAnimation rounded-xl`}>
              {i===0 ? <Link to='/future' onClick={ () => handleClick(i) }>{e.screen}</Link> : e.screen}
            </div> 
            : null
          )
      })}
      </div>  
      }
    </>
  )
}

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FaLinkedin } from 'react-icons/fa';
import { SiLinkedin, SiYoutube } from 'react-icons/si';
import { FaYoutube } from 'react-icons/fa';

export default function Screens() {
    const dispatch = useDispatch();
    const isEnglish = useSelector((state) => state.style.isEnglish);

    const dataEng = [
        { name: 'about', main: 'Helllo', header: 'A little about me', description: 'Some info about myself', bg: 'articaleOne' },
        { name: 'realestate', main: 'Helllo', header: 'All things real estate', description: 'With many years of experience investing in real estate in the US and Isarel...', bg: 'articaleOne' },
        { name: 'market', main: 'Helllo', header: 'All things Investing', description: 'I will teach you everything you need to know about about the market', bg: 'articaleTwo' },
        { name: 'crypto', main: 'Helllo', header: 'All things Crypto', description: 'Crypto market made easy/explained', bg: 'articaleThree' },
    ];
      const dataHeb = [
        { name: 'נדל"ן', main: 'Helllo', header: 'נדל"ן', description: 'כולם מדברים נדל"ן, אבל אתם חוששים.', bg: 'articaleOne' },
        { name: 'שוק ההון', main: 'Helllo', header: 'שוק ההון', description: 'בואו ללמוד כל מה שצריך בכדי להתחיל להשקיע בשוק ההון', bg: 'articaleTwo' },
        { name: 'קריפטו', main: 'Helllo', header: 'שוק הקריפטו', description: 'בוא ללמוד כל מה שצריך על שוק הקריפטו', bg: 'articaleThree' },
    ];
    let activeIndex = 0;

    const goRight = () => {
        const pages = document.getElementById('screen-container');
        const nextIndex = activeIndex + 1 <= pages.childElementCount - 1 ? activeIndex + 1 : 0;
        const current = document.querySelector(`[data-index='${activeIndex}']`),
              next = document.querySelector(`[data-index='${nextIndex}']`);
        current.dataset.status = 'before';
        next.dataset.status = 'moving-left';
    
        setTimeout(() => {
          next.dataset.status = 'active';
          activeIndex = nextIndex;
        });
      };
      const goLeft = () => {
        const pages = document.getElementById('screen-container');
        const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : pages.childElementCount - 1;
        const current = document.querySelector(`[data-index='${activeIndex}']`),
              next = document.querySelector(`[data-index='${nextIndex}']`);
        current.dataset.status = 'after';
        next.dataset.status = 'moving-right';
        setTimeout(() => {
          next.dataset.status = 'active';
          activeIndex = nextIndex;
        });
      };

  return (
    <div className='row-start-2 relative overflow-hidden' id='screen-container'>
        { isEnglish ? 
            dataEng.map((e,i) => {
                return (
                    <div key={i} className='h-full w-full grid grid-cols-[75%,_25%] grid-rows-[75%,_25%] absolute left-0 top-0 data-[status=moving-right]:transition-none data-[status=moving-right]:translate-x-full data-[status=moving-left]:transition-none data-[status=moving-left]:-translate-x-full data-[status=active]:transition-all data-[status=active]:duration-500 data-[status=before]:-translate-x-full data-[status=after]:translate-x-full' data-index={i} data-status={i === 0 ? 'active' : 'before'}>
                    <div className={`row-start-1 bg-${e.bg} grid place-items-center bg-blend-soft-light bg-cover bg-no-repeat bg-center text-center border-r-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 left-0 top-0 dark:text-mike-fontLight text-mike-fontDark`}>
                        <div className='h-full w-full bg-mike-bgLight/50 dark:bg-mike-backgroundDark/50 text-xl font-bold font-body'>{ e.main }</div>
                    </div>
                    <div className='col-start-2 flex justify-center items-end p-5'>
                        <div className='w-full h-full shadow-sm shadow-black dark:shadow-white bg-black/5 dark:bg-white/5 rounded-3xl p-5'>{ e.description }</div>
                    </div>
                    <div className='col-start-1 row-start-2 font-bold text-6xl p-5 overflow-clip border-r-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 uppercase'>{ e.header }</div>
                    <div className='row-start-2 col-start-2 flex justify-around items-center'>
                        <div className='h-full w-full grid place-content-center cursor-pointer group transition-all duration-200 ease-linear hover:bg-[#33333383] hover:border-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10' onClick={ () => goLeft() }>
                        <FontAwesomeIcon className='transition-all duration-200 ease-linear group-hover:-translate-x-5' icon={ faChevronLeft } size='3x' />
                        </div>
                        <div className='h-full w-full grid place-content-center cursor-pointer group transition-all duration-200 ease-linear hover:bg-[#33333383] hover:border-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10' onClick={ () => goRight() }>
                        <FontAwesomeIcon className='transition-all duration-200 ease-linear group-hover:translate-x-5' icon={ faChevronRight } size='3x' />
                        </div>
                    </div>
                    </div>
                )
            })
        :   dataHeb.map((e,i) => {
            return (
                <div key={i} className='h-full w-full grid grid-cols-[75%,_25%] grid-rows-[75%,_25%] absolute left-0 top-0 data-[status=moving-right]:transition-none data-[status=moving-right]:translate-x-full data-[status=moving-left]:transition-none data-[status=moving-left]:-translate-x-full data-[status=active]:transition-all data-[status=active]:duration-500 data-[status=before]:-translate-x-full data-[status=after]:translate-x-full' data-index={i} data-status={i === 0 ? 'active' : 'before'}>
                  <div className={`row-start-1 bg-${e.bg} grid place-items-center bg-blend-soft-light bg-cover bg-no-repeat bg-center text-center border-r-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 left-0 top-0 dark:text-mike-fontLight text-mike-fontDark`}>
                    <div className='h-full w-full bg-mike-bgLight/50 dark:bg-mike-backgroundDark/50 text-xl font-bold font-body'>{ e.main }</div>
                  </div>
                  <div className='col-start-2 flex justify-center items-end p-5'>
                    <div className='w-full h-full shadow-sm shadow-black dark:shadow-white bg-black/5 dark:bg-white/5 rounded-3xl p-5'>{ e.description }</div>
                    </div>
                  <div className='col-start-1 row-start-2 font-bold text-6xl p-5 overflow-clip border-r-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 uppercase'>{ e.header }</div>
                  <div className='row-start-2 col-start-2 flex justify-around items-center'>
                    <div className='h-full w-full grid place-content-center cursor-pointer group transition-all duration-200 ease-linear hover:bg-[#33333383] hover:border-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10' onClick={ () => goLeft() }>
                      <FontAwesomeIcon className='transition-all duration-200 ease-linear group-hover:-translate-x-5' icon={ faChevronLeft } size='3x' />
                    </div>
                    <div className='h-full w-full grid place-content-center cursor-pointer group transition-all duration-200 ease-linear hover:bg-[#33333383] hover:border-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10' onClick={ () => goRight() }>
                      <FontAwesomeIcon className='transition-all duration-200 ease-linear group-hover:translate-x-5' icon={ faChevronRight } size='3x' />
                    </div>
                  </div>
                </div>
              )
          })}
    </div>
  )
}

import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DarkMode, LightMode } from '@mui/icons-material';
import { changeTheme, changeLang } from '../../Features/styleSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import Heb from '../../Img/Flag_of_Israel.webp';
import Eng from '../../Img/Flag_of_the_United_States.webp';

export default function Main() {
  const dispatch = useDispatch();
  const ref = useRef()
  const isDark = useSelector((state) => state.style.isDark);
  const isEnglish = useSelector((state) => state.style.isEnglish);
  let activeIndex = 0;

  const themeChange = (x) => {
    dispatch(changeTheme(x))
    document.documentElement.classList.contains('dark') ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
  };

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },[]);

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
    <div className='h-full bg-mike-bgLight dark:bg-mike-backgroundDark grid grid-rows-[15%,_80%,_5%] text-mike-fontDark dark:text-mike-fontLight'>
      <div className='row-start-1 border-b-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 grid grid-cols-[50%,_25%,_25%]'>
        <div className='col-start-1 text-4xl border-r-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 px-8 py-10'>Michael Radvogin - Real Estate & Investing</div>
        <div className='col-start-2 border-r-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10'>Nav</div>
        <div className='flex justify-around items-center'>
          <span className='hover:cursor-pointer' onClick={ isDark ? () => themeChange(false) : () => themeChange(true) }>{ !isDark ? <LightMode /> : <DarkMode /> }</span>
          <span className='grid items-center w-6 h-6 overflow-hidden rounded-full'>{ isEnglish ? <img src={ Heb } alt='heb' onClick={ () => dispatch(changeLang()) }/> : <img src={ Eng } alt='heb' onClick={ () => dispatch(changeLang()) } /> }</span>
        </div>
      </div>

      <div className='row-start-2 relative overflow-hidden' id='screen-container'>
        <div className='h-full w-full grid grid-cols-[75%,_25%] grid-rows-[75%,_25%] absolute left-0 top-0 data-[status=moving-right]:transition-none data-[status=moving-right]:translate-x-full data-[status=moving-left]:transition-none data-[status=moving-left]:-translate-x-full data-[status=active]:transition-all data-[status=active]:duration-500 data-[status=before]:-translate-x-full data-[status=after]:translate-x-full' data-index='0' data-status='active' ref={ ref }>
          <div className='row-start-1 bg-mike bg-no-repeat bg-center text-center border-r-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 left-0 top-0'></div>
          <div className='col-start-2 flex justify-center items-end'>Hello I'm Michael, I'll be your guide</div>
          <div className='col-start-1 row-start-2 font-bold text-6xl p-5 overflow-clip border-r-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10'>All things Real Estate</div>
          <div className='row-start-2 col-start-2 flex justify-around items-center'>
            <div className='h-full w-full grid place-content-center transition-all duration-200 ease-in-out hover:bg-mike-bgLight/5 hover:dark:bg-mike-backgroundDark/20' onClick={ () => goLeft() }>
              <FontAwesomeIcon icon={ faChevronLeft } size='3x' />
            </div>
            <div className='h-full w-full grid place-content-center transition-all duration-200 ease-in-out hover:translate-x-5' onClick={ () => goRight() }>
              <FontAwesomeIcon icon={ faChevronRight } size='3x' />
            </div>
          </div>
        </div>

        <div className='h-full w-full grid grid-cols-[75%,_25%] grid-rows-[75%,_25%] absolute left-0 top-0 data-[status=moving-right]:transition-none data-[status=moving-right]:translate-x-full data-[status=moving-left]:transition-none data-[status=moving-left]:-translate-x-full data-[status=active]:transition data-[status=active]:duration-500 data-[status=before]:-translate-x-full data-[status=after]:translate-x-full' data-index='1' data-status='before'>
          <div className='row-start-1 bg-articaleTwo bg-no-repeat bg-clip-padding bg-center text-center border-r-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 left-0 top-0'></div>
          <div className='col-start-2 flex justify-center items-end'>Let me walk you </div>
          <div className='col-start-1 row-start-2 font-bold text-6xl p-5 overflow-clip border-r-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10'>All things Investing</div>
          <div className='row-start-2 col-start-2 flex justify-around items-center'>
            <div><FontAwesomeIcon icon={ faChevronLeft } size='3x' onClick={ () => goLeft() } /></div>
            <div><FontAwesomeIcon icon={ faChevronRight } size='3x' onClick={ () => goRight() } /></div>
          </div>
        </div>

        <div className='h-full w-full grid grid-cols-[75%,_25%] grid-rows-[75%,_25%] absolute left-0 top-0 data-[status=moving-right]:transition-none data-[status=moving-right]:translate-x-full data-[status=moving-left]:transition-none data-[status=moving-left]:-translate-x-full data-[status=active]:transition data-[status=active]:duration-500 data-[status=before]:-translate-x-full data-[status=after]:translate-x-full' data-index='2' data-status='before'>
          <div className='row-start-1 bg-articaleThree bg-no-repeat bg-clip-padding bg-center text-center border-r-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 left-0 top-0'></div>
          <div className='col-start-2 flex justify-center items-end'>Learn some Crypto </div>
          <div className='col-start-1 row-start-2 font-bold text-6xl p-5 overflow-clip border-r-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10'>All things Crypto</div>
          <div className='row-start-2 col-start-2 flex justify-around items-center'>
            <div><FontAwesomeIcon icon={ faChevronLeft } size='3x' onClick={ () => goLeft() } /></div>
            <div><FontAwesomeIcon icon={ faChevronRight } size='3x' onClick={ () => goRight() } /></div>
          </div>
        </div>
      </div>
          
      <div className='row-start-3 border-t-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 grid place-content-end'>Michael Radvogin 2023</div>
    </div>
  )
}

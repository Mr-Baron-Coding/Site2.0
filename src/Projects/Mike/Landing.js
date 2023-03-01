import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { DarkMode, LightMode } from '@mui/icons-material';
import { changeTheme, changeLang } from '../../Features/styleSlice';
import Screens from './Screens';
import { FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import Heb from './images/israel-flag-icon.png'
import Eng from './images/united-states-flag-icon.png';
import ContactForm from './ContactForm';

export default function Main() {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.style.isDark);
  const isEnglish = useSelector((state) => state.style.isEnglish);
  const [isContactOpen, setContactOpen] = useState(false);
  
  const themeChange = (x) => {
    dispatch(changeTheme(x))
    document.documentElement.classList.contains('dark') ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark');
  };
  const langChange = () => {
    dispatch(changeLang());
    if (isEnglish) {
      document.documentElement.dir = 'rtl';
      document.documentElement.lang = 'he';
    } else {
      document.documentElement.dir = 'ltr';
      document.documentElement.lang = 'en';
    }
  };
  
  const close = () => {
    setContactOpen(false);
  };

  useEffect(() => {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  },[]);

  return (
    <div className='h-full relative bg-mike-bgLight dark:bg-mike-backgroundDark grid grid-rows-[15%,_80%,_5%] text-mike-fontDark dark:text-mike-fontLight select-none overflow-hidden'>
      <ContactForm isContactOpen={ isContactOpen } close={() => close() } />
      <div className='row-start-1 border-b-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 grid grid-cols-[50%,_25%,_25%]'>
        <div className={`col-start-1 text-4xl ${ isEnglish ? 'border-r-2' : 'border-l-2'} border-mike-backgroundDark/10 dark:border-mike-bgLight/10 px-8 py-10 subpixel-antialiased`}>
          { isEnglish ? 'Michael Radvogin - Real Estate & Investing' : 'מיכאל רדבוגין - נדל"ן ושוק ההון' }
        </div>
        <div className={`col-start-2 ${ isEnglish ? 'border-r-2' : 'border-l-2'} border-mike-backgroundDark/10 dark:border-mike-bgLight/10 flex justify-evenly items-center`}>
          <a href='https://www.linkedin.com/in/michaelradvogin/' target='_blank'><FaLinkedin className='transition-all hover:rounded-xl hover:text-mike-fontDark/40 dark:hover:text-mike-fontLight/40 cursor-pointer' size={ 28 } /></a>
          <HiMail onClick={ () => setContactOpen(!isContactOpen) } className='transition-all hover:rounded-xl hover:text-mike-fontDark/40 dark:hover:text-mike-fontLight/40 cursor-pointer' size={ 28 } />
          <a aria-label="Chat on WhatsApp" target='_blank' href="https://wa.me/972544443598"><FaWhatsapp className='hover:text-mike-fontDark/40 dark:hover:text-mike-fontLight/40 cursor-pointer' size={ 28 } /></a>
        </div>
        <div className='flex justify-around items-center'>
          <span className='hover:cursor-pointer' onClick={ isDark ? () => themeChange(false) : () => themeChange(true) }>{ !isDark ? <LightMode /> : <DarkMode /> }</span>
          <span className='grid items-center w-6 h-6 overflow-hidden rounded-full'>{ isEnglish ? <img src={ Heb } alt='heb' onClick={ () => langChange() }/> : <img src={ Eng } alt='heb' onClick={ () => langChange() } /> }</span>
        </div>
      </div>

      <Screens />

      <div className='row-start-3 border-t-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 grid place-content-end'>{isEnglish ? 'All Rights Reserved Michael Radvogin 2023' : 'כל הזכויות שמורות מיכאל רדבוגין 2023'}</div>
    </div>
  )
}

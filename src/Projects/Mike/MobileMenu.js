import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Heb from './images/israel-flag-icon.png'
import Eng from './images/united-states-flag-icon.png';
import { DarkMode, LightMode } from '@mui/icons-material';

export default function MobileMenu({mobileMenu, change, theme, contact}) {
    const isEnglish = useSelector((state) => state.style.isEnglish);
    const isDark = useSelector((state) => state.style.isDark);
    const [settings, setSettings] = useState(false);

    useEffect(() => {
        !mobileMenu && setTimeout(() => {
            setSettings(false);
        },750); 
    },[mobileMenu])

  return (
    <div className={`md:hidden w-full h-full z-20 absolute transition-all ease-linear duration-500 bg-mike-bgLight/95 dark:bg-mike-backgroundDark/90 ${mobileMenu ? 'translate-y-0' : '-translate-y-[101%]'} `}>
          <div className={`w-full h-full flex flex-col justify-center font-bold text-xl z-20 gap-6 absolute transition-all ease-linear duration-500 ${settings ? 'translate-x-[101%]' : 'translate-x-0'}`}>
            <div className='text-center' onClick={ contact }>{isEnglish? 'Leave a message' : 'השאירו פרטים'}</div>
            <div className='text-center'>{isEnglish? 'WhatsApp Me' : 'דברו איתי ישירות'}</div>
            <div className='text-center'>{isEnglish? 'Follow me for latest news' : ' עקבו אחריי ברשתות החברתיות'}</div>
            <div className='text-center absolute bottom-0 m-auto' onClick={ () => setSettings(true) }>{ isEnglish ? 'Settings' : 'הגדרות'}</div>
        </div>
        <div className={`flex flex-col w-full h-full font-bold z-10 pt-10 absolute bg-mike-bgLight/95 dark:bg-mike-backgroundDark/90 transition-all ease-linear duration-500 ${settings ? 'translate-x-0' : '-translate-x-[101%]'}`}>
                <div className='h-1/6 px-2 flex justify-center items-center' >{ isEnglish ? <img src={ Heb } alt='heb' className='h-5' onClick={ change }/> : <img src={ Eng } className='h-5' alt='heb' onClick={ change } /> }</div>
                <div className='h-1/6 px-2 flex justify-center items-center'>          
                    <span className='hover:cursor-pointer' onClick={ isDark ? () => theme(false) : () => theme(true) }>
                        { !isDark ? <LightMode /> : <DarkMode /> }
                    </span>
                </div>
                <div className='flex justify-center' onClick={ () => setSettings(false) }>{`${isEnglish ? 'Back' : 'חזרה'}`}</div>
            </div>
    </div>
  )
};

// [&>div:nth-child(odd)]:bg-mike-backgroundDark/10 dark:[&>div:nth-child(odd)]:bg-mike-backgroundDark
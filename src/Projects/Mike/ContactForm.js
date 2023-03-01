import React from 'react';
import { useSelector } from 'react-redux';

export default function ContactForm({ isContactOpen, close }) {
    const isEnglish = useSelector((state) => state.style.isEnglish);

  return (
        <div className={` ${isContactOpen ? 'translate-y-0' : '-translate-y-[101%]'} bg-mike-bgLight/80 dark:bg-mike-backgroundDark/80 absolute border-2 w-1/2 h-[15%] top-0 ${ isEnglish ? 'right-0' : 'left-0' } transition-all`}>
            <div className={`absolute right-5 top-2`} onClick={ close }>X</div>
        </div>
  )
}

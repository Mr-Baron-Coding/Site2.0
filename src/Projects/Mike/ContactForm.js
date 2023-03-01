import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios';

export default function ContactForm({ isContactOpen, close }) {
    const isEnglish = useSelector((state) => state.style.isEnglish);
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [phone, setPhone] = useState('');
    const [thanks, setThanks] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/mike@mikegbaron.com', {
            name: name,
            phone: phone,
            email: mail
        })
            .then(response => console.log(response))
            .catch(error => console.log(error));
            setThanks(true);
        setTimeout(() => {
            setName('');
            setMail('');
            setPhone('');
            setThanks(false)
        }, 3000)
    };

  return (
        <div className={` ${isContactOpen ? 'translate-y-0' : '-translate-y-[101%]'} bg-mike-bgLight/95 dark:bg-mike-backgroundDark/95 absolute border-2 w-1/2 h-[25%] z-20 top-0 ${ isEnglish ? 'right-0' : 'left-0' } transition-all`}>
            {/* <div className={`absolute right-5 top-2`} >X</div> */}
            <form id='form' onSubmit={(e) => handleSubmit(e) } className='h-full w-full grid grid-rows-[20%,_50%,_30%] pt-3'>
                <div className='font-bold text-2xl font-extra text-center'>{ isEnglish ? 'For more details send me a message' : 'לשיחת אבחון ללא התחייבות'}</div>
                <div className='w-full h-full flex justify-around items-center self-center'>
                    <div className='flex justify-center items-center'>
                        <label hidden>{isEnglish ? 'Name' : 'שם'}</label>
                        <input required type='text' name='name' placeholder={`${isEnglish ? 'Name' : 'שם'}`} value={name} onChange={(e)=> setName(e.target.value)} className='text-mike-fontDark dark:text-mike-fontLight bg-mike-bgLight dark:bg-mike-backgroundDark border border-mike-backgroundDark dark:border-mike-bgLight dark:focus:bg-mike-bgLight/20 focus:bg-mike-backgroundDark/20 rounded-sm p-2 outline-none' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <label hidden>{isEnglish ? 'Email' : 'מייל'}</label>
                        <input required type="email" name="email" placeholder={`${isEnglish ? 'Email' : 'מייל'}`} value={mail} onChange={(e)=> setMail(e.target.value)} className='text-mike-fontDark dark:text-mike-fontLight bg-mike-bgLight dark:bg-mike-backgroundDark border border-mike-backgroundDark dark:border-mike-bgLight dark:focus:bg-mike-bgLight/20 focus:bg-mike-backgroundDark/20 rounded-sm p-2 outline-none' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <label hidden>{isEnglish ? 'Phone' : 'טלפון'}</label>
                        <input required type='tel' name="email" value={phone} placeholder={`${isEnglish ? 'Phone' : 'טלפון'}`} pattern="[0-9]{3}-[0-9]{7}" onChange={(e)=> setPhone(e.target.value)} className='text-mike-fontDark dark:text-mike-fontLight bg-mike-bgLight dark:bg-mike-backgroundDark border border-mike-backgroundDark dark:border-mike-bgLight dark:focus:bg-mike-bgLight/20 focus:bg-mike-backgroundDark/20 rounded-sm p-2 outline-none' />
                    </div>
                </div>
                <div className='w-full flex items-center justify-around'>
                    <button type='submit' className='bg-mike-backgroundDark text-mike-fontLight dark:bg-mike-bgLight dark:text-mike-fontDark font-bold text-xl py-1 px-5 rounded-lg '>{`${isEnglish ? 'Send' : 'שלח'}`}</button>
                    <div className='py-1 px-5 rounded-lg transition delay-150 ease-in border-2 border-mike-bgLight dark:border-mike-backgroundDark dark:hover:border-mike-bgLight hover:border-mike-backgroundDark' onClick={ close }>{`${isEnglish ? 'Close' : 'סגור'}`}</div>
                </div>
            </form>
        </div>
  )
}

import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import useIntersectionObserver from "./useIntersectionObserver";
import axios from "axios";

export default function Contact() {
    const ref = useRef();
    const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });
    const isOpen = useSelector((state) => state.mobile.menuOpend);
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');
    const [thanks, setThanks] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/mike@mikegbaron.com', {
            name: name,
            message: message,
            email: mail
        })
            .then(response => {
                response && setThanks('Sent successfully!')
            })
            .catch(error => {
                error && setThanks('Something went wrong...')
            })
        setTimeout(() => {
            setName('');
            setMail('');
            setMessage('');
            setThanks('')
        }, 4000)
    };

  return (
    <div id='contact' className={`col-start-2 grid ${ isOpen ? 'row-start-[9] md:row-start-6' : 'row-start-[8] md:row-start-5' } md:grid-cols-[10%,_80%,_10%] text-xl`} ref={ref}>
        <div className='md:col-start-2 flex flex-col justify-center items-center gap-y-4 md:grid md:grid-cols-[50%,_50%] lg:grid-cols-2 overflow-hidden'>
            <div className='flex flex-col gap-4 mx-3 h-1/2 text-center font-extra text-2xl md:text-4xl overflow-clip'>
                <span className={`transition-all duration-700 ease-linear ${isIntersecting ? 'translate-y-0' : '-translate-y-[110%]'}`}>Let's Work Together</span> 
                <span style={{ WebkitTextFillColor: 'transparent', whiteSpace:'nowrap' }} className='md:text-2xl lg:text-4xl bg-[-200%] bg-[length:200%] bg-gradient-to-r bg-clip-text from-blueGrey-500 via-blueGrey-100 to-blueGrey-500 animate-magicText'>Send me a Message</span>
            </div>
            <form id='form' className={`h-full w-full flex items-center justify-center transition-all duration-700 ease-linear ${isIntersecting ? 'translate-x-0' : 'translate-x-[110%]'}`} onSubmit={(e) => handleSubmit(e) }>
                <div className='cols-start-2 flex flex-col gap-4 justify-around bg-blueGrey-500/10 rounded-lg p-5 select-text shadow-xl max-w-md min-w-[330px] aspect-[9/14]'>
                    <div className='relative'>
                        <input required aria-required type='text' name='name' value={name} onChange={(e)=> setName(e.target.value)} className='peer font-bold dark:font-medium dark:text-blueGrey-100 bg-blueGrey-500/10 h-[40px] w-full outline-none border-b-2 border-blueGrey-300 focus:border-blueGrey-700 px-3 focus:text-blueGrey-900 focus:bg-blueGrey-500/70' />
                        <label className='absolute h-1/2 top-1.5 left-3 transition-all pointer-events-none peer-valid:-top-4 peer-valid:left-1 peer-valid:text-sm peer-focus:-top-4 peer-focus:left-1 peer-focus:text-sm'>Name*</label>
                    </div>
                    <div className='relative'>
                        <input required aria-required type="email" name="email" value={mail} onChange={(e)=> setMail(e.target.value)} className='peer font-bold dark:font-medium dark:text-blueGrey-100 bg-blueGrey-500/10 h-[40px] w-full outline-none border-b-2 border-blueGrey-300 focus:border-blueGrey-700 px-3 focus:text-blueGrey-900 focus:bg-blueGrey-500/50' />
                        <label className={` ${mail.length === 0 ? 'top-1.5 left-3' : '-top-4 left-1 text-sm'} absolute h-1/2 transition-all pointer-events-none peer-focus:-top-4 peer-focus:left-1 peer-focus:text-sm`}>Email*</label>
                    </div>
                    <input type="hidden" name="_subject" value='New submission!' />
                    <input type="hidden" name="_captcha" value="false" />
                    <div className='relative'>
                        <textarea required type='text' name='message' value={message} onChange={(e)=> setMessage(e.target.value)} className='peer resize-none font-bold dark:font-medium rounded-md dark:text-blueGrey-100 bg-blueGrey-500/10 h-full w-full outline-none border-2 border-blueGrey-300 focus:border-blueGrey-300/50 p-3 focus:text-blueGrey-900 focus:bg-blueGrey-500/50'></textarea>
                        <label className={` ${message.length === 0 ? 'top-1.5 left-3' : '-top-4 left-1 text-sm'} absolute h-1/2 transition-all pointer-events-none peer-focus:-top-4 peer-focus:left-1 peer-focus:text-sm`}>Add Message*</label>
                    </div>
                    <div className='flex justify-center items-center'>
                        {thanks.length !== 0 ? <div>{thanks}</div> : <button type='submit' className="bg-blueGrey-100 text-blueGrey-900 ring-2 ring-blueGrey-300/80 transition-all duration-500 ease-linear ring-offset-2 rounded-lg h-[40px] w-[100px] md:hover:w-[200px] md:hover:ring-blueGrey-300 md:hover:ring-2 md:hover:bg-blueGrey-700/70 md:hover:text-blueGrey-100">Send</button>
}
                    </div>
                        
                </div>
            </form>
        </div>
    </div>
  );
}

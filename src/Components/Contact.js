import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

export default function Contact() {
    const isOpen = useSelector((state) => state.mobile.menuOpend);
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [message, setMessage] = useState('');
    const [thanks, setThanks] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        axios.post('https://formsubmit.co/ajax/mike@mikegbaron.com', {
            name: name,
            message: message,
            email: mail
        })
            .then(response => console.log(response))
            .catch(error => console.log(error));
            setThanks(true);
        setTimeout(() => {
            setName('');
            setMail('');
            setMessage('');
            setThanks(false)
        },2000)
    };

  return (
    <div id='contact' className={`col-start-2 grid ${ isOpen ? 'row-start-[9] md:row-start-6' : 'row-start-[8] md:row-start-5' } md:grid-cols-[10%,_80%,_10%] text-xl`}>
        <div className='md:col-start-2 flex flex-col gap-y-4 md:grid md:grid-cols-[60%,_40%]'>
        <div className='flex justify-start items-center font-extra text-4xl text-clip overflow-clip'>I would like to hear from you.</div>
            <form id='form' onSubmit={(e) => handleSubmit(e) }>
                <div className='cols-start-2 flex flex-col gap-4 bg-blueGrey-500/10 rounded-lg p-3 select-text shadow-xl'>
                    <div className='flex flex-col gap-2'>
                        <label>Name</label>
                        <input required aria-required type='text' name='name' value={name} onChange={(e)=> setName(e.target.value)} className='text-black dark:text-blueGrey-100 bg-blueGrey-500/70 h-[60px] outline-none border-none rounded-lg p-3 focus:outline-2 focus:outline-blueGrey-300 focus:bg-blueGrey-700/70' />
                    </div>
                    <div className='flex flex-col gap-2'><label>Email</label>
                        <input required type="email" name="email" value={mail} onChange={(e)=> setMail(e.target.value)} className='text-black dark:text-blueGrey-100 bg-blueGrey-500/70 h-[60px] outline-none border-none rounded-lg p-3 focus:outline-2 focus:outline-blueGrey-300 focus:bg-blueGrey-700/70' />
                    </div>
                    <input type="hidden" name="_subject" value='New submission!' />
                    <input type="hidden" name="_captcha" value="false" />
                    <div className='flex flex-col gap-2'><label>Message</label>
                        <textarea required type='text' name='message' value={message} placeholder='Say Something' onChange={(e)=> setMessage(e.target.value)} className='font-black text-black dark:text-blueGrey-100 bg-blueGrey-500/70 h-[250px] outline-none border-none rounded-lg p-3 focus:outline-2 focus:outline-blueGrey-300 resize-none focus:bg-blueGrey-700/70'></textarea>
                    </div>
                    <div className='flex justify-between'>
                        {thanks ? <div>Sent Successfully</div> : <button type='submit' className="bg-blueGrey-100 text-blueGrey-900 rounded-lg h-[40px] transition-all duration-500 w-[100px] hover:w-[200px] hover:ring-blueGrey-100 hover:ring-2 hover:bg-blueGrey-700/70 hover:text-blueGrey-100">Send</button>
}
                    </div>
                        
                </div>
            </form>
        </div>
    </div>
  );
}

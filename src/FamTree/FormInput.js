import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addData, closeForm } from './Features/dataSlice';

export default function FormInput() {
    const dispatch = useDispatch();
    const isAdd = useSelector((state) => state.famData.userData);
    const [nameOne, setNameOne] = useState('');
    const [nameTwo, setNameTwo] = useState('');
    const [level, setLevel] = useState('grandparents');
    const [message, setMessage] = useState(false);
    const [messageTwo, setMessageTwo] = useState(false);

    const saveData = () => {
        if ( nameOne.length < 2 ) { return setMessage(true)};
        if ( nameTwo.length < 2 ) { return setMessageTwo(true)};
        console.log(nameOne, nameTwo, level);
        dispatch(addData({nameOne, nameTwo, level}));
        clearForm();
    };

    const clearForm = () => {
        setNameOne('');
        setNameTwo('');
        setLevel('parents');
    }
  return (
    <div className='flex flex-col items-center justify-between bg-fam-elements/50 shadow-xl rounded-xl h-full w-full xl:h-5/6 xl:w-3/4 xl:m-auto border'>
        <div className='flex justify-center items-center relative h-1/2 w-full'>
            <div className='flex justify-center items-center relative h-full w-full'>Let's create a family tree</div>
            <div className='absolute top-2 right-3' onClick={ () => dispatch(closeForm()) }>X</div>
        </div>
        <div className='flex justify-center items-center relative h-full w-full'>
            {(message && nameOne.length < 2) && <div className='w-[100px] h-[50px] absolute right-0 border rounded-xl flex justify-center items-center bg-fam-buttonsColor'>Required!</div>}
            <input type='text' className='bg-fam-sub/50 h-1/2 w-11/12 rounded-lg px-3 outline-none focus:bg-fam-sub/70 focus:outline-1 focus:outline-fam-sub focus:shadow-xl placeholder-fam-color/50' value={nameOne} onChange={(e) => setNameOne(e.target.value)} onFocus={() => setMessage(false)} placeholder='Add Name:' />
        </div>
        <div className='flex justify-center items-center relative h-full w-full'>
            {(messageTwo && nameTwo.length < 2) && <div className='w-[100px] h-[50px] absolute right-0 center border-2 rounded-xl flex justify-center items-center bg-fam-buttonsColor'>Required!</div>} 
            <input type='text' className='bg-fam-sub/50 h-1/2 w-11/12 rounded-lg px-3 outline-none focus:bg-fam-sub/70 focus:outline-1 focus:outline-fam-sub focus:shadow-xl placeholder-fam-color/50' value={nameTwo} onChange={(e) => setNameTwo(e.target.value)} onFocus={() => setMessageTwo(false)} placeholder='Add Name:' />
        </div>
        <div className='flex justify-center items-center relative h-full w-full'>
            <select value={level} onChange={(e) => setLevel(e.target.value)} className='bg-fam-sub/50 border-fam-sub h-1/2 w-11/12 rounded-lg px-3 outline-none focus:outline-1 focus:outline-fam-sub focus:shadow-xl' >
                <option className='even:bg-fam-sub' value='grandparents'>Grandparents</option>
                <option className='even:bg-fam-sub' value='parents'>Parents</option>
                <option className='even:bg-fam-sub/30' value='siblings'>Siblings</option>
                <option className='even:bg-fam-sub/30' value='children'>Children</option>
            </select>
        </div>
        
        <div className='flex justify-around items-center h-full w-full'>
            <div className='h-[55px] w-2/5 lg:h-[70px] xl:w-2/5 flex justify-center items-center text-2xl bg-fam-elements/60 rounded-xl hover:bg-fam-elements/80 hover:ring-2 hover:shadow-xl' onClick={ () => clearForm() }>Clear</div>
            <div className='h-[55px] w-2/5 lg:h-[70px] xl:w-2/5 flex justify-center items-center text-2xl bg-fam-buttonsColor/80 rounded-xl hover:bg-fam-buttonsColor/60 hover:ring-fam-buttonsColor hover:ring-2 hover:shadow-xl' onClick={ () => saveData() }>Add</div>
        </div>
    </div>
  )
}

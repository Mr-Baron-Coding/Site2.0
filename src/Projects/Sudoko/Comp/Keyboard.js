import React from 'react';
import { useDispatch } from 'react-redux';
import { mobileKeyboardPress } from '../features/tableSlice.js';
import './CompStyle.css';

export default function Keyboard() {
    const dispatch = useDispatch();

    let keyBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const selectedNumber = (num) => {
        dispatch(mobileKeyboardPress(num));
    };
  return (
    <div className='w-full flex items-center justify-around text-center border bg-white mt-4 h-10'>
        { keyBoard.map((number) => {
            return (
                <div 
                    className={`keys key_${number} text-xl w-full h-5/6 text-center border rounded-lg bg-blueGrey-500 transition-all active:bg-blueGrey-500/50 active:text-black m-1`} 
                    key={ number }
                    onClick={ () => selectedNumber(number) }
                    >
                        { number }     
                </div>
            )
        })}
    </div>
  )
}

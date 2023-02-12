import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { dispalyBottomMessage } from '../features/messageSlice.js';
import { startWatch, resetWatch } from '../features/stopwatchSlice.js';
import { gameDifficulty, isGameEnd } from '../features/tableSlice.js';

import './CompStyle.css';

export default function BottomMenuField() {
    const dispatch = useDispatch();
    const tempDiff = useSelector((state) => state.table.temp_Diff);
    // const userMess = useSelector((state) => state.messages.valueBottom);
    
    const startNewGame = () => {
        dispatch(isGameEnd(false));
        dispatch(dispalyBottomMessage(false));
        dispatch(resetWatch());
        dispatch(startWatch(true));
        dispatch(gameDifficulty(tempDiff - 1));             // start the game - add difficulty setting

    };

    const resumeGame = () => {
        dispatch(dispalyBottomMessage(false));
        dispatch(startWatch(true));

    };

    const userMessage = () => {
        return (
            <div className='grid grid-cols-3 grid-rows-2 w-full h-16 text-lg text-center'>
                <div className='col-span-3 text-center'>Start a new game<span className='blinkStyle'>?</span></div>
                <div className='row-start-2 col-start-1 rounded-lg transition-all duration-300 hover:outline hover:bg-[#4A0404]' onClick={ () => startNewGame() }>Yes</div>               
                <div className='row-start-2 col-start-3 rounded-lg transition-all duration-300 hover:outline hover:bg-blueGrey-500' onClick={ () => resumeGame() }>No</div>
            </div>
        )
    };

    // solve game not refreshing on same difficulty button press 
    // messages and buttons for selecting and stoping stopwatch
  return (
       userMessage()
  )
};
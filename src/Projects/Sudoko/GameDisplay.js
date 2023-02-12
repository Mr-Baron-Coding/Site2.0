import React from 'react';

import TopMenuField from './Comp/TopMenuField.js'
import GameCalc from './Comp/GameCalc.js';
import Stopwatch from './Comp/Stopwatch.js';
import SubmitButton from './Comp/SubmitButton.js';
// import BottomMenuField from './Comp/BottomMenuField.js';
// import TableLineStyling from './Comp/TableLineStyling.js';
import Keyboard from './Comp/Keyboard.js';
import Messages from './Comp/Messages.js';

import { useSelector } from 'react-redux';

import './Style.css';

export default function GameDisplay() {
  const showGame = useSelector((state) => state.table.showValue);
  const isMobile = useSelector((state) => state.mobile.isMobile);
  const overlay = useSelector((state) => state.messages.overlayMessage);
  // const userMess = useSelector((state) => state.messages.valueBottom);


  return (
    <div className='flex flex-col justify-around h-full w-full'>
      { overlay && <Messages /> }
      <TopMenuField />
      <GameCalc />
        {/* <div className='overflowStyle'><TableLineStyling /></div> */}
      <div className='grid grid-cols-3 text-center items-center'>
        <SubmitButton />
        {/* <Stopwatch /> */}
      </div>
      
      { showGame && isMobile ? <div className='flex w-full justify-center items-center'><Keyboard /></div> : null }
    </div>
  )
};

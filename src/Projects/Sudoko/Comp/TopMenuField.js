import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startWatch, resetWatch } from '../features/stopwatchSlice.js';
import { dispalyBottomMessage, displayModeButtons } from '../features/messageSlice.js';
import { checkGame, showTable, gameDifficulty, tempDiff, autoFillInput, superEasy, gameWon } from '../features/tableSlice.js';

import './CompStyle.css';
import BottomMenuField from './BottomMenuField.js';

export default function TopMenuField() {
    const dispatch = useDispatch();
    const userMess = useSelector((state) => state.messages.valueBottom);                // display message ?
    const diffButtons = useSelector((state) => state.messages.diffButtons);             // display buttons
    const isTimeRunning = useSelector((state) => state.stopwatch.running);              // is stopwatch running
    const isGameChecked = useSelector((state) => state.table.checkGame);                // are we checking the game after submit?
    const isEasyMode = useSelector((state) => state.table.easyMode);                    // set for easy mode?
    const fullTableShow = useSelector((state) => state.table.showValue);                // is game board shown?


    const topMenuButtons = [
        { text: 'Start Game', id : 1 },
        // { text: 'Auto fill', id : 2 },
        // { text: 'SuperEasy', id : 3 }
        // { text: 'Submit', id : 4 }, 
    ];

    const modeButtons = [
        { text: 'Easy', id: 1, number: Math.floor(Math.random() * (36 - 32 + 1) ) + 32 },
        { text: 'Medium', id: 2, number: Math.floor(Math.random() * (26 - 24 + 1) ) + 24 },
        { text: 'Hard', id: 3, number: Math.floor(Math.random() * (16 - 14 + 1) ) + 14 }
    ];

    let easyColor = isEasyMode ? 'pink' : 'black';

    // handling different functions
    const mainFunction = (index) => {
        if ( index === 0 ) {
            dispatch(displayModeButtons(true));
        }
        else if ( index === 1 ) {
            dispatch(autoFillInput(true))
        }
        else {
            dispatch(superEasy(!isEasyMode));
        }
    };

    const beginTimer = (diff) => {
        if ( isTimeRunning ) {
            dispatch(startWatch(false));
            dispatch(dispalyBottomMessage(true));
            dispatch(displayModeButtons(false));
            dispatch(tempDiff(diff));             // start the game - add difficulty setting
        }
        else {
            if ( isGameChecked ) {
                dispatch(checkGame(false));
                dispatch(resetWatch());

            }
            dispatch(gameDifficulty(diff));             // start the game - add difficulty setting
            dispatch(startWatch(true));
            dispatch(showTable(true));
            dispatch(dispalyBottomMessage(false));
            dispatch(displayModeButtons(false));
            dispatch(gameWon(false));
        }
        
    };

  return (
    <>
        { userMess ? <BottomMenuField /> : 
            diffButtons 
            ?   <div className='h-16 flex justify-center items-center divide-x-2'>
                        {modeButtons.map((button, i) => {
                            return (
                                    <div 
                                        key={ `${button.text}`}
                                        onClick={ () => beginTimer(button.number) } 
                                        className='basis-1/3 text-center text-lg transition-all duration-500 ease-linear hover:shadow-md hover:shadow-blueGrey-300'
                                    >
                                        { button.text }
                                    </div>
                            )
                        })}
                </div>
            : <div className='text-center h-16'>
                { topMenuButtons.map((button,i) => {
                    return (
                        <div 
                            key={ i } 
                            onClick={ () => mainFunction(i) } 
                            style={{ color: i===2 ? easyColor : null, display: ( i!==0 && !fullTableShow ) ? 'none' : 'block' }}
                            className='m-auto p-3 text-xl w-1/2 transition-all duration-1000 ease-linear hover:shadow-md hover:shadow-blueGrey-300 hover:bg-blueGrey-500'
                        >
                            { button.text }
                        </div>
                    )
                })}
            </div> 
        }
    </>
  )
}

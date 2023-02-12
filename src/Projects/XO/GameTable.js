import React, { useState } from 'react';
import { useSelector } from 'react-redux';

export default function GameTable() {
    const isMobile = useSelector((state) => state.mobile.isMobile);
    const [scores, setScores] = useState({ X: 0, O: 0 });    
    const [gameTable, setGameTable] = useState([            // game table base
        [ '','','' ],
        [ '','','' ],
        [ '','','' ]
    ]);
    const [isX, setIsX] = useState(true);                   // who's turn is it? 
    const [isMessage, setIsMessage] = useState(false);      // display winner or new game button 
    const [isDraw, setDraw] = useState(false);              // display draw 

    // reset game
    const clearGame = (val) => {
        setIsMessage(false);
        setGameTable([[ '','','' ],[ '','','' ],[ '','','' ]]);
        setIsX(true);
        setDraw(false);

    };

    const iconStyle = () => {
        return (
            isX ?
            <div className='flex justify-center items-center w-full h-full relative'>
                <div className='w-55px h-5 bg-purple-400 rotate-45 rounded-full border-2 border-blueGrey-900 absolute'></div>
                <div className='w-55px h-5 bg-purple-400 -rotate-45 rounded-full border-2 border-blueGrey-900 absolute'></div>
            </div>
            : 
            <div className='flex justify-center items-center w-full h-full relative'>
                <div className='w-55px h-55px bg-purple-200 rounded-full border-2 border-blueGrey-900 absolute'></div>
                <div className='w-20px h-20px bg-blueGrey-900 rounded-full border-2 border-blueGrey-900 absolute'></div>
            </div>
        )    
    };
    const iconS = (xOry) => {
        return (
            xOry === 'X' ?
            <div className='flex justify-center items-center w-full h-full relative'>
                <div className='w-55px h-5 bg-blueGrey-300 rotate-45 rounded-full border-2 border-blueGrey-900 absolute'></div>
                <div className='w-55px h-5 bg-blueGrey-300 -rotate-45 rounded-full border-2 border-blueGrey-900 absolute'></div>
            </div>
            : 
            <div className='flex justify-center items-center w-full h-full relative'>
                <div className='w-55px h-55px bg-blueGrey-700 rounded-full border-2 border-blueGrey-300 absolute'></div>
                <div className='w-20px h-20px bg-blueGrey-900 rounded-full border-2 border-blueGrey-300 absolute'></div>
            </div>
        )   
    };
    
    // print game table
    const rowOrBox = () => {
        return (
            <>
                { gameTable.map((row,rowI) => {
                    return (
                        <div className={`grid grid-rows-3 gap-2`} key={`row_${rowI}`}>
                            { row.map((cell, cellI) => {
                                return (
                                    <div 
                                        key={ `cellI_${rowI}${cellI}` } 
                                        className={` grid group bg-blueGrey-500 ${cell === '' && (isX ? 'md:hover:border md:hover:rounded-xl md:hover:bg-blueGrey-900/90' : 'md:hover:border md:hover:rounded-xl md:hover:bg-blueGrey-900')}`}
                                        onClick={ () => inputThis(rowI, cellI) }
                                    > 
                                        { cell === '' 
                                            ? <div className={`invisible flex justify-center items-center ${cell === '' && 'group-hover:visible'}`}>{ iconStyle() }</div> 
                                            // : cell === 'X' 
                                            //     ? <div className='xIconStyle'><div className='lineOne'></div><div className='lineTwo'></div></div> 
                                            //     : <div className='oIconStyle'><div className='sphereOne'></div><div className='sphereTwo'></div></div> }
                                            : iconS(cell) }
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </>
        )
                
    };

    // game input on users press
    const inputThis = (rowI, cellI) => {
        let arr = gameTable;
        if ( !isMessage ) {
            if ( arr[rowI][cellI] === '') {
                if ( isX ) { 
                    arr[rowI][cellI] = 'X';
                    setIsX(!isX);
                } else {
                    arr[rowI][cellI] = 'O';
                    setIsX(!isX);
                }
            }
        }
        setGameTable(arr);
        let count=0;
        arr.map((row) => row.map((cell) => {
            return(
                cell !== '' && count++      
            )
            
        }))
        winningCombo();
        if( count === 9 && !isMessage ) {
            setDraw(true);
            setTimeout(() => clearGame(), 2000);
        }
    };

     // check for posible wining positions
     const winningCombo = () => {
        switch (true) {
            // row win
            case (gameTable[0][0] !== '' && gameTable[0][0] === gameTable[0][1] && gameTable[0][1] === gameTable[0][2]):
                if ( gameTable[0][0] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                }
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[0][0]), 2000);
                break;
            case (gameTable[1][0] !== '' && gameTable[1][0] === gameTable[1][1] && gameTable[1][1] === gameTable[1][2]):
                if ( gameTable[1][0] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                }
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[1][0]), 2000);
                break;
            case (gameTable[2][0] !== '' && gameTable[2][0] === gameTable[2][1] && gameTable[2][0] === gameTable[2][2]):
                if ( gameTable[2][0] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                }
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[2][0]), 2000);
                break;

            // col win
            case (gameTable[0][0] !== '' && gameTable[0][0] === gameTable[1][0] && gameTable[0][0] === gameTable[2][0]):
                if ( gameTable[0][0] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                } 
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[0][0]), 2000);
                break;
            case (gameTable[0][1] !== '' && gameTable[0][1] === gameTable[1][1] && gameTable[0][1] === gameTable[2][1]):
                if ( gameTable[0][1] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                }
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[0][1]), 2000);
                break;
            case (gameTable[0][2] !== '' && gameTable[0][2] === gameTable[1][2] && gameTable[0][2] === gameTable[2][2]):
                if ( gameTable[0][2] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                }
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[2][0]), 2000);
                break;
            
                // alahsonim win
            case (gameTable[0][0] !== '' && gameTable[0][0] === gameTable[1][1] && gameTable[0][0] === gameTable[2][2]):
                if ( gameTable[0][0] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                }
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[2][0]), 2000);
                break;
            case (gameTable[2][0] !== '' && gameTable[2][0] === gameTable[1][1] && gameTable[2][0] === gameTable[0][2]):
                if ( gameTable[2][0] === 'X' ) {
                    setScores({ X: scores.X + 1, O: scores.O});
                } else { 
                    setScores({ X: scores.X, O: scores.O + 1});
                }
                setIsMessage(true);
                setTimeout(() => clearGame(gameTable[2][0]), 2000);
                break;
            default:
                break;
        }

    };

    const displayButton = () => {
        return (
            <div 
                className='text-xl p-3 active:border md:hover:bg-blueGrey-500 md:hover:border-2 md:hover:border-blueGrey-300/50 md:hover:shadow-[5px_10px_10px_#000000] rounded-xl'
                onClick={ () => clearGame() }
            >
                New Game
            </div>
        )
    };
    const displayMess = () => {
            return !isX ? 'X Won!' : 'O Won!';
        
    };
    
  return (
    <div className='grid grid-cols-3 grid-rows-4 md:h-full h-proHeightMobile md:text-xl relative'>
        <div className={`md:col-start-1 col-span-3 flex justify-center items-center ${isDraw && 'font-bold text-3xl'} ${isMessage&&'font-bold text-3xl underline underline-offset-8'}`}>
            { !isDraw ? (isMessage ? displayMess() : displayButton()) : 'Draw!'}
        </div>
        {/* <div className={`${isDraw ? 'invisible' : 'visible'} `}>Draw!</div> */}
        <div className='col-start-1 col-span-3 row-start-2 row-span-2 grid grid-cols-3 gap-2 bg-blueGrey-500/50'>
            { rowOrBox() }
        </div>
        <div className='col-start-1 col-span-3 row-start-4 grid grid-cols-3 grid-rows-2 items-center text-center'>
            <div className='col-start-1'>Score: </div>
            <div className='col-start-2 col-span-2 divide-y-2'>
                <div>X: { scores.X }</div>
                <div>O: { scores.O }</div>
            </div>
            <div className='group/reset row-start-2 col-start-1 col-span-3 grid grid-cols-3'>
                <div className='col-start-1 md:group-hover/reset:visible' onClick={ () => isMobile && setScores({ X: 0, O: 0 }) }>Reset Score</div>
                <div className='col-start-2 col-span-2 border-b-2 invisible md:group-hover/reset:visible' onClick={ () => setScores({ X: 0, O: 0 })}>Are you sure?</div>
            </div>
            
        </div>
    </div>
  )
}

import React from 'react';
import { useSelector } from 'react-redux';

export default function Preview() {
    const userData = useSelector((state) => state.famData.userData);
    const colNum = userData.filter(e => e.level === 'parents');
  return (
    <div className='m-3 grid grid-rows-[10%,_90%]'>
        <div>This is a tree</div>
        <div className='grid grid-rows-4'>
            <div className='row-start-2'>
                {userData.map((ele, index) => {
                    return (
                        ele.level === 'children' &&
                            <div key={ index } className={` flex flex-col items-center justify-center`}> 
                                <div className='flex gap-4 border rounded-xl p-2'>
                                    <div className='text-2xl'>{ ele.nameOne }</div>
                                    <span className='text-xl'>-</span>
                                    <div className='text-2xl'>{ ele.nameTwo }</div>
                                </div>
                                <div className='capitalize'>{ ele.level }</div>  
                            </div> 
                    )
                })}
            </div>
            <div className={`row-start-3 gap-4 flex items-center overflow-x-auto`} style={{ scrollbarColor: 'green'}}>
                <div className='flex gap-4 w-[150%]'>
                    {userData.map((ele, index) => {
                        return (
                            ele.level === 'parents' && 
                            <div key={ index } className='flex-none w-[400px]'>
                                <div className='flex flex-col justify-center items-center border mx-3'> 
                                    <div className='flex gap-4 border rounded-xl p-2'>
                                        <div className='text-2xl'>{ ele.nameOne }</div>
                                        <span className='text-xl'>-</span>
                                        <div className='text-2xl'>{ ele.nameTwo }</div>
                                    </div>
                                    <div className='capitalize'>{ ele.level }</div>  
                                </div>
                            </div>
                            )
                        })}
                </div>
            </div>
            <div className='row-start-4 col-start-1 col-span-full flex justify-center'>
            {userData.map((ele, index) => {
                return (
                    ele.level === 'grandparents' &&
                        <div key={ index } className={` flex flex-col items-center justify-center`}> 
                            <div className='flex gap-4 border rounded-xl p-2'>
                                <div className='text-2xl'>{ ele.nameOne }</div>
                                <span className='text-xl'>-</span>
                                <div className='text-2xl'>{ ele.nameTwo }</div>
                            </div>
                            <div className='capitalize'>{ ele.level }</div>  
                        </div> 
                )
            })}
            </div>
        </div>
    </div>
  )
}

                    // <div key={ index } className={``}> 
                    //         <div className='flex gap-4 border rounded-xl p-2'>
                    //             <div className='text-2xl'>{ ele.nameOne }</div>
                    //             <span className='text-xl'>-</span>
                    //             <div className='text-2xl'>{ ele.nameTwo }</div>
                    //         </div>
                    //         <div className='capitalize'>{ ele.level }</div>  
                    //     </div>
import React from 'react';
import { useSelector } from 'react-redux';

export default function Preview() {
    const userData = useSelector((state) => state.famData.userData);
    const userDataLevelTwo = useSelector((state) => state.famData.userDataLevelTwo);
    const colNum = userData.filter(e => e.level === 'parents');

    const addChildren = (index) => {
        console.log(index);
    };
  return (
    <div className='m-3 grid grid-rows-[10%,_90%] grid-cols-[5%,_95%]'>
        <div className='row-start-1 col-start-1 col-span-full'>This is a tree</div>
        <div className='col-start-1 row-start-2 flex flex-col justify-around items-center'>
            <div>IV</div>
            <div>III</div>
            <div>II</div>
            <div>I</div>
        </div>
        <div className='grid grid-rows-4'>
            <div className={`row-start-2 gap-4 flex items-center overflow-x-auto scroll-box hover:border`}>
                <div className='flex items-center justify-center gap-4 w-[150%]'>
                    {userData.map((ele, index) => {
                        return (
                            ele.level === 'level_three' &&
                                <div key={ index } className={` flex flex-col items-center justify-center`}> 
                                    <div className='flex gap-4 border rounded-xl p-2'>
                                        <div className='text-2xl'>{ ele.nameOne }</div>
                                        <span className='text-xl'>-</span>
                                        <div className='text-2xl'>{ ele.nameTwo }</div>
                                    </div>
                                </div> 
                        )
                    })}
                </div>
            </div>
            <div className={`row-start-3 gap-4 flex justify-center items-center overflow-x-auto scroll-box group hover:border relative`}>
                <div className='flex items-center justify-center gap-4 w-[150%]'>
                    {userDataLevelTwo.map((ele, index) => {
                        return (
                            ele.level === 'level_two' && 
                            <div key={ index } className='flex-none'  onClick={ () => addChildren(index) }>
                                <div className='flex flex-col justify-center items-center mx-3'> 
                                    <div className='flex gap-4 border rounded-xl p-2'>
                                        <div className='text-xl'>{ ele.nameOne }</div>
                                        <span className='text-xl'>-</span>
                                        <div className='text-xl'>{ ele.nameTwo }</div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                    <div className='md:group-hover:block hidden absolute top-0'>Add</div>
                </div>
            </div>
            <div className='row-start-4 col-start-1 col-span-full flex justify-center'>
            {userData.map((ele, index) => {
                return (
                    ele.level === 'level_one' &&
                        <div key={ index } className={` flex flex-col items-center justify-center`}> 
                            <div className='flex gap-4 border rounded-xl p-2'>
                                <div className='text-2xl'>{ ele.nameOne }</div>
                                <span className='text-xl'>-</span>
                                <div className='text-2xl'>{ ele.nameTwo }</div>
                            </div>
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
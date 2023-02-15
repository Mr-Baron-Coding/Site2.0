import React from 'react';
import { useSelector } from 'react-redux';

export default function Preview() {
    const userData = useSelector((state) => state.famData.userData);
    const colNum = userData.filter(e => e.level === 'parents');
  return (
    <div className='m-3 border grid grid-rows-[10%,_90%] overflow-auto'>
        <div>This is a tree</div>
        {/* <div className={`grid grid-rows-${userData.length}`}> */}
        {/* ${colNum.length < 4 ? `grid-cols-3` : `grid-cols-${colNum.length}`} */}
        <div className={`grid grid-rows-3 grid-cols-[repeat(4,_25%)]`}>
            {userData.map((ele, index) => {
                return (
                    <div key={ index } className={`${ele.level === 'grandparents' && `row-start-3 col-start-1 col-span-full`} ${ele.level === 'parents' && `row-start-2 border mx-1`} flex flex-col items-center justify-center overflow-x-scroll`}> 
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
  )
}

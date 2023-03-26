import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function ProgressBar({prog}) {
    const isOpen = useSelector((state) => state.mobile.menuOpend);
    useEffect(() => {
        var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        var scrolled = (prog / height) * 100;
        document.getElementById("myBar").style.width = scrolled + "%";
    
    }, [prog,isOpen])
    
  return (
    <div className='fixed w-full h-2 bottom-0 landscape:left-0 bg-grey'>
        <div className='h-full bg-blueGrey-900 w-5' id='myBar'></div>
    </div>
  )
}

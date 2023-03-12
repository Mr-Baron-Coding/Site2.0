import React from "react";

import { useSelector } from "react-redux";

import {
    TbMail,
    TbBrandLinkedin,
    TbBrandGithub,
    TbArrowDown,
  } from "react-icons/tb";
  import { TbCopyright } from "react-icons/tb";

export default function Footer() {
    const isOpen = useSelector((state) => state.mobile.menuOpend);
  return (
    <div className={`bg-blueGrey-500/20 border-t col-start-1 col-span-3 ${ isOpen ? 'row-start-[11] md:row-start-7' : 'row-start-[10] md:row-start-6'} grid grid-cols-4 grid-rows-[70%,_30%] h-full w-full items-center justify-center`}>
      <div className='col-start-1 col-span-4 lg:col-start-3 lg:col-span-2 grid grid-cols-4'>
      <div className="w-full h-full flex justify-center items-center">
        <a href="mailto:mikebaroncoding@gmail.com" className="linkHover">
            <TbMail className="stroke-blueGrey-900 dark:stroke-blueGrey-100 stroke-2" size={28} />
            {/* <div>mikebaroncoding</div> */}
        </a>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <a
          href="https://www.linkedin.com/in/mike-g-baron/"
          rel="noreferrer"
          className="linkHover"
          target="_blank"
        >
            <TbBrandLinkedin className='stroke-blueGrey-900 dark:stroke-blueGrey-100 stroke-2' size={28} />
            {/* <div>Mike Baron</div> */}
        </a>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <a
          href="https://github.com/Mr-Baron-Coding"
          rel="noreferrer"
          className="linkHover"
          target="_blank"
        >
          <div className="innerContainer">
            <TbBrandGithub className='stroke-blueGrey-900 dark:stroke-blueGrey-100 stroke-2' size={28} />
            {/* <div>Mike-Baron-Coding</div> */}
          </div>
        </a>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <a
          href="https://docs.google.com/document/d/e/2PACX-1vT6qCn8Xpk-13DsbY01a39T5qPRZbEfJx8i9ZYWJFem4Dsa87543X2G0_qC_x6liY6DRofkavcaRNwF/pub"
          rel="noreferrer"
          download="MichaelBaron.pdf"
        >
          <TbArrowDown className='stroke-blueGrey-900 dark:stroke-blueGrey-100 stroke-2' size={28} />
          {/* <div className="innerContainer">Download Resume<div>
                </div>
                </div> */}
        </a>
      </div>
      </div>
      <div className='row-start-2 col-span-4 flex justify-center text-center'>Mike Baron<TbCopyright /> 2022</div>
    </div>
  );
}

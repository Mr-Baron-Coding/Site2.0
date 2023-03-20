import React, { useEffect, useState, useRef } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { loremIpsum } from 'react-lorem-ipsum';
import asd from './Data/HebData';

export default function Screens() {
    const ref = useRef();
    const isEnglish = useSelector((state) => state.style.isEnglish);
    const isDark = useSelector((state) => state.style.isDark);

    const dataEng = [
        { name: 'about', main: 'Helllo', header: 'A little about me', description: 'Some info about myself', bg: 'bg-articaleOne' },
        { name: 'social', main: 'Helllo', header: 'Latest in social', description: '', bg: 'bg-articaleOne' },
        // { name: 'video', main: 'Helllo', header: 'Latest video', description: 'Watch', bg: 'bg-none' },
        { name: 'realestate', main: 'Helllo', header: 'All things real estate', description: 'With many years of experience investing in real estate in the US and Isarel...', bg: 'bg-articaleOne' },
        { name: 'market', main: 'Helllo', header: 'All things Investing', description: 'I will teach you everything you need to know about about the market', bg: 'bg-articaleTwo' },
        { name: 'crypto', main: 'Helllo', header: 'All things Crypto', description: 'Crypto market made easy/explained', bg: 'bg-articaleThree' },
    ];
      const dataHeb = [
        { 
            name: 'about', 
            main: 'Helllo', 
            header: 'מיכאל רדבוגין', 
            description: [
                ' קצת רקע על מיכאל רדבוגין', 
                'נשוי באושר לטלי ומתגוררים בגבעתיים.',
                'השתחררתי בדרגת סגן מחיל הים היכן ששרתתי בתור מהדנס על כלי שיט שונים'
            ],
            bg: 'bg-articaleFour bg-bottom' 
        },
        // { 
        //     name: 'video', 
        //     main: 'Helllo', 
        //     header: 'Latest video', 
        //     description: [' בואו ללמוד משהו חדש', 'אל תדאגו אסייע לכם לאורך כל הדרך - מאיתור הזדמנויות ועד רכישת הנכס'] ,
        //     bg: 'bg-none' 
        // },
        { 
            name: 'נדל"ן', 
            main: 'Helllo', 
            header: 'נדל"ן', 
            description: 
                [
                    ' כולם מדברים נדל"ן אבל אתם חוששים? ',  
                    'אל תדאגו אסייע לכם לאורך כל הדרך - מאיתור הזדמנויות ועד רכישת הנכס' , 
                    'אז על מה אנחנו מדברים?', 
                    'נדל"ן להשקעה', 
                    'נדל"ן למגורים'
                ], 
            bg: 'bg-articaleOne' 
        },
        // { 
        //     name: 'שוק ההון', 
        //     main: 'Helllo', 
        //     header: 'שוק ההון', 
        //     description: [ ' בואו ללמוד כל מה שצריך בכדי להתחיל להשקיע בשוק ההון ',  'אל תדאגו אסייע לכם לאורך כל הדרך - מאיתור הזדמנויות ועד רכישת הנכס' ], 
        //     bg: 'bg-articaleTwo' 
        // },
        // { 
        //     name: 'קריפטו', 
        //     main: 'Helllo', 
        //     header: 'שוק הקריפטו', 
        //     description: [ ' בוא ללמוד כל מה שצריך על שוק הקריפטו', 'אל תדאגו אסייע לכם לאורך כל הדרך - מאיתור הזדמנויות ועד רכישת הנכס' ], 
        //     bg: 'bg-articaleThree' 
        // },
    ];
    const [activeIndex, setActive] = useState(0);

    useEffect(() => {
        const pages = document.getElementById('screen-container');
        const nextIndex = activeIndex + 1 <= pages.childElementCount - 1 ? activeIndex + 1 : 0;
        const current = document.querySelector(`[data-index='${activeIndex}']`),
              next = document.querySelector(`[data-index='${nextIndex}']`);
              current.dataset.status = 'active';
              next.dataset.status = 'before';
              asd.forEach(e => { console.log(e);});
              console.log(asd);
    },[isDark, isEnglish])

    const goRight = () => {
        const pages = document.getElementById('screen-container');
        const nextIndex = activeIndex + 1 <= pages.childElementCount - 1 ? activeIndex + 1 : 0;
        const current = document.querySelector(`[data-index='${activeIndex}']`),
              next = document.querySelector(`[data-index='${nextIndex}']`);
        current.dataset.status = 'before';
        next.dataset.status = 'moving-left';
    
        setTimeout(() => {
          next.dataset.status = 'active';
        setActive(nextIndex);
        });
      };
      const goLeft = () => {
        const pages = document.getElementById('screen-container');
        const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : pages.childElementCount - 1;
        const current = document.querySelector(`[data-index='${activeIndex}']`),
              next = document.querySelector(`[data-index='${nextIndex}']`);
        current.dataset.status = 'after';
        next.dataset.status = 'moving-right';
        setTimeout(() => {
          next.dataset.status = 'active';
          setActive(nextIndex);
        });
      };

      const openQues = (index) => {
        
      };

  return (
    <div className='row-start-2 relative overflow-hidden select-text' id='screen-container'>
        { isEnglish ? 
            dataEng.map((e,i) => {
                return (
                    <div key={i} className='h-full w-full grid grid-rows-[70%,_10%,_20%] md:grid-cols-[75%,_25%] md:grid-rows-[75%,_25%] absolute left-0 top-0 data-[status=moving-right]:transition-none data-[status=moving-right]:translate-x-full data-[status=moving-left]:transition-none data-[status=moving-left]:-translate-x-full transition-all duration-1000 ease-in-out data-[status=before]:translate-x-[110%] data-[status=after]:-translate-x-[110%]' data-index={i} data-status={i === 0 ? 'active' : 'before'}>
                        <div className={`row-start-1 md:row-start-1 md:col-span-2 ${e.bg} grid place-items-center bg-blend-soft-light bg-cover bg-clip-border bg-no-repeat text-center border-x-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 left-0 top-0 dark:text-mike-fontLight text-mike-fontDark`}>
                            <div className='h-full w-full bg-mike-bgLight/70 dark:bg-mike-backgroundDark/50 text-xl font-bold font-body flex justify-center items-center overflow-y-auto md:overflow-none scroll-smooth'>
                                { i === 2 ? <iframe className='w-full md:w-1/2 aspect-video' src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1"></iframe>
                                // : i === 1 ? <iframe src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fachramenko%2Fposts%2Fpfbid062A5J1CASZvuF2Tem9BzsqUrzMPur7oHt67qpCuMqN7EajCPRb7xUKXSPAB8zzrMl&show_text=true&width=500" width="500" height="545" style={{border:'none', overflow:'hidden'}} allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
                                : <div className='w-[80%] h-[90%] border p-5'>{ loremIpsum() }<br/> { loremIpsum() }</div>}
                            </div>
                        </div>
                        <div className='row-start-2 md:col-start-1 md:row-start-2 font-bold text-3xl lg:text-6xl p-5 overflow-clip border-x-2 border-t-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 uppercase'>{ e.header }</div>
                        <div className='row-start-3 md:row-start-2 md:col-start-2 flex justify-around items-center border-t-2 border-r-2 border-l-2 md:border-l-0 border-mike-backgroundDark/10 dark:border-mike-bgLight/10'>
                            <div className='h-full w-full grid place-content-center cursor-pointer group transition-all duration-200 ease-linear hover:bg-[#f0f0f083] dark:hover:bg-[#33333383] hover:border border-mike-backgroundDark/10 dark:border-mike-bgLight/10' onClick={ () => goLeft() }>
                            <FontAwesomeIcon className='transition-all duration-200 ease-linear group-hover:-translate-x-5' icon={ faChevronLeft } size='3x' />
                            </div>
                            <div className='h-full w-full grid place-content-center cursor-pointer group transition-all duration-200 ease-linear hover:bg-[#f0f0f083] dark:hover:bg-[#33333383] hover:border border-mike-backgroundDark/10 dark:border-mike-bgLight/10' onClick={ () => goRight() }>
                            <FontAwesomeIcon className='transition-all duration-200 ease-linear group-hover:translate-x-5' icon={ faChevronRight } size='3x' />
                            </div>
                        </div>
                    </div>
                )
            })
        :   asd.map((e,i) => {
            return (
                <div key={i} className='h-full w-full grid grid-rows-[70%,_10%,_20%] md:grid-rows-[75%,_25%] md:grid-cols-[75%,_25%] absolute left-0 top-0 data-[status=moving-right]:transition-none data-[status=moving-right]:translate-x-full data-[status=moving-left]:transition-none data-[status=moving-left]:-translate-x-full transition-all duration-1000 ease-in-out data-[status=before]:translate-x-[110%] data-[status=after]:-translate-x-[110%]' data-index={i} data-status={i === 0 ? 'active' : 'before'}>
                  <div className={`row-start-1 md:col-span-2 ${e.bg} grid place-items-center bg-blend-soft-light bg-cover bg-no-repeat bg-center text-center border-l-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10 left-0 top-0 dark:text-mike-fontLight text-mike-fontDark`}>
                    <div className='h-full w-full border-2 bg-mike-bgLight/70 dark:bg-mike-backgroundDark/50 flex justify-center items-center overflow-y-auto md:overflow-none scroll-smooth p-5'>
                        <div className='h-full w-full '>
                            { i === 0 && 
                                <div className='flex flex-col justify-center items-center gap-y-3'>
                                    <div className='underline underline-offset-1 text-xl md:text-3xl'>{e.subHeader}</div>
                                    <ul className='list-disc list-outside text-right text-md md:text-xl md:w-1/2'>
                                        {e.description.map((element, index) => {
                                            return (
                                                index <= 1 ? <div>{element.mainText}</div> : <li>{element.mainText}</li>
                                                
                                            )
                                        })}
                                    </ul>
                                </div>
                            }
                            { i === 1 && 
                                <div className='flex flex-col justify-center items-center gap-y-10'>
                                    <div className='underline underline-offset-1 text-xl md:text-3xl'>{e.subHeader}</div>
                                    <div className='felx flex-col w-full justify-center items-center md:w-3/4 border-y-2'>
                                        {e.description.map((element) => {
                                                return (
                                                    <div className='text-md md:text-xl'>
                                                        { element.mainText }  
                                                    </div>
                                                )
                                        })}
                                    </div>
                                    <div className='flex flex-col md:flex-row gap-y-5 border-y w-full'>
                                        <div className='md:w-1/2 text-right px-5'>
                                            {e.pitch.map((element, index) => { return (<div className='text-md md:text-xl font-bold underline'>{ index===0 && element.mainText }</div>) })}
                                            {e.pitch.map((element, index) => {
                                                return (
                                                    index > 0 &&
                                                        <ul className='list-disc text-sm md:text-lg list-inside'>
                                                            <li className='no-underline'>{element.mainText}</li>
                                                        </ul>
                                                    
                                                )
                                            })}
                                        </div>
                                        <div className='md:w-1/2 text-right px-5'>
                                            {e.sale.map((element, index) => { return (<div className='text-md md:text-xl font-bold underline'>{ index===0 && element.mainText }</div>) })}
                                            {e.sale.map((element, index) => {
                                                return (
                                                    index > 0 &&
                                                        <ul className='list-disc text-sm md:text-lg list-outside'>
                                                            <li className='no-underline'>{element.mainText}</li>
                                                        </ul>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className='lg:w-1/2 space-y-5'>
                                        {e.possible.map((element, index) => { return (<div className='text-md md:text-xl font-bold underline'>{ index===0 && element.mainText }</div>) })}
                                        <div className='flex flex-col gap-y-3 text-right'>
                                            {e.possible.map((element, index) => {
                                                return (
                                                    index > 0 &&
                                                        <ul className='text-sm md:text-lg md:list-outside'>
                                                            <li className='no-underline relative'>
                                                                <span className='right-0 absolute'>₪</span>
                                                                <span className='pr-5'>{element.mainText}</span>
                                                            </li>
                                                        </ul>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className='border-y-2 md:text-xl lg:text-3xl pb-5'>{e.motivation}</div>
                                    <div className='lg:w-1/2 space-y-5'>
                                        {e.questions.map((element, index) => { return (<div className='text-md md:text-xl font-bold underline'>{ index===0 && element.mainText }</div>) })}
                                        <div className='flex flex-col gap-y-3 text-right w-full'>
                                            {e.questions.map((element, index) => {
                                                return (
                                                    index > 0 &&
                                                        <div onClick={ () => openQues(index) } className='relative w-full h-max overflow-hidden p-3 group border' ref={ref}>
                                                            <input type='checkbox' className='peer appearance-none absolute w-full h-full top-0 right-0' />  
                                                            <div className='pointer-events-none md:text-xl bg-mike-bgLight/50 dark:bg-mike-backgroundDark/50'>{element.mainText}</div>
                                                            <div className='transition-all duration-300 ease-linear -translate-x-[110%] h-0 peer-checked:h-full peer-checked:translate-x-0'>{element.body}</div>
                                                        </div>
                                                )
                                            })}
                                        </div>
                                    </div>
                                    <div className='h-5'></div>
                                </div>
                            }
                            { i === 2 && 
                                <div className='flex flex-col justify-center items-center gap-y-10'>
                                    <div className='underline underline-offset-1 text-xl md:text-3xl'>{e.subHeader}</div>
                                    <div className='flex justify-center items-center'>
                                        {e.description.map((element, index) => {
                                            return (
                                                element.mainText
                                            )
                                        })}
                                    </div>
                                </div>
                            }
                        </div>
                        {/* { i=== 1 ? <iframe className='w-full md:w-1/2 aspect-video' src="https://www.youtube.com/embed/dQw4w9WgXcQ?controls=1"></iframe> 
                        : <div className='w-[80%] h-[90%] border p-5 flex flex-col'>
                            <div>{ e.description[0] }</div>
                            <div>{ e.description[1] }</div>
                            {i === 2 && e.description[2] && <div className='grid grid-cols-2 grid-rows-[20%,_80%] h-2/3'>
                                <div className='row-start-1 col-start-1 col-span-2'>{ e.description[2] }</div>
                                <div className='col-span-1 row-start-2 col-start-1 h-1/4 w-1/3 transition-all duration-700 delay-100 ease-in-out group border-b md:hover:border-b md:hover:bg-grey/50 md:hover:w-full overflow-hidden'>
                                    <div>{ e.description[3] }</div>
                                    <div className='text-right transition-all delay-500 duration-500 group-hover:translate-x-0 translate-x-full translate-y-1/2'>יצירת הכנסה פסיבית</div>
                                    <div className='text-right transition-all delay-[700ms] duration-500 group-hover:translate-x-0 translate-x-full translate-y-1/2'>החזקת נכס</div>
                                    <div className='text-right transition-all delay-[900ms] duration-500 group-hover:translate-x-0 translate-x-full translate-y-1/2'>השקעה לטווח ארוך</div>
                                </div>           
                                <div className='relative row-start-2 col-start-2 h-1/4 w-1/3 transition-all duration-700 delay-100 ease-in-out md:hover:border-b md:hover:bg-grey/50 md:hover:w-full overflow-hidden'>
                                    { e.description[4] }
                                    <input type='checkbox' className='group absolut bottom-0 appearance-none h-8 w-8 border checked:h-5 checked:w-5 checked:border' />
                                    <div className='group-checked:block hidden'>Hello</div>
                                </div>
                            </div>}
                        </div> } */}
                    </div>
                  </div>
                  <div className='row-start-2 md:col-start-1 font-bold text-3xl lg:text-6xl p-5 overflow-clip border-l-2 border-t-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10'>{ e.header }</div>
                  <div className='row-start-3 md:row-start-2 md:col-start-2 flex justify-around items-center border-t-2 border-mike-backgroundDark/10 dark:border-mike-bgLight/10'>
                    <div className='h-full w-full grid place-content-center cursor-pointer group transition-all duration-200 ease-linear hover:bg-[#f0f0f083] dark:hover:bg-[#33333383] hover:border border-mike-backgroundDark/10 dark:border-mike-bgLight/10' onClick={ () => goRight() }>
                      <FontAwesomeIcon className='transition-all duration-200 ease-linear group-hover:translate-x-5' icon={ faChevronRight } size='3x' />
                    </div>
                    <div className='h-full w-full grid place-content-center cursor-pointer group transition-all duration-200 ease-linear hover:bg-[#f0f0f083] dark:hover:bg-[#33333383] hover:border border-mike-backgroundDark/10 dark:border-mike-bgLight/10' onClick={ () => goLeft() }>
                      <FontAwesomeIcon className='transition-all duration-200 ease-linear group-hover:-translate-x-5' icon={ faChevronLeft } size='3x' />
                    </div>
                  </div>
                </div>
              )
          })}
    </div>
  )
}

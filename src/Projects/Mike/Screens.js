import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { loremIpsum } from 'react-lorem-ipsum';
import asd from './Data/HebData';

export default function Screens() {
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

  return (
    <div className='row-start-2 relative overflow-hidden' id='screen-container'>
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
                    <div className='h-full w-full bg-mike-bgLight/70 dark:bg-mike-backgroundDark/50 text-xl md:text-3xl font-bold font-body flex justify-center items-center overflow-y-auto md:overflow-none scroll-smooth'>
                        <div className='p-3 h-full w-full inline-block'>
                            {e.description.map((de,poss) => {
                                return (
                                    <>
                                        <div className='text-2xl underline underline-offset-2'>{de.subHeader}</div>
                                        <div>{de.mainFirst}</div>
                                        {i === 0 ?
                                            <ul className='list-disc'>
                                                <li>{de.mainSecond}</li>
                                                <li>{de.mainThird}</li>
                                                <li>{de.mainFourth}</li>
                                                <li>{de.mainFivth}</li>
                                                <li>{de.mainSix}</li>
                                                <li>{de.mainSeven}</li>
                                            </ul>
                                            
                                        :
                                            <div>
                                                {/* <div>{de.mainFirst}</div>    */}
                                                <div>{de.mainSecond}</div>
                                                <div>{de.mainThird}</div>
                                                <div>{de.mainFourth}</div>
                                                <div>{de.mainFivth}</div>
                                                <div>{de.mainSix}</div>
                                                <div>{de.mainSeven}</div>
                                            </div>
                                        }      
                                    </>
                                    
                                )
                            })}
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

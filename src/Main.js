import './App.css';
import React, { useState, useEffect } from 'react';
import HomeScreen from './Components/HomeScreen';
import Navigation from './Components/Navigation';
import Projects from './Components/Projects';

import Skills from './Components/Homescreen Comp/Skills';

import { useDispatch, useSelector } from 'react-redux';
import { changeScreenSize } from './Features/mobileSlice';
import { useMediaQuery } from '@mui/material';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import ProgressBar from './Components/ProgressBar';


function Main() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.mobile.menuOpend);
  const matches = useMediaQuery('(max-width:1000px)');

  const [scrollTop, setScrollTop] = useState(0);

    useEffect(() => {
        const handleScroll = event =>  {
          setScrollTop(window.scrollY);
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); 

    useEffect(() => {
      dispatch(changeScreenSize(matches));
  
    }, [matches, dispatch]);

    useEffect(() => {
      if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      // document.documentElement.classList.contains('dark') ? document.documentElement.classList.remove('dark') : document.documentElement.classList.add('dark')
    },[]);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });  
        const mike = window.history.replaceState("", document.title, window.location.pathname + window.location.search); 
        console.log(mike);
    };

  return (
    <div 
      id='main'
      className={` 
        min-h-screen snap-y snap-mandatory overflow-x-hidden
        bg-white text-blueGrey-500
        dark:bg-blueGrey-700 dark:text-blueGrey-100
        grid transition-all duration-[1000ms] ease-in-out
        ${isOpen ? 'grid-rows-baseRowGridMobileOpen md:grid-rows-baseRowGridOpen' : 'grid-rows-baseRowGridMobile md:grid-rows-baseRowGrid'}
        grid-cols-baseColGridMobile
        md:grid-cols-baseColGrid 
        gap-y-4 md:gap-y-10 min-w-[360px]
        font-body select-none`}
    >
      <ProgressBar prog={ scrollTop } />
      <Navigation />
      <HomeScreen />
      <Skills />
      <Projects />
      <Contact />
      <Footer />

      { scrollTop > 20 && <button className='hover:animate-pulse hover:text-blueGrey-900/50 hover:bg-blueGrey-300 text-blueGrey-300 fixed bottom-[100px] right-5 border-2 h-[50px] w-[70px]' onClick={ () => goToTop() }>Top</button> } 
       

    </div>
  );
}

export default Main;

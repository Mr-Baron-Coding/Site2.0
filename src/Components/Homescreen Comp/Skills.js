import React, { useRef } from 'react';
import SkillGrid from '../TechShape/SkillGrid';
import useIntersectionObserver from '../useIntersectionObserver';

export default function Skills() {
  const ref = useRef();
  const isIntersecting = useIntersectionObserver(ref, { threshold: 0.1 });

  return (
    <div ref={ref} id='skills' className={`col-start-2 row-start-4 flex flex-col md:col-start-2 md:row-start-3 md:justify-center md:items-center md:grid md:grid-cols-4 transition-all duration-500 delay-100 ease-in-out ${ !isIntersecting ? 'translate-x-[90%] opacity-5' : 'translate-x-0' }`}>
        <SkillGrid />
    </div>
  )
}

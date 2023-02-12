import React from 'react';
import SkillGrid from '../TechShape/SkillGrid';

export default function Skills() {
  return (
    <div id='skills' className='col-start-2 row-start-4 flex flex-col md:col-start-2 md:row-start-3 md:justify-center md:items-center md:grid md:grid-cols-4 md:gap-4'>
        <SkillGrid />
    </div>
  )
}

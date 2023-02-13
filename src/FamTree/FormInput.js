import React, { useState } from 'react'

export default function FormInput() {
    const [nameOne, setNameOne] = useState('');
    const [nameTwo, setNameTwo] = useState('');
    const [level, setLevel] = useState('grandparents');
  return (
    <form>
    <div className='border h-[500px] w-[500px] grid grid-rows-4'>
        <div className='border flex flex-col'>
            <label>Add name 1:</label>
            <input type='text' className='bg-blueGrey-300 h-1/4 w-1/2' onChange={(e) => setNameOne(e.target.value)} />
        </div>
        <div className='border flex flex-col'>
        <label>Add name 2:</label>
            <input type='text' className='bg-blueGrey-300 h-1/4 w-1/2' onChange={(e) => setNameTwo(e.target.value)}/>
        </div>
        <div>
            <select value={level} onChange={(e) => setLevel(e.target.value)} className='bg-blueGrey-300' >
                <option className='odd:bg-purple-500' value='parents'>Parents</option>
                <option className='even:bg-purple-300' value='siblings'>Siblings</option>
                <option className='even:bg-purple-300' value='grandparents'>Grandparents</option>
                <option className='even:bg-purple-300' value='children'>Children</option>
            </select>
        </div>
        <div className='border'><button>Add</button></div>
    </div>
    </form>
  )
}

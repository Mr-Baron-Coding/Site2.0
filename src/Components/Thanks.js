import React from 'react';
import { Link } from 'react-router-dom';

export default function Thanks() {
  return (
    <div className='z-10'>
      <h1>Thank you!</h1> 
      <Link to='/'><h3>Let's go BACK</h3></Link>
    </div>
  )
}

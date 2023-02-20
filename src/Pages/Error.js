import React from 'react';
import { useRouteError } from 'react-router';
import { Link } from 'react-router-dom';

export default function Error() {
  const error = useRouteError();

  return (
    <div className='min-h-screen bg-blueGrey-100 text-blueGrey-500 dark:bg-blueGrey-700 dark:text-blueGrey-100'>
      <div className='text-2xl text-center'>We are lost</div>
      <Link to='/'><div className='text-lg text-center'>Take me back</div></Link>
    </div>
  )
}

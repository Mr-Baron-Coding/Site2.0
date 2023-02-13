import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router';
import Loading from './Components/Loading';

export default function App() {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  },[]);
  return (
    isLoading ? <Loading /> : <Outlet />
  )
}

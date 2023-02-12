import React from 'react';
import { useRouteError } from 'react-router';

export default function Error() {
  const error = useRouteError();

  return (
    <div>Something went wrong
       <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  )
}
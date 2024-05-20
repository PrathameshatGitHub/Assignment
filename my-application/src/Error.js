import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err=useRouteError();
    console.log(err)
    
  return (
    <div>
      <h1>this is the error page</h1>
        <h2>status-{err.status}</h2>
        <h2>{err.statusText}</h2>
        <h2> {err.data}</h2>
        <h2> this is the eror page manually created by me</h2>
      
      
    </div>
  );
}

export default Error;

import React, { useLayoutEffect, useRef } from 'react';

export const UseLayout = () => {
  const myref = useRef(null);

  useLayoutEffect(() => {
    console.log(myref.current.getBoundingClientRect());
  }, []);

  return (
    <div>
      <h1>useLayoutEffect</h1>
      <input ref={myref} />
    </div>
  );
};
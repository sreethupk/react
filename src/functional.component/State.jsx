import React, { useState } from 'react'

const State = () => {
     
    //state initialization using useState hook
    const [time,setTime] = useState(0);

    //function to increment the timer
    const incrementTime = () =>  {
        setTime(time +1);
    }

  return (
    <div>
       <h1>Time: {time} seconds</h1>
       <button onClick={incrementTime}>increment Time</button>
    </div>
  )
}

export default State

import React, { useState } from 'react'

const UseState = () => {
    const [count, setCount] = useState(0);//initial value
  return (
    <div>
       <p>Count: {count}</p>
       <button onClick={()=>setCount(count + 1)}>Increment</button>
      
    </div>
  )
}

export default UseState
 //state is an internal data store that belongs to a specific compomtent,and it can be chaned over time

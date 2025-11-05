import React from 'react'

const Condition = () => {
    const isLoggedIn = true;
  return (
    <div>
      <p>{isLoggedIn ? "Welcome back!" : "Please sign in."}</p>
    </div>
  )
}

export default Condition
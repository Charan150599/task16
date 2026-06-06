import {useState,useCallback} from "react";
import React from 'react'

export default function Profile() {

    const [count,setCount]=useState(0)

const handleClick=useCallback(()=>{
setCount(count+1)
},[count])


  return (
    <div>
      <h1>User Profile</h1>

<h2>Orders : {count}</h2>

<button onClick={handleClick}>
Place Order
</button>
    </div>
  )
}
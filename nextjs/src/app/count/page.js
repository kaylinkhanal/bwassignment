'use client'
import React, {useState} from 'react'

//hooks---> 
// by default functional compoenents are stateless component
// we can never manipulate the state
const page = () => {
    let [number, setNumber] = useState(1)
    const handleIncrement =()=>{
      setNumber(number+1)
    }

    const handleDecrement =()=>{
      setNumber(number-1)
    }
  return (
    <div>
        <button className='p-2 border border-black' onClick={handleDecrement}>-</button>
        {number}
        <button  className='p-2 border border-black'  onClick={handleIncrement}>+</button>
    </div>
  )
}

export default page
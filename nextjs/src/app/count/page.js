'use client'
import React, {useState} from 'react'

const page = () => {
    let [number, setNumber] = useState(1)
    const handleClick =()=>{
        setNumber(number+1)
    }
  return (
    <div>
        {number}
        <button onClick={handleClick}>+</button>
    </div>
  )
}

export default page
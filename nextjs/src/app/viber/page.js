'use client'
import React, {useState} from 'react'
import { FaHeart } from "react-icons/fa";


const page = () => {
    const [color, setColor] = useState('grey')
    const changeColor=()=>{
            setColor(color==='red' ? 'grey': 'red')
    }
  return (
    <div className='p-2 shadow-lg w-8 m-2 border border-grey'>
        <FaHeart onClick={changeColor} color={color}/>
    </div>
  )
}

export default page
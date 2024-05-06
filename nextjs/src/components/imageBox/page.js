'use client'
import Image from 'next/image'
import React from 'react'

const ImageBox = (props) => {
  return (
    <div>
        {props.title}
        <Image src="/pikachu.jpeg" alt="pokemon image" width={40} height={40}/>
    </div>
  )
}

export default ImageBox
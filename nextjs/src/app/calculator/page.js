'use client'
import React from 'react'

const page = () => {
    const calculatorKeys = [
        ['C','<-','%', '/'],
        ['7','8','9', '*'],
        ['4','5','6', '-'],
        ['1','2','3', '+'],
        ['+/-','0','.', '='],
    ]
  return (
    <div>
   {
    calculatorKeys.map((item)=>{
           return (
            <div className='flex'>
                { 
                item.map((keys)=>{
                    return <div className='p-2 m-2 w-8 shadow-lg'>{keys}</div>
                     })
                }
            </div>
           )
        })}
   
    </div>
  )
}

export default page
'use client'
import React from 'react'

const page = () => {
    const loggedInUser = 122
    const messages = [
        {message:'hi k cha' ,sender: 123, members:[123,122]},
        {message:'thik cha' ,sender: 122, members:[123,122]},
        {message:'tero k cha' ,sender: 122, members:[123,122]},
        {message:'same, ok bye' ,sender: 123, members:[123,122]},
        {message:'bye' ,sender: 122, members:[123,122]}
    ]
  return (
    <div className='w-[50%] border border-black p-10 m-10'>
            <strong>123</strong>
            {
                messages.map((item)=>{
                    if(item.sender === loggedInUser){
                        return(
                            <>
                             <div className='bg-blue-500 p-2 m-2 w-[60%] rounded-lg ml-10'>{item.message}</div>
                            </>
                         )
                    }else{
                        return(
                            <>
                             <div className='bg-gray-200 p-2 m-2 w-[60%] rounded-lg '>{item.message}</div>
                            </>
                         )
                    }
                })
            }
    </div>
  )
}

export default page
'use client'
import ChatBar from '@/components/chatBar/page'
import Feed from '@/components/feed/page'
import SideBar from '@/components/sidebar/page'
import React, {useEffect} from 'react'

const page = () => {
   
  return (
    <div className='flex'>
        <SideBar/>
        <Feed/>
        <ChatBar/>
    </div>
  )
}

export default page
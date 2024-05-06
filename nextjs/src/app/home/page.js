
import CustomTable from '@/components/customTable/page'
import Footer from '@/components/footer/page'
import ImageBox from '@/components/imageBox/page'
import CustomNavbar from '@/components/navbar/page'

import SideBar from '@/components/sidebar/page'
import SpaceLayout from '@/components/sidebar/spaceLayout'

import React from 'react'

const page = () => {
  return (
    <SpaceLayout>
        <CustomNavbar chocolate="kitkat" gift="nike shoes"/>
        hi hello worldd

        <SideBar name="sanjeev" price="79$" age={40} address="ktm"/>
        <Footer brand="Astro"/>
        <ImageBox title="my fav pokemon"/>
        <CustomTable headers={['id','rollNo']}/>
        </SpaceLayout>
  )
}

export default page
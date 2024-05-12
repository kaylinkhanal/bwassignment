'use client'
import React from 'react'
import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import Viber from '../viber/page';
import Link from 'next/link';

const page = () => {
    const productList = [
        {id: 1, name:'Baltra cooker 5l', productImage: 'https://static-01.daraz.com.np/p/5c1df5a7c1b9462c12b49eefb01ee014.jpg', category:'Home Appliance', price:400},
        {id: 2, name:'Kitkat', productImage:'https://static-01.daraz.com.np/p/5c1df5a7c1b9462c12b49eefb01ee014.jpg', category:'Sweets', price:40},
        {id: 3223, name:'Air Force', productImage:'https://static-01.daraz.com.np/p/5c1df5a7c1b9462c12b49eefb01ee014.jpg', category:'Footwear', price:44400},
        {id: 5, name:'CG Fridge',  productImage:'https://static-01.daraz.com.np/p/5c1df5a7c1b9462c12b49eefb01ee014.jpg', category:'Home Appliance', price:33400},
        {id: 6, name:'Hawkins cooker 5l', productImage:'https://static-01.daraz.com.np/p/5c1df5a7c1b9462c12b49eefb01ee014.jpg', category:'Home Appliance', price:4400}
    ]
  return (
    <div className='flex bg-pink-50'>
       {   productList.map((item)=>{
                return(
                    <Link href={"/product/"+item.id}>
                <Card  className="py-4 m-4">
                <CardHeader className="pb-0 pt-2 px-4 flex items-start">
                    <div>
                    <h4 className="font-bold text-large">{item.name}</h4>
                  <p className="text-tiny uppercase font-bold">{item.price}</p>
                  <small className="text-default-500">{item.category}</small>
                    </div>
                  
                  {/* <Viber/> */}
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                  <Image
                    alt="Card background"
                    className="object-cover rounded-xl"
                    src={item.productImage}
                    width={270}
                  />
                </CardBody>
              </Card>
              </Link>
              )
            })
            }
    </div>
  )
}

export default page
import React from "react";
import {Input, Button,Chip} from "@nextui-org/react";
import Link from "next/link";
import SideBar from '@/components/sidebar/page'
export default function App() {
  return (
    <>
  <div className="text-orange-500 text-4xl -rotate-90 w-72 m-10">REGISTER</div>
    <div className="flex  justify-center items-center ">
  <div >
  <SideBar name="sanjeev" price="79$" age={40} address="ktm"/>
      <Input className="m-2" type="email" label="Email" />
      <Input className="m-2" type="password" label="Password" />
      <Input className="m-2" label="Full Name" />
      <Input className="m-2"  label="Address" />
      <Button radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg m-2">
      Register
    </Button>
    <br/>
   Already have an account? <Link href="/">Login</Link>  instead!!
  </div>
  
    </div>
    </>

);
}

import React from "react";
import {Input, Button,Chip} from "@nextui-org/react";
import Link from "next/link";

export default function App() {
  return (
    <>
  <div className="text-orange-500 text-4xl -rotate-90 w-72">LOGIN</div>
    <div className="flex  justify-center items-center ">
  <div >
      <Input className="m-2" type="email" label="Email" />
      <Input className="m-2" type="password" label="Password" />
      <Button as={Link} href="/home" radius="full" className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg m-2">
      Login
    </Button>
    <br/>
    Don't have an account yet? <Link href="/register">Sign Up</Link>  instead!!
  </div>
  
    </div>
    </>

);
}

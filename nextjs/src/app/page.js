import React from "react";
import {Card,Input,Button, CardHeader, CardBody, CardFooter, Divider, Link, Image} from "@nextui-org/react";

export default function App() {
  return (
    <Card className="max-w-[400px]">
      <CardHeader className="flex gap-3">
        <Image
          alt="nextui logo"
          height={40}
          radius="sm"
          src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
          width={40}
        />
        <div className="flex flex-col">
          <p className="text-md">LOGIN</p>
        </div>
      </CardHeader>
      <Divider/>
      <CardBody>
      <Input type="email" label="Email" />
      <Input type="password" label="Password" />
      <Button radius="full" className="bg-gradient-to-tr from-gray-500 to-black-500 text-white shadow-lg">
      Login
    </Button>

      </CardBody>
      <Divider/>
      <CardFooter>
        <Link
          isExternal
          showAnchorIcon
          href="https://github.com/nextui-org/nextui"
        >
          Visit source code on GitHub.
        </Link>
      </CardFooter>
    </Card>
  );
}

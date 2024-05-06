"use client"
import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button,Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Avatar} from "@nextui-org/react";



export default function CustomNavbar(props) {


  return (
    <Navbar>
      <NavbarBrand>
        <p className="font-bold text-orange-400 text-inherit">ASTRO</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
      {props.chocolate}
      {props.gift}
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        <Dropdown>
      <DropdownTrigger>
      <Avatar isBordered color="success" src="https://i.pravatar.cc/150?u=a04258114e29026302d" />
      </DropdownTrigger>
      <DropdownMenu aria-label="Static Actions">
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
      
        </NavbarItem>
     
      </NavbarContent>
    </Navbar>
  );
}



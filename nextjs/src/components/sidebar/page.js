'use client'
import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";
import {ListboxWrapper} from "./ListboxWrapper";
import LogoutButton from "./logoutButton";
import BlackBox from "../blackBox/page";
import SpaceLayout from "./spaceLayout";


export default function App(props) {
  return (
    <SpaceLayout>
      
      <Listbox
        aria-label="Actions"
        onAction={(key) => alert(key)}
      >
        <ListboxItem key="new">Ride history</ListboxItem>
        <ListboxItem key="copy">New Rides</ListboxItem>
        <ListboxItem key="edit">Payment</ListboxItem>
     
      </Listbox>

        <BlackBox color="red" price={props.price}/>
         <LogoutButton color="green" name={props.name}/>
    </SpaceLayout>
  );
}

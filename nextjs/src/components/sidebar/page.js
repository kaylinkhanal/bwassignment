'use client'
import React from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";

import SpaceLayout from "./spaceLayout";


export default function SideBar(props) {
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

    </SpaceLayout>
  );
}

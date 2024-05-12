'use client'
import React , {useEffect, useState} from "react";
import {Listbox, ListboxItem} from "@nextui-org/react";




export default function ChatBar(props) {

    const [onlineList, setOnlineList] = useState([])
    useEffect(()=>{
        setOnlineList([
            {id:1, isOnline:false, name:'Ram thapa'},
            {id:2, isOnline:true, name:'Shyam Shrestha'},
            {id:5, isOnline:false, name:'Gopal Shrestha'},
        ])
    }, [])


  
  return (
      <>
  
           
           {onlineList.length> 0 ? (
            <Listbox
            aria-label="Actions"
            onAction={(key) => alert(key)}
            >
            
   {onlineList?.map((item)=>{
       return  <ListboxItem key="new">
           {item.name}
           <span className="text-green-600 text-2xl">{item.isOnline ? ".": null}</span>
           </ListboxItem>
   })}
  
  

 </Listbox>
           ): 'Loading....'}
         
            
            </>
  

  );
}

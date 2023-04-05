import React,{useState}from "react";
import { useEffect } from "react";
import './cc2.css'


export default function Day81() {
    const[msg,setmsg]=useState("Hello dear one,learning React...?")
  
   useEffect(()=>{
        console.log('use Effect hook called..');
        setTimeout(()=>{
            setmsg("Great...This is time to learn HOOKS.... ");
        },2000)
    })
    return (
     
    <div className="Day8">
    <p id="b">Day8</p><p><b>{msg}</b></p></div>
  )
}

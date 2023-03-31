import React from "react";
import './day1.css'
const alertBox=()=>{
    alert('Message from Javascript Developer');
}
const console_ =()=>{
    console.log("Message to Developer");
}
const myarray=['a','e','i','o','u'];
const check=()=>{
    alert("Check console");
    myarray.push('u');
    console.log(myarray);
}
export default function Day1() {
  return (
    <div className="buttons">
    <button class="b1" id="b1" onClick={alertBox}>Click Me</button>

    <button class="b1" id="b2" onClick={console_}>Click Me</button>

    <button class="b1" id="b3" onClick={check}>click me</button>
    </div>
  )
}
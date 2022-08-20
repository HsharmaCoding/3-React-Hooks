import * as React from 'react'
import { useState,useEffect } from 'react'

export const UseEffectDemo=()=>{
    const[count,setCount]=useState(0);

    // useEffect(() => {
    //     setTimeout(() => {
    //       setCount((count) => count + 1);
    //     },1000);
    //   },[]); // <- add empty brackets here

    // Below code will be executed evrytime once the count value changes.
    useEffect(()=>{
        setTimeout(()=>{
            setCount((count)=>count+1);
        })
    },[count]) // <- add empty brackets here

    return(
        <div>
            <p> useEffect: You have clicked {count} times</p>
        </div>
    )
}
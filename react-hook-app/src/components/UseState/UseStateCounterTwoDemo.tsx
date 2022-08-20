import * as React from 'react'
import { useState } from 'react'

export const UseStateCounterTwoDemo=()=>{
    const initialCount=0;
    const[count,setCount]=useState(initialCount);

    const incrementFive=()=>{
        for (let i=0;i<5;i++){
            setCount(prevCount=>prevCount+1)
        }
    }

    return(
        <div>
            {/* This changes are working, but it's not a right way to change the count values. It's unsafe.
            Let's see why. You can implement the below mentioned code and it will create problem. */}
            {/* Count:{count}
            <button onClick={()=>setCount(initialCount)} >Reset</button>
            <button onClick={()=>setCount(count+1)}> Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
            <button onClick={incrementFive}>IncrementFive</button> */}

            {/* Whenever we need to update the state values from the previous value then go with the safer option as mentioned below. */}
            useState: Count={count} 
            <button onClick={()=>setCount(initialCount)}>Reset</button>
            <button onClick={()=>setCount(prevCount=>prevCount+1)}>Increment</button>
            <button onClick={()=>setCount(prevCount=>prevCount-1)}>Decrement</button>
            {/* It will increase everytime 5 */}
            <button onClick={incrementFive}>IncrementFive</button>
        </div>
    )
}
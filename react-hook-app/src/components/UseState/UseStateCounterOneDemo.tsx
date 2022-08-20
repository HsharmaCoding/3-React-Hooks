import * as React from 'react'
import { useState,useEffect } from 'react'

export const UseStateCounterOneDemo=()=>{
    const[count,setCount]=useState(0);

    return(
        <div>
            useState: Count={count}
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}
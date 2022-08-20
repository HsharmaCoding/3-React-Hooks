import * as React from 'react'
import { useState, useEffect } from "react";


export const CustomHookDemo=(url:string)=>{
    const [data,setData]=useState([]);

    useEffect(()=>{
        fetch(url)
        .then((res)=>res.json())
        .then((data)=>setData(data))
    },[url])

    return data;
}
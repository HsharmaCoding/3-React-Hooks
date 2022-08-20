import * as React from 'react'
import { useState,createContext,useContext } from 'react'
import { Component1 } from './Component1';

const UserContext = createContext("");

export const UseContextDemo=()=>{

    const[user,setUser]=useState("Tom Brady")

    return(
        <UserContext.Provider value={user}>
            <h3> {`Hello ${user}! [useContext Hook: Parent Component]`}</h3>
            <Component1/>
        </UserContext.Provider >
    )
}

export const UserConsumer=()=>useContext(UserContext);
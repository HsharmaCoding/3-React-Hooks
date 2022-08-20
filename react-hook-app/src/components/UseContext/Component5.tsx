import * as React from 'react'
import { useState,createContext,useContext } from 'react'
import { UserConsumer } from './UseContextDemo'

export const Component5=()=>{

    const user=UserConsumer();

    return(
        <>
            <h3>{`Component 5 Hello ${user} again! [useContext Hook: Child Component]`}</h3>
        </>
    )
    
}
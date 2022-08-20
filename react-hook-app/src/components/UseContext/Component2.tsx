import * as React from 'react'
import { useState,createContext,useContext } from 'react'
import { Component3 } from './Component3'

export const Component2=()=>{

    return(
        <>
                <h5>Component 2 [useContext Hook: Child Component]</h5>
                <Component3/>
        </>
    )
    
}
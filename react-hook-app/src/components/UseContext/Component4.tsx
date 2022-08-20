import * as React from 'react'
import { useState,createContext,useContext } from 'react'
import { Component5 } from './Component5'

export const Component4=()=>{

    return(
        <>
        <h5>Component 4 [useContext Hook: Child Component]</h5>
         <Component5/>
        </>
    )
    
}
import * as React from 'react'
import { useState,createContext,useContext } from 'react'
import { Component4 } from './Component4'

export const Component3=()=>{

    return(
        <>
            <h5>Component 3 [useContext Hook: Child Component]</h5>
            <Component4/>
        </>
    )
    
}
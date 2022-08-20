import * as React from 'react'
import { useState,createContext,useContext } from 'react'
import { Component2 } from './Component2';

export const Component1=()=>{

    return(
        <>
                <h5>Component 1 [useContext Hook: Child Component]</h5>
                <Component2/>
        </>
    )

}
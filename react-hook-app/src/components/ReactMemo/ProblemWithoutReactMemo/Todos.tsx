import * as React from 'react'
import { useState } from 'react'
import IEmployee from '../../../interface/IEmployee'

interface IProps{
    todos:IEmployee[]
}

const Todos=(props:IProps)=>{
    console.log("child render : problme without React Memo")
    return(
        <>
            <h2>My Todos</h2>
            {
                props.todos.map((todo,index)=>{
                    return <p key={index}>{todo.name}</p>
                })
            }
        </>
    )
}

export default Todos;
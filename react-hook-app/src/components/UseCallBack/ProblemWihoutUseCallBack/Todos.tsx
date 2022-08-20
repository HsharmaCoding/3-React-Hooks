import * as React from 'react'
import { useState } from 'react'
import IEmployee from '../../../interface/IEmployee'

interface IProps{
    todos:IEmployee[];
    addTodo:()=>void;
}

const Todos=(props:IProps)=>{
    console.log("child render : problme without useCallBack()")
    return(
        <>
            <h2>My Todos</h2>
            {
                props.todos.map((todo,index)=>{
                    return <p key={index}>{todo.name}</p>
                })
            }

            <button onClick={props.addTodo}>Add Todo (Without useCallBack)</button>
        </>
    )
}

export default React.memo(Todos);
import * as React from 'react'
import { useState } from 'react'
import IEmployee from '../../../interface/IEmployee' 
import Todos from './Todos'


export const ApplicationWithoutUseCallBack=()=>{

    const[count,setCount]=useState(0);
    const[todos,setTodos]=useState<IEmployee[]>(
        []
    )

    const increment=()=>{
        setCount((c)=>c+1);
    }

    const addTodo=()=>{
        setTodos(prevTodo=>[
            ...prevTodo,
            {salary:100,name:'james'}
        ])
    };

    return(
        <>
            <Todos todos={todos} addTodo={addTodo}/>
            <br/>
            <div>
                Count: {count} <br/>
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}
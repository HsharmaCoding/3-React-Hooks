import * as React from 'react'
import { useState,useCallback  } from 'react'
import IEmployee from '../../../interface/IEmployee' 
import Todos from '../SolutionWithUseCallBack/Todos'


export const ApplicationWithUseCallBack=()=>{

    const[count,setCount]=useState(0);
    const[todos,setTodos]=useState<IEmployee[]>(
        []
    )

    const increment=()=>{
        setCount((c)=>c+1);
    }

    const addTodo=useCallback(()=>{
        setTodos(prevTodo=>[
            ...prevTodo,
            {salary:100,name:'james'}
        ])
    },[todos])

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
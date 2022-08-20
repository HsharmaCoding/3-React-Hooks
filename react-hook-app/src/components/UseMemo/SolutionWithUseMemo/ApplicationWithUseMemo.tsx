import * as React from 'react'
import { useState,useMemo } from 'react'
import IEmployee from '../../../interface/IEmployee' 

export const ApplicationWithUseMemo=()=>{

    const[count,setCount]=useState(0);
    const[todos,setTodos]=useState<IEmployee[]>(
        []
    )

    const expensiveCalculation = (num:number) => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) {
          num += 1;
        }
        return num;
      };

    const calculation = useMemo(()=>expensiveCalculation(count),[count])

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
             <div>
                <h2>My Todos</h2>
                {
                    todos.map((todo,index)=>{
                        return <p key={index}>{todo.name}</p>
                    })
                }
                <button onClick={addTodo}> Add Todo (With useMemo)</button>
            </div>
            <br/>
            <div>
                Count:{count} <br/>
                <button onClick={increment}>+</button>
                <h2>Expensive Calculation</h2>
                {calculation}
            </div>
        </>
    )
}
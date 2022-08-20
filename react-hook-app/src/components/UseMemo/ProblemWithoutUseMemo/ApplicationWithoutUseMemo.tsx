import * as React from 'react'
import { useState } from 'react'
import IEmployee from '../../../interface/IEmployee' 

export const ApplicationWithoutUseMemo=()=>{

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

    const calculation = expensiveCalculation(count);

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
                <button onClick={addTodo}> Add Todo (Without useMemo)</button>
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
import * as React from 'react'
import IEmployee from '../../../interface/IEmployee' 
import { useState } from 'react'
import Todos from './Todos'

export const ApplicationWithReactMemo=()=>{
    const[count,setCount]=useState(0);
    const[todos,setTodos]=useState<IEmployee[]>(
        [{name:"john",salary:1200},
        {name:"herry",salary:2200}]
    )

    const increment = () => {
        setCount((c) => c + 1);
      };

    return(
        <>
            <Todos todos={todos}/>
            <div>
                Count: {count} <br/>
                <button onClick={increment}>+</button>
            </div>
        </>
    )
}

import * as React from 'react'
import IEmployee from '../../../interface/IEmployee' 
import { useState } from 'react'
import Todos from './Todos'

export const ApplicationWithoutReactMemo=()=>{
    const[count,setCount]=useState(0);
    const[todos,setTodos]=useState<IEmployee[]>(
        [{name:"mahesh",salary:1200},
        {name:"rakesh",salary:2200}]
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

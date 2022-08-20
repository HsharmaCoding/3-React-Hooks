import * as React from 'react'
import {CustomHookDemo} from './CustomHookDemo'


export const ApplicationCustomHook=()=>{
    const data=CustomHookDemo("https://jsonplaceholder.typicode.com/todos")

    return(
        <>
            {data &&
                data.map((item:any) => {
                return <p key={item.id}>{item.title}</p>;
            })}
        </>
    )
}
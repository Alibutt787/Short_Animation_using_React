import React,{useRef} from 'react'
import { useEffect } from 'react';

export const Useref = () => {
    const inputEl = useRef(null);


    useEffect(()=>{
        inputEl.current.focus();
 // Todo ->ctrl+alt+L  console.log("🚀 ~ file: Useref.js ~ line 6 ~ Useref ~ inputEl");
  })

  
    return (
        <div>
            <h4>Auto Focus using UseRef.....</h4>
            <input ref ={inputEl} type="text" placeholder="Name.."/>
        </div>
    )
}

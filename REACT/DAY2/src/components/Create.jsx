import React from 'react'
import { useState } from "react"
import { nanoid } from 'nanoid';

function create(props) {
   const todo = props.todo;
   const settodo = props.settodo;
   let C = props.C;
    const [value, setvalue]  = useState("");
    
   
  const submithandler = (e)=>{
   e.preventDefault();
   let newtodo = {
    id :nanoid(),
    value,
    iscompleted :false
   }
   console.log("Added")
   if(todo.length < 2){
   settodo([...todo,newtodo])
   setvalue("")
   
   }
  
   
  }

  return (
    <>
        <form onSubmit={submithandler} >
      <input
      value = {value}
      onChange={(e)=>setvalue(e.target.value)}
      type="text" />
      <br />
       <button >Submit</button>
       
    </form>
    </>
  )
}

export default create
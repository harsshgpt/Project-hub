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
   if(todo.length < 7){
   settodo([...todo,newtodo])
   setvalue("")
   
   }
  
   
  }

  return (
    <div className='bg-yellow-500 w-5vh rounded-2xl px-5 py-2 flex flex-col gap-2.5'>
    <h1 id='create'>CREAT TASK</h1>
        <form onSubmit={submithandler} >
      <input
      className='bg-white rounded-sm'
      value = {value}
      onChange={(e)=>setvalue(e.target.value)}
      type="text" />
      <br />
       <button >Submit</button>
       
    </form>
    </div>
  )
}

export default create
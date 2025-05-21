import React from 'react'
import { useState } from "react"
import { nanoid } from 'nanoid';
import {toast} from"react-toastify";

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
   toast.success("Todo created")
   setvalue("")
   
   }
  
   
  }

  return (
    <div className='bg-blue-900 w-[50%]  rounded-2xl px-5 py-2 flex flex-col gap-30 mt-5 px-10 py-10'>
    <h1 id='create' className='text-7xl font-thin mt-5 '>CREAT TASK</h1>
    <form onSubmit={submithandler} className='flex flex-col gap-10  ' >
      <input
      className='bg-white rounded-sm h-15 w-[80%] font-thin text-2xl '
      value = {value}
      onChange={(e)=>setvalue(e.target.value)}
      type="text" />
      <br />
       <button className='bg-white px-1 py-2 font-bold rounded-xl w-30'>Submit</button>
       
    </form>
    </div>
  )
}

export default create
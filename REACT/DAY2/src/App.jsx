import { useState } from "react"
import { nanoid } from 'nanoid';
import { use } from "react";


const App = () => {
  const [value, setvalue]  = useState("");
  const[todo,settodo] = useState([
    {id:1,title:"harsh",iscompleted:false}]
  )
  
  const submithandler = (e)=>{
   e.preventDefault();
   let newtodo = {
    id :nanoid(),
    value,
    iscompleted :false
   }
   console.log("Added")
   settodo([...todo,newtodo])
  
   setvalue (" ")
  }

  const rendertodo = todo.map((todo=>{
      return <li key={todo.id}>{todo.value}</li>
    }))



  return (
    <>
    <hr />
    <form onSubmit={submithandler} >
      <input
      value = {value}
      onChange={(e)=>setvalue(e.target.value)}
      type="text" />
      <br />
       <button >Submit</button>
       <hr />
    </form>
    <hr />
    <h1>Pending TODO</h1>
    <ol>{rendertodo}</ol>

    
   

    

    </>
    
  )
}

export default App
import { useState } from "react"
import { nanoid } from 'nanoid';


const App = () => {
  const [value, setvalue]  = useState("");
  

  const submithandler = (e)=>{
   e.preventDefault();
   const newtodo ={
    id :nanoid(),
    value,
    iscompleted :false
   }
   console.log(newtodo)
   console.log("runned")
  }
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
   

    

    </>
    
  )
}

export default App
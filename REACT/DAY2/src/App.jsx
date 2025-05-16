import { useState } from "react"



import Create from "./components/create";
import Read from "./components/read";

const App = () => {
   const[todo,settodo] = useState([
    ])
    let C = false;
    if(todo.length-1 == 6 ){
      C = true;
    }
    
  return (
    <>
    <Create todo = {todo} settodo = {settodo}  C = {C}/>
    <Read todo = {todo} settodo = {settodo} C = {C} />
    </>
    
  )
}

export default App
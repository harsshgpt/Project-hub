import { useState } from "react"



import Create from "./components/create";
import Read from "./components/read";

const App = () => {
   const[todo,settodo] = useState([
    ])
    let C = false;
    if(todo.length-1 == 1 ){
      C = true;
    }
    
  return (
    <>
    <Create todo = {todo} settodo = {settodo}  C = {C}/>
    <Read todo = {todo} C = {C} />
    </>
    
  )
}

export default App
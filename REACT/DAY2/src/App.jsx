import { useState } from "react"



import Create from "./components/create";
import Read from "./components/read";

const App = () => {
   const[todo,settodo] = useState([
    ])
    let C = false;
    
  return (
    <>
    <Create todo = {todo} settodo = {settodo}  C = {C}/>
    <Read todo = {todo} C = {C} />
    </>
    
  )
}

export default App
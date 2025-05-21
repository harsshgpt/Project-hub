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
    <div className="w-screen h-screen bg-gray-600 px-10 py-10 flex flex-row gap-10 font-sans">
    <Create  todo = {todo} settodo = {settodo}  C = {C}/>
    <Read  todo = {todo} settodo = {settodo} C = {C} />
    </div>
    
  )
}

export default App
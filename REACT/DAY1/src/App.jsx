import { useState } from "react"


function App() {
  const [user,setuser] = useState([
    {name:"HARSH", AGE:25},
    {name:"JOHN", AGE:20},
    {name:"Apex", AGE:28}

  ]);
  const render = user.map((user,index)=>{
    return <li key={index}> {index +1} => {user.name}</li>;
  })

  return (
   <>
     <h1>USERS NAME</h1>
     <ol>{render}</ol>
   </>
  )
}

export default App
import { useState } from "react"


function App() {
  const [user,setuser] = useState([
    {name:"HARSH", AGE:25},
    {name:"JOHN", AGE:20},
    {name:"Apex", AGE:28}

  ]);
  const render = user.map((user,index)=>{
    return <p key={index}>  {user.name}</p>;
  })

  return (
   <>
     <h1>USERS NAME</h1>
     {render}
   </>
  )
}

export default App
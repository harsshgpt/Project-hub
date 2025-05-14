
import { useState } from "react"
// To use two way binding we use onchange and Value

function App() {
  const [user,setuser] = useState([
    {name:"HARSH", AGE:25},
    {name:"JOHN", AGE:20},
    {name:"Apex", AGE:28}

  ]);
  const render = user.map((user,index)=>{
    return <p key={index}>  {user.name}</p>;
  })
   
  const [fullname,setfullname] = useState("");
    const [age,setage] = useState(18);
  
    

   const subch = (e)=>{
    e.preventDefault();
    const newuser={fullname,age} ;
    console.log(newuser)
    
   }



  return (
   <>
     
     <h1>USERS NAME</h1>
      <form  onSubmit={subch}>
    <input 
       onChange={(e) =>setfullname ( e.target.value)}
       value={fullname}
       type="text" 
       placeholder="Username"
    />
    <input
   
       onChange={(e) =>setage( e.target.value)}
       value={age}
       type="number" 
       placeholder="AGE"
    />
    <button>Submit</button>
   </form>

     <hr />
     {render}
   </>
  )
}

export default App
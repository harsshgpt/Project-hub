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
  const changehandler = (e) =>{
      setfullname ( e.target.value);
  }
  console.log(fullname)

  return (
   <>
   
   
     <h1>USERS NAME</h1>
      <form >
    <input
       onChange={changehandler}
       value={fullname}
       type="text" 
       placeholder="Username"
 
    />
    <button>Submit</button>
   </form>

     <hr />
     {render}
   </>
  )
}

export default App
import { useState } from "react"



const App = () => {
  const [value, setvalue]  = useState("");
const[completed,setcompleted] = useState("")
const[gender,setgender] = useState("");
console.log(gender)
  return (
    <>
    <form >
      <input
      value = {value}
      onChange={(e)=>setvalue(e.target.value)}
      type="text" />
    </form>

    <br />
    <br />
    <input
    checked = {completed}
    onChange={(e)=>setcompleted(e.target.checked)}
    type="checkbox" />Checkbox

    <br />
    <br />

    <input 
    value="male"
    onChange={(e)=>setgender(e.target.value)}
    checked = {gender == "male" && true}
    type="radio"
     />Male
    <input 
    value="female"
    onChange={(e)=>setgender(e.target.value)}
    checked = {gender == "female" && true}
    type="radio" />Female

    </>
    
  )
}

export default App
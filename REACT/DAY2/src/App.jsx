import { useState } from "react"



const App = () => {
  const [value, setvalue]  = useState("");

  return (
    <>
    <hr />
    <form >
      <input
      value = {value}
      onChange={(e)=>setvalue(e.target.value)}
      type="text" />
    </form>
    <button >Submit</button>

    

    </>
    
  )
}

export default App
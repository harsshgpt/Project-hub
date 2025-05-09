//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// rafce react arrow function export component   :------ to import boiler plate code of app.jsx
//<Fragment> tags are previously used in the place of<></> which basically use is to not show in real dom of browser 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import { useState } from "react"




const App = () => {
  const[name1,setname]  = useState("HARSH")
  
  let change = ()=>{
    setname("Gupta ji")
  }
  
  return (
    <>
    <h1>{name1}</h1>
    <button onClick = {change}>change name1</button>
    </>
  )
}

export default App

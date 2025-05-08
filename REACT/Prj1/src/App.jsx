//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// rafce react arrow function export component   :------ to import boiler plate code of app.jsx
//<Fragment> tags are previously used in the place of<></> which basically use is to not show in real dom of browser 
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

import { Fragment } from "react"



const App = () => {
 const  handler = () => {
    alert("button clicked");
  }
  return (
    <>
      <button onClick = {handler}>Click</button>
    </>
  )
}

export default App;


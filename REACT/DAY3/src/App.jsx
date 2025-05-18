import { useState } from "react"
import { useForm } from "react-hook-form"
function App() {
  
const {register,handleSubmit,watch,formState: { errors },} = useForm()
const{todo,settodo} = useState();
const SubmitHandler = (data)=>{
  console.log(data)
}
  return (
   <>
   <form onSubmit={handleSubmit(SubmitHandler)} >
    <input type="text" {...register("title"),{required:"title cant be empety"}} placeholder="title" />
    <small>{errors}</small>
    <input type ="submit" />
   </form>
   </>
  )
}

export default App
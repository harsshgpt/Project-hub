import './Read.css'
import {toast} from "react-toastify";

function read(props) {
    const todo = props.todo;
    const settodo = props.settodo;
    let C = props.C;
     const deletehandler = (id)=>{
       const filterd = todo.filter((todo) => id != todo.id)
       settodo(filterd)
       toast.warn(`Deleted baby`)
     }
     const rendertodo = todo.map((todo=>{
      return <li key={todo.id}>{todo.value}
      <span onClick={()=> deletehandler(todo.id)}> | Delete</span>
      </li>
    }))
  return (
    <>
    <h1 id='pend'>Pending TODO</h1>
    <ol style={{color: C ?"Green":"red"}}>{rendertodo}</ol>
    </>
  )
}

export default read
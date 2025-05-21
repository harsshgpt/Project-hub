import './Read.css'
import {toast} from "react-toastify";

function read(props) {
    const todo = props.todo;
    const settodo = props.settodo;
    let C = props.C;
     const deletehandler = (id)=>{
       const filterd = todo.filter((todo) => id != todo.id)
       settodo(filterd)
       toast.warn(`Deleted`)
     }
     const rendertodo = todo.map((todo=>{
      return <li className="text-3xl font-thin bg-blue-950 p-3 rounded-xl mt-3 justify-between flex flex-row" key={todo.id}>{todo.value}
      <span onClick={()=> deletehandler(todo.id)}> | Delete</span>
      </li>
    }))
  return (
    <div className='mt-5 bg-white w-[40%] rounded-xl p-10  '>
    <h1 className="text-5xl uppercase underline underline-offset-6 " d='pend'>Pending TODOS</h1>
    <ol style={{color: C ?"Green":"red"}}>{rendertodo}</ol>
    </div>
  )
}

export default read
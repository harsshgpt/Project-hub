
function read(props) {
    const todo = props.todo;
    let C = props.C;

     const rendertodo = todo.map((todo=>{
      return <li key={todo.id}>{todo.value}</li>
    }))
  return (
    <>
    <h1>Pending TODO</h1>
    <ol style={{color: C ?"Green":"red"}}>{rendertodo}</ol>
    </>
  )
}

export default read
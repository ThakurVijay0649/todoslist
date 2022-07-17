import React from 'react'
import TodoItem from './TodoItem'

function Todos(props) {

  return (
    <div className='container' style={{margin:"1rem auto", minHeight:"60vh",background: "#0f0f61",padding: "1rem",color:"white"}}>
      <h3 className='my-3'>Todos List - VT</h3>
      {props.todos.length === 0 ? `No Todos to Display` :
          props.todos.map((todo, index) => {
            return (
              <TodoItem todo={todo} onDelete={props.onDelete} key={index} />
            )
          })
      }

    </div>
  )
}

export default Todos
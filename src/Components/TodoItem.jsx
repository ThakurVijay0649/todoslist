import React from 'react'

function TodoItem({ todo, onDelete }) {
    return (
        <div className='my-4' style={{
            background: "#4a4ac7",
            padding: "1rem",
            borderRadius: "1rem"
        }}>
            <h4>{todo.sno}. {todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => onDelete(todo)}>Delete</button>
            <hr />
        </div>
    )
}

export default TodoItem

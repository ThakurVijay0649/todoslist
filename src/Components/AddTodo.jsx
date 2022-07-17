import React, { useState } from 'react'

export const AddTodo = (props) => {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const submit = (e) => {
        e.preventDefault();
        if (!title && !desc) {
            alert("Title or Description cannot be empty");
        }
        else {
            props.addTodo(title, desc);
            setTitle("");
            setDesc("");
        }

    }
    return (
        <div className='container mt-2' style={{ background: "#0f0f61", padding: "1rem", color: "white" }}>
            <h3 className='mb-4'>Add a Todo - VT</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Todo Title</label>
                    <input type="text" placeholder="Enter the title of your todo" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">Todo Description</label>
                    <input type="text" placeholder='Enter the description of your todo' value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <button type="submit" className="btn btn-success">Add Todo</button>
            </form>
        </div>
    )
}

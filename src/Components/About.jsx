import React from 'react'

export const About = () => {
    return (
        <div className="container p-4 p-md-5 my-4 rounded" style={{ minHeight: "80vh", background: "#0f0f61", color: "white" }}>
            <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic fw-bold">Free up your mental space</h1>
                <p className="lead my-3">Regain clarity and calmness by getting all those tasks out of your head and onto your to-do list (no matter where you are or what device you use).</p>
            </div>
            <article className="blog-post">
                <h2 className="blog-post-title">About Todo List App</h2>
                <p>Todolist app gives you the confidence that everything’s organized and accounted for, so you can make progress on the things that are important to you.</p>
                <hr/>
                <h2 className="blog-post-title">Start each day feeling calm and in control</h2>
                <p>Get a clear overview of everything on your plate and never lose track of an important task..</p>
                <hr/>
            </article>
        </div>
    )
}

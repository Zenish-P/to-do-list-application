import React, { useState } from 'react'


export const AddTask = (props) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if (!title) {
            alert("Please add a title.");
        } else if (!description) {
            alert("Please add a description.");
        } else {
            props.addTask(title, description);
            setTitle("");
            setDescription("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Task</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label">Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Description" className="form-label">Description</label>
                    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" id="description" />
                </div>
                <button type="submit" className="btn btn-sm btn-primary">Add Task</button>
            </form>
        </div>
    )
}

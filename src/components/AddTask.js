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
    let addTaskContainerStyle={
        border: '2px solid #a8a9ad',
        borderRadius:'10px',
        backgroundColor:'#f0f0f1',
    }
    let labelStyle={
        fontSize:"18px"
    }
    return (
        <div className="container  py-2" style={addTaskContainerStyle}>
            <h3>Add a Task</h3>
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="Title" className="form-label" style={labelStyle}>Title</label>
                    <input type="text" value={title} onChange={(e) => { setTitle(e.target.value) }} className="form-control" id="title" aria-describedby="emailHelp" />
                </div>
                <div className="mb-3">
                    <label htmlFor="Description" className="form-label" style={labelStyle}>Description</label>
                    <input type="text" value={description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" id="description" />
                </div>
                <button type="submit" className="btn btn-sm btn-primary">Add Task</button>
            </form>
        </div>
    )
}

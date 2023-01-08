import React from 'react'
import { CompletedToDo } from './CompletedToDo'
export const CompletedTasks = (props) => {
    let myStyle = {
        minHeight: "5vh",
        margin: "10px auto",
        border: '2px solid #a8a9ad',
        borderRadius: '10px',
        backgroundColor: '#f0f0f1',
    }
    return (
        <div className='container my-3' style={myStyle}>
            <h3 className='text-left my-3'> Completed Tasks</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, veniam?</p>
            {props.list.length === 0 ? "No ToDos to display" :
                props.list.map((todo) => {
                    return (
                        <>
                            <CompletedToDo todo={todo} key={todo.Id} onDelete={props.onDelete} />
                            <hr />
                        </>
                    )
                })
            }

        </div>
    )
}

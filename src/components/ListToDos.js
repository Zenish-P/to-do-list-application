import React from 'react'
import { ToDoItem } from './ToDoItem'
export const ListToDos = (props) => {
  let myStyle = {
    minHeight: "5vh",
    margin: "10px auto",
    border: '2px solid #a8a9ad',
    borderRadius: '10px',
    backgroundColor: '#f0f0f1',
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='text-left my-3'> To Dos list</h3>
      {props.list.length === 0 ? "No ToDos to display" :
        props.list.map((todo) => {
          return (
            <>
              <ToDoItem todo={todo} key={todo.Id} markAsDone={props.markAsDone} />
              <hr />
            </>
          )
        })
      }

    </div>
  )
}

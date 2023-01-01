import React from 'react'
import { ToDoItem } from './ToDoItem'
export const ListToDos = (props) => {
  let myStyle = {
    minHeight: "65vh",
    margin: "10px auto"
  }
  return (
    <div className='container my-3' style={myStyle}>
      <h3 className='text-center my-3'> To Dos list</h3>
      {props.list.length === 0 ? "No ToDos to display" :
        props.list.map((todo) => {
          return (
            <>
            <ToDoItem todo={todo} key={todo.Id} onDelete={props.onDelete} />
            <hr />
            </>
          )
        })
      }

    </div>
  )
}

import React from 'react'
import { ToDoItem } from '../components/ToDoItem'
export const ListToDos = (props) => {
  return (
    <div className='container'>
      <h3 className='text-center my-3'> To Dos list</h3>
      {props.list.map((todo) => {
        return (
          <ToDoItem todo={todo} onDelete = {props.onDelete}/>
        )
      })}

    </div>
  )
}

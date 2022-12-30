import React from 'react'

// here destructuring is used instead of props 
// destructuring is similar to parameters in java
// to replace with props just use props in the class parameter and replace individual objects with props.objectName
export const ToDoItem = ({todo, onDelete}) => {
  return (
    <div>
      <h4>{todo.title}</h4>
      <p>{todo.description}</p>
      <button type="button" className="btn btn-sm btn-primary" onClick={onDelete}>Mark as done</button>
    </div>
  )
}

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {ListToDos} from './components/ListToDos';
import {Footer} from './components/Footer';
import { AddTask } from './components/AddTask';
import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState( [
    {
      Id:1,
      title: "Basic taskList",
      description:"Finish the base of the toDo List project" 
    },
    {
      Id:2,
      title: "Improve CSS",
      description:"Change the style of the whole project" 
    },
    {
      Id:3,
      title: " Add authentication",
      description:"Add ability to create and login to accounts." 
    },
    {
      Id:4,
      title: " Add authentication",
      description:"Add ability to create and login to accounts." 
    },
    {
      Id:5,
      title: " Add authentication",
      description:"Add ability to create and login to accounts." 
    },
    {
      Id:6,
      title: " Add authentication",
      description:"Add ability to create and login to accounts." 
    },
    {
      Id:7,
      title: " Add authentication",
      description:"Add ability to create and login to accounts." 
    }
  ]);

  const onDelete = (todo) =>{
    console.log("I am onDelete of Item ", todo);
    // let index = tasks.indexOf(todo);
    // tasks.splice(index,1);
    setTasks(tasks.filter((e)=>{
      return e !==todo;
    }))
  }
  const addTask=(title,description)=>{
    console.log("Adding this to list with title and desc as ",title,description);
  }
  return (
    <>
    <Header title = "My ToDos List" searchBar = {false}/>   
    <AddTask addTask={addTask}/>
    <ListToDos list = {tasks} onDelete = {onDelete}/>
    <Footer/>
    </>
  );

}

export default App;

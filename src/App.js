import './App.css';
import Header from './components/Header';
import { ListToDos } from './components/ListToDos';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';
import React, { useState, useEffect } from 'react';
import { About } from './components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  let initTask;
  if (localStorage.getItem("tasks") === null) {
    initTask = [];
  } else {
    initTask = JSON.parse(localStorage.getItem("tasks"));
  }

  const [tasks, setTasks] = useState(initTask);

  const onDelete = (todo) => {
    console.log("I am onDelete of Item ", todo);
    // let index = tasks.indexOf(todo);
    // tasks.splice(index,1);
    setTasks(tasks.filter((e) => {
      return e !== todo;
    }));
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
  const addTask = (title, description) => {
    console.log("Adding this to list with title and desc as ", title, description);
    let Id;
    if (tasks.length == 0) {
      Id = 0;
    } else {
      Id = tasks[tasks.length - 1].Id + 1;
    }
    const myTask = {
      Id: Id,
      title: title,
      description: description,
    }
    setTasks([...tasks, myTask]);
    console.log(myTask);
  }
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks])


  return (
    <>
      <Router>
        <Header title="My ToDos List" searchBar={false} />
        <AddTask addTask={addTask} />
        <ListToDos list={tasks} onDelete={onDelete} />
       <Footer/>
        {/* <About /> */}
      </Router>
    </>
  );
}

export default App;

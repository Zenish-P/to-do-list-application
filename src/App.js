import './App.css';
import Header from './components/Header';
import { ListToDos } from './components/ListToDos';
import { Footer } from './components/Footer';
import { AddTask } from './components/AddTask';
import { CompletedTasks } from './components/CompletedTasks';
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
  let initCompletedList;


  if (localStorage.getItem("tasks") === null) {
    initTask = [];
  } else {
    initTask = JSON.parse(localStorage.getItem("tasks"));
  }


  if (localStorage.getItem("completedList") === null) {
    initCompletedList = [];
  } else {
    initCompletedList = JSON.parse(localStorage.getItem("completedList"));
  }


  const [tasks, setTasks] = useState(initTask);
  const [completedList, setCompletedTask] = useState(initCompletedList);

//==============this is correct====================
  // const onDelete = (todo) => {
  //   console.log("I am onDelete of Item ", todo);
  //   setTasks(tasks.filter((e) => {
  //     return e !== todo;
  //   }));
  //   localStorage.setItem("tasks", JSON.stringify(tasks));
  // }

// ==================newer version================

  const markAsDone = (todo) => {
    console.log("I am MarkAs Done of Item ", todo);
    
    const compTodo= todo;
    
    setTasks([...completedList,compTodo]);
    console.log("wefwefbwvncwoecnwec", compTodo);
    localStorage.setItem("completedList",JSON.stringify(completedList));
    
    
    setTasks(tasks.filter((e)=>{
      return e!==todo;
    }));
    localStorage.setItem("tasks",JSON.stringify(tasks));
  }
  const onDelete = (compTodo)=>{
    console.log("I am onDelete of Item ", compTodo);
    setCompletedTask(completedList.filter((e)=>{
      return e!==compTodo;
    }));
    localStorage.setItem("completedList", JSON.stringify(completedList));
  }
// =======================ends here===============
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

  useEffect(() => {
    localStorage.setItem("completedList", JSON.stringify(completedList));
  }, [completedList])




  return (
    <>
      <Router>
        <Header title="My ToDos List" searchBar={false} />
        <ListToDos list={tasks} markAsDone={markAsDone} />
        <AddTask addTask={addTask} />
        <CompletedTasks list={completedList} onDelete={onDelete} />
        {/* <Footer/> */}
        {/* <About /> */}
      </Router>
    </>
  );
}

export default App;

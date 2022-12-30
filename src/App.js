import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {ListToDos} from './components/ListToDos';
import {Footer} from './components/Footer';
function App() {
  let tasks = [
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
    }
  ]

  const onDelete = ()=>{
    console.log("I am onDelete");
  }

  return (
    <>
    <Header title = "My ToDos List" searchBar = {false}/>   
    <ListToDos list = {tasks} onDelete = {onDelete}/>
    <Footer/>
    </>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import {ToDos} from './components/ToDos';
import {Footer} from './components/Footer';
// import ToDo from './components/ToDo';
function App() {
  return (
    <>
    <Header title = "My ToDos List" searchBar = {false}/>   
    <ToDos/>
    <Footer/>
    </>
  );
}

export default App;

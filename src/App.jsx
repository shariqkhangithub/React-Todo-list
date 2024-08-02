import React,{ useState } from 'react'
import Todoinput from './components/input.jsx'
import TodoList from './components/list.jsx'
import './App.css'


function App() {
const[listTodo,setListTodo] = useState([]);
let addList =(inputText)=>{
  setListTodo([...listTodo,inputText])
}

  return (
    <>
    <div className="main">
    <div className="center">
    <h1>Todo App</h1>

    <Todoinput addList={addList}/>

 
  {listTodo.map((listItem,i)=>{
      return(
        <TodoList key={i} item={listItem}/>
      )
    })}
    </div>
    </div>
    </>
  )
}

export default App


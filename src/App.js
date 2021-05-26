import './App.css';
import Header from "./myComponents/Header";
import Footer from "./myComponents/Footer";
import Todo from "./myComponents/Todo";
import React, { useState, useEffect } from 'react';
import AddTodo from './myComponents/AddTodo';
import About from './myComponents/About';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {

  let initTodo ;

  if(localStorage.getItem('todos') === null){
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem('todos'))
  }

  const [todos, setTodos] = useState(initTodo)

  const onDelete = (todo) => {
    console.log("I am on Delete !! of", todo);

    setTodos(todos.filter((e)=>{
      return e !== todo;
    }))
    
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc) => {
    console.log("I am adding this todo", title, desc);
    let sno;
    if(todos.length === 0){
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
  }

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  return (
    <>
    <Router>
      <Header title="My Todo List" check = "true"/>
      <Switch>
        <Route exact path='/' render={()=>{
          return(
            <>
              <AddTodo addTodo = {addTodo} />
              <Todo todos={todos} onDelete={onDelete} />
            </>
          )
        }}></Route>
        <Route path="/about">
          <About/>
        </Route>
      </Switch>


      <Footer title = "This is my footer" random  = "just a random text of footer"/>
    </Router>
    </>
  );
}

export default App;

import './App.css';
import Header from "./MyComponents/Header";
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";
import { useAlert } from 'react-alert'
import { Alert } from './MyComponents/Alert';
import React, { useState, useEffect } from 'react';
/*import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";*/
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

function App() {
  let initTodo;
  /* <script type="text/javascript">
    var alerted = localStorage.getItem('alerted') || 'no';
    if (alerted != 'yes')

    alert("My alert.");
    localStorage.setItem('alerted','yes');
  </script>*/


  //initTodo which is passed to useState hook as 
  //default value is definded here
  //When there are no previous todos in local storage we set 
  //initTodo as empty but when there are some previous todos present
  //we set them as initTodo 
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }

  //here todo is the one which we send to TodoItem after map
  //traversal, basically it means 1 todo of multiple todos
  const onDelete = (todo) => {
    console.log("I am ondelete of todo", todo);
    // Deleting this way in react does not work
    // let index = todos.indexOf(todo);
    // todos.splice(index, 1);

    //Here we are filtering all the todos i.e (e) which are not 
    //equal to the todo we are deleting i.e passing with onDelete
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
    console.log("deleted", todos)
    //Then the new todos array is locally stored 
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  const addTodo = (title, desc, reps) => {
    console.log("I am adding this todo", title, desc)
    let sno;//defining sno
    if (todos.length === 0) {
      sno = 0;
    }
    else {
      //todos array ke last todos ka +1
      sno = todos[todos.length - 1].sno + 1;
    }
    //Here we are creating a myTodo which we are going to add with
    //the remaining todos array, 
    //note:todos is also an array of objects and myTodo is also an object.
    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
      reps: reps,
    }
    //Merging the myTodo with remaing todos and setting it in todos
    //using setTodo method
    setTodos([...todos, myTodo]);
    //Spread operator is used to combine latest todo and
    //previous todo together
    console.log(myTodo);
  }

  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    //Updates the local storage with a key value pair
    //localStorage.setItem(key:string, value:string) thus we use stringify function
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])
  //Whenever todos are changed we local store it, for this we use useEffect()

  return (
    <>

      <Header title="Workout Planner" searchBar={false} />
      <div className='container'>
        <Routes>
          <Route exact path="/" element={
            <>
              {/*AddTodo is defined before todos*/}
              <Alert alert='Loged In Successfully!' />
              <AddTodo addTodo={addTodo} />
              <Todos todos={todos} onDelete={onDelete} />
            </>
          } />

        </Routes>
      </div>
      <Footer />

    </>
  );
}

export default App;

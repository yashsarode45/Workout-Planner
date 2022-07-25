import React from 'react'
import { TodoItem } from "./TodoItem";

//For all the todos
export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (

        <div className="container" style={myStyle}>
            <h3 className="my-3">List of Exercises</h3>
            {/*Here if todos array length is 0 then display that
             statement else execute below code*/}
            {props.todos.length === 0 ? "No Exercises to display" :
                //props.todos is a array and props.onDelete is func
                //which are coming from app.js

                //map creates an array of all the todos and then
                //todo traverse and sends to TodoItem
                //todo is like an iterator
                props.todos.map((todo) => {
                    console.log(todo.sno);
                    return (<TodoItem todo={todo} key={todo.sno} reps={todo.reps}
                        onDelete={props.onDelete} />
                    )
                })
                /*Keys help React identify which items have changed, 
                are added, or are removed.
                Keys should be given to the elements inside the array 
                to give the elements a stable identity:*/
                //todo,key,onDelete is given from Todos to TodoItem
            }
        </div>
    )
}

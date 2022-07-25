import React from 'react'

//For every entry of todos
export const TodoItem = ({todo, onDelete}) => {
    return (
        <>
        <div class="card" style={{width: '18rem'}}>
        <div class="card-body">
            
           <h4>Exercise Name: {todo.title}</h4>
           <p>No of sets: {todo.desc}</p>
           <p>No of Reps: {todo.reps}</p>
           <button className="btn btn-sm btn-danger" 
           onClick={()=>{onDelete(todo)}}>Delete</button>
           {/*Here we have passed onDelete in arrow fn, as if we had
           passed directly then it would be called during rendering.
           Here arrow fn is passed and in it onDelete is called
           func()-called; func-passed   */} 

        </div>
        </div>
        <hr/> 
        </>
    )
}

import React, { useState } from 'react';

//For adding todos, consists of a form
export const AddTodo = ({ addTodo }) => {
    //this title and desc are in value={} of the input in form
    //setting initial state as empty
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [reps, setReps] = useState("");

    //Submit method defined here
    const submit = (e) => {
        e.preventDefault();//page won't relode bcauz of this
        if (!title || !desc || !reps) { //either title or descc is blank, coming from id of input tag
            alert("Exercises, Sets or Reps cannot be blank");
        }
        else {
            //here addTodo is coming from app.js where we defined it
            addTodo(title, desc, reps);
            setTitle("");//after submitting it should be blank
            setDesc("");
            setReps("");
        }
    }
    return (
        <div className="container my-3">
            <h3>Add a Workout</h3>
            {/*Submit method passed here*/}
            <form onSubmit={submit}>
                <div className="mb-3">
                    <label htmlFor="title" className="form-label">Exercise Name</label>
                    <input type="text" placeholder="Enter exercise name" value={title} onChange={(e) => setTitle(e.target.value)} className="form-control" id="title" aria-describedby="emailHelp" />
                    {/*Here if no onChange method we couldn't type in title or desc but now we can type
                    and whatever we type is updated by setTitle*/}
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">No of Sets:</label>
                    <input type="text" pattern="[0-9]*" placeholder="Enter no. of sets" value={desc} onChange={(e) => setDesc(e.target.value)} className="form-control" id="desc" />
                </div>
                <div className="mb-3">
                    <label htmlFor="reps" className="form-label">No of Reps:</label>
                    <input type="text" pattern="[0-9]*" placeholder="Enter no. of reps" value={reps} onChange={(e) => setReps(e.target.value)} className="form-control" id="reps" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Exercise</button>
            </form>
        </div>
    )
}

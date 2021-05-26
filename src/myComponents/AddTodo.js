import React, { useState } from 'react';


export default function AddTodo({addTodo}) {
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("title or desc can't be left blank")
        } else{
            addTodo(title, desc);
            setTitle("")
            setDesc("")
        }
    }

    return (
        <div className="container text-center">
        <h3>Add To Do</h3>
            <form onSubmit={submit}>
            <div className="form-group">
                    <label htmlFor="title">Enter Todo </label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control" id="title" aria-describedby="emailHelp" placeholder="Enter ToDo Title"/>
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Enter Description </label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control" id="desc" aria-describedby="emailHelp" placeholder="Enter Todo Description"/>
                </div>                
                <button type="submit" className="btn btn-sm btn-success">ADD</button>
            </form>
        </div>
    )
}

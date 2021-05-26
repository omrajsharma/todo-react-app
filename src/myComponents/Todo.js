import React from 'react'
import TodoItem from './TodoItem'

export default function Todo(props) {
    let myStyle = {
        minHeight: "70vh",
    }

    return (
        <div className="container text-center" style={myStyle}>
            <h3>Todo List</h3>
            <hr></hr>
            {/* Logic Here */}
            {props.todos.length === 0 ? "No Todos to display" : props.todos.map((element,index,arr)=>{
                return( 
                    <>
                    <TodoItem todo = {element} onDelete={props.onDelete}/>
                    <hr/>
                    </>
                )
            })}
            
            
        </div>
    )
}

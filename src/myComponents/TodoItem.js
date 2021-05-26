import React from 'react'

export default function TodoItem({todo, onDelete}) {
    return (
        <div>
            <div className="text-center">
                <h5>{todo.title}</h5>
                <p>{todo.desc}</p>
                <button className="btn btn-sm btn-danger text-center" onClick={()=>{onDelete(todo)}}>Delete</button>
            </div>
        </div>
    )
}

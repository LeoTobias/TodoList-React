import React from 'react';


const Todo = ({ todo, toggleComplete, deleteTodo }) => {
    
  return (
    <div className="todo" style={{ textDecoration: todo.completed ? "line-through" : "" }}>
        <div className="content">
            <p>{todo.text}</p>
            <p className='category'>({todo.category})</p>
        </div>
        <div>
            <button className='complete' onClick={() => toggleComplete(todo)}>
                Completar
            </button>
            <button className='remove' onClick={() => deleteTodo(todo.id)}>
                X
            </button>
        </div>
    </div>
  )
}

export default Todo;
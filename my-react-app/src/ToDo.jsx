import React, { useEffect, useState } from 'react'
import './App.css'

const ToDo = () => {
  const [task, setTask] = useState("")
  const [todos, setTodos] = useState(()=>{
    let data =localStorage.getItem("key")
    if(data){
        return JSON.parse(data)
    }
  })
 useEffect(()=>{
    localStorage.setItem("key",JSON.stringify(todos))
 },[todos])
  return (
    <div className="container">
      <h1>Todo List</h1>

      <div className="input-box">
        <input
          type="text"
          value={task}
          placeholder="Enter a task"
          onChange={(e) => setTask(e.target.value)}
        />

        <button
          onClick={() => {
            if (task.trim() !== "") {
              setTodos([...todos, task])
              setTask("")
            }
          }}
        >
          Add
        </button>
      </div>

      <div className="todo-list">
        {todos.map((todo, index) => (
          <div className="todo-item" key={index}>
            <span>{todo}</span>

            <div className="actions">
              <button>Edit</button>
              <button
                onClick={() =>
                  setTodos(todos.filter((_, i) => i !== index))
                }
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ToDo
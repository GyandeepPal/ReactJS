// import React, { useState, useEffect } from "react";
// import "./App.css";

// const ToDo = () => {
//   const [task, setTask] = useState("");
//   const [editIndex, setEditIndex] = useState(null);

//   const [todos, setTodos] = useState(() => {
//     const data = localStorage.getItem("key");
//     return data ? JSON.parse(data) : [];
//   });

//   useEffect(() => {
//     localStorage.setItem("key", JSON.stringify(todos));
//   }, [todos]);

//   const handleSubmit = () => {
//     if (task.trim() === "") return;

//     if (editIndex !== null) {
//       const updatedTodos = [...todos];
//       updatedTodos[editIndex] = task;

//       setTodos(updatedTodos);
//       setEditIndex(null);
//     } else {
//       setTodos([...todos, task]);
//     }

//     setTask("");
//   };

//   const handleDelete = (index) => {
//     setTodos(todos.filter((_, i) => i !== index));
//   };

//   const handleEdit = (index) => {
//     setTask(todos[index]);
//     setEditIndex(index);
//   };

//   return (
//     <div id="new">
//       <h1>ToDo List</h1>

//       <div className="input-box">
//         <input
//           type="text"
//           value={task}
//           placeholder="Enter a task"
//           onChange={(e) => setTask(e.target.value)}
//         />

//         <button onClick={handleSubmit}>
//           {editIndex !== null ? "Update" : "Add"}
//         </button>
//       </div>

//       <div className="todo-list">
//         {todos.map((todo, index) => (
//           <div className="todo-item" key={index}>
//             <span>{todo}</span>

//             <div className="actions">
//               <button onClick={() => handleEdit(index)}>
//                 Edit
//               </button>

//               <button onClick={() => handleDelete(index)}>
//                 Delete
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ToDo;





import React, { useReducer } from 'react';
import './App.css'
function reducer(state, action) {
  if (action.type === "inc") {
    return state + 1;
  } else if (action.type === "dec") {
    return state - 1;
  } else if (action.type === "reset") {
    return 0;
  } else {
    return state;
  }
}




const ToDo = () => {
  const [state, dispatch] = useReducer(reducer, 0);

  return (
    <div id="main">
      <h1>{state}</h1>
<div>
      <button onClick={() => dispatch({ type: "inc" })}>++</button>
      </div>

      <div id=" nom"> 
      <button onClick={() => dispatch({ type: "dec" })}>--</button>
      </div>

      <div id="new"> 
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
};

export default ToDo;
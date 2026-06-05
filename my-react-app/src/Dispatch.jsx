
// // import React, { useReducer } from 'react';
// // import './App.css'
// // function reducer(state, action) {
// //   if (action.type === "inc") {
// //     return state + 1;
// //   } else if (action.type === "dec") {
// //     return state - 1;
// //   } else if (action.type === "reset") {
// //     return 0;
// //   } else {
// //     return state;
// //   }
// // }


// // const ToDo = () => {
// //   const [state, dispatch] = useReducer(reducer, 0);

// //   return (
// //     <div id="main">
// //       <h1>Hello</h1>
// //       <h1>{state}</h1>
// // <div>
// //       <button onClick={() => dispatch({ type: "inc", })}>++</button>
// //       </div>
// //     </div>
// //   );
// // };
// // export default Dispatch;

// import React, { useReducer } from 'react'
// const Dispatch = () => {
//     let intialData={
//         input:"",
//         todos:[]
//     }

// function reducer (state,action){
//   if(action.type=="set_input"){
//             return{
//                 ...state,input:action.payload
//             }
//         }else if(action.type=="add_TODO"){
//             return{
//                 input:"",
//                 todos:[...state.todos,state.input]
//             }
//         }

  
// }
// function reducer(state, action) {
//   if (action.type === "set_input") {
//     return {
//       ...state,
//       input: action.payload,
//     };
//   } 
//   else if (action.type === "add_TODO") {
//     return {
//       input: "",
//       todos: [...state.todos, state.input],
//     };
//   } 
//   else if (action.type === "delete_TODO") {
//     return {
//       ...state,
//       todos: state.todos.filter((_, index) => index !== action.payload),
//     };
//   }

//   return state;
// }

//   let [state,disptach]= useReducer(reducer,intialData)
//   return (
//     <div>
//       <input type="text" onChange={(e) => disptach({ type: "set_input",payload:e.target.value })}/>
//       <button onClick={() => disptach({ type: "add_TODO", })}>ADD</button>

//       <input
//   type="text" value={state.input} onChange={(e) =>disptach({type: "set_input",payload: e.target.value,})
//   }
// />
//       <button type="text" onChange={()=>disptach({type:"delettodos",payload:index})}>Delet</button>

//               {
//             state.todos.map((a)=>{
//                 return(<>
//                 <h2>{a}</h2>
//                 </>)
//             })
//         }
//     </div>
//   )
// }

// export default Dispatch





import React, { useReducer } from "react";

const Dispatch = () => {
  const initialData = {
    input: "",
    todos: [],
  };

  function reducer(state, action) {
    if (action.type === "set_input") {
      return {
        ...state,
        input: action.payload,
      };
    } 
    else if (action.type === "add_TODO") {
      if (!state.input.trim()) {
        return state;
      }

      return {
        input: "",
        todos: [...state.todos, state.input],
      };
    } 
    else if (action.type === "delete_TODO") {
      return {
        ...state,
        todos: state.todos.filter(
          (_, index) => index !== action.payload
        ),
      };
    }

    return state;
  }

  const [state, dispatch] = useReducer(reducer, initialData);

  return (
    <div id="main">
      <h1>Let's Do It Bro 🚀</h1>

      <input
        type="text"
        placeholder="Enter a task"
        value={state.input}
        onChange={(e) =>
          dispatch({
            type: "set_input",
            payload: e.target.value,
          })
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            dispatch({ type: "add_TODO" });
          }
        }}
      />

      <button onClick={() => dispatch({ type: "add_TODO" })}>
        ADD
      </button>

      {state.todos.map((todo, index) => (
        <div key={index} id="new">
          <h2>{todo}</h2>

          <button
            onClick={() =>
              dispatch({
                type: "delete_TODO",
                payload: index,
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Dispatch;

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
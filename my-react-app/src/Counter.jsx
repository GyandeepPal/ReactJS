import React, { useReducer } from 'react'
import './App.css'
function reducer(state,action){
    if (action.type === "inc") {
    return state + 1;
  }
  else if(action.type === "dic") {
    return state - 1
  }else if(action.type === "reset"){
    return 0
  }
  return state
}
const Counter = () => {
    const[state,dispatch]=useReducer(reducer,0)
  return (
    <div id='main'>
      <h1>Let`s do it</h1>
        <h3>{state}</h3>
    

      <div id="nom"> 
        <button onClick={()=>dispatch({type:"inc"})}>++</button>
        </div>

        <div id="new">
        <button onClick={()=>dispatch({type:"dic"})}>--</button>
        </div>


    <div id="news">
        <button onClick={()=>dispatch({type:"reset"})}>reset</button>
        </div>  

    </div>
    
  )
}

export default Counter;
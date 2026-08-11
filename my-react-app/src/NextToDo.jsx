// import React, { useReducer } from 'react'
// import './App.css'
// function reduce(state,action){
//   if(action.type === "increas"){
//     console.log("increas");
//     return state+1
//   }else if(action.type==="dicreases"){
//     console.log("dcreas");

//     return state-1
//   }else if(action.type==="reset"){
//     console.log("reset");
//     return 0
//   }else{
//  return state
//   }
// }
// const NextToDo = () => {
//  const [state,dispatch]=useReducer(reduce,0)
//   return (
//     <div id="main">
//       <h1>Try To Do!</h1>
//         <h1>{state}</h1>
//         <div id='increas'> 
//         <button onClick={(()=>dispatch({type:"increas"}))}>increas</button>
//         </div>
//         <button onClick={(()=>dispatch({type:"dicreases"}))}>dicreases</button>
//         <button onClick={(()=>dispatch({type:"reset"}))}>reset</button>
//     </div>
//   )
// }
// export default NextToDo

import React from 'react'
import { useReducer } from 'react'
import './App.css'
function reducer (state, action){
if(action.type==="increase"){
  console.log("increase");
  return state+1
  
}else if(action.type==="decrease"){
  console.log("dec");
  return state-0.78865
  
}else{
  return state =0
}
}

const NextToDo = () => {
const [state, dispatch]=useReducer(reducer,2)
  return (
    <div id='main'>
      <h1>Try To Todo </h1>
      <h1>{state}</h1>
      <div id='increas'> 
      <button onClick={(()=>dispatch({type:"increase"}))}>inc</button>
      </div>
    
      <button onClick={(()=>dispatch({type:"decrease"}))}>dec</button>
 
      <button onClick={(()=>dispatch({type:"reset"}))}>res</button>
    </div>
  )
}

export default NextToDo
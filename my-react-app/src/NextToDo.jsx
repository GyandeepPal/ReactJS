import React, { useReducer } from 'react'
import './App.css'

function reduce(state,action){
  
  if(action.type === "increas"){
    console.log("increas");
    
    return state+1
  }else if(action.type==="dicreases"){
    console.log("dcreas");

    return state-1
  }else if(action.type==="reset"){
    console.log("reset");

    return 0
  }else{
 return state
  }

}

const NextToDo = () => {
 const [state,dispatch]=useReducer(reduce,0)
  return (
    
    <div id="main">
      <h1>Try To Do!</h1>
        <h1>{state}</h1>

        <div id='increas'> 
          
        <button onClick={(()=>dispatch({type:"increas"}))}>increas</button>
        </div>


        
        <button onClick={(()=>dispatch({type:"dicreases"}))}>dicreases</button>
     

        
        <button onClick={(()=>dispatch({type:"reset"}))}>reset</button>
     


    </div>
  )
}

export default NextToDo
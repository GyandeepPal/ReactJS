import React, { useReducer } from 'react'
import './App.css'
const Rerendring = () => {
    const reducer=(state,action)=>{
        if(action==="Gyan"){
            return state + 1
        }else if(action==="Gyan Deep"){
            return state - 1
        }
    }
 const [count, dispatch] = useReducer(reducer,0)
   
  return (
    <div id="Main">
        <h1>CHALO</h1>
        <h3>{count}</h3>
        <button className='one' onClick={()=>dispatch("Gyan")}>😅</button>
        <button className='two' onClick={()=>dispatch("Gyan Deep")}>❤️</button>
        <button className='two' onClick={()=>dispatch("Gyan Deep")}>😃</button>
    </div>
  )
}

export default Rerendring
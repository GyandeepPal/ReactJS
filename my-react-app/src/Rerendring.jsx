import React, { useEffect, useReducer, useRef } from 'react'
import './App.css'
const Rerendring = () => {
    const reducer=(state,action)=>{
        if(action==="Gyan"){
            return state + 1
        }else if(action==="Gyan Deep"){
            return state - 1
        }else{
            return state
        }
    }
 const [count, dispatch] = useReducer(reducer,0)
   const ref=useRef()
   useEffect(() => {
  ref.current.style.background = "red";
}, []);
useEffect(() => {
  ref.current.style.background = "black";
}, []);

  return (
    <div id="Main">
        <h1>CHALO</h1>
        <h3>{count}</h3>
        <button ref={ref}className='one' onClick={()=>dispatch("Gyan")}>😅</button>
        <button ref={ref} className='two' onClick={()=>dispatch("Gyan Deep")}>❤️</button>
      
    </div>
  )
}

export default Rerendring
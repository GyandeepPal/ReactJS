import React, { useEffect, useState } from 'react'
import './App.css'
const Practics_useState = () => {
    let [count ,setCount]=useState(0);
    let[first,setFirst]= useState(0);

    useEffect(()=>{
        //    alert("welcom to my page") 
    },[])
    
    useEffect(()=>{
        //    alert("count was changed")
    },[count])
    
    useEffect(()=>{
            //  alert("First was changed")
    },[first])


  return (
   <>
   {/* <Napbaar color={"cyan"}/> */}
    <div id="Main">
        <h1>Hii Guy's</h1>
        <h2>{count}</h2>
        <button className="one" onClick={()=>setCount(count+1)}> inc</button>
        <button className='two' onClick={()=>setCount(count-1)}> dic</button>
        <button className='three' onClick={()=>setCount(0)}> reset</button>
    </div>
  </>
  )
}

export default Practics_useState
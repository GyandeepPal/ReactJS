// import React from 'react'
// import Home from "./Home"
// import Cart from "./Cart"
// import NavBar from "./Navbar"
// import { useState } from "react"
// import { Route, Routes } from "react-router-dom"




// const App = () => {
//   let [apiData,SetApiData] =   useState([])
//  let [cart,SetCart]= useState([])
//   return (

//     <div>
//       <NavBar/>
//       <Routes>
//         <Route path="/" element={<Home apiData={apiData}  SetApiData={SetApiData} cart={cart}  SetCart={SetCart}/>}/>
//         <Route path="/cart" element={<Cart cart={cart}/>}/>

//       </Routes>
//     </div>
//   )
// }

// export default App



// import React, { useContext } from "react";
// import { storeContext } from "./Context";

// const App = () => {
//   const { store, dispatch } = useContext(storeContext);

//   return (
//     <div>
//       <h1>Todo App</h1>

//       <input
//         type="text"
//         value={store.input}
//         onChange={(e) =>
//           dispatch({
//             type: "SET_INPUT",
//             payload: e.target.value,
//           })
//         }
//       />

//       <button
//         onClick={() =>
//           dispatch({
//             type: "ADD_TODO",
//           })
//         }
//       >
//         Add Todo
//       </button>

//       {store.todos.map((todo, index) => (
//         <div key={index}>
//           <h3>{todo}</h3>

//           <button
//             onClick={() =>
//               dispatch({
//                 type: "DELETE_TODO",
//                 payload: index,
//               })
//             }
//           >
//             Delete
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;



// import React from 'react'
// import Onchange from './Onchange'

// const App = () => {
//   return (
//     <div>
//       <Onchange/>
//     </div>
//   )
// }

// export default App






// import React, { memo, useState } from 'react'
// import './App.css'
// const App = () => {
// let [count,SetCount]=  useState(0)
//   return (

//     <div>
//       <h2>{count}</h2>
//       <button onClick={()=>SetCount(count+1)}>add</button>
//       <button onClick={()=>SetCount(count-1)}>dec</button>
//       <M/>
//     </div>
//   )
// }


// let M=memo(function child(){
//   console.log("hello");
  
// })

// export default App


import React, { memo,useState } from 'react'
import './App.css'
const App = () => {
 const[count,setCount]=useState(0)
  return (
    <div>
      <h1>Hello 👉🏻 {count}</h1>
      <button onClick={()=>setCount(count+2)}>Add</button>
      <button onClick={()=>setCount(count -2)}>Sub</button>
      <button onClick={()=>setCount(0)}>reset</button>

      <M/>
    </div>
  )
}
let M=memo(function child(){
console.log("Hii🎶");

})


export default App
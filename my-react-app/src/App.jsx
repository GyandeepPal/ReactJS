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


import NextToDo from "./NextToDo"
const App = () => {
  return (
    <div>
      < NextToDo/>
    </div>
  )
}

export default App
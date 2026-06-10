// import React, { useEffect } from "react";
// import "./App.css";

// const Home = ({ apiData, SetApiData, cart, SetCart }) => {

//   useEffect(() => {
//     async function apiCall() {
//       let res = await fetch("https://dummyjson.com/products");
//       let data = await res.json();

//       console.log(data);

//       SetApiData(data.products);
//     }

//     apiCall();
//   }, []);

//   return (
//     <div id="card">
//       {apiData.map((a) => (
//         <div id="main_card" key={a.id}>
//           <img src={a.thumbnail} alt={a.title} />

//           <h4>{a.title}</h4>

//           <h5>₹ {a.price}</h5>

//           <button onClick={() => SetCart([...cart, a])}>
//             Add To Cart
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Home;










// import React, { useEffect } from 'react'
// import './App.css'
// const Home = ({apiData , SetApiData,Cart,SetCart} )=> {
//     useEffect(() =>{
//        async function apiCall(){
//         let res= await fetch("https://dummyjson.com/products")
//         let data=await res.json()
//         console.log(data);
        
//         SetApiData(data.products)
//       }
//       apiCall()
//       },[])
      
    
//   return (
//     <div id ='card'>
//   {apiData.map((a) => (
//     <div id="main_card" key={a.id}>
//       <img src={a.thumbnail} alt={a.title} />
//       {/* <h3>{a.title}</h3>
//       <h3>₹{a.price}</h3> */}

//      <button onClick={() => SetCart((prev) => [...prev, a])}>Add To Cart</button>

//     </div>
//   ))}
  
// </div>
//   )
// }
// export default Home







import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Context from './Context.jsx';
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Context>
        <App />
      </Context>
    </BrowserRouter>
  </StrictMode>
);
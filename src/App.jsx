// // import React from 'react'
// // import Home from './New'
// // <home/>
// // // const App = () => {
// // //   return (
// // //     <div>App</div>

// // import A from "./A"

    
// // //   )
// // // }
// // const App= () => {
// //   return (
// //     Home()
// //   )
// // }
// // export default Home


// // import React from 'react'
// // import Home, { New } from './Home'

// // const App = () => {
// //   return (
// //     <div>
// //       <Home/>
// //       <New/>

// //     </div>
// //   )
// // }

// // export default App

// // import React from 'react'
// // import Propertis from './Propertis'
// // const App = () => {
// //   let user ="Rahul"
// //   return (
// //     <div>
// //       <Propertis data={user}/>
// //     </div>
// //   )
// // }

// // export default App


// // import React from 'react'

// // App->Propertis->A->B->C


// // const App = () => {
// //   return (
// //     <div><A data = {"GDP"}/></div>
// //   )
// // }
// // export default App

// // import React from 'react'
// // import Counter from "./Counter"
// // import Propertis from "./Propertis"

// // const App = () => {
// //   lat [count,SetCount]= userState(0)
// //   function fun1(  ){
// //     SetCount(count+1)
// //   }
// //   return (
// //     <div>App
// //       <h4>{count}</h4>
// //       <button onClick={fun1}>Click</button>
// //       <Propertis/>
// //     </div>

// //   )
// // }

// // export default App



// // import React from 'react'

// // const App = () => {
// //   function fun1(e){
// //     console.log(e.target.value);
    
// //   }

// //   return (
// //      <div>App <input type="text" placeholder='Enter. your name  onChange'onChange={fun1}/></div>
    
// //   )
// // }

// // export default App



// // import React, { useState } from 'react'

// // const App = () => {
// //   let [input , SetInput]=useState("")
// //   let [data , Setdata]=useState()
// //   function fun1(e){
// //   SetInput(e.target.value)
    
// //   }
// //   function done(){
// //     Setdata(input)
// //   }

// //   return (
    
// //      <div> 
// //        <h2>{data}</h2>
// //       App <input type="text" placeholder=''onChange={fun1}/>
// //       <button onClick={done}>Click</button>

// //       </div>
    
// //   )
// // }

// // export default App





// // import './App.css'
// // const App = () => {
// //       let [ApiData,SetApiData]=    useState([])
// //       useEffect(()=>{
// //               //  console.log("hello"); 
// //               async  function call(){
// //                 let res=  await  fetch("https://dummyjson.com/products")
// //                 let data=        await   res.json()
// //                 console.log(data.products);
// //                 SetApiData(data.products)
// //               }
// //               call()
// //       },[])
// // import './App.css'
// // const App = () => {
// //       let [ApiData,SetApiData]=    useState([])
// //       useEffect(()=>{
// //               //  console.log("hello"); 
// //               async  function call(){
// //                 let res=  await  fetch("https://dummyjson.com/products")
// //                 let data=        await   res.json()
// //                 console.log(data.products);
// //                 SetApiData(data.products)
// //               }
// //               call()
// //       },[])

// //   return (
// //     <div id="parent_div"   className="">
// //     </div>
// //   )
// // }

// // export default App




// // import './App.css'
// // const App = () => {
// //       let [ApiData,SetApiData]=    useState([])
// //       useEffect(()=>{
// //               //  console.log("hello"); 
// //               async  function call(){
// //                 let res=  await  fetch("https://dummyjson.com/products")
// //                 let data=        await   res.json()
// //                 console.log(data.products);
// //                 SetApiData(data.products)
// //               }
// //               call()
// //       },[])
// // import './App.css'
// // const App = () => {
// //       let [ApiData,SetApiData]=    useState([])
// //       useEffect(()=>{
// //               //  console.log("hello"); 
// //               async  function call(){
// //                 let res=  await  fetch("https://dummyjson.com/products")
// //                 let data=        await   res.json()
// //                 console.log(data.products);
// //                 SetApiData(data.products)
// //               }
// //               call()
// //       },[])

// //   return (
// //     <div id="parent_div"   className="">
// //     </div>
// //   )
// // }

// // export default App




// // import './App.css'
// // const App = () => {
// //       let [ApiData,SetApiData]=    useState([])
// //       useEffect(()=>{
// //               //  console.log("hello"); 
// //               async  function call(){
// //                 let res=  await  fetch("https://dummyjson.com/products")
// //                 let data=        await   res.json()
// //                 console.log(data.products);
// //                 SetApiData(data.products)
// //               }
// //               call()
// //       },[])
// // import './App.css'
// // const App = () => {
// //       let [ApiData,SetApiData]=    useState([])
// //       useEffect(()=>{
// //               //  console.log("hello"); 
// //               async  function call(){
// //                 let res=  await  fetch("https://dummyjson.com/products")
// //                 let data=        await   res.json()
// //                 console.log(data.products);
// //                 SetApiData(data.products)
// //               }
// //               call()
// //       },[])

// //   return (
// //     <div id="parent_div"   className="">
// //     </div>
// //   )
// // }

// // export default App
// import React, { useEffect, useState } from "react";
// import Form from "./Task";
// const App = () => {
//   const [ApiData, SetApiData] = useState([]);

//   useEffect(() => {
//     async function call() {
//       const res = await fetch("https://dummyjson.com/products");
//       const data = await res.json();
//       SetApiData(data.products);
//     }

//     call();
//   }, []);

//   return (
//     <div id="parent_div">
//       {ApiData.map((a) => (
//         <div id="card" key={a.id}>
//           <h1>{a.id}</h1>
//           <img src={a.thumbnail} alt={a.title} />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;


import React from 'react'
import Task from './Task.jsx'

const App = () => {
  return (
    <div>
        <Task/>
    </div>
    
  )
}

export default App
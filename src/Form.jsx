// import React, { useState } from 'react'
// import './App.css'
// const Form = () => {
//       let [input,SetInput]=      useState(
//         {name:"",email:"",passWord:""})


//     function fun1(e){
//         // console.log("hello");
//        let {name,value}=    e.target
//        SetInput({...input,[name]:value})
        
//         console.log(input);
        
        
        
        
        
//     }
//   return (
//     <div>
//         <form>
//             {/* <input type='text' name='name' value={input.name}  onChange={fun1} placeholder='Enter your name'/>
//             <br></br>
//             <br></br>

//             <input type='email'   name='email' value={input.email}  onChange={fun1} placeholder='Enter your email'/>
//             <br></br>
//             <br></br>

//             <input type='email'  name='passWord' value={input.passWord}  onChange={fun1} placeholder='Enter your email'/>
//             <br></br>
//             <br></br> */}

//             <input type="text" name='name' placeholder='Enter your name' value={input.name} onChange={fun1}/>

            
//             <button>submit</button>



//         </form>
//     </div>
//   )
// }

// export default Form




// import React, { useEffect, useState } from 'react'

// const Form = () => {
//   let [count, Setcount]= useState(0)
//   let [City, SetCity]= useState("")
//   useEffect(()=>{

//     },[])
//     function res(){

//     }
//   return (
    
//     <div>Form
//       <h2>{count}</h2>
//       <h4>{City}</h4>
//       <button onClick={()=>SetCity("manali")}>Change</button>
//       <br />
//       <br />
//       <button onClick={()=>Setcount(count+1)}>Click</button>
//     </div>
//   )
// }

// export default Form

// import React, { useEffect, useState } from 'react'
// import './App.css'
// const Form = () => {

//   let [ApiData, SetApidata] = useState([])
//   let [city, SetCity] = useState("goa")

//   useEffect(() => {

//     async function name() {
//       let reds = await fetch('https://dummyjson.com/products')
//       let data = await reds.json()

//       console.log(data)
//       SetApidata(data.products)
//     }

//     name()

//   }, [])

//   function fun1(q) {
//     Setcount(count + 1)
//   }

//   return (
    
//     <div id = "parent">
//      {
//       ApiData.map((a)=>{
//         return(
//           <div id="card">
//             <h2>{a.id}</h2>
//             <h6>{a.title}</h6>
//             <h2>{a.userId}</h2>
//             <img src={a.thumbnail} />
//             </div>
//         )
//       })
//      }
     
//     </div>
//   )
// }

// export default Form



// Example: "Create a search bar to allow users to search for products by name. Ensure the search field cannot be empty."

// import React, { useState } from "react";

// const Form = () => {
//   const [search, setSearch] = useState("");
//   const [products, setProducts] = useState([]);

//   async function Api() {
//     if (!search.trim()) {
//       alert("Search field cannot be empty");
//       return;
//     }

//     const res = await fetch(
//       `https://dummyjson.com/products/search?q=${search}`
//     );

//     const data = await res.json();
//     setProducts(data.products);
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Products"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <button onClick={Api}>Search</button>

//       {products.map((item) => (
//         <div key={item.id}>
//           <h3>{item.title}</h3>
//           // <p>₹{item.price}</p>
         
//         </div>
//         ))} 
//      </div>
//    );
// };

// export default Form;
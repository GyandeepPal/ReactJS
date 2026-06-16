// import React from 'react'
// import './App.css'
// const Cart = ({cart}) => {
//   return (
//     <div>
//           {
//         cart.map((a)=>{
//           return(<div id='main_card'>
//           <img   src={a.thumbnail}/>
          

//           </div>)
//         })
//       }
//     </div>
//   )
// }

// export default Cart


import React from 'react'
import {inr} from './data'
const Cart = ({product}) => {
  return (
    <div className='card'>

      <h1>{product.emoji}</h1>
      <h3>{product.title}</h3>
      <p>{product.category}</p>
      <h4>{inr(product.price)}</h4>
      <p>⭐ {product.rating}</p>
    <button>Add To Card</button>
    </div>
  )
}

export default Cart
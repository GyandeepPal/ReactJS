import React from 'react'
import './App.css'
const Cart = ({cart}) => {
  return (
    <div>
          {
        cart.map((a)=>{
          return(<div id='main_card'>
          <img   src={a.thumbnail}/>
          

          </div>)
        })
      }
    </div>
  )
}

export default Cart
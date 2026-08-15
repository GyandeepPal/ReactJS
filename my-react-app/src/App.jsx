// import React from 'react'
// import { readFile, readFileSync } from "node:fs";
// const App = () => {
  
// // ❌ BLOCKING — nothing else runs until the disk responds
// const data = readFileSync("big.json", "utf8");
// console.log("got file");
// console.log("this waited");

// // ✅ NON-BLOCKING — Node continues, runs the callback later
// readFile("big.json", "utf8", (err, data) => {
//   if (err) throw err;
//   console.log("got file (eventually)");
// });
// console.log("this runs FIRST, without waiting");
//   return (
//     <div>App</div>
//   )
// }

// export default App
import React from 'react'
import AI_intrigratin from './AI_intrigratin'
import Gyan from './Gyan'
import NewsCard from './NewsCard'
import NextToDo from './NextToDo'
import Onchange from './Onchange'
import UserProfile from './UserProfile'

const App = () => {
  return (
    <div >
     
      <UserProfile/>
     
    </div>
  )
}

export default App
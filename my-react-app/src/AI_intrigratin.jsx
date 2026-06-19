// import React, { useState } from 'react'
// import './App.css'
// import { GoogleGenerativeAI } from '@google/generative-ai'

// const AI_intrigratin = () => {

//   const [SearchData, setSearch] = useState('')

//   const genAI = new GoogleGenerativeAI("enter your api KEY")

//   async function Search() {
//     try {

//       const model = genAI.getGenerativeModel({
//         model: "gemini-2.5-flash"
//       })

//       const res = await model.generateContent(SearchData)

//       console.log(res.response.text())

//     } catch (error) {

//       console.log(error)

//     }
//   }

//   return (
//     <div id="main">
//       <h1>Gemini Chat</h1>

//       <input
//         type="text"
//         placeholder="Enter Your Text"
//         value={SearchData}
//         onChange={(e) => setSearch(e.target.value)}
//       />

//       <button onClick={Search}>
//         Send
//       </button>

//     </div>
//   )
// }

// export default AI_intrigratin



import React, { useState } from 'react'
import './App.css'
 import { GoogleGenerativeAI } from '@google/generative-ai'

const AI_intrigratin = () => {
  let [Searchdata,setSearch]=useState('')
  let [ans,setans]=useState('')
  let gen=new GoogleGenerativeAI("Enter your API Key")

  async function search(){
    try{
      const model=gen.getGenerativeModel({
      model:"gemini-2.5-flash"
      
      })
     const res = await model.generateContent(Searchdata);

        const text = res.response.text();

      console.log(text);

      setans(text);
      
    }catch(e){
      console.log("something wrong");
      
    }
  }
  return (
    <div id='main'>
     <h1> Gemini Chat</h1>
     
        <p>{ans}</p>
     <input value={Searchdata} onChange={(e)=>setSearch(e.target.value)} className='java' type="text" />
     <button onClick={search}>Search</button>

      </div>
  )
}

export default AI_intrigratin
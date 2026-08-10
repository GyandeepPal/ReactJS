
// import React, { useState } from 'react'
// import './App.css'
//  import { GoogleGenerativeAI } from '@google/generative-ai'

// const AI_intrigratin = () => {
//   let [Searchdata,setSearch]=useState('')
//   let [ans,setans]=useState('')
//   let gen=new GoogleGenerativeAI("Enter Your API Key")

//   async function search(){
//     try{
//       const model=gen.getGenerativeModel({
//       model:"gemini-2.5-flash"
      
//       })
//      const res = await model.generateContent(Searchdata);

//         const text = res.response.text();

//       console.log(text);

//       setans(text);
      
//     }catch(e){
//       console.log("something wrong");
      
//     }
//   }
//   return (
//     <div id='main'>
//      <h1> AI Chat Port</h1>
     
//         <p>{ans}</p>
//      <input value={Searchdata} onChange={(e)=>setSearch(e.target.value)} className='java' type="text" />
//      <button onClick={search}>Search</button>

//       </div>
//   )
// }

// export default AI_intrigratin

import React, { useState } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'
import './App.css'

const AI_intrigratin = () => {
  let [Searchdata, setSearch]=useState('');
  let [ans, setans]=useState('')
  let generative=new GoogleGenerativeAI("Enter your API key");


  async function seach(){
  try{
    const model =generative.getGenerativeModel({
      model:"gemini-2.5-flash"
    });
    const respond = await model.generateContent(Searchdata);
    const text =respond.response.text();
    console.log(text);
    setans(text)
    
  }catch(e){
    console.log(" Happend some thing's ");
    
  }
  }

  return (
    <div id="main">
      <h1>AI intrigratin</h1>
      <p>{ans}</p> 
      <input onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='Wright your text' />
      <button onClick={seach}>search</button>
    </div>
  )
}

export default AI_intrigratin
import React, { useState } from 'react'
import './App.css'
import { GoogleGenerativeAI } from '@google/generative-ai'

const AI_intrigratin = () => {

  const [SearchData, setSearch] = useState('')

  const genAI = new GoogleGenerativeAI("API Key")

  async function Search() {
    try {

      const model = genAI.getGenerativeModel({
        model: "gemini-2.5-flash"
      })

      const res = await model.generateContent(SearchData)

      console.log(res.response.text())

    } catch (error) {

      console.log(error)

    }
  }

  return (
    <div id="main">
      <h1>Gemini Chat</h1>

      <input
        type="text"
        placeholder="Enter Your Text"
        value={SearchData}
        onChange={(e) => setSearch(e.target.value)}
      />

      <button onClick={Search}>
        Send
      </button>

    </div>
  )
}

export default AI_intrigratin